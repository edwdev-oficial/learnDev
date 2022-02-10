const express = require('express');
const router = express.Router();
const Subtopico = require('../models/subtopico');

// create
router.post('/', async(req, res) => {

    try {

        // req.body.order = await Subtopico.count({ topico: req.body.topico }) + 1;

        const subtopico = await Subtopico.create(req.body);

        return res.status(200).send({ subtopico });

    }catch(error) {
        return res.status(400).send({ error: 'Create failed' });
    };

});

// read
router.get('/', async(req, res) => {

    try {

        const subtopico = await Subtopico.find({

         }
        ).sort({ order: 1 });

        return res.status(200).send({ subtopico });

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});

// update
router.put('/', async(req, res) => {

    try {

        let subtopico;

        // se subindo
        if (req.body.newOrder < req.body.order) {
           
            subtopico = await Subtopico.updateMany(
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
                    ],
                },
                {
                    $inc: { order: 1 }
                }
            );

        };

        // se descendo
        if (req.body.order < req.body.newOrder) {
            
            subtopico = await Subtopico.updateMany(
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
                }
            );

        };

        subtopico = await Subtopico.findByIdAndUpdate(
            req.body._id,
            {
                nome: req.body.nome,
                order: req.body.newOrder
            },
            (options = {
                returnDocument: "after",
                returnOriginal: false
            })
        ).sort({ order: 1 });


        return res.status(200).send({ subtopico });

    }catch(error) {
        console.log(error)
        return res.status(400).send({ error: 'Update Failed' });
    };

});

// arrumar
router.put('/arrumar', async(req, res) => {

    try {

        let subtopico = await Subtopico.updateMany(
            {
                topico: req.body.topico 
            },
            {
                order: 0
            },
            (options = {
                returnDocument: "after",
                returnOriginal: false
            })
        ).sort({ order: 1 });

        subtopico = await Subtopico.find(
            {
                topico: req.body.topico
            }
        ).sort({ order: 1 });

        for (let i = 0; i < await Subtopico.count({ topico: req.body.topico }); i++ ){
            
            let _id = subtopico[i]._id
            
            subtopico1 = await Subtopico.findByIdAndUpdate(
                _id,
                {
                    order: i + 1
                }
            )

        }

        subtopico = await Subtopico.find(
            {
                topico: req.body.topico
            }
        ).sort({ order: 1 });        

        return res.status(200).send({ subtopico });

    }catch(error) {
        console.log(error)
        return res.status(400).send({ error: 'Update Failed' });
    };

});

// delete
router.delete('/', async(req, res) => {

    try {

        const subtopico = await Subtopico.findByIdAndDelete(
            req.body._id
        );

        return res.status(200).send({ subtopico });

    }catch(error) {
        return res.status(400).send({ error: '' });
    };

});


// find by topico
router.post('/find', async(req, res) => {

    try {

        const subtopico = await Subtopico.find(
            {
                topico: req.body.topico
            }
        ).sort({ order: 1 });

        return res.status(200).send({ subtopico });

    }catch(error) {
        return res.status(400).send({ error: 'Find failed' });
    };

});

module.exports = app => app.use('/subtopico', router);