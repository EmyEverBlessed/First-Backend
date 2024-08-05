const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const filePath = path.join(__dirname, '../../data/users.json');

// Utility function to read JSON file
const readData = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Utility function to write to JSON file
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET /users - Get all users
router.get('/', async (req, res) => {
  const users = readData();
  res.json(users);
});

// GET /users/:id - Get a user by ID
router.get('/:id', async (req, res) => {
  const users = readData();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// POST /users - Create a new user
router.post('/', async (req, res) => {
  const users = readData();
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

module.exports = router;
