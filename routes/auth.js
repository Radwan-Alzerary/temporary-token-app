// routes/auth.js
const express = require('express');
const router = express.Router();
const generateToken = require('../utils/tokenGenerator');
const { storeToken } = require('../models/tokenStore');
const config = require('../config/config');

router.post('/generate-token', (req, res) => {
    const token = generateToken();
    const expirationTime = Date.now() + config.TOKEN_EXPIRATION_MINUTES * 60 * 1000; // 5 minutes

    storeToken(token, expirationTime);

    res.json({ token, expiresIn: config.TOKEN_EXPIRATION_MINUTES * 60 }); // expiresIn in seconds
});

module.exports = router;
