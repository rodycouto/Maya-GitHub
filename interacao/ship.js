const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  let user = message.mentions.members.first()

  const LoveEmbedSemArgs = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('<:Gojo:832643201856438283> Medidor de Amor da Naya')
    .setDescription('Não sabe o quanto 2 pessoas se ama? Com este comando você pode saber!')
    .addField('Comandos', '`' + prefix + 'ship @user` Veja seu amor com alguém\n' + '`' + prefix + 'ship @user @user2` Veja o amor entre duas pessoas')

  if (!args[0]) { return message.inlineReply(LoveEmbedSemArgs) }
  if (!user) { return message.inlineReply('`' + prefix + 'ship @user`') }
  if (user.id === '837147659898191902') { return message.inlineReply("Foi maaal, eu não tenho a capacidade de amar ninguém. *(ainda)*") }
  if (user.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }
  if (args[2]) { return message.inlineReply('Nada além da 2º @marcação, tá bom?') }

  if (args[1]) {
    let user2 = message.mentions.members.last()
    if (user2.id === '837147659898191902') { return message.inlineReply("Foi maaal, eu não tenho a capacidade de amar ninguém. *(ainda)*") }
    if (user2.id === message.author.id) { return message.inlineReply('Você não pode usar este comando com você mesmo.') }
    if (user2.id === user.id) { return message.inlineReply('Marque pessoas diferentes poxa...') }

    if (user && user2) {
      let love = Math.random() * 100
      let loveIndex = Math.floor(love / 10)
      let loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex)
      let gif70 = 'https://imgur.com/zZLdONH.gif'
      let gif40 = 'https://imgur.com/jx3VwoC.gif'
      let gif00 = 'https://imgur.com/LOFGlt5.gif'

      const embed1 = new Discord.MessageEmbed()
        .setColor("RED")

      if (love > 70) {
        embed1.setTitle('<:zeroheart:833378638475821088> Medidor de Amor Naya')
        embed1.setThumbnail(gif70)
        embed1.setDescription(`${user} & ${user2}\nHuuum... Eu vejo futuro.\n${loveLevel}⠀${Math.floor(love)}% `)
      }

      if (love > 40 && love < 70) {
        embed1.setTitle('<:zerocute:832643202321874956> Medidor de Amor Naya')
        embed1.setThumbnail(gif40)
        embed1.setDescription(`${user} & ${user2}\nhmm... Ainda acho que pode sair algo.\n${loveLevel}⠀${Math.floor(love)}% `)
      }

      if (love < 40) {
        embed1.setTitle('<:sleep:833378639302754354> Medidor de Amor Naya')
        embed1.setThumbnail(gif00)
        embed1.setDescription(`${user} & ${user2}\n... Que pena.\n${loveLevel}⠀${Math.floor(love)}% `)
      }

      return message.inlineReply(embed1)
    }
  } else if (user) {
    let love = Math.random() * 100
    let loveIndex = Math.floor(love / 10)
    let loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex)
    let gif70 = 'https://imgur.com/zZLdONH.gif'
    let gif40 = 'https://imgur.com/jx3VwoC.gif'
    let gif00 = 'https://imgur.com/LOFGlt5.gif'

    const embed = new Discord.MessageEmbed()
      .setColor("RED")

    if (love > 70) {
      embed.setTitle('<:zeroheart:833378638475821088> Medidor de Amor Naya')
      embed.setThumbnail(gif70)
      embed.setDescription(`${user} & ${message.author}\nHuuum... Eu vejo futuro.\n${loveLevel}⠀${Math.floor(love)}% `)
    }

    if (love > 40 && love < 70) {
      embed.setTitle('<:zerocute:832643202321874956> Medidor de Amor Naya')
      embed.setThumbnail(gif40)
      embed.setDescription(`${user} & ${message.author}\nhmm... Ainda acho que pode sair algo.\n${loveLevel}⠀${Math.floor(love)}% `)
    }

    if (love < 40) {
      embed.setTitle('<:sleep:833378639302754354> Medidor de Amor Naya')
      embed.setThumbnail(gif00)
      embed.setDescription(`${user} & ${message.author}\n... Que pena.\n${loveLevel}⠀${Math.floor(love)}% `)
    }

    return message.inlineReply(embed)
  } else {
    return message.inlineReply('Hey! Usa o formato correto. `' + prefix + 'ship @user` ou `' + prefix + 'ship @user @user`')
  }
}

{
  let a451619591320371213 = "62351 Tickets Comprados"
  let a724102303862226955 = "212 Tickets Comprados"
}