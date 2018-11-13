const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.findAllUsers = function (req, res) {
    User.find(function (err, users) {
        if (err) res.status(500).send(err.message)
        res.status(200).jsonp(users)
    })
}
exports.findUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) res.status(500).send(err.message)
        res.status(200).jsonp(user)
    })
}
exports.addUser = function (req, res) {
    var user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email
    })
    user.save(function (err, users) {
        if (err) res.status(500).send(err.message)
        res.status(200).jsonp(users)
    })
}
exports.updateUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        user.fname = req.body.fname;
        user.lname = req.body.lname;
        user.email = req.body.emai;
        user.save(function (err, users) {
            if (err) res.status(500).send(err.message)
            res.status(200).jsonp(users)
        })
    })
}
exports.deleteUser = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        user.remove(function (err) {
            if (err) res.status(500).send(err.message)
            res.status(200).jsonp(user)
        })
    })
}