const express = require('express');
const Topico = require('../models/topico');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/', async(req, res) => {

    try {

        const topico = await Topico.create(req.body);

            return res.status(200).send({ topico });

    }catch(error) {
        return res.status(400).send({ error: '' })
    }

});

router.get('/', async(req, res) => {

    try {

        const topico = await Topico.find({});

        return res.status(200).send({ topico })

    }catch(error) {
        return res.status(400).send({ error: '' })
    }

});

router.post('/find', async(req, res) => {

    try {

        const topico = await Topico.find(
            {
                tema: req.body.tema
            },
        ).sort({ order: 1 });

        return res.status(200).send({ topico });

    }catch(error) {
        return res.status(400).send({ error: 'Find failed' });
    }

});

router.put('/', async(req, res) => {

    try {

        let topico;

        // pega todos que tiverem order igual ou maior que req.body.newOrder e menor que req.body.order e acrecenta 1

        if (req.body.newOrder < req.body.order) {

            topico = await Topico.updateMany(
                {
                    tema: req.body.tema,
                    $and: [
                        {
                            order: { $gte: req.body.newOrder }, 
                            order: { $lt: req.body.order }
                        }
                    ]
                },
                {
                    $inc: { order: 1 }
                }
            );

        };

        if (req.body.newOrder > req.body.order) {

            topico = await Topico.updateMany(
                {
                    tema: req.body.tema,
                    $and: [
                        {
                            order: { $gt: req.body.order }, 
                            order: { $lte: req.body.newOrder }
                        }
                    ]
                },
                {
                    $inc: { order: -1 }
                }
            );

        };

        topico = await Topico.findByIdAndUpdate(
            req.body._id,
            {
                nome: req.body.nome,
                order: req.body.newOrder
            },
            (options ={
                returnDocument: "after",
                returnOriginal: false
            })
        );

        return res.status(200).send({ topico });

    }catch(error) {
        return res.status(400).send({ error: '' });
    }

});

router.delete('/', async(req, res) => {

    try {

    }catch(error) {
        return res.status(400).send({ error: '' })
    }

});

module.exports = app => app.use('/topico', router);