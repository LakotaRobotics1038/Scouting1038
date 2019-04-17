var express = require('express');
var router = express.Router();

// Controller modules
var team_controller = require('../controllers/teamController');
var match_controller = require('../controllers/matchController');
var event_controller = require('../controllers/eventController');

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

/// MATCH ROUTES ///

// GET request for creating match
router.get('/match/create', match_controller.match_create_get);

// POST request for creating match
router.post('/match/create', match_controller.match_create_post);

// GET request to delete match
router.get('/match/:id/delete', match_controller.match_delete_get);

// POST request to delete match
router.post('/match/:id/delete', match_controller.match_delete_post);

// GET request to update match
router.get('/match/:id/update', match_controller.match_update_get);

// POST request to update match
router.post('/match/:id/update', match_controller.match_update_post);

// GET request for one match
router.get('/match/:id', match_controller.match_details);

// GET request for list of all matches
router.get('/matches', match_controller.match_list);

module.exports = router;
