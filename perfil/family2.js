const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

	let prefix = db.get(`prefix_${message.guild.id}`)
	if (prefix === null) { prefix = "-" }

	let member = message.mentions.users.first()

	if (!args[0]) { return message.inlineReply('Convide alguém para usa familia! Pode até 3 pessoas. `' + prefix + 'family2 @user`') }
	if (args[1]) { return message.inlineReply(`<:xis:835943511932665926> Hey ${message.author}! Nada além do @user, por favor.`) }

	if (!member) { return message.inlineReply('Ei, me fala quem você quer convidar para sua familia.') }
	if (member.id === client.user.id) { return message.inlineReply('É... Não sei se meu pai deixaria eu entrar para sua familia. Acho melhor nós ficarmos apenas na amizade.') }
	if (member.id === message.author.id) { return message.inlineReply('<:xis:835943511932665926> Você quer entrar na sua familia? Não entendi...') }
	if (member.bot) { return message.inlineReply('<:xis:835943511932665926> Você não pode convidar um bot pra sua familia.') }

	if (db.get(`family2_${message.author.id}`)) { return message.inlineReply(`Nesta posição, <@${db.get(`family2_${message.author.id}`)}> é seu familiar.`) }
	if (db.get(`family2_${member.id}`)) { return message.inlineReply(member.username + ' já tem um familiar nesta posição.') }

	if (member.id === client.user.id) { return message.inlineReply('É... Não sei se meu pai deixaria eu entrar para sua familia. Acho melhor nós ficarmos apenas na amizade.') }
	if (member.id === db.get(`marry_${message.author.id}`)) { return message.inlineReply(`<a:Check:836347816036663309> ${member} já está na sua familia`) }
	if (member.id === db.get(`family1_${message.author.id}`)) { return message.inlineReply(`<a:Check:836347816036663309> ${member} já está na sua familia`) }
	if (member.id === db.get(`family2_${message.author.id}`)) { return message.inlineReply(`<a:Check:836347816036663309> ${member} já está na sua familia`) }
	if (member.id === db.get(`family3_${message.author.id}`)) { return message.inlineReply(`<a:Check:836347816036663309> ${member} já está na sua familia`) }

	let family = await db.fetch(`family2_${message.author.id}`)
	let family2 = await db.fetch(`family2_${member.id}`)

	if (family === null && family2 === null) {
		let familyembed = new Discord.MessageEmbed()
			.setColor('BLUE')
			.setTitle('❤️ Novo Pedido de Family')
			.setDescription(`${message.author} está pedindo para ${member} entrar em sua familia.\n \nClique no coração para aceitar o pedido.`)
			.setFooter('40 segundos para aceitar o pedido.')
		message.inlineReply(familyembed).then(msg => {
			msg.react('❤️').catch(err => { return })
			setTimeout(function () { msg.reactions.removeAll() }, 40000)

			let reactions = (reaction, user) =>
				reaction.emoji.name === '❤️' && user.id === member.id

			let coletor = msg.createReactionCollector(reactions)

			coletor.on('collect', cp => {
				msg.delete().catch(err => { return })

				db.set(`family2_${message.author.id}`, member.id)
				db.set(`family2_${member.id}`, message.author.id)

				let familyembed = new Discord.MessageEmbed()
					.setColor('GREEN')
					.setDescription(`<a:Check:836347816036663309> ${member} aceitou o pedido de ${message.author} e agora são uma familia!`)
				setTimeout(function () { message.inlineReply(familyembed) }, 4650)
				return message.channel.send('<a:carregando:836101628083437608> Autenticando mudanças no banco de dados...').then(msg => msg.delete({ timeout: 4500 }).catch(err => { return }))
			})
		})
	} else {
		return message.inlineReply(`<a:attention:836101248183959562> Tem algo errado. Parece que algúm dos dois tem algo no Family 2.`)
	}
}