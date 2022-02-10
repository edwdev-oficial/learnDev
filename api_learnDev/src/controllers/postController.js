const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.post('/', async(req, res) => {

    try {

        const post = await Post

        return res.status(200).send({ post })

    }catch(error) {
        return res.status(400).send({ error: '' })
    }

});

router.post('/', async(req, res) => {

    try {

        const post = await Post

        return res.status(200).send({ post })

    }catch(error) {
        return res.status(400).send({ error: '' })
    }

});

router.post('/', async(req, res) => {

    try {

        const post = await Post

        return res.status(200).send({ post })

    }catch(error) {
        return res.status(400).send({ error: '' })
    }

});

router.post('/', async(req, res) => {

    try {

        const post = await Post

        return res.status(200).send({ post })

    }catch(error) {
        return res.status(400).send({ error: '' })
    }

});


module.exports = app => app.use('/post', router)