var mongoose = require('mongoose')
var Schema = mongoose.Schema

var NoticiaSchema = new Schema({
    data: {type: String, required: true},
    titulo: {type: String, required: true},
    subtitulo: {type: String},
    hash: {type: String},
    img_path: {type: String},
    corpo: {type: String, required: true},
    visivel: {type: Boolean}
})

module.exports = mongoose.model('Noticia', NoticiaSchema, 'noticias')