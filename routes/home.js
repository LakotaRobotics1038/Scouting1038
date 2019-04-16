var express = require('express');
var router = express.Router();

// Controller modules
// var team_controller = require('../controllers/teamController');

router.get('/', function (req, res) {
  res.send('Home is working')
})
router.get('/list', function (req, res) {
  // Query to get data
  db.query('SELECT * FROM `teams`', function (err, result) {
    if (err) {
      res.redirect('/');
    }
  });
});

module.exports = router;
