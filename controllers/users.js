const User = require ('../models/user');
const Post = require ('../models/post');

module.exports = {
   index,
};

function index(req, res) {
  Post.find({user: req.user._id}, function(err, posts) { console.log(posts);
    res.render('users/index', { posts });
  });
}

