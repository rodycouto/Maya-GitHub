const Discord = require("discord.js")
const quiz = require('./quiz.json')
const db = require("quick.db")

exports.run = async (client, message, args) => {
    let item = quiz[Math.floor(Math.random() * quiz.length)]
    let filter = response => {
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())
    }

    let pergunta = new Discord.MessageEmbed()
        .setColor('#DCDCDC')
        .setTitle(item.question)
        .setFooter('Responda em até 15 segundos.')

    let quiztime = new Discord.MessageEmbed()
        .setColor('#DCDCDC')
        .setTitle(`RAPHY QUIZ TIME!`)
        .setDescription('Prepare-se! Você tem apenas 15 segundos.')

    message.channel.send(quiztime).then(msg => msg.delete({ timeout: 5000 })).then(msg => message.channel.send(pergunta)).then(() => {
        message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
            .then(collected => {

                const amount = Math.floor(Math.random() * 20) + 1
                db.add(`mpoints_${collected.first().author.id}`, amount)

                let resposta = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(`${collected.first().author.username} acertou a pergunta!`)
                    .setDescription(`${collected.first().author} ganhou ${amount} <:RPoints:837666759389347910>RPoints`)
                message.channel.send(resposta)
            })
            .catch(collected => {
                let timeover = new Discord.MessageEmbed()
                    .setColor('#8B0000')
                    .setTitle(`Ninguém acertou!`)
                    .setDescription('Que pena, o tempo acabou e ninguém acertou.')
                message.channel.send(timeover)
            })
    })
}