var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();

router.get('/app', function(req, res, next) {
  res.render('users/app', { title: 'User Management' });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
