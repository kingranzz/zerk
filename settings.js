require("./Databases/module.js")

//========== Setting Owner ==========//
global.no = "62895321491786"
global.owner = "Zero "
global.bot = "ZeroInvicitus ϟ"
global.v = "1.0.0"
global.welcome = false
global.autoread = true
global.anticall = true

//========= Setting Url Foto =========//
global.image = "https://d.top4top.io/p_3274oyvgs1.jpg"

global.msg = {
"error": "Maaf Adanya Sistem Error Pada Fitur Ini!!",
"done": "Berhasil🕊", 
"wait": "Wait To Proses🕊", 
"owner": "`You Now Owner`", 
"developer": "`You Now Development`"
}










































































global.own = "𝐙𝐞𝐫𝐨𝐈𝐧𝐯𝐢𝐜𝐢𝐭𝐮𝐬 ϟ"
global.log = "友"
global.ch = "https://whatsapp.com/channel/0029VassioVJZg4DJh1KKH3U"
global.bot = "𝐙𝐞𝐫𝐨𝐈𝐧𝐯𝐢𝐜𝐢𝐭𝐮𝐬 ϟ"
global.ver = "3.0.0"
global.wa = "https://wa.me/254771170558"
global.logo = "https://img100.pixhost.to/images/849/542325290_skyzopedia.jpg"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})