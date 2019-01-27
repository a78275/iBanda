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
const fileUpload = require('express-fileupload')

var User = require('./models/user')

//Definição das rotas
var loginRouter = require('./routes/login')
var usersRouter = require('./routes/users')
var apiRouter = require('./routes/api/index')
var adminRouter = require('./routes/admin')
var prodRouter = require('./routes/prod')

var app = express()

//Ligação à BD
mongoose.connect('mongodb://127.0.0.1:27017/amd', {useNewUrlParser: true})
  .then(()=> console.log('Mongo Status: ' + mongoose.connection.readyState))
  .catch(()=> console.log('Erro na conexão ao Mongo.'))

  // Registo de um utilizador
passport.use('registo', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd',
  passReqToCallback: true
}, async (req, email, passwd, done) => {
  try {
      var nome = req.body.nome
      var instr = req.body.instr
      var dataNasc = req.body.dataNasc
      var tipo = req.body.tipo
      var img_path = req.body.img_path
      var habilitacoes = req.body.habilitacoes
      var user = await User.create({nome, email, passwd, instr, dataNasc, tipo, img_path, habilitacoes})
      return done(null, user)
  }
  catch(error) {
      return done(null, false, {message: 'O email já está a ser utilizado!'})
  }
}))

// Login de utilizadores
passport.use('login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
}, async (email, passwd, done) => {
  try {
      var user = await User.findOne({email})
      if (!user) 
          return done(null, false, {message: 'O utilizador não existe.'})
      var valid = await user.isValidPassword(passwd)
      if (!valid)
          return done(null, false, {message: 'Password inválida.'})
      return done(null, user, {message: 'Login feito com sucesso.'})
  }
  catch(error) {
      return done(error)
  }
}))

// Serialização do utilizador (Codificação)
passport.serializeUser((user, done) => {
  done(null, user.email)
})

// Deserialização do utilizador (Codificação)
passport.deserializeUser((email, done) => {
  axios.get('http://localhost:3000/api/user/' + email)
    .then(dados => done(null, dados.data))
    .catch(erro => done(erro, false))
})

// Middleware da Sessão
app.use(session({
  genid: req => {
    console.log('Dentro do middleware da sessão: ' + req.sessionID)
    return uuid()
  },
  store: new FileStore(),
  secret: 'pri2018',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())

app.locals.moment = require('moment')

//Definição dos caminhos das rotas
app.use('/', loginRouter)
app.use('/api', apiRouter)
app.use('/user', usersRouter)
app.use('/admin', adminRouter)
app.use('/prod', prodRouter)

//Apanhar erro 404 e tratar erro
app.use(function(req, res, next) {
  next(createError(404))
})

//Tratar erros
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  //Carregar página de erro
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
