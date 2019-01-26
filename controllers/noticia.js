var Noticia = require ('../models/noticia')

module.exports.inserir = (noticia) => {
    if(noticia._id) {
        console.log("ID da notícia: " + noticia._id)
        var query = {'_id':noticia._id}
        return Noticia.findOneAndUpdate(query, noticia)
    }
    else {
        var novo = new Noticia(noticia)
        novo.visivel=true;
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

module.exports.visivel = (id) => {
    Noticia.findOne({_id: id}, function(err, not) { 
        if(not){
            var novo = !not.visivel
            not.visivel = novo
            
            return new Promise(function(fulfill, reject){
                not.save(erro => {
                    if (erro) {
                        console.log("Erro na alteração da visibilidade.")
                        reject({erro: "Erro na alteração da visibilidade."})
                    }
                    else {
                        console.log("Atualização da visibilidade da notícia registada na BD.")
                        fulfill({ok: "Atualização da visibilidade da notícia registada na BD."})
                    }
                })
            })
        }
    })
}

//i(class="fas fa-eye-slash" style="color:#373737")
//button(onclick="document.getElementById('"+n._id+"').style.display='block'").w3-btn.w3-pale-gold.w3-padding-small VISIVEL/INVISIVEL&nbsp;&nbsp;