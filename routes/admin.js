var express = require('express');
var router = express.Router();
var axios = require('axios')

//Carrega a página inicial
router.get('/', function(req, res, next) {
    res.render('admin/index')
});

/*-------------------------AGENDA-------------------------*/
router.get('/evento', function(req, res) {
    res.render('admin/inserirEvento');
});

/*
router.get('/evento', function(req, res) {
    axios.get('http://localhost:3000/api/evento/listar')
        .then(eventos => res.render('admin/listarEventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos: ' + erro)
            res.render('error','error', {error: erro, message: 'na listagem dos eventos...'})
        })
})

*/



/*-------------------------UTILIZADORES-------------------------*/
router.get('/user', function(req, res) {
    axios.get('http://localhost:3000/api/user')
        .then(users => { console.log(users.data) 
                        res.render('admin/users', {users : users.data})
                    })
        .catch(erro => {
            console.log('Erro na listagem de Users: ' + erro)
            res.render('error','error', {error: erro, message: 'na listagem de users...'})
        })
})

module.exports = router;
