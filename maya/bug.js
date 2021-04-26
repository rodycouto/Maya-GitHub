const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    var canal = client.channels.cache.get('836260631593746493')

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let mensagem = args.join(" ")

    var noargs = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('<a:engrenagem:836101651331940383> Reporte bugs/erros')
        .setDescription('Com este comando, você reporta bugs/erros direto pro meu criador. Assim tudo é resolvido de maneira rápida!')
        .addField('Comando exemplo', '`' + prefix + 'bug Quando eu uso *comando x* tal bug acontece`')
        .setFooter('Limite de 200 caracteres. | Prints são válidos.')

    if (!args[0]) { return message.inlineReply(noargs) }

    var newideia = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📢 Nova Bug Recebido')
        .addField('Enviado por', message.author, true)
        .addField('Servidor', message.guild.name, true)
        .addField('Relatório', mensagem)

    if (mensagem.length < 10) { return message.inlineReply('<:xis:835943511932665926> Por favor, escreva mais de 10 caracteres.') }
    if (mensagem.length > 200) { return message.inlineReply('<:xis:835943511932665926> Por favor, não ultrapasse mais de 200 caracteres.') }

    canal.send(newideia).catch(err => { return message.channel.send(`<:xis:835943511932665926> Ocorreu um erro! Use **${prefix}help** e entre no meu servidor, por favor.\n \nErro: \n${err}`) })
    setTimeout(function () { message.inlineReply('<a:Check:836347816036663309> Seu report foi enviado com sucesso! Entre no servidor para ganhar uma recompensa.') }, 5000)
    return message.inlineReply('<a:carregando:836101628083437608> Enviando mensagem ao Servidor Central...').then(msg => msg.delete({ timeout: 4850 }))
}