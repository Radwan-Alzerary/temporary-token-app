// routes/secure.js
const express = require('express');
const router = express.Router();
const tokenValidator = require('../middleware/tokenValidator');

router.post('/secure-data', tokenValidator, (req, res) => {
    // Example secure data
    const secureData = {
        message: 'This is secure data.',
        timestamp: new Date()
    };

    res.json(secureData);
});

module.exports = router;
