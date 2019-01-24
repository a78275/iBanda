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

router.get('/obra/downloadPartitura/:p', function(req, res){
    var file = __dirname + '/../public/partituras/' + req.params.p
    console.log(file)
    res.download(file); // Set disposition and send it.
});

/*-------------------------PERFIL-------------------------*/
router.get('/user/:id', function(req, res) {
    axios.get('http://localhost:3000/api/user/' + req.params.id)
        .then(users => {
                        res.render('user/users', {users : users.data})
                    })
        .catch(erro => {
            console.log('Erro na listagem de Users: ' + erro)
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

module.exports = router;
