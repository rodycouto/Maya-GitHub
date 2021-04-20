const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  var canal = db.get(`ideiachannel_${message.guild.id}`)
  if (canal === null) {

    var nochannel = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('❌ Nenhum canal de ideias/sugestões definido.')
      .setDescription('Graças ao sistema de organização da Maya, este é um dos comandos que requer um canal especifico para funcionamento.\n \nAs ideias e sugestões dos membros ficará em um canal para serem votadas pelos os outros membros. Bem... Se a administração do servidor quiser é claro.')
      .addFields(
        {
          name: 'Comando de Ativação',
          value: '`' + prefix + 'setideiachannel #canal`',
          inline: true
        },
        {
          name: 'Comando de Desativação',
          value: '`' + prefix + 'setideiachannel off`',
          inline: true
        }
      )
    return message.inlineReply(nochannel)
  }

  if (!client.channels.cache.get(canal)) {

    var nochanel = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Parece que o canal de ideias/sugestões foi excluido.')
      .setDescription('`' + prefix + 'setideiachannel #canal`')
    return message.inlineReply(nochanel)
  }

  let content = args.join(" ")
  let avatar = message.author.displayAvatarURL({ format: 'png' })

  if (!args[0]) {

    var noideia = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('💡 Comando Ideia/Sugestão')
      .setDescription('Use este comando para enviar sua ideia ao servidor, para que todos possam votar.\n \nMáximo: 300 letras\nMínimo: 10 letras')
      .addField('Comando', '`' + prefix + 'ideia Sua ideia em diante`')
    return message.inlineReply(noideia)
  }

  if (content.length > 300) {
    var umk = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Sua ideia/sugestão não pode passar de 300 caracteres')
    return message.inlineReply(umk)

  }

  if (content.length < 10) {
    var umk = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setTitle('Sua ideia/sugestão é curta demais, escreva mais do que 10 caracteres')
    return message.inlineReply(umk)

  } else {

    var msg = await client.channels.cache.get(canal).send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setAuthor(`${message.author.tag} enviou sua ideia/sugestão`, avatar)
        .setDescription(content)
        .setTimestamp()
        .setFooter(`💡 ${prefix}ideia`)
    )

    await message.inlineReply(`✅ A sua ideia foi enviada com sucesso no canal ${client.channels.cache.get(canal)}`)

    var emojis = ["✅", "❌", "❔"]

    for (var i in emojis) {
      await msg.react(emojis[i])
    }
  }
}