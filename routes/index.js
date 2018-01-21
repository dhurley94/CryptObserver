const userController = require('../controllers/userController');
const exchangeApi = require('../controllers/exchangeApi');
const axios = require('axios');

const getAll = () => {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
        .then(response => { return response.data })
        .catch(error => { console.log(error) })
}

module.exports = (app, passport) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API'
    }));

    // User Base
    app.get('/api/user', userController.showUsers);
    app.post('/api/user/create', userController.create);
    app.post('/api/user/login', userController.login);

    // Coin Base
    app.get('/dashboard/*', isLoggedIn )
    app.get('/api/coins', exchangeApi.top25);
}

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}