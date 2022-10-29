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
    posts: [{
      type: Schema.Types.ObjectId, 
      ref: 'Post'
    }],
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);