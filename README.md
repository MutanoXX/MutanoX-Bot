<div align="center">

# 🤖 MutanoX-Bot

**Bot de WhatsApp multi-dispositivo feito em Node.js com Baileys**

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Bot-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com)
[![Termux](https://img.shields.io/badge/Termux-Android-000000?style=for-the-badge&logo=android)](https://termux.dev)

---

</div>

## 📋 Requisitos

- ✅ Termux (Android)
- ✅ Conexão com internet estável
- ✅ Armazenamento com permissão concedida

---

## ⚡ Instalação Rápida (Recomendado)

> **Cole apenas este comando no Termux:**

```bash
pkg update -y && pkg upgrade -y && pkg install nodejs git ffmpeg wget -y && git clone https://github.com/MutanoXX/MutanoX-Bot.git && cd MutanoX-Bot && npm install --no-bin-links && node MutanoX-Bot.js
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
npm install --no-bin-links

# 6. Iniciar o bot
node MutanoX-Bot.js
```

> 💡 **Dica:** Se der erro de permissão no `npm install`, use:
> ```bash
> npm install --no-bin-links
> ```

</details>

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

## ⚠️ Avisos Importantes

- 🔒 O bot precisa ser **administrador** nos grupos para usar comandos de admin
- 🚫 Não compartilhe sua pasta `auth` com ninguém
- 🔄 Mantenha o bot sempre atualizado

---

<div align="center">

## 👑 Créditos

**Desenvolvido por:** MutanoX  
**Versão:** VIP

---

**Divirta-se com o bot!** 🚀

</div>