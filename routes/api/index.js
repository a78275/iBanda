var express = require('express')
var router = express.Router()
const fs = require('fs')
var Evento = require('../../controllers/evento')
var Obra = require('../../controllers/obra')
var User = require('../../controllers/user')
var Noticia = require('../../controllers/noticia')
var Repertorio = require('../../controllers/repertorio')

/*-------------------------LOGIN-------------------------*/



/*-------------------------AGENDA-------------------------*/
router.post('/evento', function(req, res) {
  Evento.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção/edição do evento: ' + erro)) 
})

router.get('/evento', function(req, res) {
  //variável dados são os dados recebidos no controlador (que vem em json)
  Evento.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos: ' + erro)) 
})

router.get('/evento/designacao/:d', function(req, res) {
  Evento.listarDesignacao(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos com uma designação: ' + erro)) 
})

router.get('/evento/tipo/:t', function(req, res) {
  Evento.listarTipo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos de um tipo: ' + erro)) 
})

router.get('/evento/data/:d', function(req, res) {
  Evento.listarData(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos após uma data: ' + erro)) 
})

router.get('/evento/dataex/:d', function(req, res) {
  Evento.listarDataExact(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos de uma data: ' + erro)) 
})

router.get('/evento/local/:l', function(req, res) {
  Evento.listarLocal(req.params.l)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos eventos de um local: ' + erro)) 
})

router.get('/evento/:d', function(req, res) {
  Evento.consultar(req.params.d)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta do evento com uma designação: ' + erro)) 
})

router.delete('/evento/remover/:id',function (req, res) {
    Evento.remover(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na remoção do evento: ' + erro)) 
})

/*-------------------------UTILIZADORES-------------------------*/
router.post('/user', function(req, res) {
    User.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).send('Erro na inserção/edição de um utilizador: ' + erro)) 
})

router.get('/user', function(req, res) {
  User.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos utilizadores: ' + erro)) 
})

router.get('/user/tipo/:t', function(req, res) {
  User.listarTipo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos utilizadores de um tipo: ' + erro)) 
})

router.get('/user/nome/:n', function(req, res) {
  User.listarNome(req.params.n)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos utilizadores por nome: ' + erro)) 
})

router.get('/user/email/:e', function(req, res) {
  User.listarEmail(req.params.e)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos utilizadores por email: ' + erro)) 
})

router.get('/user/:id', function(req, res) {
  User.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta do utilizador: ' + erro)) 
})

router.get('/user/id/:id', function(req, res) {
  User.getUser(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem dos utilizadores: ' + erro)) 
})

router.delete('/user/remover/:id',function (req, res) {
  User.remover(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na remoção do utilizador: ' + erro)) 
})

/*-------------------------OBRAS-------------------------*/
router.post('/obra', function(req, res) {
  Obra.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção de uma obra: ' + erro)) 
})

router.get('/obra', function(req, res) {
  Obra.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras: ' + erro)) 
})

router.get('/obra/tipo/:t', function(req, res) {
  Obra.listarTipo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras de um tipo: ' + erro)) 
})

router.get('/obra/titulo/:t', function(req, res) {
  Obra.listarTitulo(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras por título: ' + erro)) 
})

router.get('/obra/compositor/:c', function(req, res) {
  Obra.listarCompositor(req.params.c)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das obras de um compositor: ' + erro)) 
})

router.get('/obra/:t', function(req, res) {
  Obra.consultar(req.params.t)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta da obra com o título: ' + erro)) 
})

router.delete('/obra/remover/:id',function (req, res) {
  console.log('ID DA OBRA: ' + req.params.id)
  Obra.remover(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na remoção da obra: ' + erro)) 
})

/*-------------------------NOTÍCIAS-------------------------*/
router.post('/noticia', function(req, res) {
  Noticia.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção/edição de uma notícia: ' + erro)) 
})

router.get('/noticia', function(req, res) {
  Noticia.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem das notícias: ' + erro)) 
})

router.post('/noticia/invisivel/:id',function (req, res) {
  Noticia.visivel(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na alteração do estado de visibilidade da notícia: ' + erro)) 
})

/*-------------------------REPERTORIO-------------------------*/
router.get('/repertorio', function(req, res) {
  Repertorio.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem do repertório: ' + erro)) 
})

router.get('/repertorio/evento/:e', function(req, res) {
  Repertorio.listarEventos(req.params.e)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem do repertório por eventos: ' + erro)) 
})

router.get('/repertorio/obra/:o', function(req, res) {
  Repertorio.listarObras(req.params.o)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem do repertório por obras: ' + erro)) 
})

router.post('/repertorio',function (req, res) {
  Repertorio.inserir(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na inserção no repertório: ' + erro)) 
})

router.post('/repertorio/editar',function (req, res) {
  Repertorio.atualizar(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na edição no repertório: ' + erro)) 
})

router.delete('/repertorio/remover/:id',function (req, res) {
  console.log('ID DO REPERTÓRIO: ' + req.params.id)
  Repertorio.remover(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).send('Erro na remoção no Repertório: ' + erro)) 
})

/*-------------------------ENCICLOPÉDIA-------------------------*/
const partituras = __dirname + '/../../public/partituras/'
//obter os ficheiros das obras (partituras) que foram submetidos
router.get('/enciclopedia', function(req, res) {
  var arr = new Array()
  fs.readdirSync(partituras).forEach(file => {
    arr.push(file)
  })
  return res.jsonp(arr)
})

module.exports = router
