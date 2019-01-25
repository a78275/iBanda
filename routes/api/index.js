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

router.get('/evento/:d', function(req, res) {
  Evento.consultar(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta do evento: ' + erro)) 
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

router.get('/obra/:t', function(req, res) {
  Obra.consultar(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta da obra: ' + erro)) 
});

router.get('/obra/tipo/:t', function(req, res) {
  Obra.listarTipo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras de um tipo: ' + erro)) 
});

router.get('/obra/compositor/:c', function(req, res) {
  Obra.listarCompositor(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras de um compositor: ' + erro)) 
});

router.get('/obra/instrumento/:i', function(req, res) {
  Obra.listarInstrumento(req.params.l)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras de um instrumento: ' + erro)) 
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

router.delete('/noticia/remover/:id',function (req, res) {
  Noticia.remover(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na remoção da notícia: ' + erro)) 
});

/*-------------------------REPERTORIO-------------------------*/
router.get('/repertorio', function(req, res) {
  Repertorio.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem do repertório: ' + erro)) 
});

module.exports = router;
