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
  async.parallel({
          teams: function(callback) {
              Team.find(callback);
          },
          matches: function(callback) {
              Match.find(callback);
          },
      }, function(err, results) {
          if (err) { return next(err); }
          res.render('scout_match_form', { title: 'Scout New Match', teams: results.teams, matches: results.matches });
      });};

// Handle match scouting form on POST
exports.scout_match_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Match Scouting form post');
};

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
