var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', postsCtrl.index);
router.get('/new', ensureLoggedIn, postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.post('/', ensureLoggedIn, postsCtrl.create);
router.get('/posts/:id/edit', ensureLoggedIn, postsCtrl.edit);
router.delete('/posts/:id', postsCtrl.delete);


module.exports = router;