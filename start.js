/*
  MutanoX Script - WhatsApp Bot
  Fixed start.js v5 — baseado no connect.js que REALMENTE funciona
  
  CORREÇÕES CRÍTICAS (copiado do bot que funciona na prática):
  - browser: ['Ubuntu', 'Chrome', '20.00.1'] — MESMO do bot que funciona
  - NÃO usar countryCode (removido!) — o bot que funciona NÃO usa
  - NÃO passar version explicitamente — deixar Baileys usar o default
  - Usar makeCacheableSignalKeyStore (obrigatório para signal protocol)
  - generateHighQualityLinkPreview: true
  - markOnlineOnConnect: true
  - requestPairCode com sleep + withTimeout (igual ao que funciona)
  - Sem opções extras de timeout que podem interferir
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

// Logger (igual ao connect.js que funciona)
const logger = pino({ level: "silent" });

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
let restarting = false;

// ============================================================
// withTimeout — igual ao connect.js que funciona
// ============================================================
function withTimeout(promise, ms, label) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label} demorou demais`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

// ============================================================
// requestPairCode — CÓPIA EXATA do connect.js que funciona
// - sleep(2500) na primeira tentativa, sleep(5000) nas retries
// - withTimeout de 60 segundos
// - Retry até 3 vezes
// ============================================================
async function requestPairCode(sock, number) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      if (attempt > 1) {
        console.log(chalk.yellow(`[wait] Tentando gerar o código novamente (${attempt}/3)...`));
      }
      await sleep(attempt === 1 ? 2500 : 5000);
      const code = await withTimeout(sock.requestPairingCode(number), 60000, 'Gerar codigo');
      const pretty = String(code || '')
        .replace(/[^a-zA-Z0-9]/g, '')
        .match(/.{1,4}/g)?.join('-') || code;
      
      console.log(chalk.green('\n========================================'));
      console.log(chalk.green(`  CODIGO DE PAREAMENTO: ${pretty}`));
      console.log(chalk.green('========================================'));
      console.log(chalk.cyan('\n📱 COMO CONECTAR:'));
      console.log(chalk.cyan('  1. Abra o WhatsApp no celular'));
      console.log(chalk.cyan('  2. Vá em: Aparelhos conectados'));
      console.log(chalk.cyan('  3. Toque em: "Conectar com número de telefone"'));
      console.log(chalk.cyan(`  4. Digite o código: ${pretty}`));
      console.log(chalk.yellow('\n  ⚠️  A notificação deve aparecer no seu celular!'));
      console.log(chalk.yellow('  ⚠️  Digite o código RÁPIDO! Ele expira em ~60 segundos.\n'));
      
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

  // ============================================================
  // Auth state — usar makeCacheableSignalKeyStore (OBRIGATÓRIO!)
  // ============================================================
  const { state, saveCreds } = await useMultiFileAuthState("auth");

  // Use makeInMemoryStore from Baileys
  const store = makeInMemoryStore({ logger });

  // ============================================================
  // CRITICAL: Configuração EXATAMENTE igual ao connect.js que funciona
  //
  // DIFERENÇAS CHAVE vs versão anterior (que não funcionava):
  // 1. browser: ['Ubuntu', 'Chrome', '20.00.1'] — hard-coded, igual ao que funciona
  // 2. SEM countryCode — o bot que funciona NÃO usa essa opção!
  // 3. SEM version — deixar Baileys usar o default
  // 4. SEM defaultQueryTimeoutMs, connectTimeoutMs, keepAliveIntervalMs
  // 5. generateHighQualityLinkPreview: true
  // 6. markOnlineOnConnect: true
  // ============================================================
  const sock = makeWASocket({
    logger: logger,
    printQRInTerminal: !usePairingCode,
    browser: ['Ubuntu', 'Chrome', '20.00.1'],   // MESMO do bot que funciona!
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: false,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg?.message || { conversation: '' };
      }
      return { conversation: '' };
    }
  });

  store.bind(sock.ev);

  // Save credentials on update
  sock.ev.on("creds.update", saveCreds);

  // Apply Solving helper methods
  await Solving(sock, store);

  // ============================================================
  // CRITICAL: Verificar se já está registrado
  // Se não registrado, pedir pairing code (igual ao connect.js)
  // O sleep(2500) dentro do requestPairCode garante que o
  // WebSocket tem tempo de se conectar antes de pedir o código
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

  // Handle connection updates — IGUAL ao connect.js que funciona
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "open") {
      reconnectAttempts = 0;
      restarting = false;
      console.log(chalk.green("\n═══════════════════════════════════════════"));
      console.log(chalk.green("  ✅ WhatsApp conectado!"));
      console.log(chalk.green("  ✅ Bot está online!"));
      console.log(chalk.green("═══════════════════════════════════════════\n"));
    }

    if (connection === "close") {
      const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const loggedOut = statusCode === DisconnectReason.loggedOut || statusCode === 401;

      console.log(
        chalk.yellow("[warn] Conexão fechou. Código:"),
        statusCode || 'sem_codigo'
      );

      // 515 = restartRequired (normal após pairing bem sucedido)
      if (statusCode === 515) {
        console.log(chalk.cyan("🔄 Restart required (pareamento concluído!)..."));
        restarting = false;
        await sleep(3000);
        startBot().catch((err) => {
          console.log(chalk.red("[fail] Erro ao reconectar:"), err.message || err);
          process.exit(1);
        });
        return;
      }

      if (loggedOut) {
        console.log(chalk.red("\n❌ Sessão encerrada (logged out)."));
        console.log(chalk.yellow("Deletando pasta 'auth' para nova conexão..."));
        deleteAuthFolder();
        reconnectAttempts = 0;
        restarting = false;
        await sleep(3000);
        startBot().catch((err) => {
          console.log(chalk.red("[fail] Erro ao reiniciar:"), err.message || err);
          process.exit(1);
        });
        return;
      }

      // Reconnect with delay (igual ao connect.js)
      if (!restarting) {
        reconnectAttempts++;
        if (reconnectAttempts > MAX_RECONNECT_ATTEMPTS) {
          console.log(chalk.red(`\n❌ Máximo de ${MAX_RECONNECT_ATTEMPTS} tentativas atingido.`));
          deleteAuthFolder();
          reconnectAttempts = 0;
          restarting = false;
          await sleep(3000);
          startBot().catch((err) => {
            console.log(chalk.red("[fail] Erro ao reiniciar:"), err.message || err);
            process.exit(1);
          });
          return;
        }
        
        restarting = true;
        const delay = Math.min(3000 * reconnectAttempts, 15000);
        console.log(chalk.yellow(`Reconectando em ${delay / 1000}s... (tentativa ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`));
        await sleep(delay);
        startBot().catch((err) => {
          console.log(chalk.red("[fail] Erro ao reconectar:"), err.message || err);
          process.exit(1);
        });
      }
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

  return sock;
}

// Error handlers (igual ao connect.js que funciona)
process.on("uncaughtException", (err) => console.log(chalk.red("[uncaughtException]"), err.message || err));
process.on("unhandledRejection", (err) => console.log(chalk.red("[unhandledRejection]"), err?.message || err));

startBot().catch((err) => {
  console.log(chalk.red("[fail] Não foi possível iniciar:"), err.message || err);
  process.exit(1);
});
