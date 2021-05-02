
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let formato = '`' + prefix + 'unmutechat ID`'

    let id = args[0]
    if (!id) { return message.inlineReply(formato) }
    if (args[0].length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
    if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Hey, isso não é um número.") }

    db.delete(`timemuteglobal_${id}`)
    db.delete(`muteglobal_${id}`)

    client.guilds.cache.forEach(guild => {

        let CanaisValidos = guild.channels.cache.find(ch => ch.name === "naya-global-chat")

        if (!CanaisValidos) return

        return CanaisValidos.send(`📢 *(${id})* foi desmutado no chat global por ${message.author.tag}!`)
    })
}