// config/express.js

    // set up =======================
    var express        = require('express')
    var bodyParser     = require('body-parser')     // pull information from HTML POST (express4)
    var logger         = require('morgan')
    var methodOverride = require('method-override') // simulate DELETE and PUT (express4)
    var app            = express()                  // create our app w/ express
    var teamRoutes     = require('../routes/teams.route')
    var matchRoutes    = require('../routes/matches.route')
    var scoreRoutes    = require('../routes/scores.route')
    // configuration =================
    app.use(logger('dev'));
    app.use(express.static(__dirname + '/public'))                 // set the static files location /public/img will be /img for users
    app.use(bodyParser.urlencoded({'extended':'true'}))            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json())                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })) // parse application/vnd.api+json as json
    app.use(methodOverride())

    // routes =========================
    app.use('/teams', teamRoutes)
    app.use('/matches', matchRoutes)
    app.use('/scores', scoreRoutes)

    // export app =====================
    module.exports = app
