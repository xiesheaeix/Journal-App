const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    content: {
        type: String,
        maxLength: 120,
        required: true
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
    comments: [commentSchema],  
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);