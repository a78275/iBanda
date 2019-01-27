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

UserSchema.pre('save', async function (next) {
    var hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchema.methods.isValidPassword = async function (passwd) {
    var user = this
    var compare = await passwd==user.passwd
    return compare
}

module.exports = mongoose.model('User', UserSchema, 'users')
