const http = require('http');

// Extract command line arguments (assuming the database file is provided as an argument)
const args = process.argv.slice(2);

// Import the asynchronous function to count students from the given file
const countStudents = require('./3-read_file_async');

// Database file path obtained from command line arguments
const DATABASE = args[0];

// Server configuration
const host = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  // Set default status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Extract the URL from the request
  const { url } = req;

  // Handle requests based on the URL path
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      // Call the asynchronous function to count students and retrieve the list
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      // Handle errors from the asynchronous function
      res.end(error.message);
    }
  }

  // If the URL path is not '/' or '/students', return a 404 response
  res.statusCode = 404;
  res.end();
});

// Start the server and listen on the specified host and port
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});

// Export the created HTTP server for external use (e.g., testing)
module.exports = app;
