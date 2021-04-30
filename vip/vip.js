const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const VipEmoji = '<a:vip:837441854332338227>'
    const link1Real = 'https://mpago.la/2jYiNDg'
    const LinkServidor = 'https://discord.gg/YpFWgJuuUV'

    const VipEmbed = new Discord.MessageEmbed()
        .setColor('#FDFF00')
        .setTitle(`${VipEmoji} VIP System Naya`)
        .setDescription(`*Antes de tudo, fique ciente de que o VIP System não dá previlégios ou vantagens a ninguém. O VIP System é uma forma de agradecimento e libera funções que não dão vantagens, apenas é legal tê-las.*`)
        .addField(`❓ O que eu ganho com o VIP?`, 'Os comandos VIPs estão sendo produzidos um a um. `' + prefix + 'esmola` e a `-buy estrela5` são dois deles.')
        .addField(`❓ Como obter o VIP?`, `Simples! Você pode fazer uma doação de [R$1,00](${link1Real}) no Mercado Pago ou fazer um PIX para o meu PicPay, basta digitar ` + '`' + prefix + 'pix`.\n' + '`' + prefix + 'donate` para mais informações')
        .addField(`❓ Como comprovar o pagamento?`, `Simples! Entre no [meu servidor](${LinkServidor}) e fale com o **Rody#4191**, enviando um print do **comprovante** e pronto, você tem seu VIP.`)
        .addField('❓ Tem mais perguntas?', `Entre no [meu servidor](${LinkServidor}) e tire suas dúvidas`)
    return message.inlineReply(VipEmbed)
}