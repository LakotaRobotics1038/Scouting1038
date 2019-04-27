// server/config/mongoose.js

    // set up =======================
    var mongoose = require('mongoose')
    var config   = require('./config')

    // configuration =================
    mongoose.connect(config.mongo.url, { useNewUrlParser: true }) // connect to mongoDB
