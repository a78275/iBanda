var express = require('express')
var router = express.Router()
var axios = require('axios')
var extract = require('extract-zip')

//verifica se é o produtor que está autenticado (impede o acesso a utilizadores e administradores)
function verificaAutenticacaoProd(req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.tipo != 'Produtor') {
            console.log('Não é o produtor.')
            res.redirect('http://localhost:3000/')
        }
        else {
            console.log('Está autenticado!')
            next()
        }
    }
    else {
        console.log('Não está autenticado!')
        res.redirect('http://localhost:3000/')
    }
}

//carrega a página inicial do produtor
router.get('/', verificaAutenticacaoProd, function(req, res, next) {
    res.render('prod/index')
})

router.post('/obra', verificaAutenticacaoProd, function(req, res) {
    var startup_image = req.files.ficheiro
    var fileName = req.files.ficheiro.name
    var zip = __dirname+'/../public/zips/'+fileName
    var unzip = __dirname+'/../public/unzips/'
    startup_image.mv(zip, function(err) {
        if(err){
            console.log('Erro no carregamento do zip: ' + err)
        } else {
            console.log("Zip " + fileName + " carregada.")
        }
    })
    extract(zip, {dir: unzip}, function (erro) {
        console.log('source: '+zip)
        console.log('target: '+unzip)
        if(erro) 
            console.log('Erro na extração do zip: ' + erro)
    })
    res.redirect('http://localhost:3000/prod')
})

module.exports = router