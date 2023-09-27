// Handle the response from a promise
export default function handleResponseFromAPI(promise) {
  // Append three handlers to the promise
  return promise
    .then(() => ({ status: 200, body: 'success' })) // Parenthesize and move the returned object
    .catch(() => new Error()) // Parenthesize and move the returned object
    .finally(() => {
      // Log a message to the console for every resolution
      console.log('Got a response from the API');
    });
}
