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
const { say } = require("cfonts");
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

// Start the bot
async function startBot() {
  // Display banner
  console.log(chalk.cyan("\nLatest whatsapp baileys 2026"));
  console.log(chalk.cyan("Baileys modified by: Shin\n"));
  console.log(chalk.yellow('Follow @XyeeCodes For More Updates\n'));

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
      if (usePairingCode) {
        // Request pairing code
        let phoneNumber = await questionPrompt(chalk.yellow("Enter your phone number (with country code, no + or spaces): "));
        phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
        
        // Validate phone number has valid MCC
        if (PHONENUMBER_MCC && !Object.keys(PHONENUMBER_MCC).some(mcc => phoneNumber.startsWith(mcc))) {
          console.log(chalk.red("Invalid phone number. Make sure to include country code."));
          process.exit(1);
        }

        setTimeout(async () => {
          const pairingCode = await sock.requestPairingCode(phoneNumber);
          console.log(chalk.green("\nYour Pairing Code: " + pairingCode + "\n"));
        }, 3000);
      } else {
        console.log(chalk.green("Scan the QR code above with WhatsApp"));
      }
    }

    if (connection === "close") {
      const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      console.log(chalk.yellow("Connection closed, status:"), statusCode, "Reconnecting:", shouldReconnect);

      if (shouldReconnect) {
        // Avoid rapid reconnect loops
        const delay = statusCode === 405 ? 10000 : 3000;
        console.log(chalk.yellow(`Reconnecting in ${delay / 1000} seconds...`));
        setTimeout(() => startBot(), delay);
      } else {
        console.log(chalk.red("Logged out, cannot reconnect. Please delete the 'auth' folder and try again."));
        process.exit(0);
      }
    } else if (connection === "open") {
      console.log(chalk.green("✅ Connection established successfully!"));
      console.log(chalk.green("✅ Bot is now online.\n"));
    }
  });

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (chatUpdate) => {
    await messagesUpsert(sock, chatUpdate, store);
  });

  // Handle group participant updates (welcome/goodbye)
  const { welcomeBanner, promoteEtc } = require("./library/welcome");
  sock.ev.on("group-participants.update", async (update) => {
    await welcomeBanner(sock, update, store);
    await promoteEtc(sock, update, store);
  });
}

startBot();
