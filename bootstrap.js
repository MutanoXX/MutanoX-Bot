#!/usr/bin/env node
/*
  bootstrap.js — MutanoX-Bot
  
  Wrapper que reinicia o processo Node.js com a flag
  --unhandled-rejections=none para silenciar DEFINITIVAMENTE os
  erros cosméticos "Connection Closed" (statusCode 428/515) que
  vêm de timers internos do Baileys (newsletterWMexQuery em
  newsletter.js:64) após o socket fechar.
  
  Esses erros NÃO são fatais - o bot se reconecta normalmente via
  startBot() no handler connection.update. Mas no Node.js 15+,
  mesmo com handler `unhandledRejection` registrado, o Node.js
  ainda imprime o stack trace no stderr no modo `throw` (default).
  
  A única forma de silenciar completamente é usar a flag
  --unhandled-rejections=none, que faz o Node.js ignorar
  silenciosamente os rejections não tratados.
  
  Uso:
    node bootstrap.js    (em vez de `node start.js`)
    
  Ou atualize seu package.json:
    "scripts": { "start": "node bootstrap.js" }
*/

const { spawn } = require("child_process");
const path = require("path");

const FLAG = "--unhandled-rejections=none";

// Se já estamos no modo correto, carrega o start.js diretamente
if (process.execArgv.includes(FLAG)) {
  require("./start.js");
} else {
  // Re-launch com a flag
  const startFile = path.resolve(__dirname, "start.js");
  const args = [
    ...process.execArgv,
    FLAG,
    startFile,
    ...process.argv.slice(2)
  ];
  
  const child = spawn(process.argv[0], args, {
    stdio: "inherit",
    env: process.env
  });
  
  // Encaminha sinais para o child
  process.on("SIGINT", () => child.kill("SIGINT"));
  process.on("SIGTERM", () => child.kill("SIGTERM"));
  
  // Quando o child sai, o parent sai com o mesmo código
  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
    } else {
      process.exit(code ?? 0);
    }
  });
  
  // Mantém o parent vivo enquanto o child roda
  process.stdin.resume();
}
