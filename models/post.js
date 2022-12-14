const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    contents: {
        type: String,
        maxLength: 120,
    },
    user: {
       type: Schema.Types.ObjectId,
       ref: 'User',
     },
     userName: String,
     userAvatar: String,
});

const postSchema = new Schema({
    title: String,
    content: {
        type: String,
        maxLength: 1200,
        required: true
    },
    private: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      userName: String,
      userAvatar: String,
    comments: [commentSchema],  
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);