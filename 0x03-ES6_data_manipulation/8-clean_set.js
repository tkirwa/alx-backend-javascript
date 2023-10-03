/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String}
 */
const cleanSet = (set, startString) => {
  // Initialize an array to store the parts to be joined
  const parts = [];

  // Check if the input parameters are valid
  if (
    !set // Check if set is falsy
    || !startString // Check if startString is falsy
    || !(set instanceof Set) // Check if set is not an instance of Set
    || typeof startString !== 'string' // Check if startString is not a string
  ) {
    return ''; // Return an empty string for invalid inputs
  }

  // Iterate over the values in the Set
  for (const value of set.values()) {
    // Check if the value is a string and starts with the specified startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Strip the startString from the value
      const valueSubStr = value.substring(startString.length);

      // Check if the resulting string is not empty and different from the original string
      if (valueSubStr && valueSubStr !== value) {
        // Add the stripped value to the parts array
        parts.push(valueSubStr);
      }
    }
  }

  // Join the parts array with dashes to create the final string
  return parts.join('-');
};

export default cleanSet;
