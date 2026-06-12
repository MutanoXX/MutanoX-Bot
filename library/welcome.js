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

async function welcomeBanner(avatar, name, subject, type) {

    // 🎯 beda background
    const background = type === "welcome"
        ? "https://img2.pixhost.to/images/6553/706117100_settomodders.jpg" // welcome
        : "https://img2.pixhost.to/images/6553/706117105_settomodders.jpg" // goodbye

    const banner = await new canvafy.WelcomeLeave()
        .setAvatar(avatar)
        .setBackground("image", background)
        .setTitle("‎") // invisible text
        .setDescription("‎") // invisible text
        .setBorder("#2a2e35")
        .setAvatarBorder("#2a2e35")
        .setOverlayOpacity(0.2)
        .build()

    return banner
}

async function promoteBanner() {
    return null
}

module.exports = { welcomeBanner, promoteBanner }