const User = require ('../models/user');
const Post = require ('../models/post');

module.exports = {
   index,
   show,
   private,
};

function index(req, res) {
  Post.find({user: req.user._id, private: false}, function(err, posts) { 
    res.render('users/index', { posts });
  });
}

function show(req, res) {
  let user = req.user;
    User.findById(req.params.id, function(err, displayUser) { 
      Post.find({user: req.params.id, private: false}, function(err, posts) { 
        res.render('users/show',{ displayUser, posts, user });
    });
  });
}

function private(req, res) {
  Post.find({user: req.user._id, private: true}, function(err, posts) { 
    res.render('users/private', { posts });
  });
}


