const db = require('quick.db')

exports.run = async (client, message, args) => {

    let vip = db.get(`vip_${message.author.id}`)
    if (!vip) { return message.inlineReply('<:xis:835943511932665926> Este é um comando exclusivo para vips.\nSaiba mais em `' + prefix + 'vip`') }

    return message.inlineReply('Em breve.')
}