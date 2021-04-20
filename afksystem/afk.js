const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let content = args.join(" ")
    if (content.length > 50) { return message.inlineReply("O seu motivo não pode passar de 50 caracteres.") }
    let content1 = args.slice(1).join(" ")
    if (content1.length > 50) { return message.inlineReply("O seu motivo não pode passar de 50 caracteres.") }

    if (!args[0]) {
        var helpafk = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('📢 Afk Global System')
            .setDescription('Utilize este comando para avisar que você está offline.')
            .addField('🌎 Comando de Ativação Global', '`' + prefix + 'afk all/global Sua mensagem`')
            .addField('📴 Comando de Ativação Servidor', '`' + prefix + 'afk Sua mensagem`')
            .addField('❓ Quer mais ajuda?', '`' + prefix + 'help afk`')
            .setFooter('Deseja ativar o AFK sem mensagem?')

        await message.inlineReply(helpafk).then(msg => {
            msg.react('✅').catch(err => { return })
            msg.react('❌').catch(err => { return })
            setTimeout(function () { msg.reactions.removeAll() }, 30000).catch(err => { return })

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete()
                    db.set(`afk_${message.author.id}+${message.guild.id}`, 'Nenhuma razão especificada.')
                    return message.inlineReply(`✅ Modo AFK ativado sem mensagem definida.`)
                }

                if (reaction.emoji.name === '❌') { // Não
                    msg.delete()
                    message.inlineReply("Comando cancelado.")
                }
            })
        })
    }

    if (['all', 'global', 'todos'].includes(args[0])) {

        if (!content1) {
            db.set(`afk_${message.author.id}+${message.author.id}`, 'Nenhuma razão especificada.')
            return message.inlineReply(`✅ Modo AFK Global ativado sem mensagem definida.`)
        }

        if (content1) {
            db.set(`afk_${message.author.id}+${message.author.id}`, content1)
            var embed = new Discord.MessageEmbed()
                .setColor('GREEN')
                .setDescription('`' + `${content1}` + '`')
            return message.inlineReply(`✅ Você ativou o modo AFK Global.`, embed)
        }
    }

    if (content) {
        db.set(`afk_${message.author.id}+${message.guild.id}`, content)
        var embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${content}`)
        return message.inlineReply(`✅ Você ativou o modo AFK no Servidor.`, embed)
    }
}