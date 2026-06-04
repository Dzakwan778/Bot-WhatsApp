const chalk = require("chalk")
const fs = require("fs")

// ======================== Default True/False ===================== \\

global.autosholat = true // true = aktif, false = mati, mengatur otomatis mengirim notif
global.welcome = true // true = aktif, false = mati, mengatur notif pesan ketika ada yang masuk grup
global.left = true // true = aktif, false = mati, mengatur notif pesan ketika ada yang keluar grup
global.groupinfo = true // true = aktif, false = mati, mengatur notif pesan ketika ada perubahan di grup (nama, deskripsi, foto)

// ======================== Setting Menu & Media ===================== \\

global.prefix = ['','!','.','#','&']
global.channel = '120363186130999681@newsletter' // GANTI DENGAN ID CHMU KALO ADA
global.channeln = 'OUZUKA MD' // GANTI DENGAN NAMA CH MU
global.thumbnail = './media/menuvid.mp4'
global.music = './media/menu.mp3'
/*
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'

 COMING SOON

global.thum = global.thumbnail
global.log0 = global.thumbnail
global.err4r = global.thumbnail
global.thumb = global.thumbnail
*/
// ======================== Info Owner ===================== \\
global.ownername = 'FallZx Infinity'
global.owner = ['6285813708397']
global.ownernomer = '6285813708397'
global.ownernumber = '6285813708397'
global.ownerNumber = ["6285813708397@s.whatsapp.net"]
global.creator = "6285813708397@s.whatsapp.net"
global.ig = '@FallZx Infinity'
global.tele = 'jaypayid'
global.ttowner = '-'
global.socialm = 'GitHub: -'
global.location = 'Indonesia' 
global.ownerweb = "-" // Ganti ke milikmu

// ======================== Info Bot ===================== \\
global.botname = "Ouzuka MD 🌼"
global.botnumber = '639071310822'
global.wagc = "https://chat.whatsapp.com/GOFZVMWdrseGuklwjrnUo2"
global.saluran = "https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D"
global.themeemoji = '🌼'
global.wm = "Ouzuka MD ||| WhatsApps Bots"
global.botscript = 'https://youtube.com/FallZx Infinity'
global.packname = "FallZx Infinity"
global.author = "\n\n\n\n\nDibuat Oleh FallZx Infinity\nNo hape/wa : 6285813708397"
global.sessionName = 'session'
global.hituet = 0

// ======================== API Keys ===================== \\

// Cpanel
global.domain = 'https://panel.kamu.com'; // Domain Panel 
global.apikey = 'ptla_27Bkxxx'; // PLTA Panel
global.email = '-' // Domain email user
global.egg = '15'; // ID Egg
global.nestid = '5'; // ID Nest
global.loc = '1'; // ID Location
global.nodeid1 = [1]; // ID Node

// TikWm API
global.tikwmkey = [
    "e0b858e86bb77c0551f2f5c5a4d897f4", 
    "e0b8xxx"
] // Ambil ApiKey di https://tikwmapi.com/dashboard/keys

// ReactCH API
global.frch = [
    "29015f61cbaa2b36f26bcd61c0b087c0421e4f8f16c67809d4b67091863bf483", 
    "3b00b2f1d5201dee96ed46eca909ef4be8abdbad1bc876fe6384bc42256ed24f"
]

// Naze API
global.nazekey = [
    "nz-e98e71fd41", 
    "nz-f0ccb09fe1", 
    "nz-d7f75016a2", 
    "nz-97bf45bd87", 
    "nz-4ce5fb3be3"
]

// ======================== Respon Bot ===================== \\
global.mess = {
   wait: "*_Tunggu sebentar ya kak_ ^~^*",
   success: "Yay! Bot berhasil 🎉",
   on: "Yay! Nyala nih! 😝",
   off: "Ahh! Mati deh.. 😴",
   query: {
       text: "Teksnya mana? Aku kan gabisa baca pikiran kaka 😉",
       link: "Linknya dongg.. Aku gabisa tanpa link 😖",
       image: "Gambarnya mana nih? jahat banget engga ngasi:<"
   },
   error: {
       fitur: "Whoops! Eror nih.. laporkan ke owner agar diperbaiki 6285187063723 🙏",
   },
   only: {
       group: "Eh, Kak! Fitur ini bisanya buat grup nihh 🫂",
       private: "Eh, Kak! Fitur ini cuman bisa dipake chat pribadi! 🌚",
       owner: "Hanya untuk sang *Raja* 👑",
       admin: "Fitur ini cuman bisa dipake admin grup yah! 🥳",
       badmin: "Waduh! Aku butuh jadi admin agar bisa menggunakan fitur ini 🤯",
       premium: "Kak, ini fitur premium loh! Biar bisa jadi premium beli di 6285813708397 agar bisa menggunakan fitur ini 🤫",
   },
   replyimg: { // Ganti dengan gambar yang lain ya, sesuaikan dengan foto yang diinginkan
       tolak: "https://c.termai.cc/i175/O59lFl.jpg",
       query: "https://c.termai.cc/i110/SNj.jpg",
       success: "https://c.termai.cc/i170/rpJF.jpg",
       fail: "https://c.termai.cc/i119/kSIXsil.jpg",
       wait: "https://c.termai.cc/i193/5x2P.jpg",
       limit: "https://c.termai.cc/i169/6G4.jpg"
   }
}

// ======================== Auto Reload File ===================== \\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update '${__filename}'`))
	delete require.cache[file]
	require(file)
})