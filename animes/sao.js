const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var lista = [
    'https://imgur.com/XhwPW1b.png',
    'https://imgur.com/14iUC8B.gif',
    'https://imgur.com/v0t7ljo.png',
    'https://imgur.com/WoMkkAi.png',
    'https://imgur.com/OL0yjFk.png',
    'https://imgur.com/9gblqPw.png',
    'https://imgur.com/0NET573.png',
    'https://imgur.com/R99XbZa.png',
    'https://imgur.com/OXGMzFz.png',
    'https://imgur.com/RHgaSWT.png',
    'https://imgur.com/msUV6p9.png',
    'https://imgur.com/6RFYEKk.gif',
    'https://imgur.com/4mNY4dc.gif',
    'https://imgur.com/3tp8j6O.png',
    'https://imgur.com/kJNbHYK.png',
    'https://imgur.com/X5diJxM.png',
    'https://imgur.com/ATSWfbV.gif',
    'https://imgur.com/8usvBPO.gif',
    'https://imgur.com/ziop5E2.gif',
    'https://imgur.com/G4x3C71.gif',
    'https://imgur.com/WUp9SJv.gif',
    'https://imgur.com/TXG50CL.png',
    'https://imgur.com/7RhZpu3.gif',
    'https://imgur.com/8HGzyhe.gif',
    'https://imgur.com/FEFqGLu.gif',
    'https://imgur.com/JQJ60Lg.gif',
    'https://imgur.com/y6CpaXb.gif',
    'https://imgur.com/1sRHaep.jpg',
    'https://imgur.com/ezTDnHe.jpg',
    'https://imgur.com/391XwV8.png',
    'https://imgur.com/rizIm4D.jpg',
    'https://imgur.com/eb5askP.jpg',
    'https://imgur.com/hmccFGE.jpg',
    'https://imgur.com/hRb4Qjs.jpg',
    'https://imgur.com/4U2g4VF.jpg',
    'https://imgur.com/jxUp8qo.jpg',
    'https://imgur.com/yD18H19.png',
    'https://imgur.com/Vp0jagp.png',
    'https://imgur.com/WHbEwWz.gif',
    'https://imgur.com/qVjiCqL.gif',
    'https://imgur.com/se69vxc.gif',
    'https://imgur.com/LTLVPye.gif',
    'https://imgur.com/3Lb9D9O.gif',
    'https://imgur.com/Z306Gcd.gif',
    'https://imgur.com/JY97WE9.gif',
    'https://imgur.com/BQZltjA.gif',
    'https://imgur.com/pwpEPL6.gif',
    'https://imgur.com/WK07rqX.gif',
    'https://imgur.com/GLXDlBc.gif',
    'https://imgur.com/7CemXkt.gif',
    'https://imgur.com/devBl3d.gif',
    'https://imgur.com/z174j18.gif',
    'https://imgur.com/5e30dT1.gif',
    'https://imgur.com/jH18P8q.gif',
    'https://imgur.com/4GohWKn.gif',
    'https://imgur.com/HsGkDHK.gif',
    'https://imgur.com/qKbjyC9.gif'
  ]

  let saophotos = lista[Math.floor(Math.random() * lista.length)]

  var SAOEmbed = new Discord.MessageEmbed()
    .setTitle('📺 SAO - Sword Art Online')
    .setColor('BLUE')
    .setImage(saophotos)

  await message.inlineReply(SAOEmbed).then(msg => {
    msg.react('🔄') // 1º Embed
    msg.react('❌')
    setTimeout(function () { msg.reactions.removeAll() }, 30000)

    msg.awaitReactions((reaction, user) => {
      if (message.author.id !== user.id) return;

      if (reaction.emoji.name === '🔄') { // 1º Embed - Principal
        reaction.users.remove(user)
        let SAOEmbed1 = new Discord.MessageEmbed()
          .setTitle('📺 SAO - Sword Art Online')
          .setColor('BLUE')
          .setImage(lista[Math.floor(Math.random() * lista.length)])
        msg.edit(SAOEmbed1)
      }
      if (reaction.emoji.name === '❌') {
        msg.delete()
      }
    })
  })
}