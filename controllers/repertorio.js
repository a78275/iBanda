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

