// Import the Express app from the app module
const app = require('./app');

// Define the port number on which the server will listen
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message to the console indicating that the server is running
  console.log(`Server is running on http://localhost:${PORT}`);
});
