/*
  MutanoX Script - WhatsApp Bot
  Fixed start.js with proper pairing code and connection handling
  
  Correções:
  - Browser fingerprint realista (Windows/Chrome) para evitar status 405
  - countryCode configurado como BR para notificação de pairing code
  - Pairing code solicitado imediatamente (sem delay)
  - PHONENUMBER_MCC removido (não existe mais no Baileys)
  - Import MessagesUpsert corrigido (capitalização)
*/

require("./settings");
const mainFile = require("./MutanoX-Bot");
const fs = require("fs");
const pino = require("pino");
const pathLib = require("path");
const chalk = require("chalk");
const readline = require("readline");
const { Boom } = require("@hapi/boom");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  fetchLatestBaileysVersion,
  Browsers
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
  MessagesUpsert,
  Solving: Solving
} = require("./source/message");

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

// Delete corrupted auth folder
function deleteAuthFolder() {
  const authPath = pathLib.join(process.cwd(), "auth");
  if (fs.existsSync(authPath)) {
    fs.rmSync(authPath, { recursive: true, force: true });
    console.log(chalk.yellow("🗑️  Pasta 'auth' deletada — sessão corrompida removida."));
  }
}

// Track reconnect attempts
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
let phoneNumber = "";
let pairingCodeRequested = false;

