const mongoose = require('../database')

const temaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
});

const Tema = mongoose.Schema('Tema', temaSchema);

module.exports = Tema;