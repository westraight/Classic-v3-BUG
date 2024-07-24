/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  Maintainer (Taira Makino)
  Maintener2(Samue-l1)
  Maintener3(Emperordagoat)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
global.ig = 'ano_nymous_sam' // ubah aja
global.email = 'samuelcircute@gmail.com' //serah
global.region = 'Zambia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '4L Draco❤️🔞' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['0765199175'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = 'We straight ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺' // ubah aja ini nama sticker
global.author = '༻࿇𝐊𝐈𝐍𝐆_𝐒𝐀𝐌❖༺' // ubah aja ini nama sticker
global.prefa = ['!','!','.',',','🐤','🗿']
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"EAHcIHFQIwfFW4rx9o27Hme3Nawv+UALOzAT+BnNZmE="},"public":{"type":"Buffer","data":"po3R0w0si5USScmaEaEj7EDvevA/6CunhbdKOFj0hEs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"ECshuU0KTO20kvmCl+E1R+wb5w45KejbWjuTD8Kcsnw="},"public":{"type":"Buffer","data":"A4LZjsdD+tOTXHif/3HdAhzSMDntQN3mHxWTtuyilVE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GGUd76cX8kZIjtF7cG+KpHvjcy0R4KJ+YsBsaPm/vEg="},"public":{"type":"Buffer","data":"mE4YU18vHNsnucvitvSuiSpIPYzWYBehcSzUB48cYQU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"ONoo81MNUe4j5gVKo+M/z+mmvkCLth1b193uxMFJt0w="},"public":{"type":"Buffer","data":"qBvJyT11pecXrJQXMJg9QwNcM1lsLsXGdNp4dAvUi1I="}},"signature":{"type":"Buffer","data":"XCHAWYcjNxyBwEcPvyZfEE6eqW92uwYcEbhDWMYmjXkeWlL3+aZ5hcgKL8S33mEcMywEmQVI2N8ZxjLXF0DZjw=="},"keyId":1},"registrationId":35,"advSecretKey":"Gh4zsarMb+FyYeMUWdB0H7jZF7ke1mi8NNl/jk4iuAo=","processedHistoryMessages":[],"nextPreKeyId":32,"firstUnuploadedPreKeyId":32,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"bJ4ENoL6QDO_jZ8-Qf7Opg","phoneId":"4039845a-0eff-433a-9c93-72813ec005a8","identityId":{"type":"Buffer","data":"a4uUc7UGY12g2X+Pgj0XSqE2dM0="},"registered":true,"backupToken":'  //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.rn = 'online'
/*
Declaring Menu type

V1 = Photo
V2 = Video
V3 = Text
V4 = Button

*/
global.menutype = "v1"
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
