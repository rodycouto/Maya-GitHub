const canvacord = require('canvacord/src/Canvacord')
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        var member = message.mentions.users.first()

        if (!member) { return message.reply('`' + prefix + 'beaut @user`') }
        if (member.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }

        const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })
        const image = await canvacord.beautiful(memberAvatar)
        const beautiful = new Discord.MessageAttachment(image, 'beautiful.png')
        return message.inlineReply(beautiful)
}