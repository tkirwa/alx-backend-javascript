// Import the required modules
const express = require("express");
const countStudents = require("./3-read_file_async");

// Create an express application
const app = express();

// Define a route handler for GET requests to the root URL ('/')
app.get("/", (req, res) => {
  // Send a response with the text "Hello Holberton School!"
  res.send("Hello Holberton School!");
});

// Define a route handler for GET requests to the '/students' URL
app.get("/students", async (req, res) => {
  try {
    // Call the countStudents function and wait for it to finish
    const data = await countStudents(process.argv[2]);
    // If the promise is resolved, send a response with the report
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    // If the promise is rejected, send a response with the error message
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Start the server and have it listen on port 1245
app.listen(1245);

// Export the express application
module.exports = app;
