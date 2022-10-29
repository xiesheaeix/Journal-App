
var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var ensureLoggedIn = require('../config/ensureLoggedIn');



router.get('/', function(req, res, next) {
  res.render('users/index');
});

router.get('/users', ensureLoggedIn, usersCtrl.index);


module.exports = router;