const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Post = require('../models/post');

//creat
router.post('/', async(req, res) => {

    try {

        console.log(req.body)

        req.body.order = await Post.count({}) + 1;

        const post = await Post.create(req.body);

        return res.status(200).send({ post });

    }catch(error) {
        return res.status(400).send({ error: '' });
    }

});

//read
router.get('/', async(req, res) => {

    try {

        const post = await Post.find({});

        return res.status(200).send({ post });

    }catch(error) {
        return res.status(400).send({ error: '' });
    }

});

//update
router.put('/', async(req, res) => {

    try {

        let post;

        //se subir
        if(req.body.order > req.body.newOrder) {
            console.log('subir')
            post = await Post.updateMany(
                {
                    $and: [
                        {
                            topico: req.body.topico
                        },
                        {
                            order: { $gte: req.body.newOrder }                        
                        },
                        {
                            order: { $lt: req.body.order }
                        }
                    ]
                },
                {
                    $inc: { order: 1 }
                }
            );

        };
        
        //se descer
        if(req.body.order < req.body.newOrder) {

            post = await Post.updateMany(
                {
                    $and: [
                        {
                            topico: req.body.topico
                        },
                        {
                            order: { $gt: req.body.order }
                        },
                        {
                            order: { $lte: req.body.newOrder }
                        }
                    ]
                },
                {
                    $inc: { order: -1 }
                },
            )

        };

        post = await Post.findByIdAndUpdate(
            req.body._id,
            {
                titte: req.body.titte,
                comment: req.body.comment,
                order: req.body.newOrder
            },
            (option = {
                returDocument: "after",
                returnOriginal: false
            })

        );

        return res.status(200).send({ post });

    }catch(error) {
        return res.status(400).send({ error: '' });
    }

});

//delete
router.delete('/', async(req, res) => {

    try {

        const post = await Post.findByIdAndDelete(req.body._id);
        
        return res.status(200).send({ post });

    }catch(error) {
        return res.status(400).send({ error: '' });
    }

});

router.post('/find', async(req, res) => {

    try {

        const post = await Post.find(
            {
                topico: req.body.topico
            }
        ).sort({ order: 1 });

        return res.status(200).send({ post })

    }catch(error) {
        return res.status(400).send({ error: 'Find failed' });
    }

});

module.exports = app => app.use('/post', router);