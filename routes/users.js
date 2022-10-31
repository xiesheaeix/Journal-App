
var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var ensureLoggedIn = require('../config/ensureLoggedIn');



router.get('/', ensureLoggedIn, usersCtrl.index);


module.exports = router;