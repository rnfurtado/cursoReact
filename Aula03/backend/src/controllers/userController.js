module.exports = {
    autentica (req, res){

        const {login, senha} = req.body; //capturar o valores específicos da requisição 
        if (login == "admin")
            res.json(`Usuário ${login} foi localizado`);
        else
            res.json(`Usuário ${login} não existe`);
    },
    
    listUsers (req, res){
        res.json({            
            "usuario": "admin",
            "senha": "admin"
        });
    },

    login (req, res){
        const token = req.headers.token;
        res.json(token);
    }
}