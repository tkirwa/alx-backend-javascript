// 100-weak.js

// Create a WeakMap to track query counts for each endpoint
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Create a function queryAPI to query an endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, initialize its count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the query count for the endpoint
  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  // Check if the query count is greater than or equal to 5
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
