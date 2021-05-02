
const db = require("quick.db")
const ms = require("ms")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let formato = '`' + prefix + 'mutechat ID 20s/m/h 10000` *(10 Segundos)*'

    let id = args[0]
    if (!id) { return message.inlineReply(formato) }
    if (args[0].length < 17) { return message.channel.send("<:xis:835943511932665926> Isso não é um ID") }
    if (isNaN(id)) { return message.channel.send("<:xis:835943511932665926> Hey, isso não é um número.") }

    if (args[1].length > 3) { return message.channel.send('<:xis:835943511932665926> Tempo limite é de 99 h') }
    if (!args[1].endsWith("s") && !args[0].endsWith("m") && !args[0].endsWith("h")) { return message.channel.send(formato) }
    if (isNaN(args[1][1])) { return message.channel.send(formato) }

    if (args[3]) { return message.inlineReply('<:xis:835943511932665926> Nada além do tempo!\n' + formato) }

    db.set(`timemuteglobal_${id}`, args[2])
    db.set(`muteglobal_${id}`, Date.now())

    setTimeout(() => {
        db.delete(`timemuteglobal_${id}`),
            db.delete(`muteglobal_${id}`)
    }, ms(args[1]))

    let ServidoresAtivados = db.fetch(`globalchat_${message.guild.id}`)
    if (message.channel.id === ServidoresAtivados) {

        client.guilds.cache.forEach(Canal => {
            try {
                client.channels.cache.get(db.fetch(`globalchat_${Canal.id}`)).send(`📢 *(${id})* foi mutado no chat global por ${message.author.tag}!\nTempo: ${args[1]}`)
            } catch (e) { return }
        })
    }
}