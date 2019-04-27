// server/server.js

    // set up ==============================
    var config    = require('./config/config')       // configuration import
    var app       = require('./config/express')      // express import for server functioning
    var apiRouter = require('./routes/api.route.js') // route for api requests
    require('./config/mongoose')

    // routes ==============================
    app.use('/api', apiRouter)                       // use /api for api requests

    // start app with node server.js =======
    app.listen(config.port, () => {                  // listen on port
        console.log('server started on port ' + config.port)
    });

    // export app ===========================
    module.exports = app
