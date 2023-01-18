const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({ 
postText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
},
postAuthor: {
    type: String,
    required: true,
    trim: true,
},
likes: [
    {
        liker: {
            type: String,
            required: true,
        },
        likeCount: {
            type: Number,
            default: 0,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
],

createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
},
comments: [
    {
        commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        commentAuthor: {
            type: String,
            required: true,
          },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
],
});

const Post = model('Post', postSchema);
module.exports = Post;