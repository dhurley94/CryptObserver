const db = require('../models').Investments;
const Investments = require('../models').Investments;

module.exports = {
    showAll(req, res) {
        return Investments
            .findAll()
            .then(data => { response: res.status(201).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    },
    add(req, res) {
        return Investments
            .create({
                coin: req.body.coin,
                pp_coin: req.body.pp_coin,
                price_usd: req.body.price_usd,
                amount_purchased: req.body.amount_purchased
            })
            .then(data => res.status(200).send(data))
            .catch(error => res.status(422).send(error));
    },
    del(req, res) {
        return Investments
            .findOne({
                where: {
                    name: req.body.coin,
                    txid: req.body.id,
                }
            })
            .then(data => { response: res.status(201).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    },
    update(req, res) {
        return Investments
            .findOne({
                where: {
                    txid: req.body.id
                }
            })
            .then(data => { response: res.status(201).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    }
}