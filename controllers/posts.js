const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show
};

function index(req, res) {
    Post.find({}, function(err, posts) {
        res.render('posts/index', { posts });
    });
}

function newPost(req, res) {
    res.render('posts/new');
}

function create(req, res) {
    const post = new Post(req.body);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    post.save(function(err) {
        if (err) return res.redirect('/posts/new');
        res.redirect('/posts');
    })
}

function show(req, res) {
    let postId = req.params.id;
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show',{ post });
    });
}
