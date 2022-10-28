const Post = require('../model/post');

module.exports = {
    index
};

function index(req, res) {
    res.render('post/index');
}