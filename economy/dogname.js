const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let medalha = db.get(`medalha_${message.author.id}`)
    if (medalha === null) { return message.inlineReply('<:xis:835943511932665926> Você ainda não obteve sua melhada!') }
    if (!db.get(`medalha_${message.author.id}`)) { return message.inlineReply('<:xis:835943511932665926> Você ainda não obteve sua melhada!') }

    const args0 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🏷️ Nome pro cachorrinho')
        .setDescription('Use este comando para dar um nome para seu cachorrinho/a!')
        .addField('Comando', '`' + prefix + 'dogname NomeDoCachorro`')
        .setFooter('O nome deve ser único')

    if (!args[0]) { return message.inlineReply(args0) }
    if (args[1]) { return message.inlineReply('<:xis:835943511932665926> O nome tem que ser único. Nada de dois nomes ou mais.') }
    if (!isNaN(args[0].content)) { return message.inlineReply('<:xis:835943511932665926> O nome do seu cachorrinho/a não pode ter números no nome.') }
    if (args[0].length > 12) { return message.inlineReply('<:xis:835943511932665926> O nome do seu cachorrinho/a não pode ter mais de 12 caracteres.') }
    if (args[0].length < 3) { return message.inlineReply('<:xis:835943511932665926> O nome do seu cachorrinho/a não pode menos de 3 caracteres.') }

    const confirm = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Confirmação')
        .setDescription(`Você confirma em dar o nome **${args[0]}** ao seu cachorrinho/a?`)
        .setFooter('Cancelamento em 30 segundos...')

    return message.inlineReply(confirm).then(msg => {
        msg.react('✅').catch(err => { return }) // Check
        msg.react('❌').catch(err => { return }) // X
        setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 30000)

        msg.awaitReactions((reaction, user) => {

            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '✅') { // Sim
                msg.delete().catch(err => { return })
                
                setTimeout(function () {
                    db.set(`dogname_${message.author.id}`, args[0])
                    message.inlineReply(`<a:Check:836347816036663309> ${message.author}, o nome do seu cachorro/a agora é **${args[0]}**`)
                })
                return message.inlineReply('<a:Pulse:839682326211854337> Validando nome no banco de dados...').then(msg => msg.delete({ timeout: 5000 }).catch(err => { return }))
            }

            if (reaction.emoji.name === '❌') { // Não
                msg.delete().catch(err => { return })
                msg.channel.send(`Comando cancelado.`)
            }
        })
    })

}