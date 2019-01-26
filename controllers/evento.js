var Evento = require('../models/evento')

//insere um evento na agenda
module.exports.inserir = (evento) => {
    if(evento._id) {
        console.log("ID do evento: " + evento._id)
        var query = {'_id':evento._id}
        return Evento.findOneAndUpdate(query, evento)
    }
    else {
        var novo = new Evento(evento)
        return new Promise(function(fulfill, reject){
            novo.save(erro => {
                if (erro)
                    reject({erro: "Erro na inserção do evento."})
                else 
                    fulfill({ok: "Registo do evento inserido na BD."})
            })
        })
    }
}

//lista todos os eventos
module.exports.listar = () => {
    return Evento
        .find()
        .sort({data:-1})
        .exec()
}

//devolve a informação do evento com id
module.exports.consultar = (d) => {
    return Evento
        .findOne({designacao: d})
        .exec()
}

module.exports.listarDesignacao = (des) => {
    var d = new RegExp(des, "i")
    return Evento
        .find({designacao: d})
        .sort({data:-1})
        .exec()
}

//lista eventos de um determinado tipo
module.exports.listarTipo = (tipo) => {
    var t = new RegExp(tipo, "i")
    return Evento
        .find({tipo: t})
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

//lista os eventos que vão ocorrer naquele local
module.exports.listarLocal = (local) => {
    var l = new RegExp(local, "i")
    return Evento
        .find({local: l})
        .sort({data:-1})
        .exec()
}

module.exports.remover = (id) => {
    return Evento.remove({_id:id})
}
