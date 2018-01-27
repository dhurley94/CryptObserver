const Router = require('express').Router();
// const bodyParser = require('body-parser');
const db = require('../models').Miner;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const saltRounds = 10;
const Miner = require('../models').Miner;

module.exports = {
    showAll(req, res) {
        return Miner
            .findAll()
            .then(data => { response: res.status(201).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    },
    add(req, res) {
        return Miner
            .create({
                address: req.body.address,
                algorithm: req.body.algo,
            })
            .then(data => res.status(200).send(data))
            .catch(error => res.status(422).send(error));
    },
    del(req, res) {
        return Miner
            .findOne({
                where: {
                    address: req.body.address,
                }
            })
            .then(data => { response: res.status(201).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    },
    update(req, res) {
        return Miner
            .update(
                {address: req.body.address,
                algo: req.body.algo},
                {where: {
                    address: req.body.address
                }
            })
            .then(data => { response: res.sendStatus(status).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    }
}