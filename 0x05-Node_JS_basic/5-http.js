// Import the required modules
const http = require('http');
const fs = require('fs');

// Define the server's host and port
const PORT = 1245;
const HOST = 'localhost';

// Create the server
const app = http.createServer();

// Define the path to the database file
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Define the function to count students
const countStudents = (dataPath) =>
  new Promise((resolve, reject) => {
    // If no data path is provided, reject the promise
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
    }
    // If a data path is provided
    if (dataPath) {
      // Read the file asynchronously
      fs.readFile(dataPath, (err, data) => {
        // If there's an error (e.g., the file does not exist), reject the promise
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        // If the file was read successfully
        if (data) {
          // Initialize an array to store the parts of the report
          const reportParts = [];
          // Split the file into lines
          const fileLines = data.toString('utf-8').trim().split('\n');
          // Initialize an object to store the student groups
          const studentGroups = {};
          // Get the field names from the first line of the file
          const dbFieldNames = fileLines[0].split(',');
          // Get the property names of the students (all fields except the last one)
          const studentPropNames = dbFieldNames.slice(
            0,
            dbFieldNames.length - 1
          );

          // Iterate over each line (student) in the file (except the first line)
          for (const line of fileLines.slice(1)) {
            // Split the line into fields
            const studentRecord = line.split(',');
            // Get the property values of the student (all fields except the last one)
            const studentPropValues = studentRecord.slice(
              0,
              studentRecord.length - 1
            );
            // Get the field of the student (the last field)
            const field = studentRecord[studentRecord.length - 1];
            // If the field does not exist in the studentGroups object, add it
            if (!Object.keys(studentGroups).includes(field)) {
              studentGroups[field] = [];
            }
            // Map the property names to the property values and add the student to the field group
            const studentEntries = studentPropNames.map((propName, idx) => [
              propName,
              studentPropValues[idx]
            ]);
            studentGroups[field].push(Object.fromEntries(studentEntries));
          }

          // Calculate the total number of students
          const totalStudents = Object.values(studentGroups).reduce(
            (pre, cur) => (pre || []).length + cur.length
          );
          // Add the total number of students to the report
          reportParts.push(`Number of students: ${totalStudents}`);
          // Iterate over each field group
          for (const [field, group] of Object.entries(studentGroups)) {
            // Get the names of the students in the field group
            const studentNames = group
              .map((student) => student.firstname)
              .join(', ');
            // Add the number of students and the students' names in the field group to the report
            reportParts.push(
              `Number of students in ${field}: ${group.length}. List: ${studentNames}`
            );
          }
          // Resolve the promise with the report
          resolve(reportParts.join('\n'));
        }
      });
    }
  });

// Define the route handlers
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler (_, res) {
      // Define the response text
      const responseText = 'Hello Holberton School!';
      // Set the headers of the response
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      // Set the status code of the response
      res.statusCode = 200;
      // Write the response text to the response
      res.write(Buffer.from(responseText));
    }
  },
  {
    route: '/students',
    handler (_, res) {
      // Initialize an array to store the parts of the response
      const responseParts = ['This is the list of our students'];

      // Call the countStudents function
      countStudents(DB_FILE)
        .then((report) => {
          // If the promise is resolved, add the report to the response parts
          responseParts.push(report);
          // Join the response parts into a single string
          const responseText = responseParts.join('\n');
          // Set the headers of the response
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          // Set the status code of the response
          res.statusCode = 200;
          // Write the response text to the response
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          // If the promise is rejected, add the error message to the response parts
          responseParts.push(
            err instanceof Error ? err.message : err.toString()
          );
          // Join the response parts into a single string
          const responseText = responseParts.join('\n');
          // Set the headers of the response
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          // Set the status code of the response
          res.statusCode = 200;
          // Write the response text to the response
          res.write(Buffer.from(responseText));
        });
    }
  }
];

// Listen for the 'request' event
app.on('request', (req, res) => {
  // For each route handler
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    // If the route of the route handler matches the URL of the request
    if (routeHandler.route === req.url) {
      // Call the handler of the route handler
      routeHandler.handler(req, res);
      // Break the loop
      break;
    }
  }
});

// Start the server
app.listen(PORT, HOST, () => {
  // Log a message to the console
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the server
module.exports = app;
