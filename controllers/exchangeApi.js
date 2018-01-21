const axios = require('axios');
const Coin = require('../models/Coin');

module.exports = {
    top25(req, res) {
        return Coin
        axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(response => res.status(201).send(response.data))
            .catch(error => res.sent(422).send(error))
        },

    bittrexBalanceGrab(req, res, key) {
         axios.get('https://bittrex.com/api/v1.1/account/getbalances?apikey=' + key)
            .then(response => res.status(201).send(response.data))
            .catch(error => res.sent(422).send(error))
    }
}
