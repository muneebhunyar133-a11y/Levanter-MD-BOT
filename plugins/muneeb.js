let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, { text: "Hello! Ye mera pehla command hai 😎\nPowered by Muneeb" }, { quoted: m })
}

handler.command = ['muneeb', 'hi']
handler.desc = "Mera pehla command"
export default handler
