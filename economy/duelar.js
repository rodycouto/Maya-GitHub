const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const Espada = '⚔️'

    const NoArgsEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('⚔️ Duelo Naya Arena')
        .setDescription('O Duelo é um dos comandos da Classe Arena, onde você disputa com outros membros do servidor por alguma recompensa.\nCom o Duelo, você aposta uma quantia em <:NPoints:837666759389347910>NPoints, e o vencedor que tiver mais sorte ganha.')
        .addField('Comando', '`' + prefix + 'duelar @user quantia`')
        .setFooter('A Naya não se responsabiliza por dinheiro perdido.')

    if (!args[0]) { return message.inlineReply(NoArgsEmbed) }

    const Formato = '<:xis:835943511932665926> Use o formato correto! `' + prefix + 'duelar @user quantia a ser apostada`'

    let user = message.mentions.members.first()
    if (!user) { return message.inlineReply(formato) }
    if (user.id === '837147659898191902') { return message.inlineReply('Eu sou fraquinha e eu nem sei segurar uma espada :cry:') }
    if (user.id === message.author.id) { return message.inlineReply('<:xis:835943511932665926> Você não pode duelar com você mesmo.') }
    if (args[2]) { return message.inlineReply('<:xis:835943511932665926> Por favor, não use nada além da quantia. Informações adicionais podem atrapalhar o meu processsamento.') }

    let AuthorMoney = db.get(`mpoints_${message.author.id}`)
    let UserMoney = db.get(`mpoints_${user.id}`)
    let UserBank = db.get(`banco_${user.id}`)
    if (AuthorMoney === null) AuthorMoney = '0'
    if (UserMoney === null) UserMoney = '0'
    if (UserBank === null) UserBank = '0'
    let Valor = args[1]

    if (!Valor) { return message.inlineReply(Formato) }
    if (isNaN(Valor)) { return message.inlineReply(`<:xis:835943511932665926> | **${Valor}** não é um número, siga o formato correto, por favor. ` + '`' + prefix + 'duelar @user quantia a ser apostada`') }

    if (AuthorMoney < '0') { return message.inlineReply(`<:xis:835943511932665926> Você não pode duelar estando negativado.`) }
    if (AuthorMoney < Valor) { return message.inlineReply(`<:xis:835943511932665926> Você não tem **${Valor}**<:NPoints:837666759389347910>NPoints na carteira. Saque o valor desejado usando ` + '`' + prefix + 'sacar valor`') }

    if (UserMoney < '0') { return message.inlineReply(`<:xis:835943511932665926> ${user} está negativado. Tenha piedade!`) }
    if (UserBank + UserMoney < Valor) { return message.inlineReply('<:xis:835943511932665926> Não tem todo esse dinheiro.') }

    const ConfirmBattle = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('⚔️ Desafio Arena - Duelo')
        .setDescription(`${user}, você está sendo desafiado por ${message.author} para um duelo!`)
        .addField('Valor apostado', `${Valor}<:NPoints:837666759389347910>NPoints`)
        .setFooter('Cancelamento em 30 segundos.')

    return message.inlineReply(ConfirmBattle).then(msg => {
        msg.react('⚔️').catch(err => { return }) // Check
        msg.react('❌').catch(err => { return }) // X
        setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 30000)

        msg.awaitReactions((reaction, user) => {

            if (message.mentions.members.first().id !== user.id) return

            if (UserMoney < '0') { return message.inlineReply(`<:xis:835943511932665926> ${user} você está negativado!`) }
            if (db.get(`mpoints_${message.mentions.members.first().id}`) < Valor) { return message.inlineReply(`<:xis:835943511932665926> Você não tem todo esse dinheiro ${user}.`) }

            if (reaction.emoji.name === '⚔️') { // Sim
                msg.delete().catch(err => { return })

                db.add(`cachebattle_${message.author.id}`, Valor * 2)
                db.subtract(`mpoints_${message.author.id}`, Valor)
                db.subtract(`mpoints_${user.id}`, Valor)
                let cache = db.get(`cachebattle_${message.author.id}`)

                const BattleEmbed = new Discord.MessageEmbed()
                    .setColor('#8B0000')
                    .setTitle('Arena Naya ~ Batalhando...')
                    .setDescription(`${message.author} <a:espadas:837699539884179516> ${message.mentions.members.first()}`)

                const WinEmbed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('👑 Você ganhou o duelo!')

                setTimeout(function () {
                    let winlose = ['win', 'lose']
                    let result = winlose[Math.floor(Math.random() * winlose.length)]

                    if (result === 'win') {
                        WinEmbed.setDescription(`${message.author.username} recebeu: ${cache}<:NPoints:837666759389347910>NPoints`)
                        db.add(`mpoints_${message.author.id}`, cache)
                        return message.inlineReply(WinEmbed).then(() => db.delete(`cachebattle_${message.author.id}`))
                    }

                    if (result === 'lose') {
                        WinEmbed.setDescription(`${user.user.username} recebeu: ${cache}<:NPoints:837666759389347910>NPoints`)
                        db.add(`mpoints_${message.mentions.members.first().id}`, cache)
                        return message.inlineReply(WinEmbed).then(() => db.delete(`cachebattle_${message.author.id}`))
                    }
                }, 10100)
                return message.channel.send(BattleEmbed).then(msg => msg.delete({ timeout: 10000 }))
            }

            if (reaction.emoji.name === '❌') { // Não
                msg.delete().catch(err => { return })
                db.add(`mpoints_${message.author.id}`, cache)
                db.delete(`cachebattle_${message.author.id}`)
                return msg.channel.send(`${message.mentions.members.first()} recusou o duelo.`)
            }
        })
    })
}