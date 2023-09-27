// Handle the response from a promise
export default function handleResponseFromAPI(promise) {
  // Append three handlers to the promise
  return promise
    .then(() => {
      // Return an object when the promise resolves
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // Return an empty error object when the promise rejects
      return new Error();
    })
    .finally(() => {
      // Log a message to the console for every resolution
      console.log('Got a response from the API');
    });
}
