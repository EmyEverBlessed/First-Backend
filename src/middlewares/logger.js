// Import the fs (File System) module to work with the file system
const fs = require('fs');

// Import the path module to handle and transform file paths
const path = require('path');

// Define a logging middleware function to log incoming HTTP requests
const logger = (req, res, next) => {
  // Create a log entry with the current timestamp, HTTP method, and requested URL
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

  // Append the log entry to the logs.txt file in the parent directory
  fs.appendFileSync(path.join(__dirname, '../../logs.txt'), log);

  // Print the log entry to the console
  console.log(log.trim());

  // Call the next middleware function in the stack
  next();
};

// Export the logger middleware to be used in other parts of the application
module.exports = logger;
