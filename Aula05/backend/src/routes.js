const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');
const GMapsController = require('./controllers/GoogleMapsController');

routes.post('/user', UserController.persistData);
routes.get('/user', UserController.listUsers);
routes.get('/user/ObterPorId/:id', UserController.listUserById);
routes.get('/user/ObterPorIdade/:age', UserController.listByAge);
routes.get('/user/ObterPorPessoa/:pessoa', UserController.listaUm);
routes.get('/user/ObterPorSexo/:sex', UserController.listaPorSexo);
routes.get('/user/ObterPorParametros?:fields', UserController.listaPorParametros);
routes.get('/user/userGit', UserController.getUserGit);

routes.get('/gMaps/ObterDistancia', GMapsController.ObterDistancia);

module.exports = routes;