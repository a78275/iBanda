var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')

var uuid = require('uuid/v4')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var axios = require('axios')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

//Definição das rotas
var loginRouter = require('./routes/login')
var usersRouter = require('./routes/users')
var apiRouter = require('./routes/api/index')
var adminRouter = require('./routes/admin')

var app = express()

//Ligação à BD
mongoose.connect('mongodb://127.0.0.1:27017/amd', {useNewUrlParser: true})
  .then(()=> console.log('Mongo Status: ' + mongoose.connection.readyState))
  .catch(()=> console.log('Erro na conexão ao Mongo.'))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//Definição dos caminhos das rotas
app.use('/', loginRouter)
app.use('/api', apiRouter)
app.use('/user', usersRouter)
app.use('/admin', adminRouter)

//Apanhar erro 404 e tratar erro
app.use(function(req, res, next) {
  next(createError(404))
});

//Tratar erros
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  //Carregar página de erro
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
