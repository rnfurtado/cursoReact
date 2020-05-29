const express = require('express');
const server = express();
const requireDir = require('require-dir');

const mongoose = require('mongoose');

//Banco de dados (string de conexão é igual a do site do mongodb)
mongoose.connect('mongodb+srv://admin:admin@cluster0-xyt7n.gcp.mongodb.net/cursoReact?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

//importar modulos para visualização dos schemas
requireDir('./src/Models');

server.use(express.json());
server.use('/api', require('./src/routes'));

server.listen(3002); //porta que o servidor irá funcionar
console.log('servidor ouvindo a porta 3002');