// 8-clean_set.js

// Define the function cleanSet
function cleanSet(set, startString) {
  // Initialize an empty result string
  let result = '';

  // Iterate over the set values
  for (const value of set) {
    // Check if the value starts with the specified startString
    if (value.startsWith(startString)) {
      // Append the rest of the string to the result
      result += `${value.slice(startString.length)}-`;
    }
  }

  // Remove the trailing '-' and return the result
  return result.slice(0, -1);
}

// Export the cleanSet function
export default cleanSet;
