const Discord = require("discord.js")
const canvacord = require("canvacord")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

  let level = db.fetch(`level_${user.id}`) || 0
  let exp = db.fetch(`xp_${user.id}`) || 0
  let neededXP = Math.floor(Math.pow(level / 0.1, 2))

  let every = db.all().filter(i => i.ID.startsWith("xp_")).sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`xp_${user.id}`) + 1

  let card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(rank)
    .setLevel(level)
    .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setStatus(user.presence.status)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }))

  let img = await card.build().catch(err => { message.inlineReply('Um erro foi detectado na execução de CANVACORD' + err) })

  setTimeout(function () {
    message.inlineReply(new Discord.MessageAttachment(img, "rank.png")).catch(err => { return })
  }, 5100)

  return message.inlineReply("<a:Pulse:839682326211854337> Carregando...").then(msg => msg.delete({ timeout: 5000 }).catch(err => { return }))
}