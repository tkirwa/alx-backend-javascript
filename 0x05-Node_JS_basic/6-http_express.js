// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Send a response with the text "Hello Holberton School!"
  res.send('Hello Holberton School!');
});

// Start the server and have it listen on port 1245
app.listen(1245, () => {
  // Log a message to the console
  console.log('Server running on port 1245');
});

// Export the express application
module.exports = app;
