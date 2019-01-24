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
