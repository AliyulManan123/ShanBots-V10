//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru
const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
///Gantien dewe sak karepmu..,
global.pulsa = "6283146993017"
global.gopay = "6283146993017"
global.dana = "6283146993017"
global.ovo = "6283146993017"
global.ownerlen = "إحسان"//Ubah
global.owner = ['6283146993017'] //ubh nomor owner hp
global.ownername = "إحسان" //ubah
global.ytname = "FB: X Shan"//ubah
global.socialm = "IG: malasnulisnamapengguna"//ubah
global.location = "Indonesia, Jawatimur, Tuban"//ubah
global.ownernomer = "6283146993017"//ubah nomorhp owner
global.premium = ['6283146993017']//ubah nomor hp premium
global.botname = 'ShanBots' //ubah
global.linkz = "https://chat.whatsapp.com/IpWP0AiNMLTAFKoVGaiMKg"//ubah
global.websitex = "https://myprofile-sage.vercel.app"//ubah
global.botscript = 'https://myprofile-sage.vercel.app'
global.themeemoji = "☞"//ubah
global.packname = "Sticker By"//ubah
global.author = "ShanBots × إحسان"//ubah
global.wm = "ShanBots × إحسان"//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done ✓', //isien dewe Gantien bahasane Muales pol aku sak karepmu 
    admin: '< ❗ > Mohon Maaf Fitur Hanya Bisa Di Gunakan Oleh Admin Group!!',
    botAdmin: '< ❗ > Mohon Maaf Fitur Hanya Bisa Di Gunakan Apabila Bot Dijadikan Admin Group!!',
    premime: '< ❗ > Mohon Maaf Fitur Hanya Bisa Di Gunakan Oleh Member Premium, Beli dulu sana!!!',
    owner: '< ❗ > Lo bukan owner gw njir, Jadi nggak usah coba-coba pakek fitur ini!',
    group: '< ❗ > Mohon Maaf Fitur Hanya Bisa Di Gunakan didalam Group!!',
    private: '< ❗ > Mohon Maaf Fitur Hanya Bisa Di Gunakan di Private Chat!',
    bot: 'Fitur khusus bot!',
    wait: 'Permintaan mu sedang diproses, Sabar yakak, Jika bot tidak merespon berarti bot terjadi error!.',
    linkm: 'Linknya mana kak?',
    endLimit: '< ❗ > Limit Kamu Telah Habis!! Tunggu 12 jam Atau bisa membeli paket Limit',
    nsfw: '< ❗ > Fitur NSFW dinonaktifkan oleh owner, Hubungi owner untuk mengaktifkannya',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
    global.limitawal = {
    premium: "Infinity",
    free: 12, // limit awall 
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
