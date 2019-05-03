// routes/match.route.js

    // set up ========================
    var express   = require('express')
    var router    = express.Router()                             // router for http
    var matchCtrl = require('../controllers/match.controller.js') // controller import

    // routes ========================
        // get all matches
        router.get('/', matchCtrl.list_matches)

        // create match and send all matches after
        router.post('/', matchCtrl.create_match)

        // get match details for specific match
        router.get('/:id', matchCtrl.match_details)

        // update specifc match
        router.put('/:id', matchCtrl.update_match)

        // delte match
        router.delete('/:id', matchCtrl.delete_match)

    // export ========================
    module.exports = router
