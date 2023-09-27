// Return a promise from a function
export default function getResponseFromAPI() {
  // Return a new promise
  return new Promise((resolve, reject) => {
    // Do some asynchronous work
    setTimeout(() => {
      try {
        // Fulfill the promise with a value
        resolve('Response from API');
      } catch (error) {
        // Reject the promise with a reason
        reject(error);
      }
    }, 1000);
  });
}
