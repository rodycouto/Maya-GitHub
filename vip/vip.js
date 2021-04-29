const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const starM = '<:starM:832974891635572787>'
    const link1Real = 'https://mpago.la/2jYiNDg'
    const LinkServidor = 'https://discord.gg/YpFWgJuuUV'

    const VipEmbed = new Discord.MessageEmbed()
        .setColor('#FDFF00')
        .setTitle(`${starM} VIP System Naya`)
        .setDescription(`*Antes de tudo, fique ciente de que o VIP System não dá previlégios ou vantagens a ninguém. O VIP System é uma forma de agradecimento e libera funções que não dão vantagens, apenas é legal tê-las.*`)
        .addField(`❓ Como obter o VIP?`, `Simples, faça uma doação de [R$1,00](${link1Real}) ou dê uma ideia sensacional.\n` + '`' + prefix + 'donate` para mais informações')
        .addField(`❓ O que eu ganho com o VIP?`, 'Os comandos VIPs estão sendo produzidos um a um. `' + prefix + 'esmola` e a Estrela 5 são muito bons.')
        .addField('❓ Tem mais perguntas?', `Entre no [meu servidor](${LinkServidor}) e tire suas dúvidas`)
    return message.inlineReply(VipEmbed)
}