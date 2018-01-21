const axios = require('axios');

module.exports = {
    coinMarketCap() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/')
            .then(result => { console.log(JSON.stringify(result)) })
            .catch(error => { return error })
    }
};