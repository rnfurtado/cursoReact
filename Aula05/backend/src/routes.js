const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');

routes.post('/user', UserController.persistData);
routes.get('/user', UserController.listUsers);
routes.get('/user/ObterPorId/:id', UserController.listUserById);
routes.get('/user/ObterPorIdade/:age', UserController.listByAge);
routes.get('/user/ObterPorPessoa/:pessoa', UserController.listaUm);
routes.get('/user/ObterPorSexo/:sex', UserController.listaPorSexo);
routes.get('/user/ObterPorParametros/:f', UserController.listaPorParametros);
module.exports = routes;