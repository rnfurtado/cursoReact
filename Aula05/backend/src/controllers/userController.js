const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async persistData(req, res) {
        //promessa
        const response = await req.body;
        User.create(response);
        res.json(response);
    },
    async listUsers(req, res) {
        const response = await User.find();
        res.json(response);
    },
    async listUserById(req, res) {
        const response = await User.find(req.params.id);
        res.json(response);
    },
    async listByAge(req, res) {
        const response = await User.find({ "age" : {$gt: req.params.age }});
        res.json(response);
    },
    async listaUm(req, res) {
        const response = await User.find({ "name" : { $regex: '.*' + req.params.pessoa + '.*' } });
        res.json(response);
    },
    async listaPorSexo(req, res) {                    
        const response = await User.find({ "sex" : req.params.sex });
        res.json(response);
    },
    async listaPorParametros(req, res) {                    
        const response = await req.params.f;
        res.json(response);
    },
}