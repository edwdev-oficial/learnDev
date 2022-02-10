const mongoose = require('../database');

const postSchema = mongoose.Schema( {
    
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;