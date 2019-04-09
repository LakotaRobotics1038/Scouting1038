const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const port = 8000

// Global app object
var app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Listening on port ${port}')
})