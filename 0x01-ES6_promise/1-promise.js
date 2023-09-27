// Return a promise based on a boolean parameter
export default function getFullResponseFromAPI(success) {
  // Return a new promise
  return new Promise((resolve, reject) => {
    // Check the parameter value
    if (success) {
      // Resolve the promise with an object
      resolve({ status: 200, body: 'Success' });
    } else {
      // Reject the promise with an error object
      reject(new Error('The fake API is not working currently'));
    }
  });
}
