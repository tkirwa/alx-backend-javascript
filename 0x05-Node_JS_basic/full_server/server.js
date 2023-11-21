// Import the required modules
import express from 'express';
import mapRoutes from './routes';

// Create an express application
const app = express();

// Define the port on which the server will listen
const PORT = 1245;

// Map the routes to the controllers
mapRoutes(app);

// Start the server and have it listen on the defined port
app.listen(PORT, () => {
  // Log a message to the console
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the express application as a default export
export default app;

// Also export the express application using module.exports for compatibility with CommonJS modules
module.exports = app;
