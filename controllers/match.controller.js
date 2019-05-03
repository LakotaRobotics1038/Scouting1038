// controllers/match.controller.js

    // set up ========================
    var mongoose = require('mongoose')
    var Match    = require('../models/match.model') // team model

    // calls =========================
        // get all matches
        exports.list_matches = function (req, res) {
          res.send('NOT IMPLEMENTED: list matches')
        }

        exports.match_details = function (req, res) {
          res.send('NOT IMPLEMENTED: match details')
        }

        // create match and send all matches after
        exports.create_match = function (req, res) {
          res.send('NOT IMPLEMENTED: create match')
        }

        exports.update_match = function (req, res) {
          res.send('NOT IMPLEMENTED: update score')
        }

        // delete match
        exports.delete_match = function (req, res) {
          res.send('NOT IMPLEMENTED: delete match')
        }
