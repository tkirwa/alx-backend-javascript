// Import the file system module
const fs = require('fs');

// Define the countStudents function
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Read the file asynchronously
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    // If there's an error (e.g., the file does not exist), reject the promise with an error
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    // If the file was read successfully
    if (data) {
      // Split the file into lines
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      // Initialize an object to store the student groups
      const studentGroups = {};
      // Get the field names from the first line of the file
      const dbFieldNames = fileLines[0].split(',');
      // Get the property names of the students (all fields except the last one)
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      // Iterate over each line (student) in the file (except the first line)
      for (const line of fileLines.slice(1)) {
        // Split the line into fields
        const studentRecord = line.split(',');
        // Get the property values of the student (all fields except the last one)
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        // Get the field of the student (the last field)
        const field = studentRecord[studentRecord.length - 1];
        // If the field does not exist in the studentGroups object, add it
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        // Map the property names to the property values and add the student to the field group
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students
      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);
      // Iterate over each field group
      for (const [field, group] of Object.entries(studentGroups)) {
        // Get the names of the students in the field group
        const studentNames = group.map((student) => student.firstname).join(', ');
        // Log the number of students and the students' names in the field group
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      // Resolve the promise
      resolve(true);
    }
  });
});

// Export the countStudents function
module.exports = countStudents;
