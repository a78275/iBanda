var Evento = require('../models/evento')
var Obra = require('../models/obra')
var Repertorio = require('../models/repertorio')

//listar o repertório
module.exports.listar = () => {
    return Repertorio
        .find()
        .sort({evento:-1})
        .exec()
}

//listar o repertório dos eventos (match com expressão regular)
module.exports.listarEventos = (evento) => {
    var e = new RegExp(evento, "i")
    return Repertorio
        .find({evento: e})
        .sort({evento:-1})
        .exec()
}

//listar os eventos em que foi tocada uma obra (match com expressão regular)
module.exports.listarObras = (obra) => {
    var o = new RegExp(obra, "i")
    return Repertorio
        .find({obras: o})
        .sort({evento:-1})
        .exec()
}

