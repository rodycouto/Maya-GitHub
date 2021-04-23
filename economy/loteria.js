const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    var prize = db.get('loteria')
    if (prize === null) { prize = '0' }
    var embed = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('LOTERIA MAYA')
        .setDescription(`<:02zero:832667759800352838> Seja bem vindo a Loteria Maya!\nSe você quiser participar, compre tickets na loja.`)
        .addField('Valor atual', `${prize}<:StarPoint:766794021128765469>MPoints`)
    return message.inlineReply('Loteria também será igual a vida real, apenas espere um pouco.', embed)
}