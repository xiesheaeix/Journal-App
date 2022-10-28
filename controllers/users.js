const User = require = ('../models/user');

module.exports = {
    addBio,
};

function addBio(req, res) {
    User.findById(req.params.id, function(err, user) {
        
    });
}