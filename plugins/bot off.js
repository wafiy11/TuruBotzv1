let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Yaudah kalo gitu, πππππΏπππ mau tidur dulu kakπ₯±π΄* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['put(on/off)']
handler.tags = ['main']
handler.command = /^(putoff)$/i

handler.admin = true

export default handler
