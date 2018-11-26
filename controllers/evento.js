var Evento = require('../models/evento')

//insere um evento na agenda
module.exports.inserir = (evento) => {
    var novo = new Evento(evento)
    return new Promise(function(fulfill, reject){
        novo.save(erro => {
            if (erro)
                reject({erro: "Erro na inserção do evento."})
            else 
                fulfill({ok: "Registo do evento inserido na BD."})
        })
    })
    // return Evento.create(evento)
}

//lista todos os eventos
module.exports.listar = () => {
    return Evento
        .find()
        .sort({data:-1})
        .exec()
}

//devolve a informação do evento com id
module.exports.consultar = (eid) => {
    return Evento
        .findOne({_id: eid})
        .exec()
}

//lista eventos de um determinado tipo
module.exports.listarTipo = (tipo) => {
    return Evento
        .find({tipo: tipo})
        .sort({data:-1})
        .exec()
}

//lista os eventos depois da data
module.exports.listarData = (data) => {
    return Evento
        .find({data: {$gte: data}})
        .sort({data:-1})
        .exec()
}

//lista os eventos naquela data
module.exports.listarDataExact = (data) => {
    return Evento
        .find({data: data})
        .sort({data:-1})
        .exec()
}

//lista os eventos depois da data
module.exports.listarLocal = (local) => {
    return Evento
        .find({local: local})
        .sort({data:-1})
        .exec()
}

