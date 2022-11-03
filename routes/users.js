
var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/:id/index', ensureLoggedIn, usersCtrl.index);
router.get('/:id', ensureLoggedIn, usersCtrl.show);
router.get('/:id/private', ensureLoggedIn, usersCtrl.private);

module.exports = router;