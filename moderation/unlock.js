exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) { return message.inlineReply(":x: Permissão necessária: Gerenciar Canais") }
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) { return message.inlineReply(':x: Eu preciso da permissão "Gerenciar Canais" para utilizar esta função.') }

    let canal = message.mentions.channels.first() || message.channel

    if (args[1]) { return message.inlineReply(":x: Por favor, mencione apenas o canal que deseja abrir.") }

    canal.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
        SEND_MESSAGES: true,
        ADD_REACTIONS: true
    })
    return message.channel.send(`🔓 ${message.author} abriu o canal ${canal}!`)
}