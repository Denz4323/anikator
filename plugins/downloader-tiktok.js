const fs = require ('fs')
const fetch = require ('node-fetch')
const axios = require ('axios')
const { tiktokdl, tiktokdlv2 } = require ('@bochilteam/scraper')

let handler = async (m, { conn, args, usedPrefix, command }) => {
global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    try {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@xxxx/video/xxxx`
m.reply('Mohon Ditunggu yah bre')
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendButtonVid(m.chat, url, `              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
───── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────
*Nickname:* ${nickname}
*Description:* ${description}
_©By Deff Gans_
`.trim(), wm, `Audio`, `.ttmp3 ${args[0]}`, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 3596400,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://youtube.com/@DenzCreator',
    mediaType: 2, 
    description: 'https://youtube.com/@DenzCreator',
    title: "⌫     ⌨︎     ☏︎",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/4bc27d9d80ba21dda8ab2.jpg')).buffer(),
    sourceUrl: 'https://youtube.com/@DenzCreator'
  }
  } })
} catch {
    if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tta ${args[0]}`, m)
    }
}
handler.help = ['tiktok', 'tt', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tik(tok)?(tok)?(toknowm)?(dl)?)$/i

module.exports = handler
