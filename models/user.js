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
        required: true
    },
    email: String,
    avatar: String,
    birthday: Number
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);