var express = require('express');
var router = express.Router();

// Controller modules
var team_controller = require('../controllers/teamController');

// GET request for team details
router.get('/', team_controller.team_details);

module.exports = router;
