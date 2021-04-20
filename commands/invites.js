const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
        return message.inlineReply("Eu preciso da permissão **Gerenciar Servidor** para obter as informações de convites.")
    }

    message.guild.fetchInvites().then((invites) => {
        let inviteCounter = {}

        invites.forEach((invite => {
            const { uses, inviter } = invite
            const { username, discriminator } = inviter

            const name = `${inviter}`

            inviteCounter[name] = (inviteCounter[name] || 0) + uses
        }))

        let replyText = new Discord.MessageEmbed()
            .setTitle(`📩 Convites ${message.guild.name}`)
            .setDescription(` \n`)
            .setColor("BLUE")
            .setFooter('Apareceu o ID? O membro saiu do servidor')

        let sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

        if (sortedInvites.length > 5) sortedInvites.length = 5
        else if (sortedInvites.length > 5) sortedInvites.length = sortedInvites.length


        for (const invite of sortedInvites) {
            var count = inviteCounter[invite]
            replyText.description += `\n${invite} convidou ${count} membro(s).`
        }

        message.inlineReply(replyText)
    })
}