const express = require('express');
const server = express();

server.use(express.json());
server.use('/api',require('./src/routes'));

server.listen(3002); //porta que o servidor irá funcionar
console.log('servidor ouvindo a porta 3002');