var express = require('express')
var router = express.Router()
var axios = require('axios')
var Evento = require('../../controllers/evento')

//Carrega a página inicial
router.get('/', function(req, res, next) {
  res.render('admin/index')
});

/*-------------------------AGENDA-------------------------*/
router.post('/evento', function(req, res) {
  Evento.inserir(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na inserção: ' + erro)) 
});

router.get('/evento', function(req, res) {
  //var dados são os dados recebidos no controlador (que vem em json)
  Evento.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na listagem: ' + erro)) 
});

router.get('/evento/:id', function(req, res) {
  Evento.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).send('Erro na consulta: ' + erro)) 
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

/*-------------------------USERS-------------------------*/


/*-------------------------OBRAS-------------------------*/

module.exports = router;
