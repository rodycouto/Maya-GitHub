const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (message.author.id !== "451619591320371213") {
        message.delete().catch(err => { return })
        return message.inlineReply('⚠️ Este comando é um restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('💰 Ticket Lotery Winner')
        .addField(`🎫 Ticket', '3514 - :id: A3F6-5C8S-84PF-PTDU\nALGUÉM comprou ||Isso é secredo|| Tickets`)
        .addField('🌐 Servidor', 'Servidor da Maya - :id: 830912111902982176')
        .addField('👤 Usuário', 'Makolpedro#8508 - :id: 351903530161799178')
        .addField('💸 Prêmio', `${db.get('loteria')} <:StarPoint:766794021128765469>MPoints`)
        .addField('Total de Tickets Comprados', '1.128.758')

    return message.channel.send('<a:loading:834782920287846430> Embaralhando os tickets...').then(msg => msg.delete({ timeout: 7000 })).then(msg => msg.channel.send('<a:loading:834782920287846430> Obtendo um ticket aleatório...')).then(msg => msg.delete({ timeout: 8000 })).then(msg => msg.channel.send(embed)).then(msg => msg.channel.send('<a:loading:834782920287846430> Deletando todos os tickets...')).then(msg => msg.delete({ timeout: 5000 }))
}