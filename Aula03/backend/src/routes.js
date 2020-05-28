    const express = require('express');
    const routes = express.Router();
    const UserController = require('./controllers/userController');
    const NFController = require('./controllers/nfController');

    routes.post('/users/autentica', UserController.autentica);
    routes.get('/users/users', UserController.listUsers);

    //parrando parametro pelo header
    routes.get('/users/loginHeaders', UserController.login);

    //passando parametro pela url
    routes.get('/nf/obterPorId', NFController.obterNotaFiscalPorId);

    module.exports = routes;