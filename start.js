/*
  MutanoX Script - WhatsApp Bot
  Fixed start.js with proper database, store, and connection handling
*/

require("./settings");
const mainFile = require("./MutanoX-Bot");
const fs = require("fs");
const pino = require("pino");
const pathLib = require("path");
const axios = require("axios");
const chalk = require("chalk");
const readline = require("readline");
const { exec } = require("child_process");
const { Boom } = require("@hapi/boom");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  fetchLatestBaileysVersion,
  Browsers,
  PHONENUMBER_MCC
} = require("@whiskeysockets/baileys");

const usePairingCode = true;

const rlInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionPrompt = (questionText) => {
  return new Promise((resolve) => {
    rlInterface.question(questionText, resolve);
  });
};

// Database
const DataBase = require("./source/database");

// Message handlers
const {
  messagesUpsert: messagesUpsert,
  Solving: Solving
} = require("./source/message");

// Simple in-memory store implementation (replaces removed makeInMemoryStore)
function createMemoryStore() {
  const store = {
    contacts: {},
    messages: {},
    chats: {},
    loadMessage(jid, id) {
      const chat = this.messages[jid];
      if (!chat) return null;
      for (const msg of chat) {
        if (msg.key.id === id) return msg;
      }
      return null;
    },
    bind(ev) {
      ev.on("chats.upsert", (chats) => {
        for (const chat of chats) {
          this.chats[chat.id] = chat;
        }
      });
      ev.on("contacts.upsert", (contacts) => {
        for (const contact of contacts) {
          this.contacts[contact.id] = contact;
        }
      });
      ev.on("messages.upsert", ({ messages }) => {
        for (const msg of messages) {
          const jid = msg.key.remoteJid;
          if (!this.messages[jid]) this.messages[jid] = [];
          this.messages[jid].push(msg);
          // Keep only last 500 messages per chat
          if (this.messages[jid].length > 500) {
            this.messages[jid] = this.messages[jid].slice(-500);
          }
        }
      });
    }
  };
  return store;
}

// Initialize database
(async () => {
  const dbInstance = new DataBase();
  const dbData = await dbInstance.read();
  if (dbData && Object.keys(dbData).length === 0) {
    global.db = {
      users: {},
      groups: {},
      database: {},
      settings: {},
      chats: {},
      messages: {},
      ...(dbData || {})
    };
    await dbInstance.write(global.db);
  } else {
    global.db = dbData;
  }
  setInterval(async () => {
    if (global.db) {
      await dbInstance.write(global.db);
    }
  }, 3500);
})();

// Auto-restart on file change
let currentFile = require.resolve(__filename);
fs.watchFile(currentFile, () => {
  fs.unwatchFile(currentFile);
  console.log(chalk.red("File updated, restarting..."));
  delete require.cache[currentFile];
  require(currentFile);
});

// Track reconnect attempts to prevent infinite loops
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;

// Delete corrupted auth folder
function deleteAuthFolder() {
  const authPath = pathLib.join(process.cwd(), "auth");
  if (fs.existsSync(authPath)) {
    fs.rmSync(authPath, { recursive: true, force: true });
    console.log(chalk.yellow("🗑️  Pasta 'auth' deletada — sessão corrompida removida."));
  }
}

