const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnDev');
mongoose.Promise = global.Promise;

mudule.exports = mongoose;