// Define a class named AppController
class AppController {
  // Define a static method named getHomepage
  // Static methods are called without instantiating their class and cannot be called through a class instance
  static getHomepage (request, response) {
    // Send a response with status code 200 and the text "Hello Holberton School!"
    response.status(200).send('Hello Holberton School!');
  }
}

// Export the AppController class as a default export
// Default exports can be imported with any name in other modules
export default AppController;

// Also export the AppController class using module.exports
// This is for compatibility with CommonJS modules
module.exports = AppController;
