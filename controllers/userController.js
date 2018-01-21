const Router = require('express').Router();
// const bodyParser = require('body-parser');
const db = require('../models').User;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const saltRounds = 10;
const User = require('../models').User;

module.exports = {
    create(req, res) {
        let password;
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                password = hash;
                return User
                    .create({
                        fullName: req.body.fullName,
                        email: req.body.email,
                        password: password,
                    })
                    .then(user => res.status(200).send(user))
                    .catch(error => res.status(422).send(error));
            });
        });
    },
    login(req, res) {
        return User
        .findAll({
            where: {
                email: req.body.email
            }
        })
        .then(data => res.status(201).send(data))
        .catch(error => res.status(422).send(error))
    },
    showUsers(req, res) {
        return User
        .findAll()
        .then(data => {response:res.status(201).send(data)})
        .catch(error => {response: res.status(422).send(error)})
    }
}