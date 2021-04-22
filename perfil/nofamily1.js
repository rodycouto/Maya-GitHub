const db = require("quick.db")

exports.run = async (client, message, args) => {

    if (!db.get(`family1_${message.author.id}`)) {
        return message.inlineReply("Você não tem um familiar nesta posição...")
    }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    var user = message.mentions.members.first()

    if (!args[0]) {
        return message.inlineReply('Marque o seu familiar `' + prefix + 'nofamily1 @Familiar`')
    }

    if (user.id !== db.get(`family1_${message.author.id}`)) {
        return message.inlineReply(`${user} não é seu familiar na posição 1.`)
    }

    await db.delete(`family1_${db.get(`family1_${message.author.id}`)}`)
    await db.delete(`family1_${message.author.id}`)
    await message.inlineReply(`Você não tem mais parentesco com ${user}.`)
}
