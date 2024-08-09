// Import the express module to create routes
const express = require('express');

// Import the fs (File System) module to read/write files
const fs = require('fs');

// Import the path module to handle and transform file paths
const path = require('path');

// Create a new router instance for handling user routes
const router = express.Router();

// Define the file path to the users.json file that stores user data
const filePath = path.join(__dirname, '../../data/users.json');

// Utility function to read data from the JSON file
const readData = () => {
  // Synchronously read the file content and parse it as JSON
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Utility function to write data to the JSON file
const writeData = (data) => {
  // Synchronously write the data to the file, formatting it with 2-space indentation
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET /users - Retrieve all users
router.get('/', async (req, res) => {
  // Read users data from the file
  const users = readData();
  // Respond with the list of users in JSON format
  res.json(users);
});

// GET /users/:id - Retrieve a user by ID
router.get('/:id', async (req, res) => {
  // Read users data from the file
  const users = readData();
  // Find the user with the specified ID
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  // If user is found, respond with the user data
  if (user) {
    res.json(user);
  } else {
    // If user is not found, respond with a 404 status and error message
    res.status(404).send('User not found');
  }
});

// POST /users - Create a new user
router.post('/', async (req, res) => {
  // Read users data from the file
  const users = readData();
  // Create a new user object with a unique ID and data from the request body
  const newUser = { id: users.length + 1, ...req.body };
  // Add the new user to the array of users
  users.push(newUser);
  // Write the updated users array back to the file
  writeData(users);
  // Respond with the created user and a 201 status (Created)
  res.status(201).json(newUser);
});

// Export the router to be used in the main app
module.exports = router;
