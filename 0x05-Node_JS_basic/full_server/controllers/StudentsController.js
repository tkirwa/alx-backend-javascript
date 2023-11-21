// Import the readDatabase function from the utils module
import readDatabase from '../utils';

// Define an array of valid majors
const VALID_MAJORS = ['CS', 'SWE'];

// Define a class named StudentsController
class StudentsController {
  // Define a static method named getAllStudents
  static getAllStudents (request, response) {
    // Get the path to the database file from the command line arguments
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    // Call the readDatabase function and handle the returned promise
    readDatabase(dataPath)
      .then((studentGroups) => {
        // Initialize an array to store the parts of the response
        const responseParts = ['This is the list of our students'];
        // Define a comparison function for sorting strings in ascending order, case insensitive
        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        // Iterate over each field group
        for (const [field, group] of Object.entries(studentGroups).sort(
          cmpFxn
        )) {
          // Add the number of students and the students' names in the field group to the response parts
          responseParts.push(
            `Number of students in ${field}: ${group.length}. List: ${group
              .map((student) => student.firstname)
              .join(', ')}`
          );
        }
        // Send a response with status code 200 and the response parts joined into a single string
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        // If the promise is rejected, send a response with status code 500 and the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  // Define a static method named getAllStudentsByMajor
  static getAllStudentsByMajor (request, response) {
    // Get the path to the database file from the command line arguments
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    // Get the major from the request parameters
    const { major } = request.params;

    // If the major is not valid, send a response with status code 500 and an error message
    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Call the readDatabase function and handle the returned promise
    readDatabase(dataPath)
      .then((studentGroups) => {
        // Initialize a variable to store the response text
        let responseText = '';

        // If the major exists in the student groups
        if (Object.keys(studentGroups).includes(major)) {
          // Get the group of students in the major
          const group = studentGroups[major];
          // Set the response text to the list of students' names in the group
          responseText = `List: ${group
            .map((student) => student.firstname)
            .join(', ')}`;
        }
        // Send a response with status code 200 and the response text
        response.status(200).send(responseText);
      })
      .catch((err) => {
        // If the promise is rejected, send a response with status code 500 and the error message
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

// Export the StudentsController class as a default export
export default StudentsController;
// Also export the StudentsController class using module.exports for compatibility with CommonJS modules
module.exports = StudentsController;
