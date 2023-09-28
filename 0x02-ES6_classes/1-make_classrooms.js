// Import the Classroom class from the '0-classroom' module
import Classroom from './0-classroom';

// Define the initializeRooms function
function initializeRooms() {
  // Create and return an array of Classroom objects with specific sizes
  return [
    new Classroom(19), // Create a Classroom object with size 19
    new Classroom(20), // Create a Classroom object with size 20
    new Classroom(34), // Create a Classroom object with size 34
  ];
}

// Export the initializeRooms function as the default export of this module
export default initializeRooms;
