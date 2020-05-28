module.exports = {
    obterNotaFiscalPorId (req, res){
        const response = req.params.nf;
        res.json(`Nota fiscal ${response}`);
    }
}