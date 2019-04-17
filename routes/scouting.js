var express = require('express');
var router = express.Router();

// Controller modules
var team_controller = require('../controllers/teamController');
var match_controller = require('../controllers/matchController');
var event_controller = require('../controllers/eventController');

/// TEAM ROUTES ///

// Get scouting home page
router.get('/', team_controller.index);

module.exports = router;
