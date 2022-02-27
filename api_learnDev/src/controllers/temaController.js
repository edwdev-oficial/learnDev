const express = require('express');
const mongoose = require('mongoose');
const Tema = require('../models/tema');
const router = express.Router();

router.post('/', async(req, res) => {

    try {

        let tema = await Tema.create(req.body);
        tema = await Tema.find({});
        return res.send(tema);

    }catch(error) {
        return res.status(400).send({ error: 'Registration failed' });
    }

});

router.get('/', async(req, res) => {

    try{

        const tema = await Tema.find({ });

        return res.status(200).send({ tema })

    }catch(error) {
        return res.status(400).send({ error: 'List failed' });
    }

});

router.put('/', async(req, res) => {

    try {

        const tema = await Tema.findByIdAndUpdate(
                req.body._id,
            {
                    nome: req.body.nome
            },
            (options = {
                returnDocument: "after",
                returnOriginal: false,
              })
        );

        return res.status(200).send({ tema });

    }catch {
        return res.status(400).send({ error: 'Update failed' });
    }

});

router.delete('/', async(req, res) => {

    try {

        let tema = await Tema.findByIdAndDelete(
            req.body._id
        );

        tema = await Tema.find({});

        return res.status(200).send(tema);

    }catch(error) {
        return res.status(400).send({ error: 'Delete failed' })
    }


});

module.exports = app => app.use('/tema', router);