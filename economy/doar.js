const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (client, message, args) => { 

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let timeout1 = 9140000
    let author1 = await db.fetch(`pego_${message.author.id}`)

    if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
        let time = ms(timeout1 - (Date.now() - author1))

        var presomax = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('🚨 Você está em prisão máxima!')
            .setDescription(`Liberdade em: ${time.hours}h ${time.minutes}m e ${time.seconds}s`)

        return message.inlineReply(presomax)
    } else {

        let money = db.get(`mpoints_${message.author.id}`)
        let rosas = db.get(`rosas_${message.author.id}`)
        let user = message.mentions.members.first()

        if (money === null) money = '0'
        if (!db.get(`mpoints_${message.author.id}`)) money = '0'

        if (rosas === null) rosas = '0'
        if (!db.get(`rosas_${message.author.id}`)) rosas = '0'

        if (!args[0]) { return message.inlineReply('Não sabe usar o comando doar?\n' + '`' + prefix + 'help doar`') } // Ativação a baixo

        if (!user) { return message.inlineReply('Não sabe usar o comando doar? ' + '`' + prefix + 'help doar`') }
        if (user.id === "821471191578574888") { return message.inlineReply('<:xis:835943511932665926> Sorry, mas não quero doações.') } // Maya ID
        if (user.id == message.author.id) { return message.inlineReply('<:xis:835943511932665926> Você não pode doar para você mesmo.') }
        if (message.mentions.members.bot) { return message.inlineReply('<:xis:835943511932665926> Você não pode doar para bots.') }

        if (['rosas', 'rosa'].includes(args[0])) {
            if (rosas === '0') { return message.inlineReply(`<:xis:835943511932665926> Você não tem rosas para doar.`) }
            if (rosas === null) { return message.inlineReply(`<:xis:835943511932665926> Você não tem rosas para doar.`) }

            let quantia = args[2]
            if (!quantia) { return message.inlineReply('<:xis:835943511932665926> Use o comando de forma correta! `' + prefix + 'doar rosas @user quantidade`') }
            if (isNaN(quantia)) { return message.inlineReply(`<:xis:835943511932665926> **${quantia}** não é um número!`) }

            var ConfirmRosas = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('<a:attention:836101248183959562> Confirmação...')
                .setDescription(`Você confirma o envio de ${args[2]} 🌹 Rosas para ${user}?`)

            return message.inlineReply(ConfirmRosas).then(msg => {
                msg.react('✅').catch(err => { return }) // Check
                msg.react('❌').catch(err => { return }) // X
                msg.delete({ timeout: 120000 }).catch(err => { return })

                msg.awaitReactions((reaction, user) => {

                    if (message.author.id !== user.id) return

                    if (reaction.emoji.name === '✅') { // Sim
                        msg.delete().catch(err => { return })

                        db.add(`rosas_${message.mentions.members.first().id}`, rosas)
                        db.subtract(`rosas_${message.author.id}`, rosas)
                        db.add(`rp_${message.mentions.members.first().id}`, quantia * 2)
                        return message.channel.send(`<a:Check:836347816036663309> Transação efetuada com sucesso!\n${user} recebeu: ${args[1] * 2} Reputações e ${args[2]} 🌹 Rosas`).catch(err => { return })
                    }

                    if (reaction.emoji.name === '❌') { // Não
                        msg.delete().catch(err => { return })
                        msg.channel.send(`<a:Check:836347816036663309> Transação cancelada.`)
                    }
                })
            })
        } else if (['money', 'mp', 'dinheiro', 'cash'].includes(args[0])) {

            if (["all", 'tudo'].includes(args[2])) {
                if (money === '0') { return message.inlineReply('<:xis:835943511932665926> Você não tem dinheiro para doar.') }
                if (money < '0') { return message.inlineReply('<:xis:835943511932665926> Você não pode doar dinheiro estando negativado.') }

                var confirm = new Discord.MessageEmbed() // Doar all
                    .setColor('BLUE')
                    .setTitle('Confirmação...')
                    .setDescription(`<a:attention:836101248183959562> Confirmar transação no valor de ${money}<:StarPoint:766794021128765469>MPoints para ${user}?`)

                return message.inlineReply(confirm).then(msg => {
                    msg.react('✅') // Check
                    msg.react('❌') // X
                    msg.delete({ timeout: 120000 }).catch(err => { return })

                    msg.awaitReactions((reaction, user) => {

                        if (message.author.id !== user.id) return

                        if (reaction.emoji.name === '✅') { // Sim
                            msg.delete().catch(err => { return })

                            db.add(`mpoints_${message.mentions.members.first().id}`, money)
                            db.subtract(`mpoints_${message.author.id}`, money)
                            return message.channel.send(`<a:Check:836347816036663309> Transação efetuada com sucesso!\nQuantia: ${money}<:StarPoint:766794021128765469>MPoints`).catch(err => { return })
                        }

                        if (reaction.emoji.name === '❌') { // Não
                            msg.delete().catch(err => { return })
                            return msg.channel.send(`<a:Check:836347816036663309> Transação cancelada.`)
                        }
                    })
                })
            } else {
                
                if (args[2] < '0') { return message.inlineReply('<a:attention:836101248183959562> Diga um valor maior que 0') }
                if (money === '0') { return message.inlineReply('<:xis:835943511932665926> Você não pode fazer doações sem dinheiro.') }
                if (money < args[2]) { return message.inlineReply('<:xis:835943511932665926> Você não tem todo esse dinheiro para doar.') }
                if (isNaN(args[2])) { return message.inlineReply(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

                var confirm2 = new Discord.MessageEmbed() // Doar quantia
                    .setColor('BLUE')
                    .setTitle('Confirmação...')
                    .setDescription(`<a:attention:836101248183959562> Confirmar transação no valor de ${args[1]}<:StarPoint:766794021128765469>MPoints para ${user}?`)

                return message.inlineReply(confirm2).then(msg => {
                    msg.react('✅').catch(err => { return }) // Check
                    msg.react('❌').catch(err => { return }) // X
                    msg.delete({ timeout: 120000 }).catch(err => { return })

                    msg.awaitReactions((reaction, user) => {

                        if (message.author.id !== user.id) return

                        if (reaction.emoji.name === '✅') { // Sim
                            msg.delete().catch(err => { return })

                            db.add(`mpoints_${message.mentions.members.first().id}`, args[1])
                            db.subtract(`mpoints_${message.author.id}`, args[1])
                            return message.channel.send(`<a:Check:836347816036663309> Transação efetuada com sucesso!\n${user.username} recebeu ${args[1]}<:StarPoint:766794021128765469>MPoints`).catch(err => { return })
                        }

                        if (reaction.emoji.name === '❌') { // Não
                            msg.delete().catch(err => { return })
                            return msg.channel.send(`<a:Check:836347816036663309> Transação cancelada.`)
                        }
                    })
                })
            }
        } else {
            return message.inlineReply('<:xis:835943511932665926> Eu não achei nada com o nome **' + args[0] + '** no comando `' + prefix + 'doar`, use `' + prefix + 'help doar` para mais informações.')
        }
    }
}
