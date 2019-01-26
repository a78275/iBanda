var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HorarioSchema = new Schema({
    hinicio: {type: String},
    hfim: {type: String}
})

var EventoSchema = new Schema({
    data: {type: String, required: true},
    tipo: {type: String, required: true},
    local: {type: String, required: true},
    horario: {type: HorarioSchema}, 
    designacao: {type: String, required: true, unique: true},
    informacoes: {type: String}
})

// 'eventos' é a coleção na BD
module.exports = mongoose.model('Evento', EventoSchema, 'eventos')