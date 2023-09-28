// Import the ClassRoom class from the '0-classroom' module
import ClassRoom from "./0-classroom";

// Define the initializeRooms function
export default function initializeRooms() {
  // Create and return an array of ClassRoom objects with specific sizes
  return [
    new ClassRoom(19), // Create a ClassRoom object with size 19
    new ClassRoom(20), // Create a ClassRoom object with size 20
    new ClassRoom(34), // Create a ClassRoom object with size 34
  ];
}
