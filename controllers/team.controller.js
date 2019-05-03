// controllers/team.controller.js

    // set up ========================
    var mongoose = require('mongoose')
    var Team     = require('../models/team.model') // team model

    // calls =========================
        // get all teams
        exports.list_teams = function (req, res) {
          res.send('NOT IMPLEMENTED: list teams')
        }

        exports.team_details = function (req, res) {
          res.send('NOT IMPLEMENTED: team details')
        }

        // create team and send all teams after
        exports.create_team = function (req, res) {
          res.send('NOT IMPLEMENTED: create team')
        }

        exports.update_team = function (req, res) {
          res.send('NOT IMPLEMENTED: update team')
        }

        // delete team
        exports.delete_team = function (req, res) {
          res.send('NOT IMPLEMENTED: delete team')
        }
