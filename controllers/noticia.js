var Noticia = require ('../models/noticia')

module.exports.inserir = (noticia) => {
    if(noticia._id) {
        console.log("ID da notícia: " + noticia._id)
        var query = {'_id':noticia._id}
        return Noticia.findOneAndUpdate(query, noticia)
    }
    else {
        var novo = new Noticia(noticia)
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

//lista todas as notícias
module.exports.listar = () => {
    return Noticia
        .find()
        .sort({data:-1})
        .exec()
}

module.exports.remover = (id) => {
    return Noticia.remove({_id:id})
}
