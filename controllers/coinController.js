const Router = require('express').Router();
const db = require('../models');
const api = require('../helper/api');

module.exports = {
    grabCoins(req, res) {
        console.log(api.coinMarketCap());
        res.status(201).send(api.coinMarketCap());
    }
}
/**
 * Return All
 */
Router.get('/crypto', (req, res) => {
    db.Coin.findAll({}).then((result) => {
        res.render('pages/crypto', {coins: result})
    });
});

/**
 * Adjust Price
 */
Router.get('/crpto/:symbol', (req, res) => {
    db.Coin.update({
        usd_price: req.body.price,
        sat_price: req.body.sat_price
    });
});

/**
 * Create Coin
 */
Router.post('/crypto/add', (req, res) => {
    db.Coin.create({
        name: req.body.name,
        symbol: req.body.symbol,
        usd_price: req.body.usd_price,
        sat_price: req.body.sat_price,
        ranking: req.body.ranking
    }).then((result) => {
        res.render('pages/crypto', { coins: result });
    });
});

/**
 * Deletes Coin
 */
Router.get('/crypto/del/:symbol', (req, res) => {
    db.Coin.destroy({
        symbol: req.params.symbol
    });
});