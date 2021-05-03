const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    if (args[1]) { return message.inlineReply('Por favor, mande apenas o comando. `' + prefix + 'setsexo`') }

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Escolha seu sexo...')
        .setDescription('♂️ Homem\n♀️ Mulher\n🏳️‍🌈 LGBT\n*️⃣ Não quero dizer')
        .setFooter('Auto delete em 30 segundos.')

    const sucess = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('<a:Check:836347816036663309> Sexo alterado com sucesso!')

    return message.inlineReply(embed).then(msg => {
        msg.react('♂️').catch(err => { return }) // Homem
        msg.react('♀️').catch(err => { return }) // Mulher
        msg.react('🏳️‍🌈').catch(err => { return }) // LGBT
        msg.react('*️⃣').catch(err => { return }) // Não quero dizer
        msg.delete({ timeout: 30000 }).catch(err => { return })

        msg.awaitReactions((reaction, user) => {
            if (message.author.id !== user.id) return

            if (reaction.emoji.name === '♂️') { // Homém
                msg.delete().catch(err => { return })
                db.set(`sexo_${message.author.id}`, "♂️ Homem")
                return message.channel.send(sucess)
            }

            if (reaction.emoji.name === '♀️') { // Touro
                msg.delete().catch(err => { return })
                db.set(`sexo_${message.author.id}`, "♀️ Mulher")
                return message.channel.send(sucess)
            }

            if (reaction.emoji.name === '🏳️‍🌈') { // Gêmeos
                msg.delete().catch(err => { return })
                db.set(`sexo_${message.author.id}`, "🏳️‍🌈 LGBT")
                return message.channel.send(sucess)
            }

            if (reaction.emoji.name === '*️⃣') { // Câncer
                msg.delete().catch(err => { return })
                db.set(`sexo_${message.author.id}`, "*️⃣ Não quero dizer")
                return message.channel.send(sucess)
            }
        })
    })
}