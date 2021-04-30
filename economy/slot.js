const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let user = message.mentions.members.first() || message.member

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    let title = await db.get(`title_${user.id}`)
    if (title) (title = "🔰 Título")
    if (title === null) { title = "" }
    if (!db.get(`title_${user.id}`)) { title = "" }

    let peixes = await db.get(`peixes_${user.id}`)
    if (peixes === null) { peixes = "0" }
    if (!db.get(`peixes_${user.id}`)) { peixes = "0" }

    let iscas = await db.get(`iscas_${user.id}`)
    if (iscas === null) { iscas = "0" }
    if (!db.get(`iscas_${user.id}`)) { iscas = "0" }

    let comida = await db.get(`comida_${user.id}`)
    if (comida === null) { comida = "0" }
    if (!db.get(`comida_${user.id}`)) { comida = "0" }

    let cartas = await db.get(`cartas_${user.id}`)
    if (cartas) { cartas = `\n💌 Cartas: ${db.get(`cartas_${user.id}`)}` }
    if (cartas === null) { cartas = "" }
    if (!db.get(`cartas_${user.id}`)) { cartas = "" }

    let agua = await db.get(`agua_${user.id}`)
    if (agua === null) { agua = "0" }
    if (!db.get(`agua_${user.id}`)) { agua = "0" }

    let fichas = await db.get(`fichas_${user.id}`)
    if (fichas === null) { fichas = "0" }
    if (!db.get(`fichas_${user.id}`)) { fichas = "0" }

    let camarao = await db.get(`camarao_${user.id}`)
    if (camarao === null) { camarao = "0" }
    if (!db.get(`camarao_${user.id}`)) { camarao = "0" }

    let diamond = await db.get(`diamond_${user.id}`)
    if (diamond === null) { diamond = "0" }
    if (!db.get(`diamond_${user.id}`)) { diamond = "0" }

    let minerio = await db.get(`minerio_${user.id}`)
    if (minerio === null) { minerio = "0" }
    if (!db.get(`minerio_${user.id}`)) { minerio = "0" }

    let ossos = await db.get(`ossos_${user.id}`)
    if (ossos === null) { ossos = "0" }
    if (!db.get(`ossos_${user.id}`)) { ossos = "0" }

    let apple = await db.get(`apple_${user.id}`)
    if (apple === null) { apple = "0" }
    if (!db.get(`apple_${user.id}`)) { apple = "0" }

    let rosas = await db.get(`rosas_${user.id}`)
    if (rosas === null) { rosas = "0" }
    if (!db.get(`rosas_${user.id}`)) { rosas = "0" }

    let arma = await db.get(`arma_${user.id}`)
    if (arma) { arma = "\n🔫 Arma" }
    if (arma === null) { arma = "" }
    if (!db.get(`arma_${user.id}`)) { arma = "" }

    let xusos = (db.get(`offpicareta_${user.id}`) + 1)
    let picareta = await db.get(`picareta_${user.id}`)
    if (picareta) { picareta = `\n⛏️ Picareta | Uso restante: ${xusos}` }
    if (picareta === null) { picareta = "" }
    if (!db.get(`picareta_${user.id}`)) { picareta = "" }

    let machado = await db.get(`machado_${user.id}`)
    if (machado) { machado = "\n🪓 Machado" }
    if (machado === null) { machado = "" }
    if (!db.get(`machado_${user.id}`)) { machado = "" }

    let remedio = await db.get(`remedio_${user.id}`)
    if (remedio) { remedio = "\n💊 Remédio do Velho Welter" }
    if (remedio === null) { remedio = "" }
    if (!db.get(`remedio_${user.id}`)) { remedio = "" }

    let vara = await db.get(`vara_${user.id}`)
    if (vara) { vara = "\n🎣 Vara de pesca" }
    if (vara === null) { vara = "" }
    if (!db.get(`vara_${user.id}`)) { vara = "" }

    let faca = await db.get(`faca_${user.id}`)
    if (faca) { faca = "\n🔪 Faca" }
    if (faca === null) { faca = "" }
    if (!db.get(`faca_${user.id}`)) { faca = "" }

    let loli = await db.get(`loli_${user.id}`)
    if (loli) { loli = "\n<:Loli:831571527744356422> Loli" }
    if (loli === null) { loli = "" }
    if (!db.get(`loli_${user.id}`)) { loli = "" }

    let cachorro = await db.get(`cachorro_${user.id}`)
    if (cachorro) { cachorro = "\n🐶 Cachorro Brown" }
    if (cachorro === null) { cachorro = "" }
    if (!db.get(`cachorro_${user.id}`)) { cachorro = "" }

    let dogname = await `\n<:doguinho:836393852889202698> ${db.get(`dogname_${message.author.id}`)}`
    if (dogname === "\n<:doguinho:836393852889202698> ON") { dogname = "\n<:doguinho:836393852889202698> Doguinho sem nome" }
    if (dogname === null) { dogname = "" }
    if (!db.get(`dogname_${message.author.id}`)) { dogname = "" }

    let medalha = await db.get(`medalha_${user.id}`)

    let bola = await db.get(`bola_${user.id}`)
    if (bola) { bola = "\n🥎 Bola" }
    if (bola === null) { bola = "" }
    if (!db.get(`bola_${user.id}`)) { bola = "" }

    let fossil = await db.get(`fossil_${user.id}`)
    if (fossil) { fossil = "\n<:fossil:831859111578173450> Fossil" }
    if (fossil === null) { fossil = "" }
    if (!db.get(`fossil_${user.id}`)) { fossil = "" }

    let mamute = await db.get(`mamute_${user.id}`)
    if (mamute) { mamute = "\n🦣 Mamute" }
    if (mamute === null) { mamute = "" }
    if (!db.get(`mamute_${user.id}`)) { mamute = "" }

    let nada = !arma && !picareta && !vara && !machado && !cartas
    if (nada) { nada = 'Não há nada aqui' }
    if (!nada) { nada = '' }

    let nada2 = !title && !faca && !loli && !fossil && !mamute && !bola && !cachorro && !remedio
    if (nada2) { nada2 = 'Não há nada aqui' }
    if (!nada2) { nada2 = '' }

    let Embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`📖 **Inventário de ${user.user.username}**`)
        .addField('Itens Comprados', `${nada}${arma}${picareta}${vara}${machado}${cartas}`)
        .setFooter(`${prefix}buy | ${prefix}itens | ${prefix}vender | ${prefix}shop | ${prefix}doar`)
    if (!medalha) { Embed.addField('Itens Obtidos', `${nada2}${title}${faca}${loli}${fossil}${mamute}${bola}${cachorro}${remedio}`) }
    if (medalha) { Embed.addField('Itens Obtidos', `${nada2}${title}${faca}${loli}${fossil}${mamute}\n🏅 Medalha Cammum${dogname}`) }
    Embed.addField('Mantimentos', `🐟 ${peixes} Peixes\n🥘 ${comida} Comidas\n🪱 ${iscas} Iscas\n🥤 ${agua} Água\n🎟️ ${fichas} Fichas\n🍤 ${camarao} Camarões\n🦴 ${ossos} Ossos\n🌹 ${rosas} Rosas\n🍎 ${apple} Maça\n🪨 ${minerio} Minérios\n💎 ${diamond} Diamantes`)
    await message.inlineReply(Embed)
}