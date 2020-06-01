const mongoose = require('mongoose');
const geolib = require('geolib');

module.exports = {
    async ObterDistancia(req, res){
        const response = await geolib.getDistance(
            { latitude: -20.339081, longitude: -40.283321 },
            { latitude: -20.258730, longitude: -40.293961 }
        );

        res.json(response/1000 + ' Km');
    }
}