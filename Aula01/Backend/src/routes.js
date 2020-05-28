const express = require('express');
const routes = express.Router();

routes.get('/', function (req, res){
    res.send('Bem vindo à nossa primeira rota');
});

module.exports = routes;

