// Importing necessary modules
const express = require('express');
const fs = require('fs');

// Create Express app
const app = express();

// Define constants
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Function to count students in each field from the database
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Check if a valid dataPath is provided
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  // Read the database file
  fs.readFile(dataPath, (err, data) => {
    // Handle errors during file read
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    // If data is read successfully
    if (data) {
      const reportParts = [];
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(
        0,
        dbFieldNames.length - 1,
      );

      // Process each line of the file
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(
          0,
          studentRecord.length - 1,
        );
        const field = studentRecord[studentRecord.length - 1];

        // Initialize studentGroups for each field
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Map student properties to key-value pairs
        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx],
        ]);

        // Add students to their respective field groups
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Generate the report
      const totalStudents = Object.values(studentGroups).reduce(
        (pre, cur) => (pre || []).length + cur.length,
      );
      reportParts.push(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        reportParts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '),
        ].join(' '));
      }

      // Resolve the promise with the generated report
      resolve(reportParts.join('\n'));
    }
  });
});

// Define route for the root endpoint
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Define route for the '/students' endpoint
app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  // Call countStudents function and handle the response
  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      // Handle errors during student count
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app
module.exports = app;
