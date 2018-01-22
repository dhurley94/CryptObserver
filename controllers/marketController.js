const db = require('../models').Investments;
const Investments = require('../models').Investments;

module.exports = {
    showAll(req, res) {
        return Investments
            .findAll()
            .then(data => { response: res.status(200).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    },
    add(req, res) {
        return Investments
            .create({
                coin: req.body.coin,
                pp_coin: req.body.pp_coin,
                amount_purchased: req.body.amount_purchased
            })
            .then(data => res.status(201).send(data))
            .catch(error => res.status(422).send(error));
    },
    del(req, res) {
        return Investments
            .destroy({
                where: {
                    txid: req.body.txid
                }
            })
            .then(data => { response: res.sendStatus(status).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    },
    update(req, res) {
        return Investments
            .update(
                {pp_coin: req.body.pp_coin,
                amount_purchased: req.body.amount_purchased},
                {where: {
                    txid: req.body.txid
                }
            })
            .then(data => { response: res.sendStatus(status).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    }
}