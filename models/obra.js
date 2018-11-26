var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PartituraSchema = new Schema({
    path: {type: String},
    voz: {type: String},
    afinacao: {type: String},
    clave: {type: String}
})

var InstrumentoSchema = new Schema({
    nome: {type: String},
    partitura: {type: PartituraSchema}
})

var ObraSchema = new Schema({
    titulo: {type: String, required: true},
    tipo: {type: String, required: true},
    compositor: {type: String, required: true},
    arranjo: {type: String},
    instrumentos: {type: [InstrumentoSchema]}
})

module.exports = mongoose.model('Obra', ObraSchema, 'obras')