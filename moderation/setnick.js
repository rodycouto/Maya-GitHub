const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) prefix = "-"

  const Formato = '<:xis:835943511932665926> Siga o formato correto! `' + prefix + 'setnick @user NovoNome`'

  const NoArgsEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('🛠️ Altere o Nickname')
    .setDescription('Com este comando você pode alterar o seu nickname.')
    .addField('Comando Pessoal', '`' + prefix + 'setnick SeuNovoNome`')
    .addField('Comando Administrativo', '`' + prefix + 'setnick @user NovoNome`')

  if (!args[0]) { return message.inlineReply(NoArgsEmbed) }

  let user = message.mentions.users.first()
  let role = message.mentions.roles.first()

  if (user) {

    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) { return message.inlineReply('<:xis:835943511932665926> Eu preciso da permissão "Gerenciar Nicknames (Nomes/Apelidos)" para utilizar esta função.') }
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) { return message.inlineReply('<:xis:835943511932665926> Permissão Necessária: Gerenciar Nicknames (Nomes/Apelidos)') }

    let nick = args.slice(1).join(" ")
    if (!nick) { return message.inlineReply(Formato) }
    if (nick.length > 32) { return message.inlineReply('<:xis:835943511932665926> O tamanho máximo do nome é de **32 caracteres**.') }

    const linksupport = 'https://discord.gg/YpFWgJuuUV'
    const member = message.guild.members.cache.get(user.id)
    member.setNickname(nick).catch(err => { return })
    message.channel.send('<a:Check:836347816036663309> Seu nickname foi alterado com sucesso!')

    const sucess = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setDescription(`<a:Check:836347816036663309> O nickname de ${user.tag} foi alterado para ${nick}`)
    return message.inlineReply(sucess)

  } else {

    if (!message.member.hasPermission("CHANGE_NICKNAME")) {
      return message.inlineReply('<:xis:835943511932665926> Você não tem a permissão "Alterar Apelido".')

    } else {

      const nick = args.join(" ")
      if (nick.length > 32) { return message.inlineReply('<:xis:835943511932665926> O tamanho máximo do nome é de **32 caracteres**.') }

      const member = message.guild.members.cache.get(message.author.id)
      if (message.author.id === message.guild.owner.id) return message.inlineReply('Não posso alterar o nome do dono do servidor.')

      member.setNickname(nick).catch(err => { return message.channel.send(`**ERRO:** ${err}`) }).then(msg => msg.channel.send('<a:Check:836347816036663309> Seu nickname foi alterado com sucesso!'))
    }
  }
}