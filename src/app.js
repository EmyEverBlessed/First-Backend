const express = require('express');
const logger = require('./middlewares/logger');
const usersRouter = require('./routes/users');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Logger middleware
app.use(logger);

// User routes
app.use('/users', usersRouter);

module.exports = app;
