const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  let user = message.mentions.members.first() || message.member

  if (!args[0] === user) user === message.author

  let bal = await db.get(`mpoints_${user.id}`)
  if (bal === null) bal = 0

  let bank = db.get(`banco_${user.id}`)
  if (bank === null) bank = 0

  let vip = db.get(`vip_${user.id}`)

  let list = [
    'Pessoas podem te roubar, tenha cuidado.',
    'Mantenha seu dinheiro no banco',
    'Sabia que você pode roubar o dinheiro de outras pessoas?',
    'Já jogou blackjack hoje?',
    'O banco é impossivel de roubar.',
    'A loteria é um bom lugar para investir',
    'Jogares com arma podem pegar todo dinheiro da carteira',
    'Tem vários meio de se obter dinheiro',
    'Na loja tem vários itens legais para se comprar',
    'Os melhores players tem mais estrelas no perfil',
    'Já viu o ranking hoje?',
    'Você pode dobrar seu dinheiro no blackjack',
    'A roleta é uma boa forma de ganhar e perder dinheiro',
    'Já pescou hoje?',
    'Já minerou hoje?',
    'A loteria é um bom lugar para os sortudos',
    'Já apostou na loteria hoje?',
  ]

  let frase = list[Math.floor(Math.random() * list.length)]

  const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor(`Finanças de ${user.user.tag}`, user.user.displayAvatarURL())
    .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
    .setDescription(frase)
    .addFields(
      {
        name: '💸 Carteira',
        value: `<:NPoints:837666759389347910>${bal}`,
        inline: true
      },
      {
        name: '🏦 Banco',
        value: `<:NPoints:837666759389347910>${bank}`,
        inline: true
      }
    )
  if (vip) {
    embed.setColor('#EFFF00')
    embed.setDescription(`<a:vip:837441854332338227> ${frase}`)
    embed.setFooter(`${user.user.username} é um membro vip. | ${prefix}vip`)
  }
  return message.inlineReply(embed)
}