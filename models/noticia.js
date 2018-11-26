var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NoticiaSchema = new Schema({
    data: {type: String, required: true},
    titulo: {type: String, required: true},
    corpo: {type: String, required: true}
})

// 'eventos' é a coleção na BD!
module.exports = mongoose.model('Noticia', NoticiaSchema, 'noticias')