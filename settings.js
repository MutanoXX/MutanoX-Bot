/*
  MutanoX Script
  Versão: VIP
  Criador: MutanoX
  Créditos: MutanoX
*/
const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

global.tokens = ["6ff2b5120dd7bb71f8859eb58495c91911daf16243ce7b6172d1f3b767846ef3"]

//~~~~~ Settings Bot (bisa diubah) ~~~~~~~//
global.owner = '6283192054753'
global.versi = version
global.namaOwner = "MutanoX"
global.packname = 'MutanoX'
global.author = 'MutanoX-Bot'
global.botname = 'MutanoX-Bot'
global.botname2 = 'MutanoX-Bot'

//~~~~~ Settings Link ~~~~~~~~~//
global.vercelToken = "MutanoX-Bot.js"
global.linkOwner = "https://wa.me/6283192054753"
global.linkGrup = "https://chat.whatsapp.com/D8Y40eQtypgHgoUoy1d7gx"

//~~~~ Settings Jeda Jpm ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~ Settings Transaksi (Done/proses) ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
global.linkGroup = "https://chat.whatsapp.com/D8Y40eQtypgHgoUoy1d7gx" //grub kalo gpunya hpus aja
global.idSaluran = "https://whatsapp.com/channel/0029VbCRzsBHrDZpXJT0Pt0g"
global.namaSaluran = "𝐊𝐄𝐋𝐄𝐏𝐎𝐍"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "089663152244"
global.ovo = "-"
global.gopay = "-"

//~~~~~~~ Settings Store (Bisa Diubah) ~~~~~~~~~~//
global.image = {
ReplyStore: ""
}
global.listProduk = [
  `New Rilis Script MutanoX-Bot v1*
Fitur : MD X BUGS
Total Fitur : 430+

berbagai fitur tools seperti downloadder sticker dan fitur langka lainnya. ada juga fitur jaga grub 
fitur bug anti kenon target auto c1
seperti delay invisible+sedot kuota.
ada juga fitur bug grub/attack grup
Pas Masih Lebaran gass order script nya pumpung ada duit dan keburu harga naik.
HARGA P,O : 30K
HARGA RILIS : 35K
OPEN ALL TITLE JUGA
(free update)
*Contact me :*
t.me/hope6166 (telegram)

•BENEFIT PARTNER SPECIAL MutanoX:•
DM TELE AJA KALO PENASARAN BENEFIT`
]
global.vercelToken = "vcp_2vsvhEwQBIMHqhXiipuwKbMEINAzlnsm9jpW3unagmMA1F3pzt22nAgj"
//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = ""
global.apikey = "" //ptla
global.capikey = "" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "id"
global.apikeyV2 = "id" //ptla
global.capikeyV2 = "id" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
        owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk MutanoX",
        admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
        botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
        group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
        private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
        prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk premium",
        wait: 'Loading...',
        error: 'Error!',
        done: 'Done'
}
//UPPPPPP
let file = require.resolve(__filename)
fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(chalk.redBright(`Update ${__filename}`))
        delete require.cache[file]
        require(file)
})