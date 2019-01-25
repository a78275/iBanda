var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema(
    {
        nome: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        passwd: {type: String, required: true},
        instr: {type: String},
        dataNasc: {type: String},
        tipo: {type: String, required: true},
        img_path: {type: String},
        habilitacoes: {type: String}
    }
)

//users é o nome da coleção
module.exports = mongoose.model('User', UserSchema, 'users')
