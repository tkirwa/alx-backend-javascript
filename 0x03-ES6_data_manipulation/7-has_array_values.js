// 7-has_array_values.js

// Define the function hasValuesFromArray
const hasValuesFromArray = (set, array) => {
  // Iterate over the elements of the array
  for (const element of array) {
    // Check if the set contains the element
    if (!set.has(element)) {
      return false; // Element not found in the set
    }
  }
  return true; // All elements found in the set
};

// Export the hasValuesFromArray function
export default hasValuesFromArray;
