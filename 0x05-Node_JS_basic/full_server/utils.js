// Import the fs module
import fs from 'fs';

// Define a function named readDatabase that reads a database file asynchronously
// and returns an object of arrays of the first names of students per field
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
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
        // Split the file into lines
        const fileLines = data.toString('utf-8').trim().split('\n');
        // Initialize an object to store the student groups
        const studentGroups = {};
        // Get the field names from the first line of the file
        const dbFieldNames = fileLines[0].split(',');
        // Get the property names of the students (all fields except the last one)
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        // Iterate over each line (student) in the file (except the first line)
        for (const line of fileLines.slice(1)) {
          // Split the line into fields
          const studentRecord = line.split(',');
          // Get the property values of the student (all fields except the last one)
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          // Get the field of the student (the last field)
          const field = studentRecord[studentRecord.length - 1];
          // If the field does not exist in the studentGroups object, add it
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          // Map the property names to the property values and add the student to the field group
          const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        // Resolve the promise with the student groups
        resolve(studentGroups);
      }
    });
  }
});

// Export the readDatabase function as a default export
export default readDatabase;
// Also export the readDatabase function using module.exports for compatibility with CommonJS modules
module.exports = readDatabase;
