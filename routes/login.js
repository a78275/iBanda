var express = require('express')
var router = express.Router()
var axios = require('axios')
const passport = require('passport')
var bcrypt = require('bcrypt')

function verificaAutenticacao(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('Está autenticado!')
    next()
  }
  else {
      console.log('Não está autenticado!')
      res.redirect('http://localhost:3000/')
  }
}

//carregar página de login
router.get('/', function(req, res, next) {
  res.render('login')
})

// Login
router.post('/login', passport.authenticate('login', { failureRedirect: '/'}), function(req, res) {
  if(req.user.tipo=='Administrador')
    res.redirect('http://localhost:3000/admin')
  if(req.user.tipo=='Utilizador')
    res.redirect('http://localhost:3000/user')
  if(req.user.tipo=='Produtor')
    res.redirect('http://localhost:3000/prod')
  
})

//Logout
router.get('/logout', verificaAutenticacao, (req, res) => {
  /*req.session.destroy(() => {
    res.clearCookie('connect.sid')
    res.redirect('/')
  })*/
  req.logOut();
  res.redirect('http://localhost:3000/')
})

module.exports = router