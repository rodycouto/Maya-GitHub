const Discord = require("discord.js")
const convert = require("parse-ms")
const db = require('quick.db')
const ms = require('parse-ms')

exports.run = async (client, message, args) => {

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
  let avatar = user.user.displayAvatarURL({ format: 'png' })
  let fotospot = 'https://imgur.com/vw6z7v4.png'
  if (message.mentions.users.first()) {
    user = message.mentions.users.first()
  } else {
    user = message.author
  }

  let status
  if (user.presence.activities.length === 1) status = user.presence.activities[0]
  else if (user.presence.activities.length > 1) status = user.presence.activities[1]

  if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING")
    return message.inlineReply("Essa pessoa não está ouvindo nada no Spotify ou não vinculou o Spotify com o Discord.")

  if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
    let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`
    url = `https:/open.spotify.com/track/${status.syncID}`,
      name = status.details,
      artist = status.state,
      album = status.assets.largeText,
      timeStart = status.timestamps.start,
      timeEnd = status.timestamps.end,
      timeConvert = convert(timeEnd - timeStart);

    let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes
    let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds
    let time = `${minutes}:${seconds}`

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.username} está escutando...`, (avatar))
      .setColor(0x1ED768)
      .setDescription(`**Nome:**\n[${name}](${url})`)
      .setThumbnail(image)
      .addField("Duração", time, true)
      .addField("Artista", artist, false)
      .addField("Album", album, true)
      .addField("Resumo", `${artist} - ${name}\n📨 Receba a música no seu privado`, false)
      .setFooter('Spotify e Discord fazendo seu dia melhor.', fotospot)

    await message.inlineReply(embed).then(msg => {
      msg.react('📨').catch(err => { return })
      setTimeout(function () { msg.reactions.removeAll().catch(err => { return }) }, 30000)

      msg.awaitReactions((reaction, member) => {

        if (client.user.id === member.id) return

        if (reaction.emoji.name === '📨') {
          let PrivadoDesativado = db.get(`privadooff_${member.id}`)
          if (PrivadoDesativado) {
            return message.inlineReply(`<:xis:835943511932665926> ${member}, você desativou minhas mensagens no seu privado. Este recurso está bloqueado para você.`)
          } else {
            member.send(embed).catch(err => { return message.channel.send(`<:xis:835943511932665926> ${member}, você desativou as mensagens privadas.`) })
          }
        }
      })
    })
  }
}