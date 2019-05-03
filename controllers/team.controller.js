// controllers/teamController.js

    // set up ========================
    var mongoose = require('mongoose')
    var Team     = require('../models/team.model') // team model

    // calls =========================
        // get all teams
        exports.list_teams = function (req, res) {

          // use mongoose to find all teams
          Team.find(function(err, teams) {

            if (err)                         // if error, send error
              res.send(err)

            res.json(teams)                  // return teams in JSON format
          })
        }

        // create team and send all teams after
        exports.create_team = function (req, res) {

          // create team with data from AJAX from Angular
          Team.create({
            number: req.body.number,
          }, function(err, team) {
            if (err)                          // if error, send error
              res.send(err)

            this.list_teams                   // return all teams
          })
        }

        // delete team
        exports.delete_team = function (req, res) {

          Team.remove({
            _id: req.params.team_id
          }, function(err, team) {
            if (err)                          // if error, send error
              res.send(err)

            this.list_teams                   // return all teams
          })
        }
