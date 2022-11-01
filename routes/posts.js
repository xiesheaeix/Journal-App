var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.show);

router.post('/', ensureLoggedIn, postsCtrl.create);
router.put('/:id', ensureLoggedIn, postsCtrl.edit);

router.delete('/:id', ensureLoggedIn, postsCtrl.delete);


module.exports = router;
