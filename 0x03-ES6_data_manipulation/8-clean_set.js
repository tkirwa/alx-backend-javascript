/* eslint-disable quotes */
// 8-clean_set.js

// Define the function cleanSet
function cleanSet(set, startString) {
  // Use the filter method to get values that start with startString
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Join the filtered values into a single string separated by '-'
  return filteredValues.join("-");
}

// Export the cleanSet function
export default cleanSet;
