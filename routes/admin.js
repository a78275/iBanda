var express = require('express');
var router = express.Router();
var axios = require('axios')

//Carrega a página inicial
router.get('/', function(req, res, next) {
    res.render('admin/index')
});

/*-------------------------AGENDA-------------------------*/
router.get('/evento', function(req, res) {
    axios.get('http://localhost:3000/api/evento')
        .then(eventos => res.render('admin/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos: ' + erro)
            res.render('error','error', {error: erro, message: 'na listagem dos eventos...'})
        })
});

router.post('/evento', function(req, res) {
    axios.post('http://localhost:3000/api/evento', req.body)
        .then(() => res.redirect('http://localhost:3000/admin/evento'))
        .catch(erro => {
            console.log('Erro na inserção do evento: ' + erro)
            res.render('error', {error: erro, message: 'Erro na inserção do evento.'})
        })
});

router.delete('/evento/remover/:id', function(req, res) {
    axios.delete('http://localhost:3000/api/evento/remover/' + req.params.id, {
        data: { _id: req.params.id }
    })
        .then(() => res.redirect('/evento'))
        .catch(erro => {
            console.log('Erro na remoção do evento: ' + erro)
            res.render('error', {error: erro, message: 'Erro na remoção do evento.'})
        })
});




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
