const mongoose = require('../database')

const TemaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
});

const Tema = mongoose.model('Tema', TemaSchema);

module.exports = Tema;