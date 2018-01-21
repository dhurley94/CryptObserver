const passport = require('passport');
const bcrypt = require('bcrypt');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
l
            User.findOne({ 'local.email': email },
                function (err, user) {
                    if (err) return done(err);

                    if (!user) return done(null, false);

                    if (!user.validPassword(password) {
                        return done(null, false);
                    }

                    else
                        return done(null, user); // all good return user
                });
        });
};