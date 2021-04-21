const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author || message.member
  let user1 = message.author || message.member
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 })
  let linkavatar = user.displayAvatarURL()

  let embed = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setDescription(`[Baixar](${linkavatar}) avatar de ${user}`)
    .setImage(avatar)

  await message.inlineReply(embed).then(msg => {
    msg.react('❌').catch(err => { return }) // X
    msg.react('📨').catch(err => { return }) // Carta
    setTimeout(function () { msg.reactions.removeAll() }, 30000)

    msg.awaitReactions((reaction, member) => {

      if (reaction.emoji.name === '📨') { member.send(embed).catch(err => { return }) }
      if (message.author.id !== member.id) return
      if (reaction.emoji.name === '❌') { msg.delete().catch(err => { return }) }

    })
  })
}