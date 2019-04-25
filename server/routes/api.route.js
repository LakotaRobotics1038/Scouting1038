// server/routes/api.route.js

    // set up ========================
    var express  = require('express')
    var router   = express.Router()                             // router for http
    var teamCtrl = require('../controllers/team.controller.js') // controller import

    // routes ========================
        // get all teams
        router.get('/teams', teamCtrl.list_teams)

        // create team and send all teams after
        router.post('/teams', teamCtrl.create_team)

        // delte team
        router.delete('/teams/:team_id', teamCtrl.delete_team)

    // export ========================
    module.exports = router
