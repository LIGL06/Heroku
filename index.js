const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT

const Usrctrl = require('./controllers/users')
const users = express.Router()

users.route('/users')
    .get(Usrctrl.findAllUsers)
    .post(Usrctrl.addUser)
    .route('/users/:id')
    .get(Usrctrl.findUser)
    .put(Usrctrl.updateUser)
    .delete(Usrctrl.deleteUser)

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    }, function (error, res) {
        if (error) console.log('ERROR: connecting. ' + error)
    })

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(port, () => console.log(`Listening on ${ port }`))