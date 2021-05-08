const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  const linkgithub = 'https://github.com/rodycouto/RaphyCommands/blob/main/README.md'
  const linksupport = 'https://discord.gg/YpFWgJuuUV'
  const linkservidor = 'https://discord.gg/YpFWgJuuUV'
  const mercadopago = 'https://mpago.la/2jYiNDg'
  const invitebot = 'https://discord.com/api/oauth2/authorize?client_id=837147659898191902&permissions=8&scope=bot'

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) { prefix = "-" }

  if (!args[0]) {
    const newhelp = new Discord.MessageEmbed()
      .setColor('#CD853F')
      .setTitle('⭐ Centralzinha de Ajuda da Raphy ⭐')
      .setDescription('Use `' + `${prefix}help categoria` + '` para as pastas de comandos')
      .addField('Acesso rápido', `<a:engrenagem:836101651331940383> [Lista de Comandos](${linkgithub})\n<a:support:836302810495713301> [Suporte](${linksupport})\n<a:pin:836305960385249280> [Meu servidor](${linkservidor})\n<a:setinha:836308178190729256> [Me adicione](${invitebot})`)
      .setFooter(`${prefix}gif | ${prefix}ideiaraphy | ${prefix}bug | ${prefix}donate | ${prefix}globalchat`)
    return message.inlineReply(`Heey! Tudo bem ${message.author}?`, newhelp)
  }

  if (['categoria', 'categorias'].includes(args[0].toLowerCase())) {
    const catego = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📑 Todos os comandos sob categorias')
      .setDescription('❓ **O que são categorias?**\nCategorias são como caixas, dentro de cada caixa tem os comandos que a ela pertence.\n \nDentro de cada categoria, tem comandos disponiveis. Começe a explorar!')
      .addField('• Categorias Disponiveis (17)', '`' + prefix + 'comando afksystem`\n' + '`' + prefix + 'comando animes`\n' + '`' + prefix + 'comando commands`\n' + '`' + prefix + 'comando discordjs`\n' + '`' + prefix + 'comando economy`\n' + '`' + prefix + 'comando games`\n' + '`' + prefix + 'comando interação`\n' + '`' + prefix + 'comando levelsystem`\n' + '`' + prefix + 'comando raphy`\n' + '`' + prefix + 'comando moderation`\n' + '`' + prefix + 'comando owner`\n' + '`' + prefix + 'comando perfil`\n' + '`' + prefix + 'comando personagens`\n' + '`' + prefix + 'comando quiz`\n' + '`' + prefix + 'comando random`\n' + '`' + prefix + 'comando reações`\n' + `:tools: [Lista de Comandos](${linkgithub})`)
    return message.inlineReply(catego)
  }

  if (['globalchat', 'chat', 'chatglobal'].includes(args[0].toLowerCase())) {
    const GlobalChatEmbed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('💬 Raphy Global Chat System')
      .setDescription('Fale com os outros servidores em um único chat. Isso é um experiência única!')
      .addField('Fale no chat', '`' + prefix + 'chat Sua mensagem em diante`')
      .addField('Crie o canal', '`' + prefix + 'channel create text NomeDoCanal`')
      .addField('Valide o canal', '`' + prefix + 'setglobalchat #canal`')
      .addField('Desative o Canal', '`' + prefix + 'setglobalchat off` ou `' + prefix + 'deletechannel #canal`')
    return message.inlineReply(GlobalChatEmbed)
  }

  if (['afksystem', 'afk'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📢 Raphy - AFK Global System')
      .setDescription('Com o AFK System, eu avisarei as pessoas que te marcarem que você está offline.\nVocê pode deixar uma mensagem pra elas se quiser.')
      .addFields(
        {
          name: '📴 Ative no Servidor',
          value: '`' + prefix + 'afk Almoçando`\nAvisarei a todos que você está almoçando.'
        },
        {
          name: '🌎 Ative no Global',
          value: '`' + prefix + 'afk all` ou ' + '`' + prefix + 'afk global`\n' + 'Avisarei em todos os servidores que você está offline.\n \nExemplo: ' + '`' + prefix + 'afk global Estou almoçando, já volto.`'
        }
      )
      .setFooter('O AFK System será desativado quando você mandar uma mensagem.')
    return message.inlineReply(`Se houver algúm bug, use **${prefix}support**`, embed)
  }

  if (['anime', 'animes'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📺 Anime Place')
      .setDescription('Os comandos de animes da Raphy ainda está sendo produzidos.')
      .addField('• Comandos Online:', '`' + prefix + 'ind` Indicações de Animes\n' + '`' + prefix + 'sao` Meu anime favorito\n' + '`' + prefix + 'kimetsu` no yaibaaaaa\n' + '`' + prefix + 'senpai` Meu senpai' + `\n:tools: [Lista de Comandos](${linkgithub})`, true)
      .addField('• Categoria Recomendada', '`' + prefix + 'comando personagens`', true)
      .addField('• Mande Gifs para os comandos', '`' + prefix + 'gif`', true)
    return message.inlineReply(embed)
  }

  if (['comandos', 'commands'].includes(args[0].toLowerCase())) {
    const embed1 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(' Comandos livres para todos usarem')
      .setDescription('Comandos presentes nesta lista, é disponivel para qualquer um usa-los')
      .addField('• Comando Online: (21)', '<opicional> [obrigatório]\n \n' + '`' + prefix + 'avatar <@user>` Veja o avatar de alguém\n' + '`' + prefix + 'cal` Calculadora - BETA\n' + '`' + prefix + 'clima [Sua Cidade]` Veja o clima\n' + '`' + prefix + 'covid <Sua Cidade>` Status da Covid-19\n' + '`' + prefix + 'dono/owner` Dono do servidor\n' + '`' + prefix + 'id <@user>` Mostra o ID\n' + '`' + prefix + 'ideia/sugestao [sua ideia em diante]` Coloque suas ideias para votação\n' + '`' + prefix + 'imc [peso] [altura]` Indice de Massa Corporal - BETA\n' + '`' + prefix + 'invites` Convites do Servidor\n' + '`' + prefix + 'j/jokenpo <pedra> <papel> <tesoura>` Jokenpo\n' + '`' + prefix + 'report <@user> [Motivo e blá blá]` Denúncie os meliantes para os adms\n' + '`' + prefix + 'serverinfo` Informações do Servidor\n' + '`' + prefix + 'spotify <@user>` Veja que música alguém está escutando\n' + '`' + prefix + 't/translate <pt/en/fr> [Palavra/Texto]`\n' + '`' + prefix + 'user <@user>` Nome de usuário\n' + '`' + prefix + 'userinfo <@user>` Informações sobre alguém\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed1)
  }

  if (['github', 'discordjs'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('👨‍💻 Raphy GitHub - BETA COMMAND')
      .setDescription('Aqui você pode pegar os código que eu uso, siiim, eu sou open source e todos podem ajudar e copiar se quiser')
      .addField('• Comandos Online:', '`' + prefix + 'github` GitHub\n' + '`' + prefix + 'commandfile` Pegar comandos em pastas pela Index\n' + '`' + prefix + 'levelsystem` Sistema de Level\n' + '`' + prefix + 'random` resultado aleatório\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['games', 'jogos', 'game', 'jogo'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('🎮 Link para acesso rápido a jogos')
      .setDescription('Aqui você pode pegar os links de jogos e ir direto pra eles sem ter que ficar pesquisando no Google')
      .addField('• Comandos Online:', '`' + prefix + 'amongus`\n' + '`' + prefix + 'brawl`\n' + '`' + prefix + 'brawlhalla`\n' + '`' + prefix + 'brawlstars`\n' + '`' + prefix + 'clash/clashroyale`\n' + '`' + prefix + 'counterstrike/cs`\n' + '`' + prefix + 'ddtank`\n' + '`' + prefix + 'freefire/ff`\n' + '`' + prefix + 'gartic`\n' + '`' + prefix + 'genshinimpact/genshin`\n' + '`' + prefix + 'gta`\n' + '`' + prefix + 'habbo`\n' + '`' + prefix + 'leagueoflegends/lol`\n' + '`' + prefix + 'mario`\n' + '`' + prefix + 'mobilelegends/mbl`\n' + '`' + prefix + 'minecraft/mine`\n' + '`' + prefix + 'paladins`\n' + '`' + prefix + 'rocketleague`\n' + '`' + prefix + 'summoners`\n' + '`' + prefix + 'sumwar`\n' + '`' + prefix + 'transformice/tfm`\n' + '`' + prefix + 'uno`\n' + '`' + prefix + 'valorant`\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['h', 'help', 'ajuda', 'comandos'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('❓ Ué? Help no Help?')
      .setDescription('Bom, vou deixar comandos de ajuda aqui')
      .addField('• Comandos Online:', '`' + prefix + 'comando`\n' + '`' + prefix + 'comando`\n' + '`' + prefix + 'comando`\n' + '`' + prefix + 'thanks`\n' + '`' + prefix + 'bjhelp/blackjackhelp`')
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['interacao', 'interação', 'interation'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('💞 Comandos Interativos')
      .addField('• Opss:', `Não cabe todos os comandos aqui, então você precisa acessar a [lista de comandos](${linkgithub}).`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['level', 'nivel', 'xp', 'levelsystem'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('🌐 Level Global System')
      .setDescription(`O meu sistema de level é global. Se você não sabe o que quer dizer, você pode [ver aqui](${linkgithub}) sobre do que eu estou falando`)
      .addField('• Comandos Online:', '`' + prefix + 'level`\n' + '`' + prefix + 'daily`\n' + '`' + prefix + 'rank xp`\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['raphy'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('<:starM:832974891635572787> Meus comandos lindinhos')
      .setDescription(`Aqui tem alguns comandos ligados a mim`)
      .addField('• Comandos Online', '`' + prefix + 'botinfo` Informações sobre mim\n' + '`' + prefix + 'carta <@user> [mensagem de amor]` Mande cartas romanticas\n' + '`' + prefix + 'inv/invite/convidar` Me convida pro servidor\n' + '`' + prefix + 'criarcomando [nome] [resposta]` Crie comando\n' + '`' + prefix + 'deletarcomando [nome]` Delete comandos criados\n' + '`' + prefix + 'dm/pv` Blocked\n' + '`' + prefix + 'gif` Mande gifs para seus gifs entrar nos meus comandos\n' + '`' + prefix + 'ideiaraphy` Mande ideais diretamente pro servidor da Raphy pra votação\n' + '`' + prefix + 'lockcommands` Trave meus comandos em canais especificos\n' + '`' + prefix + 'unlockcommands` Destrave meus comandos em canais bloqueados\n' + '`' + prefix + 'ping` Pong\n' + '`' + prefix + 'prefix` Informações sobre meu prefixo\n' + '`' + prefix + 'setprefix` Mude meu prefixo\n' + '`' + prefix + 'resetprefix` Resete meu prefixo pra (-)\n' + '`' + prefix + 'sup/support/suporte` Meu suporte\n' + '`' + prefix + 'uptime` Tempo que estou acordada\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['moderation', 'moderação', 'mod', 'administração', 'adm', 'administration'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('⚙️ Espaço para os Adms/Mods')
      .addField('• Opss', `Não cabe todos os comandos aqui, então você precisa acessar a [lista de comandos](${linkgithub}).`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['economy', 'economia', 'mpoints', 'money', 'shop', 'loja', 'dinheiro'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(':coin: Economia Global System')
      .addField('• Opss', `Não cabe todos os comandos aqui, então você precisa acessar a [lista de comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['doar', 'donate'].includes(args[0].toLowerCase())) {
    const ajuda = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('💸 Comando Doar')
      .setDescription('Doe dinheiro e itens pra galera, é simples e rápido!\n \n*Itens/Dinheiro perdidos não serão recuperados. Cuidado para não ser enganado*\n \n')
      .addField('Comandos', '`' + prefix + 'doar money @user quantia`\n' + '`' + prefix + 'doar money @user all/tudo`\n' + '`' + prefix + 'doar rosas @user quantidade`\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(ajuda)
  }

  if (['perfil', 'profile'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('👩‍💻 Monte o seu Perfil')
      .setDescription('Crie seu perfil aqui comigo :hearts:\nLembrando que alguns comandos, tipo estrela e título, são adquiridos na loja')
      .addField('• Comandos Online:', '`' + prefix + 'marry @user` Se case com alguém\n' + '`' + prefix + 'divorce @user` Se divorcie\n' + '`' + prefix + 'family1/2/3` Chame pessoas pra sua familia\n' + '`' + prefix + 'nofamily1/2/3` Remova pessoas da sua familia\n' + '`' + prefix + 'setstatus` Coloque um status maneiro\n' + '`' + prefix + 'rp` Dê reputação\n' + '`' + prefix + 'setsigno` Escolha seu signo\n' + '`' + prefix + 'settitulo` Escolha seu título\n' + '`' + prefix + 'setniver` Coloque seu aniversário\n' + '`' + prefix + 'setsexo` Defina seu sexo\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['owner', 'rody', 'dono'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle(':gear: Comandos exclusivos do Owner')
      .setDescription('Comandos exclusivos do meu criador')
      .addField('• Comandos Online:', '`' + prefix + 'add <item> [@user]` Adiciona algo\n' + '`' + prefix + 'datasorteio` Define uma data pro sorteio da loteria\n' + '`' + prefix + 'del <item> [@user]` Deleta algo\n' + '`' + prefix + 'give <item> [@user]` Dá algo\n' + '`' + prefix + 'remove <item> [@user]` Retira algo\n' + '`' + prefix + 'reboot` Me reinicia\n' + '`' + prefix + 'servers 1/2/3...` Lista de servidores\n' + '`' + prefix + 'sortearticket` Sorteia a loteria\n' + '`' + prefix + 'status [argumento]` Muda meu status\n' + '`' + prefix + 'whitelist` Mostra quem está na Whitelist')
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['quiz', 'trivia'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('✍️ Você é inteligente?')
      .setDescription('Aqui você pode responder perguntas ou não responder né?')
      .addField('• Comandos Online', '`' + prefix + 'quiz`\n' + '`' + prefix + 'quiznaruto`\n' + '`' + prefix + 'quizonepiece/op`\n' + '`' + prefix + 'quizkimetsu`\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['report', 'reporte', 'setreportchannel'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE') // red
      .setTitle(':loudspeaker: Sistema de Report')
      .setDescription('Com este comando, você ativará o meu sistema de report. Isso é bastante útil.')
      .addField('❓ O que é o sistema de report?', 'Com o meu sistema de report, os membros poderão reportar coisas ou outros membros de qualquer canal do servidor, não precisa está indo chamar mod/adm no privado para reportar.')
      .addField('❓ Como funciona?', 'Simples! o membro só precisa escrever `' + prefix + 'report blá blá blá` e o report será encaminhado para o canal definido. As mensagens serão deletadas na hora do envio, tornando o report anônimo e seguro, os únicos que verão o report, serão as pessoas que tem permissão para ver o canal definido.')
      .addField('Comando de Ativação', '`' + prefix + 'setreportchannel #Canal`')
      .addField('Comando de Desativação', '`' + prefix + 'setreportchannel off`')
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['random', 'aleatório', 'aleatorio'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('📜 Comandos Aleatório')
      .setDescription('Comandos aleatório e divertidos, garanto')
      .addField('• Comandos Online:', '`' + prefix + 'advice/conselho` Conselhos\n' + '`' + prefix + 'ascci` Daora\n' + '`' + prefix + 'boom` Booom\n' + '`' + prefix + 'coinflip <cara/coroa>` Cara ou coroa?\n' + '`' + prefix + 'cu` Tem coragem?\n' + '`' + prefix + 'ecchi` Eu não usaria esse comando\n' + '`' + prefix + 'frase` Filosofia\n' + '`' + prefix + 'explosion` Megumiiin\n' + '`' + prefix + 'history` História do pessoal do Discord\n' + '`' + prefix + 'invisivel/invisible` Invisivel\n' + '`' + prefix + 'livia` Gay\n' + '`' + prefix + 'loli` ?\n' + '`' + prefix + 'piada` kkkkkk só piada boa\n' + '`' + prefix + 'servidores` Servidores tops\n' + '`' + prefix + 'trig` aaaaaaaaaaa\n' + '`' + prefix + 'cat` Miaaaw\n' + '`' + prefix + 'puppy` Filhotinhooo\n' + '`' + prefix + 'dado/roll <1...4>` Role dados\n' + '`' + prefix + 'feet` Vai um pézinho?\n' + '`' + prefix + 'nota` Hum.. que nota?\n' + '`' + prefix + 'stonks/notstonks` Stonks\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['personagens'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('<:zeroheart:833378638475821088> Personagens de animes')
      .setDescription('Gifs dos melhores personagens dos melhores animes, mande seus gifs também, vai ajudar muito! `' + prefix + 'gif`')
      .addField('• Comandos Online:', '`' + prefix + 'asuna`\n' + '`' + prefix + 'chika`\n' + '`' + prefix + 'gojo`\n' + '`' + prefix + 'itachi`\n' + '`' + prefix + 'naruto`\n' + '`' + prefix + 'nezuko`\n' + '`' + prefix + 'zenitsu`\n' + '`' + prefix + 'zerotwo/zt`\n' + `:tools: [Lista de Comandos](${linkgithub})`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}gif | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['react', 'reações'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('💕 É bom mostrar como você se sente')
      .addField('• Opss', `Não cabe todos os comandos aqui, então você precisa acessar a [lista de comandos](${linkgithub}).`)
      .setFooter(`${prefix}ideiaraphy | ${prefix}gif | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['autorole', 'setautorole'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('🛠️ Autorole System')
      .setDescription('Antes de começarmos, você sabe o que é Autorole?\n \n❓ **O que é Autorole?**\nAutorole é um sistema automático em que todo membro que entrar no servidor, receberá um cargo de um bot pré definido pela staff do servidor.\n \n❗ **ATENÇÃO**\nPara perfeito funcionamento, o meu cargo DEVE estar ACIMA do cargo definido.')
      .addField('• Comando de ativação', '`' + prefix + 'setautorole @cargo`', true)
      .addField('• Comando de desativação', '`' + prefix + 'setautorole off`', true)
      .addField('• Veja o status', '`' + prefix + 'autorole`', true)
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  }

  if (['role', 'cargo', 'roles', 'cargos'].includes(args[0].toLowerCase())) {
    const embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setTitle('🛠️ Gerenciamento de Cargos')
      .setDescription('Você pode gerenciar cargos rapidamente atráves de comandos simples e rapidos!')
      .addField('• Crie cargos', '`' + prefix + 'role create Nome Do Cargo`')
      .addField('• Exclua cargos', '`' + prefix + 'role delete Nome do Cargo`')
      .addField('• Edite cargos', '`' + prefix + 'role edit nome @cargo Novo Nome do Cargo`\n' + '`' + prefix + 'role edit cor @cargo #CódigoHEX`\n')
      .addField('• Quantos membros tem?', '`' + prefix + 'role membros @cargo`')
      .addField('• Veja o ID', '`' + prefix + 'role id @cargo`')
      .addField('• Autorole System', '`' + prefix + 'comando autorole`')
      .setFooter(`${prefix}ideiaraphy | ${prefix}bug`)
    return message.inlineReply(embed)
  } else {
    return message.inlineReply('Esta categoria não foi encontrada. use `' + prefix + 'comando categoria` e veja as categorias disponiveis.')
  }
}