const mongoose = require('mongoose');
const User = mongoose.model('User');
const axios = require('axios');

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
        const response = await User.find({ "age": { $gt: req.params.age } });
        res.json(response);
    },
    async listaUm(req, res) {
        const response = await User.find({ "name": { $regex: '.*' + req.params.pessoa + '.*' } });
        res.json(response);
    },
    async listaPorSexo(req, res) {
        const response = await User.find({ "sex": req.params.sex });
        res.json(response);
    },
    async listaPorParametros(req, res) {
        const response = await req.query.nome + ' - ' + req.query.age;
        res.json(response);
    },
    async getUserGit(req, res) {
        const response = await axios.get('https://api.github.com/users/leoanrdogandrade');
        req.json(response.data); //.data serve para retornar o valor da requisição
    },
    async persistGitUser(req, res) {
        const { userGit } = await req.body;
        const response = await axios.get(`https://api.github.com/users/${userGit}`);
        const { login, name, avatar_url, company, follower, bio } = response.data;
        const payload = await User.create({
            login,
            name,
            avatar_url,
            company,
            follower,
            bio
        });
        req.json(payload);
    },
    async gitUser2020(req, res) {
        const response = await axios.get('https://api.github.com/users/leonardogandrade');
        const { login, created_at } = response.data;
        const created_at_date = new Date(Date.parse(created_at));

        if (created_at_date.getFullYear() < 2020) {
            res.json({
                "msg": "usuário antigo"
            })
        } else {
            res.json({
                "msg": "usuário muito novo"
            })
        }
    },
    async listManyFields(req, res) {
        const response = await User.find() //encontre:
            .where('name').regex(req.query.name) //quando o nome conter
            .where('age').equals(req.query.age); //quando a idade for
        //req.query.name + '-' + req.query.age;
        res.json(response);
    }
}