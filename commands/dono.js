const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let color = await db.get(`color_${message.author.id}`)
    if (color === null) color = '#6F6C6C'

    const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`📖 ${message.guild.name}`)
        .setDescription(`Dono/a: ${message.guild.owner.user} | ${message.guild.owner.user.tag}`)

    return message.inlineReply(embed)
}