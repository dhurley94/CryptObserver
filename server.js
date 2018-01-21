
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const compression = require ('compression');
const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash');
const models = require('./models')

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(compression());
app.use(cors());

app.use(session({ secret: "Z3$kYF" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

models.sequelize.sync().then(() => {
  console.log('Nice! Database looks fine')
}).catch((err) => {
  console.log(err, "Something went wrong with the Database Update!")
});

require('./routes')(app, passport);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the API',
}));

module.exports = app;