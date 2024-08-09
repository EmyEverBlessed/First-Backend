// Import the express module to create the server and handle routing
const express = require('express');

// Import the custom logger middleware for logging requests
const logger = require('./middlewares/logger');

// Import the users router to handle routes related to users
const usersRouter = require('./routes/users');

// Create an instance of the express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the logger middleware for logging all incoming requests
app.use(logger);

// Set up the users router to handle all routes that start with '/users'
app.use('/users', usersRouter);

// Export the app module to be used in other parts of the application
module.exports = app;
