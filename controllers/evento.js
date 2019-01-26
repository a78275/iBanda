var Evento = require('../models/evento')

//editar ou inserir um evento na agenda
module.exports.inserir = (evento) => {
    if(evento._id) {
        console.log("ID do evento que vai ser editado: " + evento._id)
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

//listar todos os eventos
module.exports.listar = () => {
    return Evento
        .find()
        .sort({data:-1})
        .exec()
}

//devolver a informação de um evento de acordo com a designação
module.exports.consultar = (d) => {
    return Evento
        .findOne({designacao: d})
        .exec()
}

//listar os eventos que concordam com uma designação (match com expressão regular)
module.exports.listarDesignacao = (des) => {
    var d = new RegExp(des, "i")
    return Evento
        .find({designacao: d})
        .sort({data:-1})
        .exec()
}

//listar os eventos de um determinado tipo (match com expressão regular)
module.exports.listarTipo = (tipo) => {
    var t = new RegExp(tipo, "i")
    return Evento
        .find({tipo: t})
        .sort({data:-1})
        .exec()
}

//listar os eventos depois de uma dada data (match com expressão regular)
module.exports.listarData = (data) => {
    return Evento
        .find({data: {$gte: data}})
        .sort({data:-1})
        .exec()
}

//listar os eventos de uma data (match com expressão regular)
module.exports.listarDataExact = (data) => {
    return Evento
        .find({data: data})
        .sort({data:-1})
        .exec()
}

//listar os eventos que vão ocorrer num local (match com expressão regular)
module.exports.listarLocal = (local) => {
    var l = new RegExp(local, "i")
    return Evento
        .find({local: l})
        .sort({data:-1})
        .exec()
}

//remover um evento da agenda
module.exports.remover = (id) => {
    return Evento.remove({_id:id})
}
