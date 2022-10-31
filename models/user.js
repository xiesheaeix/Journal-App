const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        maxLength: 120,
    },
    email: String,
    avatar: String,
  }, {
    timestamps: true, 
  });

module.exports = mongoose.model('User', userSchema);