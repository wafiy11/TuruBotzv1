let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Yaudah kalo gitu, 𝖄𝖆𝖒𝖎𝕿𝖚𝖗𝖚 mau tidur dulu kak🥱😴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['put(on/off)']
handler.tags = ['main']
handler.command = /^(putoff)$/i

handler.admin = true

export default handler
