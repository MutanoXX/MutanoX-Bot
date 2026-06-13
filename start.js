/*
  MutanoX Script - WhatsApp Bot
  Fixed start.js with proper pairing code logic
  
  Correções v4 (baseado em scripts que funcionam na prática):
  - Esperar 2.5s ANTES de pedir o pairing code (WebSocket precisa estar pronto)
  - Verificar sock.authState.creds.registered antes de pedir código
  - Usar auth: state direto (igual ao pair-server que funciona)
  - Retry automático com delay progressivo
  - Browser canônico Browsers.macOS("Chrome") para pairing
  - countryCode detectado automaticamente
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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

// Detect country code from phone number
function detectCountryCode(phone) {
  const countryCodeMap = {
    '55': 'BR', '1': 'US', '44': 'GB', '351': 'PT', '34': 'ES',
    '54': 'AR', '56': 'CL', '57': 'CO', '51': 'PE', '52': 'MX',
    '62': 'ID', '91': 'IN', '81': 'JP', '86': 'CN', '49': 'DE',
    '33': 'FR', '39': 'IT', '7': 'RU', '27': 'ZA', '234': 'NG',
  };
  const sortedCodes = Object.keys(countryCodeMap).sort((a, b) => b.length - a.length);
  for (const code of sortedCodes) {
    if (phone && phone.startsWith(code)) {
      return countryCodeMap[code];
    }
  }
  return 'BR';
}

// Track reconnect attempts
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
let phoneNumber = "";
let restarting = false;

// ============================================================
// Request pairing code with retry logic (igual ao Termux XP)
// - Espera o WebSocket estar pronto antes de pedir
// - Retry automático até 3 vezes
// ============================================================
async function requestPairCode(sock, number) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      if (attempt > 1) {
        console.log(chalk.yellow(`[retry] Tentando gerar o código novamente (${attempt}/3)...`));
      }
      
      // CRITICAL: Esperar o WebSocket estar pronto!
      // O evento QR dispara, mas a conexão ainda não está totalmente estabelecida.
      // Precisamos esperar para que o requestPairingCode funcione corretamente.
      const waitTime = attempt === 1 ? 2500 : 5000;
      await sleep(waitTime);
      
      const code = await sock.requestPairingCode(number);
      const pretty = String(code || '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .match(/.{1,4}/g)?.join('-') || code;
      
      console.log(chalk.green('\n═══════════════════════════════════════════'));
      console.log(chalk.green(`  🔑 CÓDIGO DE PAREAMENTO: ${pretty}`));
      console.log(chalk.green('═══════════════════════════════════════════'));
      console.log(chalk.cyan('\n📱 COMO CONECTAR:'));
      console.log(chalk.cyan('  1. Abra o WhatsApp no celular'));
      console.log(chalk.cyan('  2. Vá em: Configurações → Aparelhos conectados → Conectar'));
      console.log(chalk.cyan('  3. Selecione: "Conectar com número de telefone"'));
      console.log(chalk.cyan(`  4. Digite o código: ${pretty}`));
      console.log(chalk.yellow('\n  ⚠️  Digite o código RÁPIDO! Ele expira em ~60 segundos.'));
      console.log(chalk.yellow('  Se não funcionar, delete a pasta auth e tente novamente:\n'));
      console.log(chalk.gray('  rm -rf auth && node start.js\n'));
      
      return code;
    } catch (err) {
      console.log(chalk.red(`[erro] Falha ao gerar código: ${err.message || err}`));
      if (attempt === 3) throw err;
    }
  }
}

// Start the bot
async function startBot() {
  if (restarting) return;
  restarting = true;

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

  // Browser config: usar canônico do Baileys para pairing
  const browser = hasExistingAuth 
    ? Browsers.windows("Chrome")   // Reconexão: desktop
    : Browsers.macOS("Chrome");    // Primeira conexão: canônico para pairing

  console.log(chalk.gray(`Browser: ${browser.join(' / ')}`));

  // Detect country code
  const detectedCountry = detectCountryCode(phoneNumber);
  console.log(chalk.gray(`País detectado: ${detectedCountry}`));

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !usePairingCode,
    auth: state,  // Passar auth state DIRETO (igual ao pair-server que funciona)
    browser: browser,
    version: version,
    countryCode: detectedCountry,
    syncFullHistory: false,
    markOnlineOnConnect: false,
    defaultQueryTimeoutMs: 60000,
    keepAliveIntervalMs: 25000,
    connectTimeoutMs: 60000,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg?.message || undefined;
      }
      return { conversation: "Hi" };
    }
  });

  store.bind(sock.ev);

  // Save credentials on update
  sock.ev.on("creds.update", saveCreds);

  // Apply Solving helper methods
  await Solving(sock, store);

  // ============================================================
  // CRITICAL: Verificar se já está registrado ANTES de pedir código
  // Se já tem sessão (registered), não pedir pairing code
  // Isso é igual ao Termux XP e ao pair-server
  // ============================================================
  if (!sock.authState.creds.registered) {
    const number = phoneNumber;
    if (number) {
      console.log(chalk.cyan(`[pair] Gerando código para: ${number}`));
      await requestPairCode(sock, number);
    }
  } else {
    console.log(chalk.green("[ok] Sessão encontrada. Iniciando bot..."));
  }

  // Handle connection updates
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect, qr } = update;

    // We DON'T request pairing code inside the QR event anymore!
    // The requestPairCode function is called ONCE after socket creation,
    // with proper waiting for the WebSocket to be ready.

    if (connection === "close") {
      const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      console.log(
        chalk.yellow("Connection closed, status:"),
        statusCode,
        "Reconnecting:",
        shouldReconnect
      );

      // 515 = restartRequired (normal após pairing bem sucedido)
      if (statusCode === 515) {
        console.log(chalk.cyan("🔄 Restart required (pareamento concluído!)..."));
        restarting = false;
        setTimeout(() => startBot(), 2000);
        return;
      }

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
          restarting = false;
          setTimeout(() => startBot(), 3000);
          return;
        }

        // Progressive delay
        const delay = Math.min(3000 * reconnectAttempts, 15000);
        console.log(
          chalk.yellow(
            `Tentativa ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS} — reconectando em ${delay / 1000}s...`
          )
        );
        restarting = false;
        setTimeout(() => startBot(), delay);
      } else {
        console.log(chalk.red("\n❌ Sessão encerrada (logged out)."));
        console.log(
          chalk.yellow("Deletando pasta 'auth' para nova conexão...")
        );
        deleteAuthFolder();
        reconnectAttempts = 0;
        restarting = false;
        setTimeout(() => startBot(), 3000);
      }
    } else if (connection === "open") {
      reconnectAttempts = 0;
      restarting = false;
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

startBot().catch((err) => {
  console.log(chalk.red("[fail] Não foi possível iniciar:"), err.message || err);
  process.exit(1);
});
