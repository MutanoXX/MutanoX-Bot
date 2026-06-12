// MutanoX-Bot - Fixed Start Script
// Baileys v6 compatible
require("./settings");
const mainFile = require("./MutanoX-Bot");
const fs = require("fs");
const pino = require("pino");
const readline = require("readline");
const chalk = require("chalk");
const { Boom } = require("@hapi/boom");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  fetchLatestBaileysVersion,
  Browsers,
  PHONENUMBER_MCC,
  getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");

const usePairingCode = true;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (text) => new Promise((resolve) => rl.question(text, resolve));

// Database
const Database = require("./source/database");
const database = new Database();

(async () => {
  const dbData = await database.load();
  global.db = dbData || { users: {}, groups: {}, database: {}, settings: {}, chats: {}, messages: {} };
  setInterval(async () => {
    if (global.db) await database.save(global.db);
  }, 3500);
})();

// Message handlers
const { messagesUpsert, Solving } = require("./source/message");
const {
  isUrl, getMessageTypeTag, getBuffer, getSizeMedia,
  fetchJson, awaiting, sleep, randomJid, Token,
  welcomeBanner, promoteEtc
} = require("./library/function");

const { state, saveCreds } = await useMultiFileAuthState("./auth");
const { version, isLatest } = await fetchLatestBaileysVersion();
console.log(chalk.green(`Baileys Version: ${version.join('.')}, Latest: ${isLatest}`));

const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });

const startSock = async () => {
  const sock = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: !usePairingCode,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }))
    },
    browser: Browsers.ubuntu("Chrome"),
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg?.message || undefined;
      }
      return {
        conversation: "Hello MutanoX-Bot"
      };
    }
  });

  store.bind(sock.ev);

  // Pairing code
  if (usePairingCode && !sock.authState.creds.registered) {
    const phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Digite seu número de WhatsApp (ex: 5511999999999): `)));
    const code = await sock.requestPairingCode(phoneNumber.trim());
    console.log(chalk.bgBlack(chalk.greenBright(`Código de pareamento: ${code}`)));
  }

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;
    if (connection === "close") {
      const shouldReconnect = (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut);
      console.log(chalk.red("Conexão fechada!"), lastDisconnect?.error, ", Reconectando:", shouldReconnect);
      if (shouldReconnect) {
        startSock();
      }
    } else if (connection === "open") {
      console.log(chalk.green("Bot conectado com sucesso!"));
    }
  });

  sock.ev.on("creds.update", saveCreds);
  sock.ev.on("messages.upsert", async (m) => {
    await mainFile(sock, m.messages[0], m, store);
  });
};

startSock();
