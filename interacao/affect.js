const canvacord = require('canvacord/src/Canvacord')
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  if (!args[0]) { return message.inlineReply('`' + prefix + 'affect @user`') }

  const member = message.mentions.users.first() || message.author;

  if (member.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }
  if (member.id === "821471191578574888") { return message.inlineReply('Não usa isso comigo boboca.') }

  const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })
  const image = await canvacord.affect(memberAvatar)
  const affect = new Discord.MessageAttachment(image, 'affect.png')

  return message.inlineReply(affect)
}