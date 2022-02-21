const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Post = require('../models/post');

//creat
router.post('/', async(req, res) => {

    try {

        req.body.order = await Post.count(
            {
                subtopico: req.body.subtopico
            }
        ) + 1;

        const post = await Post.create(req.body);

        return res.status(200).send({ post });

    }catch(error) {
        return res.status(400).send({ error: '' });
    }

});

//read
router.get('/', async(req, res) => {

    try {

        const post = await Post.find({}).sort({ order: 1 });

        return res.status(200).send({ post });

    }catch(error) {
        return res.status(400).send({ error: '' });
    }

});

//update
router.put('/', async(req, res) => {

    try {

        let post;
        let myQuery;

        //se estiver alterando a order
        if(req.body.newOrder) {

        //se subir
        if(req.body.order > req.body.newOrder) {

            post = await Post.updateMany(
                {
                    $and: [
                        {
                            subtopico: req.body.subtopico
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
                            subtopico: req.body.subtopico
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

        }

        myQuery = await {
            tittle: req.body.tittle,
            topico: req.body.topico,
            subtopico: req.body.subtopico,
            comment: req.body.comment,
            order: req.body.newOrder
        };

        }else{
            myQuery = await {
                tittle: req.body.tittle,
                topico: req.body.topico,
                subtopico: req.body.subtopico,
                comment: req.body.comment
            };
        }

        post = await Post.findByIdAndUpdate(
            req.body._id,
            myQuery, 
            (option = {
                returDocument: "after",
                returnOriginal: false
            })

        );

        return res.status(200).send({ post });
        // return res.send({})

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

//find
router.post('/find', async(req, res) => {
    try {

        const post = await Post.find(
            {
                subtopico: req.body.subtopico
            }
        ).sort({ order: 1 });

        return res.status(200).send({ post })

    }catch(error) {
        return res.status(400).send({ error: 'Find failed' });
    }

});

module.exports = app => app.use('/post', router);