var express = require('express')
var router = express.Router()
var axios = require('axios')

//verifica se é o utilizador que está autenticado (impede o acesso a produtores e administradores)
function verificaAutenticacaoUser(req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.tipo != 'Utilizador') {
            console.log('Não é o utilizador.')
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

//carrega a página inicial do utilizador
router.get('/', verificaAutenticacaoUser, function(req, res, next) {
    res.render('user/index')
})

/*-------------------------AGENDA-------------------------*/
router.get('/evento', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento')
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem dos eventos: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem dos eventos...'})
        })
})


router.get('/evento/tipo/:t', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento/tipo/' + req.params.t)
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem dos eventos de um tipo: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem dos eventos de um tipo...'})
        })
})

router.get('/evento/designacao/:d', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento/designacao/' + req.params.d)
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem dos eventos com uma designação: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem dos eventos com uma designação...'})
        })
})

router.get('/evento/data/:d', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento/data/' + req.params.d)
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem dos eventos após uma data: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem dos eventos após uma data...'})
        })
})

router.get('/evento/dataex/:d', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento/dataex/' + req.params.d)
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos com uma data: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem dos eventos com uma data...'})
        })
})

router.get('/evento/local/:l', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento/local/' + req.params.l)
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem dos eventos de um local: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem dos eventos de um local...'})
        })
})

router.get('/evento/:d', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento/' + req.params.d)
        .then(evento => res.render('user/evento', {e: evento.data}))
        .catch(erro => {
            console.log('Erro na listagem do evento com uma designação: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem do evento com uma designação...'})
        })
})

router.get('/evento/tipo/:t', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/evento/tipo/' + req.params.t)
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem dos eventos de um tipo: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem dos eventos de um tipo...'})
        })
})

/*-------------------------OBRAS-------------------------*/
router.get('/obra', verificaAutenticacaoUser, function(req, res) {
  axios.get('http://localhost:3000/api/obra')
    .then(obras => res.render('user/obras', {obras: obras.data}))
    .catch(erro => {
      console.log('Erro na listagem das obras: ' + erro)
      res.render('user/erro','error', {error: erro, message: ' na listagem das obras...'})
    })
})

router.get('/obra/tipo/:t', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/obra/tipo/' + req.params.t)
        .then(obras => res.render('user/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem das obras de um tipo: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem das obras de um tipo...'})
        })
})

router.get('/obra/compositor/:c', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/obra/compositor/' + req.params.c)
        .then(obras => res.render('user/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem das obras de um compositor: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem das obras de um compositor...'})
        })
})

router.get('/obra/titulo/:t', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/obra/titulo/' + req.params.t)
        .then(obras => res.render('user/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem das obras com um título: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem das obras com um título...'})
        })
})

router.get('/obra/:t', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/obra/' + req.params.t)
        .then(obra => res.render('user/obra', {o: obra.data}))
        .catch(erro => {
            console.log('Erro na listagem da obra com um título: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem da obra com um título...'})
        })
})

router.get('/obra/downloadPartitura/:p', verificaAutenticacaoUser, function(req, res){
    var file = __dirname + '/../public/partituras/' + req.params.p
    console.log(file)
    res.download(file)
})

/*-------------------------PERFIL-------------------------*/
router.get('/perfil', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/user/' + req.user.email)
        .then(user => {
            res.render('user/perfil', {user : user.data})
        })
        .catch(erro => {
            console.log('Erro na consulta do utilizador: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na consulta do utilizador...'})
        })
})

router.post('/edit', verificaAutenticacaoUser, function(req, res) {
    axios.post('http://localhost:3000/api/user', req.body)
        .then(() => res.redirect('http://localhost:3000/user/perfil'))
        .catch(erro => {
            console.log('Erro na edição do utilizador: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na edição do utilizador...'})
        })
})

/*-------------------------NOTICIAS-------------------------*/
router.get('/noticia', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/noticia')
        .then(noticias => res.render('user/noticias', {noticias: noticias.data}))
        .catch(erro => {
            console.log('Erro na listagem das notícias: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem das notícias...'})
        })
})

/*-------------------------REPERTÓRIO-------------------------*/
router.get('/repertorio', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/repertorio')
        .then(repertorio => res.render('user/repertorio', {repertorio: repertorio.data}))
        .catch(erro => {
            console.log('Erro na listagem do repertório: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem do repertório...'})
        })
})

router.get('/repertorio/evento/:e', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/repertorio/evento/' + req.params.e)
        .then(repertorio => res.render('user/repertorio', {repertorio: repertorio.data}))
        .catch(erro => {
            console.log('Erro na listagem do repertório por eventos: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem do repertório por eventos...'})
        })
})

router.get('/repertorio/obra/:o', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/repertorio/obra/' + req.params.o)
        .then(repertorio => res.render('user/repertorio', {repertorio: repertorio.data}))
        .catch(erro => {
            console.log('Erro na listagem do repertório por obras: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem do repertório por obras...'})
        })
})

/*-------------------------ENCICLOPÉDIA-------------------------*/
router.get('/enciclopedia', verificaAutenticacaoUser, function(req, res) {
    axios.get('http://localhost:3000/api/enciclopedia')
        .then(enciclopedia => res.render('user/enciclopedia', {enciclopedia: enciclopedia.data}))
        .catch(erro => {
            console.log('Erro na listagem da enciclopédia: ' + erro)
            res.render('user/erro','error', {error: erro, message: ' na listagem da enciclopédia...'})
        })
})

module.exports = router
