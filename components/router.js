const express = require('express');
const controller = require('./controller');

const router = new express.Router();

router.get('/', controller.testing);

router.post('/login', controller.login);

router.post('/register', controller.register);

module.exports = router;
