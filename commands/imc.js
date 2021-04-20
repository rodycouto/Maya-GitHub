const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    var weight = args[0]
    var height = args[1]

    var imcError = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle('📝 Indice de Massa Corporal - BETA')
        .setDescription('`' + prefix + 'imc Peso Altura`' + '\n \n**Atenção**\nPeso em **Kilogramas** e Altura em **Centimentros**\n \n')
        .addFields(
            {
                name: 'Exemplo',
                value: `${prefix}imc 70 65`
            },
            {
                name: 'Exemplo 2',
                value: `${prefix}imc 78.8 185`
            }
        )
        .setFooter('Alguns resultados podem dar errado por não levar em consideração a idade.')

    if (!args[0] || !args[1]) {
        return message.inlineReply(imcError)
    }

    if (isNaN(args[0]) || isNaN(args[1])) {
        return message.inlineReply(imcError)
    }

    var imc = (weight / ((height * height) / 10000)).toFixed(2)

    if (args[0] && args[1]) {
        let category;
        if (imc < 18.5) category = "Abaixo do peso"
        if (imc > 24.9) category = "Acima do peso"
        if (imc > 30) category = "Obesidade"
        if (imc < 24.9 && imc > 18.5) category = "Padrão"

        var embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(`📉 Índice de Massa Corporal`)
            .addField('Peso', weight)
            .addField('Altura', height)
            .addField('IMC', imc)
            .addField('Categoria', category)

        return message.inlineReply(embed)
    } else {
        return message.inlineReply('Algo deu errado, por favor, verifique os dados informados e tente novamente.')
    }
}