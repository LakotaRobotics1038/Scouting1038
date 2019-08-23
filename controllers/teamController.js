var Team = require('../models/team');

var async = require('async');

// Display list of all teams
exports.team_list = function (req, res) {
  async.parallel({
    team_count: function(callback) {
      Team.countDocuments({}, callback);
    }
  }, function(err, results) {
    res.render('index', { title: 'Scouting Home', error: err, data: results});
  });
};

// Display team details page
exports.team_details = function (req, res) {
  res.send('NOT IMPLEMENTED: Team Details');
};

// Display team create form on GET
exports.team_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Team Create GET');
};

// Handle team create form on POST
exports.team_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Team Create POST');
};

// Display team delete form on GET
exports.team_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Team Delete GET');
};

// Handle team delete form on POST
exports.team_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Team Delete POST');
};

// Display team update form on GET
exports.team_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Team Update GET');
};

// Handle team update form on POST
exports.team_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Team Update POST');
};
