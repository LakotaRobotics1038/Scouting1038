var express = require('express');
var router = express.Router();

// Controller modules
var team_controller = require('../controllers/teamController');
var match_controller = require('../controllers/matchController');
var event_controller = require('../controllers/eventController');
var scout_match_controller = require('../controllers/scoutMatchController');

/// TEAM ROUTES ///

// Get scouting home page
router.get('/', team_controller.team_list);

// GET request for creating team
router.get('/team/create', team_controller.team_create_get);

// POST request for creating team
router.post('/team/create', team_controller.team_create_post);

// GET request to delete team
router.get('/team/:id/delete', team_controller.team_delete_get);

// POST request to delete team
router.post('/team/:id/delete', team_controller.team_delete_post);

// GET request to update team
router.get('/team/:id/update', team_controller.team_update_get);

// POST request to update team
router.post('/team/:id/update', team_controller.team_update_post);

// GET request for one team
router.get('/team/:id', team_controller.team_details);

// SCOUTMATCH ROUTES ///

// GET request for scouting match
router.get('/scout/match', scout_match_controller.scoutMatch_create_get);

// POST request for scouting match
router.post('/scout/match', scout_match_controller.scoutMatch_create_post);

module.exports = router;
