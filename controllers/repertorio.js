var Evento = require('../models/evento')
var Obra = require('../models/obra')
var Repertorio = require('../models/repertorio')

//inserir no repertório person.friends.push(friend);person.save(done);
module.exports.inserir = (rep) => {
    var novo = new Repertorio(rep)
    return new Promise(function(fulfill, reject){
        novo.save(erro => {
            if (erro) {
                console.log('ERRO NA INSERÇÃO NO REPERTÓRIO: ' + erro)
                reject({erro: "Erro na inserção no repertório."})
            }
            else {
                console.log('INSERÇÃO NO REPERTÓRIO OK')
                fulfill({ok: "Registo do repertório inserido na BD."})
            }
        })
    })
}

//atualizar o repertório
module.exports.atualizar = (rep) => {
    console.log("ID do repertório que vai ser atualizado: " + rep._id)
    return Repertorio
        .update({_id:rep._id}, {$set:rep})
        .exec()
}

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

//remover um utilizador
module.exports.remover = (id) => {
    return Repertorio.remove({_id:id})
}

