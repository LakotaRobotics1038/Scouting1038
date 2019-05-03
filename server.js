// server.js

    // set up ========================
    var config      = require('./config/config')
    var app         = require('./config/express')
    require('./config/mongoose')

    // start app =====================
    app.listen(config.port, () => {
        console.log('server started')
    });

    // export app =====================
    module.exports = app
