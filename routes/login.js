var express = require('express')
var router = express.Router()

//carregar página de login
router.get('/', function(req, res, next) {
  res.render('login')
})

router.get('/authrequired', function(req, res) {
  /*if(req.isAuthenticated()) {
    if (admin)
      res.redirect('/api')
    if(consumidor)
      res.redirect('/user')
  }
  else {
    res.redirect('/')
  }*/
})

module.exports = router