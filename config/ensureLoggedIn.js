module.exports = function(req, res, next) {
    console.log("User in session:", req.user); 
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
