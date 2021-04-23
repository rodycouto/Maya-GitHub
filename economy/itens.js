const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    var itens = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📋 Itens e suas funções')
        .setDescription('Todos os dados de todos os itens aqui em baixo')
        .addField('Itens Únicos', 'Itens únicos são aqueles que você consegue comprar apenas um.\n \n🛡️ `Escudo` Se proteja contra tudo `' + prefix + 'shild`\n🎣 `Vara de Pesca` Use para pescar `' + prefix + 'pescar`\n🔫 `Arma` Use para assaltar e se proteger `' + prefix + 'assaltar @user`\n🪓 `Machado` Use na floresta `' + prefix + 'floresta`\n')
        .addField('Itens Consumiveis', 'Itens consumiveis são aqueles que são gastos a cada vez que é usado\n \n⛏️ `Picareta` Use para minerar `' + prefix + 'cavar`\n🎫 `Ticket` Aposte na loteria `' + prefix + 'buy ticket`\n🎟️ `Fichas` Use na roleta `' + prefix + 'roleta`\n💌 `Cartas` Use para conquistar alguém `' + prefix + 'carta`\n🪱 `Iscas` Use para pescar `' + prefix + 'pescar`\n🥤 `Água` Use para minerar `' + prefix + 'minerar`')
        .addField('Itens Especiais', 'Itens especiais são aqueles que são pegos na sorte nos mini-games\n \n<:Loli:831571527744356422> `Loli` Adquira na pesca `' + prefix + 'pescar`\n🔪 `Faca` Adquira na pesca `' + prefix + 'pescar`\n<:fossil:831859111578173450> `Fossil` Adquira na mineração `' + prefix + 'minerar`\n🦣 `Mamute` Adquira na mineração `' + prefix + 'minerar`\n🐶 `Cachorro` Adquira na floresta `' + prefix + 'floresta`')
        .addField('Perfil', 'Itens de perfil são aqueles que melhora seu perfil\n \n<:starM:832974891635572787> `Estrela` Estrelas no perfil\n🔰 `Título` Mude o título no perfil `' + prefix + 'settitulo`')
        .addField('Itens Coletaveis', 'Itens coletaveis são aqueles que você consegue nos mini-games, você pode vende-los para conseguir mais dinheiro.')
    return message.inlineReply(itens)
}