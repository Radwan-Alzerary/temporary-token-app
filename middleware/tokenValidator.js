// middleware/tokenValidator.js
const { getToken, deleteToken } = require('../models/tokenStore');
const config = require('../config/config');

function tokenValidator(req, res, next) {
    const { token } = req.headers;

    if (!token) {
        return res.status(400).json({ error: 'Token is required in headers.' });
    }

    const storedToken = getToken(token);

    if (!storedToken) {
        return res.status(401).json({ error: 'Invalid token.' });
    }

    const currentTime = Date.now();
    if (currentTime > storedToken.expiresAt) {
        deleteToken(token);
        return res.status(401).json({ error: 'Token has expired.' });
    }

    // Token is valid
    next();
}

module.exports = tokenValidator;
