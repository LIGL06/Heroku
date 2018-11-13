const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.send('HI'))
    .listen(port, () => console.log(`Listening on ${ port }`))