const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PostSchema = new Schema({ 
postText: {
    type: String,
    minlength: [1, "need a better post"],
    maxlength: [200, "chill out man"],
    required: 'You need to leave a post!',
},
postAuthor: {
    type: String,
    trim: true,
    required: true,
},
likeCount: {
    type: Number,
    default: 0
},
createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
},
comment: [
    {
        commentText: {
            type: String,
            minlength: 1,
            maxlength: 280,
            required: true,
        },
        commentAuthor: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        }
    }
]
});

const Post = model('Post', PostSchema);
module.exports = Post;
