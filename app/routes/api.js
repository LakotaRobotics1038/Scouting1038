// app/routes/api.js

    // set up ========================
    var express         = require('express')
    var router          = express.Router()                         // router for http
    var team_controller = require('../controllers/teamController') // controller import

    // routes ========================
        // get all teams
        router.get('/teams', team_controller.list_teams)

        // create team and send all teams after
        router.post('/teams', team_controller.create_team)

        // delte team
        router.delete('/teams/:team_id', team_controller.delete_team)

    // export ========================
    module.exports = router
