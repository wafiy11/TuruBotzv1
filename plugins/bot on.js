let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh๐ฅฑ, Maap kak ๐๐๐๐๐ฟ๐๐๐ tadi ketiduran๐* ')
}

handler.tags = ['main']
handler.command = /^(puton)$/i

handler.admin = true

export default handler
