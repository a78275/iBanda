var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RepertorioSchema = new Schema({
    evento: {type: String, required: true},
    obras: {type: [String]}
})

module.exports = mongoose.model('Repertorio', RepertorioSchema, 'repertorio')