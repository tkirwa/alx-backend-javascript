const http = require('http');
const { readFileSync } = require('fs'); // Use synchronous file read for simplicity

// Function to count students from the given file
const countStudents = (databaseFile) => {
  try {
    const data = readFileSync(databaseFile, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const students = {
      CS: [],
      SWE: []
    };

    for (const line of lines) {
      const [name, age, field] = line.split(',');
      if (name && age && field) {
        students[field.trim()].push(name.trim());
      }
    }

    return students;
  } catch (error) {
    throw new Error('Error reading the database file.');
  }
};

// Server configuration
const host = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set default status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Extract the URL from the request
  const { url } = req;

  // Handle requests based on the URL path
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    try {
      // Call the function to count students
      const students = countStudents('database.csv');

      // Construct the response
      let response = 'This is the list of our students\n';
      response += `Number of students: ${students.CS.length + students.SWE.length}\n`;
      response += `Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\n`;
      response += `Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}\n`;

      // Send the response
      res.end(response);
    } catch (error) {
      // Handle errors from the function
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    // If the URL path is not '/' or '/students', return a 404 response
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Start the server and listen on the specified host and port
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});

// Export the created HTTP server for external use (e.g., testing)
module.exports = app;
