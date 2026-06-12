<div align="center">

# 🤖 MutanoX-Bot

**Bot de WhatsApp multi-dispositivo feito em Node.js com Baileys**

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Bot-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com)
[![Termux](https://img.shields.io/badge/Termux-Android-000000?style=for-the-badge&logo=android)](https://termux.dev)

---

</div>

## 📋 Requisitos

- ✅ Termux (Android) ou Node.js 18+ (PC/VPS)
- ✅ Conexão com internet estável
- ✅ Armazenamento com permissão concedida

---

## ⚡ Instalação Rápida (Recomendado)

> **Cole apenas este comando no Termux:**

```bash
pkg update -y && pkg upgrade -y && pkg install nodejs git ffmpeg wget -y && git clone https://github.com/MutanoXX/MutanoX-Bot.git && cd MutanoX-Bot && npm install --legacy-peer-deps && node start.js
```

### O que esse comando faz:

| Etapa | Ação |
|-------|------|
| 1 | Atualiza pacotes do Termux |
| 2 | Instala Node.js, Git, FFmpeg e Wget |
| 3 | Clona o repositório |
| 4 | Entra na pasta do bot |
| 5 | Instala todas as dependências |
| 6 | Inicia o bot automaticamente |

---

## 🛠️ Instalação Manual (Passo a Passo)

<details>
<summary><b>Clique para expandir</b></summary>

```bash
# 1. Atualizar pacotes
pkg update && pkg upgrade -y

# 2. Instalar dependências
pkg install nodejs git ffmpeg wget -y

# 3. Clonar repositório
git clone https://github.com/MutanoXX/MutanoX-Bot.git

# 4. Entrar na pasta
cd MutanoX-Bot

# 5. Instalar dependências
npm install --legacy-peer-deps

# 6. Iniciar o bot
node start.js
```

> ⚠️ **Importante:** Use `--legacy-peer-deps` para evitar conflitos de dependência entre o Baileys e o Jimp.

</details>

---

## 🔄 Atualização (Se você já tinha o bot instalado)

Se você já tinha uma versão anterior do MutanoX-Bot e está atualizando:

```bash
# Entre na pasta do bot
cd MutanoX-Bot

# Puxe as atualizações do GitHub
git pull origin main

# Reinstale as dependências (necessário porque o Baileys foi atualizado!)
npm install --legacy-peer-deps

# Delete a pasta auth antiga (sessão antiga pode estar corrompida)
rm -rf auth

# Inicie o bot novamente
node start.js
```

> ❗ **OBRIGATÓRIO:** Rode `npm install --legacy-peer-deps` depois de dar `git pull`!
> A versão do Baileys foi atualizada de `6.6.0` para `6.17.16`, e sem reinstalar as dependências o bot **não vai funcionar**.

---

## 📱 Como Conectar via Pairing Code

Na primeira vez que rodar o bot, ele vai pedir seu número de telefone:

```
═══════════════════════════════════════════
  Nenhuma sessão encontrada.
  Você precisa conectar o bot ao WhatsApp.
═══════════════════════════════════════════

📱 Digite seu número do WhatsApp (com código do país, sem + ou espaços)
   Exemplo: 5511999999999
   ➤ 5565999088132
```

Depois, o **Pairing Code** vai aparecer:

```
═══════════════════════════════════════════
  🔑 Seu Pairing Code: ABC12DEF
  Abra o WhatsApp → Aparelhos conectados → Conectar
  Digite o código acima.
═══════════════════════════════════════════
```

### Passos no celular:
1. Abra o **WhatsApp**
2. Vá em **Aparelhos conectados**
3. Toque em **Conectar um aparelho**
4. Digite o código que apareceu no terminal

---

## ⚙️ Configurações Iniciais

Edite o arquivo **`settings.js`** e configure:

| Variável | Descrição |
|----------|-----------|
| `global.owner` | Número do dono (com código do país) |
| `global.linkGrup` | Link da sua comunidade |
| `global.botname` | Nome do bot |

---

## 📜 Comandos

### 👑 Comandos de Dono

| Comando | Descrição |
|---------|-----------|
| `.owner` | Mostra informações do dono |
| `.addowner` | Adiciona novo dono |
| `.delowner` | Remove dono |
| `.self` | Ativa modo self |
| `.public` | Ativa modo público |
| `.restart` | Reinicia o bot |
| `.shutdown` | Desliga o bot |

### 👥 Comandos de Grupo

| Comando | Descrição |
|---------|-----------|
| `.kick` | Remove membro |
| `.add` | Adiciona membro |
| `.promote` | Promove a admin |
| `.demote` | Rebaixa admin |
| `.group` | Abre/fecha grupo |
| `.setppgc` | Altera foto do grupo |
| `.tagall` | Marca todos |
| `.hidetag` | Marca sem mostrar comando |

### 🌐 Comandos Gerais

| Comando | Descrição |
|---------|-----------|
| `.menu` | Mostra menu de comandos |
| `.ping` | Mostra latência |
| `.runtime` | Tempo online |
| `.toimg` | Sticker → Imagem |
| `.sticker` | Cria sticker |
| `.play` | Baixa música (YouTube) |
| `.ytmp4` | Baixa vídeo (YouTube) |

---

## 🔧 Changelog (v5.0 - Fix)

### Correções nesta versão:
- ✅ **Corrigido erro status 405** — O WhatsApp recusava a conexão por detectar fingerprint de bot
- ✅ **Pairing Code agora funciona** — Antes não era gerado porque a conexão caía antes (3s de delay removido)
- ✅ **Browser fingerprint corrigido** — Substituído `Browsers.appropriate("Chrome")` por string Chrome/Windows realista
- ✅ **Baileys atualizado** de `6.6.0` para `6.17.16` (última versão estável)
- ✅ **Removido PHONENUMBER_MCC** — Não existe mais no Baileys atual
- ✅ **Import MessagesUpsert corrigido** — Capitalização estava errada
- ✅ **Retry automático** se o pairing code falhar na primeira tentativa
- ✅ **Timeouts aumentados** para conexão mais estável

---

## ⚠️ Avisos Importantes

- 🔒 O bot precisa ser **administrador** nos grupos para usar comandos de admin
- 🚫 Não compartilhe sua pasta `auth` com ninguém
- 🔄 Mantenha o bot sempre atualizado
- 📱 Se o pairing code não chegar, delete a pasta `auth` e tente novamente: `rm -rf auth && node start.js`

---

<div align="center">

## 👑 Créditos

**Desenvolvido por:** MutanoX
**Versão:** VIP

---

**Divirta-se com o bot!** 🚀

</div>
