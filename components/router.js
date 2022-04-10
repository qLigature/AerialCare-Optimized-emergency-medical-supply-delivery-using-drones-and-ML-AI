const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.get('/', controller.testing);

router.post('/login', controller.login);

router.post('/register', controller.register);

router.post('/buy', controller.buy);

// Rendering views

// router.get('/registrationPage', controller.registrationPage);

// router.get('/loginPage', controller.loginPage);

// router.get('/checkoutPage', controller.checkoutPage);

// router.get('/dashboardPage', controller.dashboardPage);

// router.get('/landingPage', controller.landingPage);

// router.get('/newOrderPage', controller.newOrderPage);

// router.get('/ordersPage', controller.ordersPage);

module.exports = router;
