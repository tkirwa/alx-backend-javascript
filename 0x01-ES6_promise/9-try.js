// Define the guardrail function that accepts a mathFunction
export default function guardrail(mathFunction) {
  // Initialize an empty array called "queue" to store results and messages
  const queue = [];

  try {
    // Try to execute the mathFunction and push its result to the queue
    queue.push(mathFunction());
  } catch (err) {
    // If an error occurs during execution, push the error message
    //  (converted to a string) to the queue
    queue.push(String(err));
  } finally {
    // Regardless of success or error, push the "Guardrail was processed" message to the queue
    queue.push('Guardrail was processed');
  }

  // Return the queue containing results and messages
  return queue;
}
