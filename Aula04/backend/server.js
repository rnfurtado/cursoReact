const express = require('express');
const server = express();

const mongoose = require('mongoose');

//Banco de dados (string de conexão é igual a do site do mongodb)
mongoose.connect('mongodb+srv://admin:admin@cluster0-xyt7n.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology : true})

server.use(express.json());
server.use('/api',require('./src/routes'));

server.listen(3002); //porta que o servidor irá funcionar
console.log('servidor ouvindo a porta 3002');