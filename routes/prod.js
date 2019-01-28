var express = require('express')
var router = express.Router()
var axios = require('axios')
var extract = require('extract-zip')
var fs = require('fs')
var Obra = require('../controllers/obra')

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
    var zip = __dirname + '/../public/zips/' + fileName
    const partituras = __dirname + '/../public/partituras/'
    startup_image.mv(zip, function(erro0) {
        extract(zip, {dir: partituras}, function (erro1) {
            if(erro1) 
                console.log('Erro na extração do zip: ' + erro1)
            //processar manifesto
            fs.readFile(partituras+'iBanda-SIP.json', 'utf8', function(erro2, data) {
                if (erro2)
                    console.log('Erro na leitura do ficheiro: ' + erro2);
                Obra.inserir(JSON.parse(data))
            })
            
            //no final eliminar o manifesto
            fs.unlink(partituras+'iBanda-SIP.json', (erro3) => {
                if (erro3)
                    console.log('Erro na eliminação do ficheiro: ' + erro3)
            })
        })
        if(erro0){
            console.log('Erro no carregamento do zip: ' + erro0)
        } else {
            console.log("Zip " + fileName + " carregado.")
        }
    })
    res.redirect('http://localhost:3000/prod')
})

module.exports = router