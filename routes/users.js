var express = require('express');
var router = express.Router();

//Página Inicial
router.get('/', function(req, res, next) {
  res.render('user/index');
});

//OBRAS

//Listar todas as obras
router.get('/obra', function(req, res, next) {
  res.render('user/obra');
});

//
router.get('/obra/tipo/:t', function(req, res, next) {
  res.render('user/obra');
});

module.exports = router;
