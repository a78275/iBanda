var express = require('express');
var router = express.Router();
var axios = require('axios')

//Carrega a página inicial
router.get('/', function(req, res, next) {
    res.render('admin/index')
});

/*-------------------------AGENDA-------------------------*/
router.get('/evento/remover/:id', function(req, res) {
    axios.delete('http://localhost:3000/api/evento/remover/' + req.params.id)
        .then(() => res.redirect('/admin/evento'))
        .catch(erro => {
            console.log('Erro na remoção do evento: ' + erro)
            res.render('error', {error: erro, message: 'Erro na remoção do evento.'})
        })
});

router.get('/evento/editar/:id', function(req, res) {
    axios.put('http://localhost:3000/api/evento/editar/' + req.params.id)
        .then(() => res.redirect('/admin/evento'))
        .catch(erro => {
            console.log('Erro na remoção do evento: ' + erro)
            res.render('error', {error: erro, message: 'Erro na remoção do evento.'})
        })
});

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
            res.redirect('http://localhost:3000/admin/evento')
        })
});

router.post('/evento/:id', function(req, res) {
    axios.post('http://localhost:3000/api/evento' + req.params.id, req.body)
        .then(() => res.redirect('http://localhost:3000/admin/evento'))
        .catch(erro => {
            console.log('Erro na inserção do evento: ' + erro)
            res.render('error', {error: erro, message: 'Erro na inserção do evento.'})
        })
});

router.get('/evento/tipo/:t', function(req, res) {
    axios.get('http://localhost:3000/api/evento/tipo/' + req.params.t)
        .then(eventos => res.render('admin/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos de um tipo: ' + erro)
            res.render('error','error', {error: erro, message: 'na listagem dos eventos de um tipo...'})
        })
});

/*-------------------------OBRAS-------------------------*/
router.post('/obra/partitura', function(req, res) {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
     var startup_image = req.files.ficheiro;
     var fileName = req.files.ficheiro.name;
     // Use the mv() method to place the file somewhere on your server
     startup_image.mv(__dirname + '/../public/partituras/' + fileName , function(err) {
       if(err){
         console.log(err);
       }else{
      console.log("uploaded");
  }
     });
});

router.get('/obra', function(req, res) {
    axios.get('http://localhost:3000/api/obra')
        .then(obras => res.render('admin/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras: ' + erro)
            res.render('error','error', {error: erro, message: 'na listagem das obras...'})
        })
});

router.post('/obra/:id', function(req, res) {
    axios.post('http://localhost:3000/api/obra' + req.params.id, req.body)
        .then(() => res.redirect('http://localhost:3000/admin/obra'))
        .catch(erro => {
            console.log('Erro na inserção da obra: ' + erro)
            res.render('error', {error: erro, message: 'Erro na inserção da obra.'})
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
