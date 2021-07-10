const express = require("express");
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

require('./src/Routes/index')(app);

(async() => {
    const comentarios = require("./src/model/Comentario");
})();

const porta = process.env.PORT || 3000;
const hostname = "localhost";

const server = app.listen(porta, () => { 
    console.log(`Servidor rodando em http://${hostname}:${porta}`);
});

