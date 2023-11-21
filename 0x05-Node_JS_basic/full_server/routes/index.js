// Import the AppController and StudentsController classes
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

// Define a function named mapRoutes that maps routes to controllers
const mapRoutes = (app) => {
  // Map the root URL ('/') to the getHomepage method of the AppController class
  app.get('/', AppController.getHomepage);
  // Map the '/students' URL to the getAllStudents method of the StudentsController class
  app.get('/students', StudentsController.getAllStudents);
  // Map the '/students/:major' URL to the getAllStudentsByMajor method of the StudentsController class
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

// Export the mapRoutes function as a default export
export default mapRoutes;
// Also export the mapRoutes function using module.exports for compatibility with CommonJS modules
module.exports = mapRoutes;
