const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let commands = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📋 Comandos Exclusivos de Adição (OWNER)')
        .setDescription('Com este comando, o meu criador torna possivel a adição de qualquer item da loja para qualquer pessoa.')
        .addField('Comando', '`' + prefix + 'add Item @user Quantidade`')

    if (!args[0]) { return message.channel.send(commands) }

    let rody = message.author.id === ("451619591320371213")
    if (!rody) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito.').then(msg => msg.delete({ timeout: 5000 }))
    }

    let user = message.mentions.members.first()

    if (['banco', 'bank'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add bank @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add bank @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`banco_${user.id}`, amount)
        return message.channel.send(`O dinheiro foi adicionado no banco de ${user}`)
    }

    if (['bancoid', 'bankid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add bancoid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[1]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add bancoid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`banco_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu o valor no banco com sucesso!`)
    }

    if (['iscas', 'isca'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add iscas @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add iscas @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`iscas_${user.id}`, amount)
        return message.channel.send(`${args[2]} iscas foram adicionadas ao slot de ${user}.`)
    }

    if (['iscasid', 'iscaid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add iscasid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[1]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add iscasid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`iscas_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as iscas com sucesso!`)
    }

    if (['comida', 'food'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add comida @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add comida @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`comida_${user.id}`, amount)
        return message.channel.send(`${args[2]} comidas foram adicionadas ao slot de ${user}.`)
    }

    if (['comidaid', 'foodid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add comidaid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[1]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add comidaid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`comida_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as comidas com sucesso!`)
    }

    if (['fichas', 'ficha'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add fichas @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add fichas @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`fichas_${user.id}`, amount)
        return message.channel.send(`${args[2]} fichas foram adicionadas ao slot de ${user}.`)
    }

    if (['fichasid', 'fichaid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add fichasid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[1]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add fichasid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`fichas_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as fichas com sucesso!`)
    }

    if (['np', 'money'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add money @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add money @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`mpoints_${user.id}`, amount)
        return message.channel.send(`Dinheiro adicionado a conta de ${user}.`)
    }

    if (['npid', 'moneyid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add moneyid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[1]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add moneyid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`mpoints_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu o dinheiro com sucesso!`)
    }

    if (['peixe', 'peixes', 'fish'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add peixes @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add peixes @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`peixes_${user.id}`, amount)
        return message.channel.send(`${args[2]} peixes foram adicionados ao slot de ${user}.`)
    }

    if (['peixeid', 'peixesid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add peixesid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[1]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add peixesid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`peixes_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu os peixes com sucesso!`)
    }

    if (['rp', 'reputação'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add rp @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add rp @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`rp_${user.id}`, amount)
        return message.channel.send(`${args[2]} reputações foram adicionadas ao perfil de ${user}.`)
    }

    if (['rpid', 'reputaçãoid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add rpid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add rpid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`rp_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as reputações com sucesso!`)
    }

    if (['xp'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add xp @user Valor`') }
        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add xp @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`xp_${user.id}`, amount)
        return message.channel.send(`Experiência adicionada ao perfil de ${user}.`)
    }

    if (['xpid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add xpid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add xpid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`xp_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as experiências com sucesso!`)
    }

    if (['agua', 'água', 'water'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add água @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add água @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`agua_${user.id}`, amount)
        return message.channel.send(`${args[2]} águas foram adicionadas ao slot de ${user}.`)
    }

    if (['aguaid', 'waterid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add aguaid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add aguaid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`agua_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as águas com sucesso!`)
    }

    if (['minerio', 'minério'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add minério @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add minério @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`minerio_${user.id}`, amount)
        return message.channel.send(`${args[2]} minérios foram adicionadas ao slot de ${user}.`)
    }

    if (['minerioid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add minerioid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add minerioid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`minerio_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu os minérios com sucesso!`)
    }

    if (['diamantes', 'diamante', 'diamond'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add diamantes @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add diamantes @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`diamond_${user.id}`, amount)
        return message.channel.send(`${args[2]} diamantes foram adicionadas ao slot de ${user}.`)
    }

    if (['diamantesid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add diamantesid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add diamantesid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`diamond_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu os minérios com sucesso!`)
    }

    if (['ossos', 'bone', 'osso'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add ossos @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add ossos @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`ossos_${user.id}`, amount)
        return message.channel.send(`${args[2]} ossos foram adicionadas ao slot de ${user}.`)
    }

    if (['ossosid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add ossosid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add ossosid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`ossos_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu os ossos com sucesso!`)
    }

    if (['maça', 'apple', 'maças'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add maça @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add maça @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`apple_${user.id}`, amount)
        return message.channel.send(`${args[2]} maças foram adicionadas ao slot de ${user}.`)
    }

    if (['maçaid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add maçaid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add maçaid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`apple_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as maças com sucesso!`)
    }

    if (['madeira', 'wood', 'madeiras'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add madeiras @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add madeiras @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`madeira_${user.id}`, amount)
        return message.channel.send(`${args[2]} madeiras foram adicionadas ao slot de ${user}.`)
    }

    if (['madeiraid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add madeiraid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[1]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add madeiraid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`madeira_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu as madeiras com sucesso!`)
    }

    if (['commandstotal', 'commands'].includes(args[0])) {

        let amount = args[1]
        if (!amount) { return message.channel.send('`' + prefix + 'add commands Valor`') }
        if (isNaN(amount)) { return message.channel.send(`**${args[1]}** não é um número.`) }

        db.add('CommandCountGeneral', amount)
        return message.channel.send(`Feito!`)
    }

    if (['commandsdaily'].includes(args[0])) {

        let amount = args[1]
        if (!amount) { return message.channel.send('`' + prefix + 'add commandsdaily Valor`') }
        if (isNaN(amount)) { return message.channel.send(`**${args[1]}** não é um número.`) }

        db.add('CommandCountDaily', amount)
        return message.channel.send(`Feito!`)
    }

    if (['camarão', 'camarao'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add camarão @user Valor`') }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add camarão @user Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`camarao_${user.id}`, amount)
        return message.channel.send(`${args[2]} camarões foram adicionadas ao slot de ${user}.`)
    }

    if (['camaraoid', 'caramarãoid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add camaraoid ID Valor`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        let amount = args[2]
        if (!amount) { return message.channel.send('`' + prefix + 'add camaraoid ID Valor`') }
        if (isNaN(amount)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`camarao_${id}`, amount)
        return message.channel.send(`<@${id}> *(${id})* recebeu os camarões com sucesso!`)
    }

    if (['blacklist'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add blacklist @user`') }

        db.add(`blacklist_${user.id}`, user.id)
        return message.channel.send(`${user} foi adicionado a blacklist com sucesso!`)
    }

    if (['blacklistid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add blacklistid ID`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`blacklist_${id}`, id)
        return message.channel.send(`<@${id}> foi adicionado a blacklist com sucesso!`)
    }

    if (['whitelistid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add whitelistid ID`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`whitelist_${id}`, id)
        return message.channel.send(`<@${id}> foi adicionado a whitelist com sucesso!`)
    }

    if (['nochat', 'noglobal', 'ban', 'block', 'banlist', 'nogloabalchat', 'banchat'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add banchat ID`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`noglobalchat_${id}`, id)
        return message.channel.send(`<@${id}> foi adicionado ao No Global Chat com sucesso e não consegue mais falar no chat global!`)
    }

    if (['moderadorglobal', 'modglobal', 'modchat', 'modchatglobal'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add modglobal @user`') }

        db.add(`moderadoreschatglobal_${user.id}`, user.id)
        return message.channel.send(`${user} foi autenticado como Moderador do Chat Global!`)
    }

    if (['vip'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add vip @user`') }

        db.add(`vip_${user.id}`, user.id)
        return message.channel.send(`${user} foi adicionado a lista vip com sucesso!`)
    }

    if (['vipid'].includes(args[0])) {

        let id = args[1]
        if (!id) { return message.inlineReply('`' + prefix + 'add vipid ID`') }
        if (id.length < 17) { return message.channel.send("Isso não é um ID") }
        if (isNaN(id)) { return message.channel.send(`<:xis:835943511932665926> **${args[2]}** não é um número.`) }

        db.add(`vip_${id}`, id)
        return message.channel.send(`<@${id}> foi adicionado a list vip com sucesso!`)
    }

    if (['modserver', 'servermod', 'serverstaff', 'staffserver', 'serveradm'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add staffserver @user`') }

        db.add(`modserver_${user.id}`, user.id)
        return message.channel.send(`${user} foi adicionado a lista moderadores do servidor!`)
    }

    if (['whitelist'].includes(args[0])) {

        if (!user) { return message.channel.send('`' + prefix + 'add whitelist @user`') }

        db.add(`whitelist_${user.id}`, user.id)
        return message.channel.send(`${user} foi adicionado a whitelist com sucesso!`)
    }

    if (['loteria', 'lotery'].includes(args[0])) {

        let valor = args[1]
        if (!valor) { return message.channel.send('`' + prefix + 'add lotery Valor`') }
        if (args[2]) { return message.channel.send('Sem args[2] por favor') }
        if (isNaN(valor)) { return message.channel.send(`**${valor}** não é um número.`) }

        db.add(`loteria`, valor)
        return message.channel.send(`${valor}<:RPoints:837666759389347910>RPoints foram adicionados a loteria com sucesso!`)
    }

    if (['pig', 'porco', 'porquinho'].includes(args[0])) {

        let valor = args[1]
        if (!valor) { return message.channel.send('`' + prefix + 'add pig Valor`') }
        if (args[2]) { return message.channel.send('Sem args[2] por favor') }
        if (isNaN(valor)) { return message.channel.send(`**${valor}** não é um número.`) }

        db.add('PorquinhoMoney', valor)
        return message.channel.send(`${valor}<:RPoints:837666759389347910>RPoints foram adicionados ao pig com sucesso!`)
    }

    return message.channel.send('Comando não encontrado no registro.')
}