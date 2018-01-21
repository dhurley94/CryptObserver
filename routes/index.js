const userController = require('../controllers/userController');
const marketController = require('../controllers/marketController');
const minerController = require('../controllers/minerController');
const axios = require('axios');

module.exports = (app, passport) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API'
    }));

    // User 
    app.get('/api/user', userController.showUsers);
    app.post('/api/user/create', userController.create);
    app.post('/api/user/login', userController.login);
    app.get('/dashboard/*', isLoggedIn);

    // Investments
    app.get('/investments/', marketController.showAll);
    app.post('/investments/add', marketController.add);
    app.post('/investments/del', marketController.del);
    app.post('/investments/update', marketController.update);
}

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}