// 5-typed_arrays.js

// Define the function createInt8TypedArray
const createInt8TypedArray = (length, position, value) => {
  // Check if the position is outside the range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create an Int8Array view of the buffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position
  int8Array[position] = value;

  // Return the DataView to see the result
  return new DataView(buffer);
};

// Export the createInt8TypedArray function
export default createInt8TypedArray;
