const mongoose = require('../database');

const TopicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tema'
    },
    order: {
        type: Number
    }
});

const Topico = mongoose.model('Topico', TopicoSchema);

module.exports = Topico;