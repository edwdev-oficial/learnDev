const mongoose = require('../database');

const TopicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tema: {
        type: new mongoose.Types.ObjectId(),
        referece: 'Tema'
    }
});

const Topico = mongoose.model('Topico', TopicoSchema);

module.exports = Topico;