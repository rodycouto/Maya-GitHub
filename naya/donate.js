const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const mercadopago = 'https://mpago.la/2jYiNDg'
    const starM = '<:starM:832974891635572787>'
    const LinkServidor = 'https://discord.gg/YpFWgJuuUV'

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('<a:MoneyWings:834899137991540797> **Donate Naya System**\n \nObrigada por me ajudar a ficar online!\nAs doações estão limitadas a R$ 1.00.\n\n Se você quiser doar mais, você pode doar 1 realzinho de cada vez, ou entre no [meu servidor](https://discord.gg/YpFWgJuuUV) e fale com meu criador, Rody#4191')
        .addField(`${starM} Adquira o VIP`, `Mande foto do comprovante para o Rody#4191 no [meu servidor](${LinkServidor})`)
        .addField('Doe com Mercado Pago', `[Clique aqui](${mercadopago})`)
    return message.inlineReply(embed)
}