// server.js

    // set up ==============================
    var config = require('./config/config')
    var app    = require('./config/express')
    require('./config/mongoose')
    var apiRouter = require('./routes/api.route.js')

    // routes ==============================
    app.use('/api', apiRouter)

    // start app with node server.js =======
    app.listen(config.port, () => {
        console.log('server started')
    });

    // export app ===========================
    module.exports = app
