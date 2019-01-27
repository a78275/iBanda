var Obra = require('../models/obra')

//inserir uma obra
module.exports.inserir = (obra) => {
    console.log('Obra: '+ JSON.stringify(obra))
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

//listar todas as obras
module.exports.listar = () => {
    return Obra
        .find()
        .sort({titulo:-1})
        .exec()
}

//devolver a informação da obra com um determinado título
module.exports.consultar = (t) => {
    return Obra
        .findOne({titulo: t})
        .exec()
}

//listar as obras de um determinado tipo (match com expressão regular)
module.exports.listarTipo = (tipo) => {
    var t = new RegExp(tipo, "i")
    return Obra
        .find({tipo: t})
        .sort({titulo:-1})
        .exec()
}

//listar as obras de um compositor (match com expressão regular)
module.exports.listarCompositor = (compositor) => {
    var c = new RegExp(compositor, "i")
    return Obra
        .find({compositor: c})
        .sort({titulo:-1})
        .exec()
}

//listar as obras com um determinado título (match com expressão regular)
module.exports.listarTitulo = (ti) => {
    var t = new RegExp(ti, "i")
    return Obra
        .find({titulo: t})
        .sort({titulo:-1})
        .exec()
}

//remover uma obra
module.exports.remover = (id) => {
    return Obra.remove({_id:id})
}