const express = require('express');
const bodyparser = require('../node_modules/body-parser');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send({ mensagem: 'app rodando ok!' });
});

require('./controllers/temaController')(app);
require('./controllers/topicoController')(app);
require('./controllers/subtopicoController')(app);
require('./controllers/postController')(app);


app.listen(port, () => {
    console.log(`app loading in url http://localhost:${port}`)
});

