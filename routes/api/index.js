var express = require('express')
var router = express.Router()
var axios = require('axios')
var Evento = require('../../controllers/evento')
var Obra = require('../../controllers/obra')
var User = require('../../controllers/user')
var Noticia = require('../../controllers/noticia')
var Repertorio = require('../../controllers/repertorio')

/*-------------------------AGENDA-------------------------*/

router.post('/evento', function(req, res) {
  Evento.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção do evento: ' + erro)) 
});

router.get('/evento', function(req, res) {
  //var dados são os dados recebidos no controlador (que vem em json)
  Evento.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos: ' + erro)) 
});

router.get('/evento/designacao/:d', function(req, res) {
  Evento.listarDesignacao(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos com uma designação: ' + erro)) 
});

router.get('/evento/tipo/:t', function(req, res) {
  Evento.listarTipo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos de um tipo: ' + erro)) 
});

router.get('/evento/data/:d', function(req, res) {
  Evento.listarData(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos após uma data: ' + erro)) 
});

router.get('/evento/dataex/:d', function(req, res) {
  Evento.listarDataExact(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos após uma data: ' + erro)) 
});

router.get('/evento/local/:l', function(req, res) {
  Evento.listarLocal(req.params.l)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos de um local: ' + erro)) 
});

router.get('/evento/:d', function(req, res) {
  Evento.consultar(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta do evento: ' + erro)) 
});

router.delete('/evento/remover/:id',function (req, res) {
    Evento.remover(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na remoção do evento: ' + erro)) 
});

/*-------------------------USERS-------------------------*/
router.post('/user', function(req, res) {
  User.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção de um user: ' + erro)) 
});

router.get('/user', function(req, res) {
  User.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos utilizadores: ' + erro)) 
});

router.get('/user/tipo/:t', function(req, res) {
  User.listarTipo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos utilizadores de um tipo: ' + erro)) 
});

router.get('/user/nome/:n', function(req, res) {
  User.listarNome(req.params.n)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta dos utilizadores por nome: ' + erro)) 
});

router.get('/user/email/:e', function(req, res) {
  User.listarEmail(req.params.e)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem por email de um utilizador: ' + erro)) 
});

router.get('/user/:id', function(req, res) {
  User.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta de um user: ' + erro)) 
});

router.delete('/user/remover/:id',function (req, res) {
  User.remover(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na remoção do utilizador: ' + erro)) 
});

/*-------------------------OBRAS-------------------------*/
router.post('/obra', function(req, res) {
  Obra.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção de uma obra: ' + erro)) 
});

router.get('/obra', function(req, res) {
  Obra.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras: ' + erro)) 
});

router.get('/obra/tipo/:t', function(req, res) {
  Obra.listarTipo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras de um tipo: ' + erro)) 
});

router.get('/obra/titulo/:t', function(req, res) {
  Obra.listarTitulo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta das obras com um título: ' + erro)) 
});

router.get('/obra/compositor/:c', function(req, res) {
  Obra.listarCompositor(req.params.c)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras de um compositor: ' + erro)) 
});

router.get('/obra/:t', function(req, res) {
  Obra.consultar(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta da obra: ' + erro)) 
});

router.delete('/obra/remover/:id',function (req, res) {
  Obra.remover(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na remoção da obra: ' + erro)) 
});

/*-------------------------NOTICIAS-------------------------*/
router.post('/noticia', function(req, res) {
  Noticia.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção de uma noticia: ' + erro)) 
});

router.get('/noticia', function(req, res) {
  Noticia.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das noticias: ' + erro)) 
});

router.post('/noticia/invisivel/:id',function (req, res) {
  Noticia.visivel(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na alteração do estado de visibilidade da notícia: ' + erro)) 
});

/*-------------------------REPERTORIO-------------------------*/
router.get('/repertorio', function(req, res) {
  Repertorio.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem do repertório: ' + erro)) 
});

router.get('/repertorio/evento/:e', function(req, res) {
  Repertorio.listarEventos(req.params.e)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem do repertório por eventos: ' + erro)) 
});

router.get('/repertorio/obra/:o', function(req, res) {
  Repertorio.listarObras(req.params.o)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem do repertório por obras: ' + erro)) 
});

/*-------------------------ENCICLOPÉDIA-------------------------*/
const partituras = __dirname + '/../../public/partituras/'
const fs = require('fs')


router.get('/enciclopedia', function(req, res) {
  var arr = new Array();
  fs.readdirSync(partituras).forEach(file => {
    arr.push(file);
  })
  return res.jsonp(arr);
});

module.exports = router;
