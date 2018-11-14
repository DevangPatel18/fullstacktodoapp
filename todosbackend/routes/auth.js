const express = require('express');
const router = express.Router();
const { signup } = require('../helpers/auth');

router.post('/signup', signup);

module.exports = router;
