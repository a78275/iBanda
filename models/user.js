var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema(
    {
        nome: {type: String, required: true},
        email: {type: String, required: true},
        passwd: {type: String, required: true},
        instr: {type: String, required: true},
        dataNasc: {type: String, required: true},
        habilitacoes: {type: String}
    }
)

//users é o nome da coleção
module.exports = mongoose.model('User', UserSchema, 'users')
