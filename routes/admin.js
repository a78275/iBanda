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
            res.render('admin/erro', {error: erro, message: 'Erro na remoção do evento.'})
        })
});

router.get('/evento', function(req, res) {
    axios.get('http://localhost:3000/api/evento')
        .then(eventos => res.render('admin/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem dos eventos...'})
        })
});

router.get('/evento/:d', function(req, res) {
    axios.get('http://localhost:3000/api/evento/' + req.params.d)
        .then(evento => res.render('admin/evento', {e: evento.data}))
        .catch(erro => {
            console.log('Erro na listagem do evento: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem do evento...'})
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

router.get('/evento/tipo/:t', function(req, res) {
    axios.get('http://localhost:3000/api/evento/tipo/' + req.params.t)
        .then(eventos => res.render('admin/eventos', {eventos: eventos.data}))
        .catch(erro => {
            console.log('Erro na listagem de eventos de um tipo: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem dos eventos de um tipo...'})
        })
});

/*-------------------------OBRAS-------------------------*/
router.get('/obra', function(req, res) {
    axios.get('http://localhost:3000/api/obra')
        .then(obras => res.render('admin/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras...'})
        })
});

router.get('/obra/tipo/:t', function(req, res) {
    axios.get('http://localhost:3000/api/obra/tipo/' + req.params.t)
        .then(obras => res.render('admin/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras de um tipo: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras de um tipo...'})
        })
});

router.get('/obra/compositor/:c', function(req, res) {
    axios.get('http://localhost:3000/api/obra/compositor/' + req.params.c)
        .then(obras => res.render('admin/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras de um compositor: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras de um compositor...'})
        })
});

router.get('/obra/titulo/:t', function(req, res) {
    axios.get('http://localhost:3000/api/obra/titulo/' + req.params.t)
        .then(obras => res.render('admin/obras', {obras: obras.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras de um título: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras de um título...'})
        })
});

router.get('/obra/:t', function(req, res) {
    axios.get('http://localhost:3000/api/obra/' + req.params.t)
        .then(obra => res.render('admin/obra', {o: obra.data}))
        .catch(erro => {
            console.log('Erro na listagem de obras: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das obras...'})
        })
});

router.post('/obra', function(req, res) {
    axios.post('http://localhost:3000/api/obra', req.body)
        .then(() => {
            res.redirect('http://localhost:3000/admin/obra')
        })
        .catch(erro => {
            console.log('Erro na inserção da obra: ' + erro)
            res.render('admin/erro', {error: erro, message: 'Erro na inserção da obra.'})
        })
});

router.post('/partitura', function(req, res) {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var startup_image = req.files.ficheiro
    var fileName = req.files.ficheiro.name
    // Use the mv() method to place the file somewhere on your server
    startup_image.mv(__dirname + '/../public/partituras/' + fileName , function(err) {
        if(err){
            console.log(err)
        } else {
            console.log("Partitura " + fileName + " carregada.")
        }
    })
    res.redirect('http://localhost:3000/admin/obra')
})

router.get('/obra/remover/:id', function(req, res) {
    axios.delete('http://localhost:3000/api/obra/remover/' + req.params.id)
        .then(() => res.redirect('/admin/obra'))
        .catch(erro => {
            console.log('Erro na remoção da obra: ' + erro)
            res.render('admin/erro', {error: erro, message: 'Erro na remoção da obra.'})
        })
});

router.get('/obra/downloadPartitura/:p', function(req, res){
    var file = __dirname + '/../public/partituras/' + req.params.p
    console.log(file)
    res.download(file); // Set disposition and send it.
  });

/*-------------------------UTILIZADORES-------------------------*/
router.get('/user', function(req, res) {
    axios.get('http://localhost:3000/api/user')
        .then(users => {
                        res.render('admin/users', {users : users.data})
                    })
        .catch(erro => {
            console.log('Erro na listagem de Users: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem de users...'})
        })
})

router.get('/user/remover/:id', function(req, res) {
    axios.delete('http://localhost:3000/api/user/remover/' + req.params.id)
        .then(() => res.redirect('/admin/user'))
        .catch(erro => {
            console.log('Erro na remoção do utilizador: ' + erro)
            res.render('admin/erro', {error: erro, message: 'Erro na remoção do utilizador.'})
        })
});

router.post('/user', function(req, res) {
    axios.post('http://localhost:3000/api/user', req.body)
        .then(() => res.redirect('http://localhost:3000/admin/user'))
        .catch(erro => {
            console.log('Erro na inserção do utilizador: ' + erro)
            res.redirect('http://localhost:3000/admin/user')
        })
});

/*-------------------------NOTICIAS-------------------------*/
router.post('/noticia/invisivel/:id', function(req, res) {
    axios.post('http://localhost:3000/api/noticia/invisivel/' + req.params.id)
        .then(() => res.redirect('http://localhost:3000/admin/noticia'))
        .catch(erro => {
            console.log('Erro na alteração do estado de visibilidade da notícia: ' + erro)
            res.render('admin/erro', {error: erro, message: 'Erro na alteração do estado de visibilidade da notícia.'})
        })
});

router.get('/noticia', function(req, res) {
    axios.get('http://localhost:3000/api/noticia')
        .then(noticias => res.render('admin/noticias', {noticias: noticias.data}))
        .catch(erro => {
            console.log('Erro na listagem de notícias: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem das notícias...'})
        })
});

router.post('/noticia', function(req, res) {
    axios.post('http://localhost:3000/api/noticia', req.body)
        .then(() => res.redirect('http://localhost:3000/admin/noticia'))
        .catch(erro => {
            console.log('Erro na inserção da notícia: ' + erro)
            res.redirect('http://localhost:3000/admin/noticia')
        })
});

/*-------------------------REPERTÓRIO-------------------------*/
router.get('/repertorio', function(req, res) {
    axios.get('http://localhost:3000/api/repertorio')
        .then(repertorio => res.render('admin/repertorio', {repertorio: repertorio.data}))
        .catch(erro => {
            console.log('Erro na listagem do repertório: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem do repertório...'})
        })
});

/*-------------------------ENCICLOPÉDIA-------------------------*/
router.get('/enciclopedia', function(req, res) {
    axios.get('http://localhost:3000/api/enciclopedia')
        .then(enciclopedia => res.render('admin/enciclopedia', {enciclopedia: enciclopedia.data}))
        .catch(erro => {
            console.log('Erro na listagem da enciclopédia: ' + erro)
            res.render('admin/erro','error', {error: erro, message: 'na listagem da enciclopédia...'})
        })
});

module.exports = router;
