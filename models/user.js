const mongoose = require('mongoose')
    Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/dev/users')

var userSchema = new Schema({
    fname: {type: String},
    lname: {type: String},
    email: {type: String}
})

module.exports = mongoose.model('User', userSchema)