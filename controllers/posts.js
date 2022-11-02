const Post = require('../models/post');

module.exports = {
    index,
    create,
    show,
    edit,
    delete: deletePost
};

function index(req, res) {
    Post.find({private: false}, function(err, posts) {
        res.render('posts/index', { posts });
    });
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    if (req.body.private) {
        req.body.private = true;
    } else {
        req.body.private = false;
    }
    
    const post = new Post(req.body);
    post.save(function(err) {
        if (err) return res.redirect('/posts');
        res.redirect('/posts');
    });
}

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show',{ post });
    });
}

function deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id, (err, post) => {
        if(err) {
            console.log(err);
            res.redirect("/");
        } else res.redirect("/posts");
    });
}


function edit(req, res) {
    console.log(req.body);
    Post.findOneAndUpdate({
        _id:  req.params.id,
    },
    req.body, 
   {new: true}, (err, post) => {
            res.redirect('/posts');
    });
}