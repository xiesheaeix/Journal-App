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
  // We fetch the user profile based on the ID parameter in the route.
  User.findById(req.params.id, function(err, displayUser) {
    if (err || !displayUser) {
      return res.status(404).send('User not found'); // Handle case where user is not found
    }

    // Fetch the posts belonging to this user
    Post.find({ user: req.params.id, private: false }, function(err, posts) {
      if (err) {
        return res.status(500).send('Error fetching posts');
      }

      // Pass the displayUser, posts, and current user to the view
      res.render('users/show', {
        displayUser, // User whose profile is being viewed
        posts,       // Public posts from the user
        user: req.user // The logged-in user
      });
    });
  });
}


function private(req, res) {
  Post.find({user: req.user._id, private: true}, function(err, posts) { 
    res.render('users/private', { posts });
  });
}


