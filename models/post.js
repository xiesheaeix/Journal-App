const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: {
        type: String,
        maxLength: 1200,
        required: true
    },  
     user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      userName: String,
      userAvatar: String,
}, {
     timestamps: true
});

module.exports = mongoose.model('Post', postSchema);