// Start the bot
async function startBot() {
  // Display banner
  console.log(chalk.cyan("\nLatest whatsapp baileys 2026"));
  console.log(chalk.cyan("Baileys modified by: Shin\n"));
  console.log(chalk.yellow("Follow @XyeeCodes For More Updates\n"));

  // Check if auth folder exists and has credentials
  const authPath = pathLib.join(process.cwd(), "auth");
  const credsPath = pathLib.join(authPath, "creds.json");
  const hasExistingAuth = fs.existsSync(credsPath);

  // Ask for phone number BEFORE connecting if using pairing code and no auth session
  let phoneNumber = "";
  if (usePairingCode && !hasExistingAuth) {
    console.log(chalk.yellow("═══════════════════════════════════════════"));
    console.log(chalk.yellow("  Nenhuma sessão encontrada."));
    console.log(chalk.yellow("  Você precisa conectar o bot ao WhatsApp."));
    console.log(chalk.yellow("═══════════════════════════════════════════\n"));
    phoneNumber = await questionPrompt(chalk.green("📱 Digite seu número do WhatsApp (com código do país, sem + ou espaços)\n   Exemplo: 5511999999999\n   ➤ "));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

    if (!phoneNumber || phoneNumber.length < 7) {
      console.log(chalk.red("❌ Número inválido! O bot será encerrado."));
      process.exit(1);
    }

    // Validate phone number has valid MCC
    if (PHONENUMBER_MCC && !Object.keys(PHONENUMBER_MCC).some(mcc => phoneNumber.startsWith(mcc))) {
      console.log(chalk.yellow("⚠️  Aviso: O código do país pode não ser reconhecido pelo WhatsApp. Continuando mesmo assim..."));
    }

    console.log(chalk.green(`\n✅ Número registrado: ${phoneNumber}`));
    console.log(chalk.cyan("Conectando ao WhatsApp...\n"));
  }

  const { state, saveCreds } = await useMultiFileAuthState("auth");
  const { version } = await fetchLatestBaileysVersion();
  console.log(chalk.green(`Using Baileys version: ${version.join(".")}`));

  const store = createMemoryStore();

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !usePairingCode,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }))
    },
    browser: typeof Browsers?.appropriate === 'function' ? Browsers.appropriate("Chrome") : ["Ubuntu", "Chrome", "6.1.158+"],
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg?.message || undefined;
      }
      return {
        conversation: "Hi"
      };
    }
  });

  store.bind(sock.ev);

  // Save credentials on update
  sock.ev.on("creds.update", saveCreds);

  // Apply Solving helper methods
  await Solving(sock, store);

  // Handle connection updates
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      if (usePairingCode && phoneNumber) {
        // Request pairing code using the phone number collected earlier
        setTimeout(async () => {
          try {
            const pairingCode = await sock.requestPairingCode(phoneNumber);
            console.log(chalk.green("\n═══════════════════════════════════════════"));
            console.log(chalk.green(`  🔑 Seu Pairing Code: ${pairingCode}`));
            console.log(chalk.green("  Abra o WhatsApp → Aparelhos conectados → Conectar"));
            console.log(chalk.green("  Digite o código acima."));
            console.log(chalk.green("═══════════════════════════════════════════\n"));
          } catch (err) {
            console.log(chalk.red("❌ Erro ao solicitar pairing code:"), err.message);
          }
        }, 3000);
      } else if (!usePairingCode) {
        console.log(chalk.green("📱 Escaneie o QR code acima com o WhatsApp"));
      }
    }

    if (connection === "close") {
      const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      console.log(chalk.yellow("Connection closed, status:"), statusCode, "Reconnecting:", shouldReconnect);

      if (shouldReconnect) {
        reconnectAttempts++;

        if (reconnectAttempts > MAX_RECONNECT_ATTEMPTS) {
          console.log(chalk.red(`\n❌ Máximo de ${MAX_RECONNECT_ATTEMPTS} tentativas de reconexão atingido.`));
          console.log(chalk.yellow("🗑️  Deletando sessão corrompida e reiniciando..."));
          deleteAuthFolder();
          reconnectAttempts = 0;
          setTimeout(() => startBot(), 3000);
          return;
        }

        // Progressive delay: increases with each attempt
        const delay = Math.min(3000 * reconnectAttempts, 15000);
        console.log(chalk.yellow(`Tentativa ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS} — reconectando em ${delay / 1000}s...`));
        setTimeout(() => startBot(), delay);
      } else {
        console.log(chalk.red("\n❌ Sessão encerrada (logged out)."));
        console.log(chalk.yellow("Deletando pasta 'auth' para nova conexão..."));
        deleteAuthFolder();
        reconnectAttempts = 0;
        setTimeout(() => startBot(), 3000);
      }
    } else if (connection === "open") {
      reconnectAttempts = 0;
      console.log(chalk.green("\n✅ Conexão estabelecida com sucesso!"));
      console.log(chalk.green("✅ Bot está online!\n"));
    }
  });

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (chatUpdate) => {
    await messagesUpsert(sock, chatUpdate, store);
  });

  // Handle group participant updates (welcome/goodbye)
  const { welcomeBanner } = require("./library/welcome");
  sock.ev.on("group-participants.update", async (update) => {
    try {
      await welcomeBanner(sock, update, store);
    } catch (err) {
      console.error("Welcome banner error:", err.message);
    }
  });
}

startBot();
