const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    var itens = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📋 Itens e suas funções')
        .setDescription('Todos os dados de todos os itens estarão aqui em breve')
    return message.inlineReply(itens)
}