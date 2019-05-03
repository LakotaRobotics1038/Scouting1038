// routes/team.route.js

    // set up ========================
    var express  = require('express')
    var router   = express.Router()                             // router for http
    var teamCtrl = require('../controllers/team.controller.js') // controller import

    // routes ========================

        // calls for '/'
        router.route('/')
          // get all teams
          .get(teamCtrl.list_teams)

          // create team and send all teams after
          .post(teamCtrl.create_team)

        // get team details for specific team
        router.get('/:id', teamCtrl.team_details)

        // update specifc team
        router.put('/:id', teamCtrl.update_team)

        // delte team
        router.delete('/:id', teamCtrl.delete_team)

    // export ========================
    module.exports = router
