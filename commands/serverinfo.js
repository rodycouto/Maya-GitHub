const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    let region
    switch (message.guild.region) {
        case "europe":
            region = '🇪🇺 Europe'
            break
        case "us-east":
            region = '🇺🇸 us-east'
            break
        case "us-west":
            region = '🇺🇸 us-west'
            break
        case "us-south":
            region = '🇺🇸 us-south'
            break
        case "us-central":
            region = '🇺🇸 us-central'
            break
        case "brazil":
            region = ':flag_br: Brazil'
            break
    }

    let embed = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor('#f3f3f3')
        .setTitle(`${message.guild.name}`)
        .addFields(
            {
                name: "Dono/a: ",
                value: message.guild.owner.user.tag
            },
            {
                name: "Membros ",
                value: `${message.guild.memberCount} Membros`
            },
            {
                name: "Membros Online: ",
                value: `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size}`
            },
            {
                name: "Bots: ",
                value: `${message.guild.members.cache.filter(m => m.user.bot).size} bots`
            },
            {
                name: "Data de Criação:\nMM/DD/AAAA",
                value: message.guild.createdAt.toLocaleDateString()
            },
            {
                name: "Cargos: ",
                value: `${message.guild.roles.cache.size} Cargos`
            },
            {
                name: `🗺 Região: `,
                value: `${region}`
            },
            {
                name: `Verificado: `,
                value: message.guild.verified ? 'Sim' : 'Não'
            },
            {
                name: 'Boosters: ',
                value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} Boosters` : `Sem Boosters`
            },
            {
                name: "Emojis: ",
                value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size} emojis!` : 'Não há emojis'
            }
        )
    await message.inlineReply(embed)
}