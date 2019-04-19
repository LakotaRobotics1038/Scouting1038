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

// GET request for one team
router.get('/team/:id', team_controller.team_details);

/// MATCH ROUTES ///

// Get match list
router.get('/matches', match_controller.match_list);

// GET request for match
router.get('/match/:id', match_controller.match_details);

/// EVENT ROUTES ///

// Get match list
router.get('/events', event_controller.event_list);

// GET request for match
router.get('/event/:id', event_controller.event_details);

// scout_match ROUTES ///

// GET request to display scouting forms
router.get('/scouted', scout_match_controller.scout_match_list);

// GET request for scouting match
router.get('/create', scout_match_controller.scout_match_create_get);

// POST request for scouting match
router.post('/create', scout_match_controller.scout_match_create_post);

// GET request for deleting scouted match
router.get('/delete/:id', scout_match_controller.scout_match_delete_get);

// POST request for deleting scouted match
router.post('/delete/:id', scout_match_controller.scout_match_delete_post);

// GET request for updating scouted match
router.get('/update/:id', scout_match_controller.scout_match_update_get);

// POST request for updating scouted match
router.post('/update/:id', scout_match_controller.scout_match_update_post);

module.exports = router;
