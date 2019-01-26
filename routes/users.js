var express = require('express');
var router = express.Router();
var axios = require('axios')

//Carrega a página inicial
router.get('/', function(req, res, next) {
    res.render('user/index')
});

/*-------------------------AGENDA-------------------------*/
router.get('/evento', function(req, res) {
    axios.get('http://localhost:3000/api/evento')
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem dos eventos...'})
        })
});

router.get('/evento/:d', function(req, res) {
    axios.get('http://localhost:3000/api/evento/' + req.params.d)
        .then(evento => res.render('user/evento', {e: evento.data}))
        .catch(erro => {
            console.log('Erro na listagem do evento: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem do evento...'})
        })
});

router.get('/evento/tipo/:t', function(req, res) {
    axios.get('http://localhost:3000/api/evento/tipo/' + req.params.t)
        .then(eventos => res.render('user/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos de um tipo: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem dos eventos de um tipo...'})
        })
});

/*-------------------------OBRAS-------------------------*/
router.get('/obra', function(req, res) {
  axios.get('http://localhost:3000/api/obra')
    .then(obras => res.render('user/obras', {obras: obras.data}))
    .catch(erro => {
      console.log('Erro na listagem de obras: ' + erro)
      res.render('user/erro','error', {error: erro, message: 'na listagem das obras...'})
    })
});

router.get('/obra/tipo/:t', function(req, res) {
    axios.get('http://localhost:3000/api/obra/tipo/' + req.params.t)
        .then(obras => res.render('user/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras de um tipo: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras de um tipo...'})
        })
});

router.get('/obra/compositor/:c', function(req, res) {
    axios.get('http://localhost:3000/api/obra/compositor/' + req.params.c)
        .then(obras => res.render('user/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras de um compositor: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras de um compositor...'})
        })
});

router.get('/obra/titulo/:t', function(req, res) {
    axios.get('http://localhost:3000/api/obra/titulo/' + req.params.t)
        .then(obras => res.render('user/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras de um título: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras de um título...'})
        })
});

router.get('/obra/:t', function(req, res) {
    axios.get('http://localhost:3000/api/obra/' + req.params.t)
        .then(obra => res.render('user/obra', {o: obra.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem das obras...'})
        })
});

router.get('/obra/downloadPartitura/:p', function(req, res){
    var file = __dirname + '/../public/partituras/' + req.params.p
    console.log(file)
    res.download(file); // Set disposition and send it.
});

/*-------------------------PERFIL-------------------------*/
var uid = "" //descobrir o id do utilizador!

router.get('/user', function(req, res) {
    axios.get('http://localhost:3000/api/user/' + uid)
        .then(user => {
            res.render('user/perfil', {user : user.data})
        })
        .catch(erro => {
            console.log('Erro na listagem do utilizador: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem do utilizador...'})
        })
})

/*-------------------------NOTICIAS-------------------------*/
router.get('/noticia', function(req, res) {
    axios.get('http://localhost:3000/api/noticia')
        .then(noticias => res.render('user/noticias', {noticias: noticias.data}))
        .catch(erro => {
            console.log('Erro na listagem de notícias: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem das notícias...'})
        })
});

/*-------------------------REPERTÓRIO-------------------------*/
router.get('/repertorio', function(req, res) {
    axios.get('http://localhost:3000/api/repertorio')
        .then(repertorio => res.render('user/repertorio', {repertorio: repertorio.data}))
        .catch(erro => {
            console.log('Erro na listagem do repertório: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem do repertório...'})
        })
});

router.get('/repertorio/evento/:e', function(req, res) {
    axios.get('http://localhost:3000/api/repertorio/evento/' + req.params.e)
        .then(repertorio => res.render('user/repertorio', {repertorio: repertorio.data}))
        .catch(erro => {
            console.log('Erro na listagem do repertório por eventos: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem do repertório por eventos...'})
        })
});

router.get('/repertorio/obra/:o', function(req, res) {
    axios.get('http://localhost:3000/api/repertorio/obra/' + req.params.o)
        .then(repertorio => res.render('user/repertorio', {repertorio: repertorio.data}))
        .catch(erro => {
            console.log('Erro na listagem do repertório por obras: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem do repertório por obras...'})
        })
});

/*-------------------------ENCICLOPÉDIA-------------------------*/
router.get('/enciclopedia', function(req, res) {
    axios.get('http://localhost:3000/api/enciclopedia')
        .then(enciclopedia => res.render('user/enciclopedia', {enciclopedia: enciclopedia.data}))
        .catch(erro => {
            console.log('Erro na listagem da enciclopédia: ' + erro)
            res.render('user/erro','error', {error: erro, message: 'na listagem da enciclopédia...'})
        })
});

module.exports = router;