// Start the bot
async function startBot() {
  // Display banner
  console.log(chalk.cyan("\n═══════════════════════════════════════════"));
  console.log(chalk.cyan("  MutanoX-Bot - WhatsApp Baileys"));
  console.log(chalk.cyan("═══════════════════════════════════════════\n"));

  // Check if auth folder exists and has credentials
  const authPath = pathLib.join(process.cwd(), "auth");
  const credsPath = pathLib.join(authPath, "creds.json");
  const hasExistingAuth = fs.existsSync(credsPath);

  // Ask for phone number BEFORE connecting if using pairing code and no auth session
  if (usePairingCode && !hasExistingAuth) {
    console.log(chalk.yellow("═══════════════════════════════════════════"));
    console.log(chalk.yellow("  Nenhuma sessão encontrada."));
    console.log(chalk.yellow("  Você precisa conectar o bot ao WhatsApp."));
    console.log(chalk.yellow("═══════════════════════════════════════════\n"));
    phoneNumber = await questionPrompt(
      chalk.green(
        "📱 Digite seu número do WhatsApp (com código do país, sem + ou espaços)\n" +
        "   Exemplo: 5511999999999\n   ➤ "
      )
    );
    phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

    if (!phoneNumber || phoneNumber.length < 7) {
      console.log(chalk.red("❌ Número inválido! O bot será encerrado."));
      process.exit(1);
    }

    console.log(chalk.green(`\n✅ Número registrado: ${phoneNumber}`));
    console.log(chalk.cyan("Conectando ao WhatsApp...\n"));
  }

  const { state, saveCreds } = await useMultiFileAuthState("auth");
  const { version } = await fetchLatestBaileysVersion();
  console.log(chalk.green(`Using Baileys version: ${version.join(".")}`));

  // Use makeInMemoryStore from Baileys
  const store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" })
  });

  // Reset pairing code flag for new connection
  pairingCodeRequested = false;

  // Use a realistic browser string - Chrome on Windows is most common and reliable
  // Format: [OS Name, Browser Name, Browser Version]
  const browser = ["Windows", "Chrome", "131.0.6778.139"];

  // Detect country code from phone number for proper WhatsApp pairing
  // This is CRITICAL for the push notification to arrive on the phone
  const countryCodeMap = {
    '55': 'BR', '1': 'US', '44': 'GB', '351': 'PT', '34': 'ES',
    '54': 'AR', '56': 'CL', '57': 'CO', '51': 'PE', '52': 'MX',
    '62': 'ID', '91': 'IN', '81': 'JP', '86': 'CN', '49': 'DE',
    '33': 'FR', '39': 'IT', '7': 'RU', '27': 'ZA', '234': 'NG',
  };
  let detectedCountry = 'BR'; // default Brasil
  // Match longest prefix first (e.g., 351 before 3)
  const sortedCodes = Object.keys(countryCodeMap).sort((a, b) => b.length - a.length);
  for (const code of sortedCodes) {
    if (phoneNumber && phoneNumber.startsWith(code)) {
      detectedCountry = countryCodeMap[code];
      break;
    }
  }
  console.log(chalk.gray(`País detectado: ${detectedCountry}`));

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !usePairingCode,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }))
    },
    browser: browser,
    version: version,
    countryCode: detectedCountry,
    defaultQueryTimeoutMs: 60000,
    keepAliveIntervalMs: 25000,
    connectTimeoutMs: 60000,
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
      if (usePairingCode && phoneNumber && !pairingCodeRequested) {
        // Request pairing code IMMEDIATELY when QR is received - no delay!
        pairingCodeRequested = true;
        try {
          const pairingCode = await sock.requestPairingCode(phoneNumber);
          console.log(chalk.green("\n═══════════════════════════════════════════"));
          console.log(chalk.green(`  🔑 Seu Pairing Code: ${pairingCode}`));
          console.log(chalk.green("═══════════════════════════════════════════"));
          console.log(chalk.cyan("\n📱 COMO CONECTAR:"));
          console.log(chalk.cyan("  1. Você vai receber uma NOTIFICAÇÃO no WhatsApp do celular"));
          console.log(chalk.cyan("  2. Toque na notificação (ou abra WhatsApp → Aparelhos conectados → Conectar)"));
          console.log(chalk.cyan(`  3. Digite o código: ${pairingCode}`));
          console.log(chalk.yellow("\n  ⚠️  Se NÃO recebeu a notificação:"));
          console.log(chalk.yellow("  Abra o WhatsApp → Configurações → Aparelhos conectados → Conectar"));
          console.log(chalk.yellow("  E digite o código manualmente.\n"));
        } catch (err) {
          console.log(chalk.red("❌ Erro ao solicitar pairing code:"), err.message);
          console.log(chalk.yellow("Tentando novamente em 2 segundos..."));
          // Retry once after a short delay
          setTimeout(async () => {
            try {
              const pairingCode = await sock.requestPairingCode(phoneNumber);
              console.log(chalk.green("\n═══════════════════════════════════════════"));
              console.log(chalk.green(`  🔑 Seu Pairing Code: ${pairingCode}`));
              console.log(chalk.green("═══════════════════════════════════════════"));
              console.log(chalk.cyan("\n📱 Toque na notificação do WhatsApp ou vá em:"));
              console.log(chalk.cyan("  Aparelhos conectados → Conectar e digite o código.\n"));
            } catch (retryErr) {
              console.log(chalk.red("❌ Falha na segunda tentativa:"), retryErr.message);
            }
          }, 2000);
        }
      } else if (!usePairingCode) {
        console.log(chalk.green("📱 Escaneie o QR code acima com o WhatsApp"));
      }
    }

    if (connection === "close") {
      const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      console.log(
        chalk.yellow("Connection closed, status:"),
        statusCode,
        "Reconnecting:",
        shouldReconnect
      );

      if (shouldReconnect) {
        reconnectAttempts++;

        if (reconnectAttempts > MAX_RECONNECT_ATTEMPTS) {
          console.log(
            chalk.red(
              `\n❌ Máximo de ${MAX_RECONNECT_ATTEMPTS} tentativas de reconexão atingido.`
            )
          );
          console.log(
            chalk.yellow("🗑️  Deletando sessão corrompida e reiniciando...")
          );
          deleteAuthFolder();
          reconnectAttempts = 0;
          setTimeout(() => startBot(), 3000);
          return;
        }

        // Progressive delay: increases with each attempt
        const delay = Math.min(3000 * reconnectAttempts, 15000);
        console.log(
          chalk.yellow(
            `Tentativa ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS} — reconectando em ${delay / 1000}s...`
          )
        );
        setTimeout(() => startBot(), delay);
      } else {
        console.log(chalk.red("\n❌ Sessão encerrada (logged out)."));
        console.log(
          chalk.yellow("Deletando pasta 'auth' para nova conexão...")
        );
        deleteAuthFolder();
        reconnectAttempts = 0;
        setTimeout(() => startBot(), 3000);
      }
    } else if (connection === "open") {
      reconnectAttempts = 0;
      pairingCodeRequested = false;
      console.log(chalk.green("\n═══════════════════════════════════════════"));
      console.log(chalk.green("  ✅ Conexão estabelecida com sucesso!"));
      console.log(chalk.green("  ✅ Bot está online!"));
      console.log(chalk.green("═══════════════════════════════════════════\n"));
    }
  });

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (chatUpdate) => {
    await MessagesUpsert(sock, chatUpdate, store);
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
