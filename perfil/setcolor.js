const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let vermelho = db.get(`red_${message.author.id}`)
    let branco = db.get(`white_${message.author.id}`)
    let laranja = db.get(`orange_${message.author.id}`)
    let ciano = db.get(`ciane_${message.author.id}`)
    let rosa = db.get(`pink_${message.author.id}`)
    let amarelo = db.get(`yellow_${message.author.id}`)
    let azul = db.get(`blue_${message.author.id}`)
    let verde = db.get(`green_${message.author.id}`)

    let color = await db.get(`color_${message.author.id}`)
    if (color === null) color = '#6F6C6C'

    const NoArgsEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle('🖌️ Cores Raphy')
        .setDescription('Mude a cor das suas embeds com este comando.')
        .addField('Comando', '`' + prefix + 'setcolor cor`')
        .setFooter(`${prefix}slot vip`)

    if (!args[0]) return message.inlineReply(NoArgsEmbed)
    if (args[1]) return message.inlineReply('<:xis:835943511932665926> Nada além da sua cor, por favor.')

    if (['red', 'vermelho'].includes(args[0].toLowerCase())) {
        if (vermelho === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor vermelha, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, `#B62A2A`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else if (['branco', 'white'].includes(args[0].toLowerCase())) {
        if (branco === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor branca, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, `#FFFFFF`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else if (['laranja', 'orange'].includes(args[0].toLowerCase())) {
        if (laranja === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor laranja, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, `#E7850E`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else if (['ciano', 'ciane'].includes(args[0].toLowerCase())) {
        if (ciano === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor ciano, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, `#00FFFF`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else if (['rosa', 'pink'].includes(args[0].toLowerCase())) {
        if (rosa === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor rosa, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, `#D000FC`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else if (['verde', 'green'].includes(args[0].toLowerCase())) {
        if (verde === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor verde, compre ela na `' + prefix + 'loja`')
        db.set(`color_${message.author.id}`, `#00FC07`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else if (['amarelo', 'yellow'].includes(args[0].toLowerCase())) {
        if (amarelo === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor amarelo, compre ela na `' + prefix + 'loja`')
        db.set(`color_${message.author.id}`, `#E5FC00`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else if (['azul', 'blue'].includes(args[0].toLowerCase())) {
        if (azul === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor azul, compre ela na `' + prefix + 'loja`')
        db.set(`color_${message.author.id}`, `#0005FC`)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')

    } else {
        return message.inlineReply('<:xis:835943511932665926> Esta cor não tem no registro vip.')
    }
}