const express = require('express');
const routes = express.Router();

routes.get('/users', function (req, res){
    res.json({
        "usuario": "admin",
        "senha": "admin"
    });
});

routes.post('/users/autentica', function (req, res){
    //const response = req.body;
    //console.log(response); //capturar a requisição
    //res.json(response);

    const {login, senha} = req.body; //capturar o valores específicos da requisição
    //res.json({usuario}); //para retornar em json
    
    if (login == "admin")
        res.json(`Usuário ${login} foi localizado`);
    else
        res.json(`Usuário ${login} não existe`);

    //ecmascript
    //res.json(`Bem vindo ${login}`);
});

module.exports = routes;