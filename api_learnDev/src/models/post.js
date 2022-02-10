const mongoose = require('../database');

const postSchema = new mongoose.Schema({
    tittle: {
        type: String
    },
    topico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topico'
    },
    subtopico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtopico'
    },
    order: {
        type: Number
    },
    comment: {
        type: String
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;