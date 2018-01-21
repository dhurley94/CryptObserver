const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
let User = require('../models/User');

module.exports = (passport, user) => {
    passport.serializeUser((user, done) => {
        done(null, done.email);
    });


    passport.deserializeUser((email, done) => {
        User.findAll({
                where: {
                    email: this.email
                }
            })
            ((err, user) => {
            done(err, user);
        });
    });

    passport.use('local-setup', new LocalStrategy({
        emailField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }));

    (req, email, password, done) => {
        let generateHash = (password) => {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
        User.findOne({
            where: {
                email: email
            }
        }).then((user) => {
            if (user) {
                {
                    return done(null, false, {
                        message: 'Email is already taken.'
                    });
                } else {
                    let userPassword = generateHash(password);

                    let data =

                        {
                            email: email,
                            password: userPassword,
                            fullName: req.body.fullName,

                        };
                }

                User.create(data).then((NewUser, created) => {
                    if (!newUser) {
                        return done(null, false)
                    }
                    if (newUser) {
                        return done(null, newUser)
                    }
                });
            }
        },
        )}   
}