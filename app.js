// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');

const authRoutes = require('./routes/auth');
const secureRoutes = require('./routes/secure');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api', secureRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found.' });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error.' });
});

// Start Server
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
