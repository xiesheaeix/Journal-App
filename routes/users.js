
var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var ensureLoggedIn = require('../config/ensureLoggedIn');



router.get('/', ensureLoggedIn, usersCtrl.index);
router.get('/:id', usersCtrl.show);


module.exports = router;