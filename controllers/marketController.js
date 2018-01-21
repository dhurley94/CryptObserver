const Router = require('express').Router();
// const bodyParser = require('body-parser');
const db = require('../models').Investments;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const saltRounds = 10;
const Investments = require('../models').Investments;

module.exports = {
    showAll(req, res) {
        return Invesments
            .findAll()
            .then(data => { response: res.status(201).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    },
    add(req, res) {
        return Invesments
            .create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: password,
            })
            .then(data => res.status(200).send(data))
            .catch(error => res.status(422).send(error));
    },
    del(req, res) {
        return Investments
            .findOne({
                where: {
                    name: req.body.coin,
                    id: req.body.id,
                }
            })
            .then(data => { response: res.status(201).send(data) })
            .catch(error => { response: res.status(422).send(error) })
    }
}