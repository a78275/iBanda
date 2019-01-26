var Evento = require('../models/evento')
var Obra = require('../models/obra')
var Repertorio = require('../models/repertorio')

//lista o repertorio
module.exports.listar = () => {
    return Repertorio
        .find()
        .sort({evento:-1})
        .exec()
}

module.exports.listarEventos = (evento) => {
    var e = new RegExp(evento, "i")
    return Repertorio
        .find({evento: e})
        .sort({evento:-1})
        .exec()
}

module.exports.listarObras = (obra) => {
    var o = new RegExp(obra, "i")
    return Repertorio
        .find({obras: o})
        .sort({evento:-1})
        .exec()
}

