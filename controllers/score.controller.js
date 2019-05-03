// controllers/score.controller.js

    // set up ========================
    var mongoose = require('mongoose')
    var Score    = require('../models/score.model') // team model

    // calls =========================

        exports.create_score = function (req, res) {
          res.send('NOT IMPLEMENTED: create score')
        }

        exports.score_details = function (req, res) {
          res.send('NOT IMPLEMENTED: score details')
        }

        exports.update_score = function (req, res) {
          res.send('NOT IMPLEMENTED: update score')
        }

        // delete score
        exports.delete_score = function (req, res) {
          res.send('NOT IMPLEMENTED: delete score')
        }
