var Obra = require('../models/obra')

//insere uma obra na agenda
module.exports.inserir = (obra) => {
    var novo = new Obra(obra)
    return new Promise(function(fulfill, reject){
        novo.save(erro => {
            if (erro)
                reject({erro: "Erro na inserção da obra."})
            else 
                fulfill({ok: "Obra inserida na BD."})
        })
    })
}

//lista todas as obras
module.exports.listar = () => {
    return Obra
        .find()
        .sort({titulo:-1})
        .exec()
}

//devolve a informação da obra com id
module.exports.consultar = (t) => {
    return Obra
        .findOne({titulo: t})
        .exec()
}

//lista eventos de um determinado tipo
module.exports.listarTipo = (tipo) => {
    var t = new RegExp(tipo, "i")
    return Obra
        .find({tipo: t})
        .sort({titulo:-1})
        .exec()
}

//lista os eventos depois compositor
module.exports.listarCompositor = (compositor) => {
    var c = new RegExp(compositor, "i")
    return Obra
        .find({compositor: c})
        .sort({titulo:-1})
        .exec()
}

//lista obras com um determinado instrumento
module.exports.listarInstrumento = (inst) => {
    var i = new RegExp(inst, "i")
    return Obra
        .find({inst: i})
        .sort({titulo:-1})
        .exec()
}

module.exports.remover = (id) => {
    return Obra.remove({_id:id})
}