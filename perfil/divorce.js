const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!db.get(`marry_${message.author.id}`)) { return message.inlineReply("Você não esta em um relacionamento.") }
    if (db.get(`marry_${message.author.id}`) === null) { return message.inlineReply("Você não esta em um relacionamento.") }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let user = message.mentions.members.first()
    if (!args[0]) { return message.inlineReply('Marque o seu par `' + prefix + 'divorce @SeuPar`') }
    if (!user) { return message.inlineReply('Marque o seu par `' + prefix + 'divorce @SeuPar`') }

    let par = user.id === db.get(`marry_${message.author.id}`)
    if (!par) { return message.inlineReply(`${user} não é a pessoa que você está em um relacionamento.`) }

    db.delete(`marry_${db.get(`marry_${message.author.id}`)}`)
    db.delete(`marry_${message.author.id}`)
    return message.inlineReply(`Você se divorciou! Você não está mais se relacionando com ${user}.`)
}