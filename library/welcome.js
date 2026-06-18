/*
⚠️ Please Don't Change This Credit
  MutanoX Script
  Tiktok : MutanoX
  Version : VIP/BUYER ENC
  Creator : MutanoX

  SCRIPT INI RESMI DIJUAL OLEH SETTO
  PRICE : Rp120.000 IDR 100% NO ENC
  BUY CHAT WA.ME//6289513342847
*/

const canvafy = require("canvafy")
const axios = require("axios")

// ============================================================
// Welcome banner generator
// Assinatura: welcomeBanner(sock, update, store)
//   - sock: conexao WhatsApp (Baileys)
//   - update: evento group-participants.update
//       { id, participants, action }
//       action: "add" | "remove" | "promote" | "demote"
//   - store: in-memory store (nao usado, mantido por compat)
// ============================================================
async function welcomeBanner(sock, update, store) {
  try {
    if (!update || !update.id || !update.participants || !update.action) {
      return
    }

    const { id: groupId, participants, action } = update

    // So processa add (welcome) e remove (goodbye)
    if (action !== "add" && action !== "remove") {
      return
    }

    // Verifica se welcome esta ativado para o grupo
    if (global.db && global.db.groups && global.db.groups[groupId]) {
      if (global.db.groups[groupId].welcome !== true) {
        return // welcome desativado para este grupo
      }
    } else {
      // grupo nao esta no database - nao faz nada
      return
    }

    const type = action === "add" ? "welcome" : "goodbye"

    // Pega metadados do grupo (nome)
    let groupName = "Grupo"
    try {
      const meta = await sock.groupMetadata(groupId)
      groupName = meta?.subject || "Grupo"
    } catch (_) {}

    // Processa cada participante (geralmente 1 por evento)
    for (const participantJid of participants) {
      try {
        await processParticipant(sock, groupId, participantJid, groupName, type)
      } catch (err) {
        console.error(`Welcome banner error (${type} ${participantJid}):`, err?.message || err)
      }
    }
  } catch (err) {
    console.error("Welcome banner error:", err?.message || err)
  }
}

// ============================================================
// Processa um participante: gera banner e envia
// ============================================================
async function processParticipant(sock, groupId, participantJid, groupName, type) {
  // Pega o nome do participante
  let name = participantJid.split("@")[0]
  try {
    const n = await sock.getName(participantJid)
    if (n) name = n
  } catch (_) {}

  // Pega a foto de perfil como Buffer
  // - Usa profilePictureUrl que tenta pegar a foto full
  // - Fallback para foto normal se full falhar
  let avatarBuffer = null
  try {
    let pfpUrl = null
    try {
      pfpUrl = await sock.profilePictureUrl(participantJid, "image")
    } catch (_) {
      try {
        pfpUrl = await sock.profilePictureUrl(participantJid, "preview")
      } catch (_) {}
    }

    if (pfpUrl) {
      const res = await axios.get(pfpUrl, {
        responseType: "arraybuffer",
        timeout: 10000,
        headers: { "User-Agent": "Mozilla/5.0 (Linux; Android 10)" }
      })
      avatarBuffer = Buffer.from(res.data, "binary")
      // Valida: JPEG deve comecar com ffd8ff, PNG com 89504e47
      const head = avatarBuffer.slice(0, 3).toString("hex")
      if (head !== "ffd8ff" && head !== "89504e") {
        avatarBuffer = null
      }
    }
  } catch (_) {
    avatarBuffer = null
  }

  // Se nao conseguiu baixar o avatar, usa uma imagem placeholder
  // (logo do bot) em vez de passar null/undefined para o setAvatar
  if (!avatarBuffer) {
    try {
      const fs = require("fs")
      const placeholder = "./media/kelpin.png"
      if (fs.existsSync(placeholder)) {
        avatarBuffer = fs.readFileSync(placeholder)
      } else {
        // Sem placeholder disponivel - skip banner, envia so texto
        const text = type === "welcome"
          ? `👋 Bem-vindo @${participantJid.split("@")[0]} ao grupo *${groupName}*!`
          : `👋 Tchau @${participantJid.split("@")[0]}!`
        await sock.sendMessage(groupId, {
          text,
          mentions: [participantJid]
        })
        return
      }
    } catch (_) {
      // sem fs nem placeholder - envia so texto
      const text = type === "welcome"
        ? `👋 Bem-vindo @${participantJid.split("@")[0]} ao grupo *${groupName}*!`
        : `👋 Tchau @${participantJid.split("@")[0]}!`
      try {
        await sock.sendMessage(groupId, {
          text,
          mentions: [participantJid]
        })
      } catch (_) {}
      return
    }
  }

  // Gera o banner com canvafy
  let banner = null
  try {
    const background = type === "welcome"
      ? "https://img2.pixhost.to/images/6553/706117100_settomodders.jpg"
      : "https://img2.pixhost.to/images/6553/706117105_settomodders.jpg"

    banner = await new canvafy.WelcomeLeave()
      .setAvatar(avatarBuffer)
      .setBackground("image", background)
      .setTitle("‎")
      .setDescription("‎")
      .setBorder("#2a2e35")
      .setAvatarBorder("#2a2e35")
      .setOverlayOpacity(0.2)
      .build()
  } catch (err) {
    console.error(`Welcome banner: erro ao gerar imagem (${type}):`, err?.message || err)
    // Fallback: envia so texto
    const text = type === "welcome"
      ? `👋 Bem-vindo @${participantJid.split("@")[0]} ao grupo *${groupName}*!`
      : `👋 Tchau @${participantJid.split("@")[0]}!`
    try {
      await sock.sendMessage(groupId, {
        text,
        mentions: [participantJid]
      })
    } catch (_) {}
    return
  }

  // Envia o banner para o grupo
  try {
    const caption = type === "welcome"
      ? `👋 Bem-vindo @${participantJid.split("@")[0]} ao grupo *${groupName}*!`
      : `👋 Tchau @${participantJid.split("@")[0]}!`

    await sock.sendMessage(groupId, {
      image: banner,
      caption,
      mentions: [participantJid]
    })
  } catch (err) {
    console.error(`Welcome banner: erro ao enviar (${type}):`, err?.message || err)
    // Fallback: envia so texto
    try {
      const text = type === "welcome"
        ? `👋 Bem-vindo @${participantJid.split("@")[0]} ao grupo *${groupName}*!`
        : `👋 Tchau @${participantJid.split("@")[0]}!`
      await sock.sendMessage(groupId, {
        text,
        mentions: [participantJid]
      })
    } catch (_) {}
  }
}

async function promoteBanner() {
  return null
}

module.exports = { welcomeBanner, promoteBanner }
