const db = require("quick.db")
const ms = require("parse-ms")
const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  let timeout = 86400000 // 24hrs

  let timeout1 = 9140000
  let author1 = await db.fetch(`pego_${message.author.id}`)

  if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
    let time = ms(timeout1 - (Date.now() - author1))

    const presomax = new Discord.MessageEmbed()
      .setColor('#8B0000')
      .setTitle('🚨 Você está em prisão máxima!')
      .setDescription(`Liberdade em: ${time.hours}h ${time.minutes}m e ${time.seconds}s`)

    return message.inlineReply(presomax)
  } else {

    let daily = await db.fetch(`daily_${message.author.id}`)
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily))
      return message.inlineReply(`Você já pegou seus pontos hoje. Volte em ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`)
    } else {

      const amountnp = Math.floor(Math.random() * 1000) + 1
      const amountxp = Math.floor(Math.random() * 1000) + 1

      db.add(`mpoints_${message.author.id}`, amountnp)
      db.add(`xp_${message.author.id}`, amountxp)
      db.set(`daily_${message.author.id}`, Date.now())

      message.inlineReply(`Você adquiriu ${amountnp} <:RPoints:837666759389347910>RPoints e ${amountxp} <:level:766847577416138772>XP.`)
    }
  }
}