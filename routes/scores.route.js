// routes/scores.route.js

    // set up ========================
    var express   = require('express')
    var router    = express.Router()                             // router for http
    var scoreCtrl = require('../controllers/score.controller.js') // controller import

    // routes ========================

        // create score
        router.post('/', scoreCtrl.create_score)

        // retrieve score
        router.get('/:id', scoreCtrl.score_details)

        // update specifc score
        router.put('/:id', scoreCtrl.update_score)

        // delte score
        router.delete('/:id', scoreCtrl.delete_score)

    // export ========================
    module.exports = router
