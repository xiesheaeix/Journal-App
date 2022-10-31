const User = require ('../models/user');
const Post = require ('../models/post');

module.exports = {
   index,
   show
};


function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', { users });
    });
}

function show(req, res) {
    User.findById(req.params.id)
    .populate('posts')
    .exec(function(err, post) {
        Post.find(
            {_id: {$nin: post.content}},
            function(err, posts){
                console.log(posts);
                console.log(post);
                res.render('users/index', {
                    user,
                    post
            });
        }
        );
    });
}

