const moment = require('moment')

exports.run = async (client, message, args) => {

    var duration = moment.duration(client.ontime)
    let u = convertMS(client.uptime)
    let ontime = `**${u.d}**` + " Dia(s) " + `**${u.h}**` + " Hora(s) " + `**${u.m}**` + " Minutos, " + `**${u.s}**` + " Segundos"

    message.inlineReply(`⏱️ Eu estou acordada a: ${ontime}`)

    function convertMS(ms) {
        var d, h, m, s
        s = Math.floor(ms / 1000)
        m = Math.floor(s / 60)
        s = s % 60
        h = Math.floor(m / 60)
        m = m % 60
        d = Math.floor(h / 24)
        h = h % 24

        return {
            d: d
            , h: h
            , m: m
            , s: s
        }
    }
}