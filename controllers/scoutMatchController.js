var ScoutMatch = require('../models/scoutMatch');
var Team = require('../models/team');
var Match = require('../models/match');
var async = require('async');
let { body,validationResult } = require('express-validator/check');
let { sanitizeBody } = require('express-validator/filter');

// Display list of forms
exports.scout_match_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Scouted match list');
};

// Display match scouting form
exports.scout_match_create_get = function (req, res, next) {
  res.render('scout_match_form', { title: 'Scout New Match'});
};

// Handle match scouting form on POST
exports.scout_match_create_post = [
  // Validate Feilds
  body('team_number', 'Team number must not be empty.').isLength({ min: 1 }).trim(),
  body('match_number', 'Match number must not be empty.').isLength({ min: 1 }).trim(),

  sanitizeBody('*').escape(),

  // Process request after validation and sanitization
  (req, res, next) => {
    // Extract validation errors from a request
    var errors = validationResult(req);

    // Create scoutMatch object with escaped and trimmed data
    var scoutMatch = new ScoutMatch(
      { team_number: req.body.team_number,
        match_number: req.body.match_number
      });

    if(!errors.isEmpty()) {
      // There are errors  Render from again with sanitized values/error messages
      res.render('scout_match_form', { title: 'Scout New Match', team_number: team_number, errors: errors.array()});
    } else {
      scoutMatch.save(function(err) {
        if (err) {
          return next(err);
        }
        // Redirect to new scouted match
        res.redirect('/scouting/');
      });
    }
  }
];

// Display scouted match delete form
exports.scout_match_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Match Delete form');
};

// Handle scouted match delete form on POST
exports.scout_match_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Match Delete form POST');
};

// Display scouted match update form
exports.scout_match_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Match Update form');
};

// Display scouted match update form POST
exports.scout_match_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Match Update form POST');
};
