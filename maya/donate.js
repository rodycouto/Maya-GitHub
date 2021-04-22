const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var mercadopago = 'https://mpago.la/2jYiNDg'

    var embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('💸 Me ajude a ficar online')
        .setDescription('Obrigada por me ajudar a ficar online!\nAs doações estão limitadas a R$ 1.00.\n\n Se você quiser doar mais, você pode doar 1 realzinho de cada vez, ou entre no [meu servidor](https://discord.gg/YpFWgJuuUV) e fale com meu criador, Rody#4191')
        .addField('Doe com Mercado Pago', `[Clique aqui](${mercadopago})`)
    return message.inlineReply(embed)
}