// Deobfuscated start.js - WhatsApp Bot using @whiskeysockets/baileys
// Originally obfuscated with obfuscator.io (string array, control flow flattening, 
// Unicode variable names, custom base64 encoding, LZString compression)

var LZString = require('lz-string');
require("./settings");
const mainFile = require("./MutanoX-Bot");
const fs = require("fs");
const pino = require("pino");
const pathLib = require("path");
const axios = require("axios");
const chalk = require("chalk");
const readline = require("readline");
const fileType = require("file-type");
const { exec } = require("child_process");
const { say } = require("cfonts");
const { Boom } = require("@hapi/boom");
const {
  default: makeWASocket,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  useMultiFileAuthState,
  Browsers,
  DisconnectReason,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  fetchLatestWaWebVersion,
  proto,
  PHONENUMBER_MCC,
  getAggregateVotesInPollMessage
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
const Database = require("./source/database");
const databaseInstance = new Database();

// Initialize database
(async () => {
  const dbData = await databaseInstance.load();
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
    await databaseInstance.save(global.db);
  } else {
    global.db = dbData;
  }
  setInterval(async () => {
    if (global.db) {
      await databaseInstance.save(global.db);
    }
  }, 3500);
})();

// Message handlers
const {
  messagesUpsert: messagesUpsert,
  Solving: Solving
} = require("./source/message");

// Library functions
const {
  isUrl: isUrl,
  getMessageTypeTag: getMessageTypeTag,
  getBuffer: getBuffer,
  getSizeMedia: getSizeMedia,
  fetchJson: fetchJson,
  awaiting: awaiting,
  sleep: sleep,
  randomJid: randomJid,
  Token: Token,
  welcomeBanner: welcomeBanner,
  promoteEtc: promoteEtc
} = require("./library/function");

// Welcome handlers
const {
  welcomeBanner: welcomeBannerHandler,
  promoteEtc: promoteEtcHandler
} = require("./library/welcome.js");

// Anti-delete handler
async function antiDeleteHandler(...args) {
  return isArray(args);
}

// Main connection handler  
async function connectionHandler(...args) {
  return fetchJson(...args);
}

// Connection update handler
async function connectionUpdate(update) {
  const { connection, lastDisconnect, qr } = update;

  if (qr) {
    if (usePairingCode) {
      // Show pairing code instead of QR
      const pairingCode = await connectionHandler.requestPairingCode();
      console.log(chalk.yellow("Pairing Code:"), pairingCode);
    }
  }

  if (connection === "close") {
    const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
    const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

    console.log("Connection closed, status:", statusCode, "Reconnecting:", shouldReconnect);

    if (shouldReconnect) {
      startBot();
    } else {
      console.log(chalk.red("Logged out, cannot reconnect."));
      process.exit(0);
    }
  } else if (connection === "open") {
    console.log(chalk.green("Connection established successfully!"));
    console.log(chalk.green("Bot is now online."));
  }
}

// Main bot setup object
const botConfig = {
  get usePairingCode() { return usePairingCode; },
  get chalk() { return chalk; },
  get Boom() { return Boom; },
  get DisconnectReason() { return DisconnectReason; },
  
  makeInMemoryStore(...args) { return makeInMemoryStore(...args); },
  pino(...args) { return pino(...args); },
  useMultiFileAuthState(...args) { return useMultiFileAuthState(...args); },
  makeWASocket(...args) { return makeWASocket(...args); },
  makeCacheableSignalKeyStore(...args) { return makeCacheableSignalKeyStore(...args); },
  fetchLatestWaWebVersion(...args) { return fetchLatestWaWebVersion(...args); },
  exec(...args) { return exec(...args); },
  antiDeleteHandler(...args) { return antiDeleteHandler(...args); },
  connectionHandler(...args) { return connectionHandler(...args); },
  questionPrompt(...args) { return questionPrompt(...args); },
  randomJid(...args) { return randomJid(...args); },
  messagesUpsert(...args) { return messagesUpsert(...args); },
  welcomeBanner(...args) { return welcomeBannerHandler(...args); },
  promoteEtc(...args) { return promoteEtcHandler(...args); },
  fetchJson(...args) { return fetchJson(...args); },
  getSizeMedia(...args) { return getSizeMedia(...args); }
};

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
  const { state, saveCreds } = await useMultiFileAuthState("auth");
  const store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" })
  });

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !usePairingCode,
    auth: state,
    browser: Browsers.appropriate("Chrome"),
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg.message || undefined;
      }
      return {
        conversation: "Hi"
      };
    }
  });

  store.bind(sock.ev);

  // Save credentials on update
  sock.ev.on("creds.update", saveCreds);

  // Handle connection updates
  sock.ev.on("connection.update", connectionUpdate);

  // Handle incoming messages
  sock.ev.on("messages.upsert", async (chatUpdate) => {
    await messagesUpsert(chatUpdate, sock);
  });

  // Handle group participant updates (welcome/goodbye)
  sock.ev.on("group-participants.update", async (update) => {
    await welcomeBannerHandler(update, sock);
    await promoteEtcHandler(update, sock);
  });

  // Fetch news from GitHub
  try {
    const response = await axios.get("https://raw.githubusercontent.com/DazelXv/xye-Codes/refs/heads/main/news.json");
    if (response.data) {
      console.log(chalk.green("News:"), response.data);
    }
  } catch (err) {
    console.log(chalk.yellow("Could not fetch news:"), err);
  }
}

startBot();

module.exports = connectionHandler;
