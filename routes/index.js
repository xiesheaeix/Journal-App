var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home-page');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate('google', {
  successRedirect: function(req, res) {
    console.log("Logged in user:", req.user);  // Debugging the user data
    res.redirect('/users/' + req.user._id);  // Redirect to the user's profile
  },
  failureRedirect: '/'
}));


router.get('/logout', function(req, res) {
  req.logout(function() {
    // Change path for your "landing" page
    res.redirect('/');
  });
});

module.exports = router;
