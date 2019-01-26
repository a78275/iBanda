var Noticia = require ('../models/noticia')

//editar ou inserir uma notícia
module.exports.inserir = (noticia) => {
    if(noticia._id) {
        console.log("ID da notícia que vai ser editada: " + noticia._id)
        var query = {'_id':noticia._id}
        return Noticia.findOneAndUpdate(query, noticia)
    }
    else {
        var novo = new Noticia(noticia)
        novo.visivel=true
        return new Promise(function(fulfill, reject){
            novo.save(erro => {
                if (erro)
                    reject({erro: "Erro na inserção da notícia."})
                else 
                    fulfill({ok: "Registo da notícia inserido na BD."})
            })
        })
    }
}

//listar todas as notícias
module.exports.listar = () => {
    return Noticia
        .find()
        .sort({data:-1})
        .exec()
}

//tornar uma notícia visível ou invisível
module.exports.visivel = (id) => {
    return Noticia
        .findOne({_id: id}, function(err, not) { 
        if(not){
            var novo = !not.visivel
            not.visivel = novo
            not.save(erro => {
                if (erro) {
                    console.log("Erro na alteração da visibilidade da notícia.")
                }
                else {
                    console.log("Atualização da visibilidade da notícia registada na BD.")
                }
            })
        }
    })
}