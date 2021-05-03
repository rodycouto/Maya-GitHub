const Discord = require("discord.js")
const db = require("quick.db")
const Respostas8Ball = require("./8ball.json")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let respostas = Respostas8Ball[Math.floor(Math.random() * Respostas8Ball.length)]
    let pergunta = args.join(" ")

    const NoArgsEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('🎱 Sabedoria Infinita!')
        .setDescription('Pergunte ao 8Ball sobre qualquer coisa e você terá a resposta procurada.')
        .addField('Comando', '`' + prefix + '8ball Sua Pergunta`')

    if (!pergunta) { return message.inlineReply(NoArgsEmbed) }

    setTimeout(function () {
        message.inlineReply(respostas)
    }, 2000)
    return message.inlineReply('<a:carregando:836101628083437608>')

}