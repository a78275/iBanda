var User = require ('../models/user')

module.exports.inserir = (user) => {
    if(user._id) {
        console.log("ID do utilizador: " + user._id)
        var query = {'_id':user._id}
        return User.findOneAndUpdate(query, user)
    }
    else {
        var novo = new User(user)
        return new Promise(function(fulfill, reject){
            novo.save(erro => {
                if (erro)
                    reject({erro: "Erro na inserção do utilizador."})
                else 
                    fulfill({ok: "Registo do utilizador inserido na BD."})
            })
        })
    }
}

//lista todos os eventos
module.exports.listar = () => {
    return User
        .find()
        .sort({tipo:-1})
        .exec()
}

module.exports.remover = (id) => {
    return User.remove({_id:id})
}

//lista eventos de um determinado tipo
module.exports.listarTipo = (tipo) => {
    var t = new RegExp(tipo, "i")
    return User
        .find({tipo: t})
        .sort({nome:-1})
        .exec()
}

//lista os eventos depois compositor
module.exports.listarNome = (nome) => {
    var n = new RegExp(nome, "i")
    return User
        .find({nome: n})
        .sort({nome:-1})
        .exec()
}

module.exports.listarEmail = (email) => {
    var e = new RegExp(email, "i")
    return User
        .find({email: e})
        .sort({nome:-1})
        .exec()
}
