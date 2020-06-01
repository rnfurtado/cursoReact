const express = require('express');
const server = express();
const requireDir = require('require-dir');
const cors = require('cors'); 
const mongoose = require('mongoose');

//Configs
server.use(cors());
server.use(express.json());

//Banco de dados (string de conexão é igual a do site do mongodb)
mongoose.connect('mongodb+srv://admin:admin@cluster0-xyt7n.gcp.mongodb.net/cursoReact?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

//importar Models
requireDir('./src/Models');

//Routes
server.use('/api', require('./src/routes'));

server.listen(3002); //porta que o servidor irá funcionar
console.log('servidor ouvindo a porta 3002');