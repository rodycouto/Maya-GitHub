const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`📖 ${message.guild.name}`)
        .setDescription(`Dono/a: ${message.guild.owner.user} | ${message.guild.owner.user.tag}`)

    return message.inlineReply(embed)
}