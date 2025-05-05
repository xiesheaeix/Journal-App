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
    // Redirecting to the user's profile page after successful login
    res.redirect('/users/' + req.user._id); // Use the logged-in user's ID
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
