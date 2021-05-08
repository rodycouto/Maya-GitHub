const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let Moderador = db.get(`moderadoreschatglobal_${message.author.id}`)
    if (!Moderador) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito para Moderadores do Chat Global.')
    }

    let Mensagem = args.join(" ")
    if (!Mensagem) { return message.inlineReply('Escreva algo')}

    let ServidoresAtivados = db.fetch(`globalchat_${message.guild.id}`)
    if (message.channel.id === ServidoresAtivados) {

        client.guilds.cache.forEach(Canal => {
            try {
                client.channels.cache.get(db.fetch(`globalchat_${Canal.id}`)).send(`📢 ${Mensagem}`)
            } catch (e) { return }
        })
    }
}