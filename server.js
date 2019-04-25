// server.js

    // set up ========================
    var express        = require('express');
    var app            = express();                  // create our app w/ express
    var mongoose       = require('mongoose')
    var bodyParser     = require('body-parser');     // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================
    var db = require('./config/db')
    var port = process.env.PORT || 3000
    mongoose.connect(db.url, { useNewUrlParser: true });            // connect to local mongoDB database
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes ========================
    var apiRouter = require('./app/routes/api')
    app.use('/api', apiRouter)

    // start app with node server.js ======================================
    app.listen(port);
    console.log("App listening on port 3000");

    // export app =====================
    exports = module.exports = app
