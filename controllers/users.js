const User = require ('../models/user');
const Post = require ('../models/post');

module.exports = {
   index,
   show
};

function index(req, res) {
  Post.find({user: req.user._id}, function(err, posts) { 
    res.render('users/index', { posts });
  });
}

function show(req, res) {
    User.findById(req.params.id, function(err, user) { 
      Post.find({user: req.params.id}, function(err, posts) { 
        res.render('users/show',{ user, posts });
    });
  });
}
