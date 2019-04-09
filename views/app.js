const express = require('express')
const bodyParser = require('body-parser')
const port = 8000

// Global express instance
var app = express()

app.listen(port, () => {
    console.log('Listening on port ${port}')
})