var User = require ('../models/user')

module.exports.inserir = (user) => {
    var novo = new User(user)
    return new Promise(function(fulfill, reject){
        novo.save(erro => {
            if (erro)
                reject({erro: "Erro na inserção do User."})
            else 
                fulfill({ok: "User inserido na BD."})
        })
    })
}

//lista todos os eventos
module.exports.listar = () => {
    return User
        .find()
        .sort({dataNasc:-1})
        .exec()
}

//devolve a informação do evento com id
module.exports.consultar = (uid) => {
    return User
        .findOne({_id: uid})
        .exec()
}
