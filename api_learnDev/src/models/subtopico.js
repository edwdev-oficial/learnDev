const mongoose = require('../database');

const subtopicoSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    topico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topico'
    },
    order: {
        type: Number
    }
});

const Subtopico = mongoose.model('Subtopico', subtopicoSchema);

module.exports = Subtopico;