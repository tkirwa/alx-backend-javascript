// 10-update_uniq_items.js

// Define the function updateUniqueItems
const updateUniqueItems = (groceryMap) => {
  // Check if the input is a Map
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the map
  for (const [item, quantity] of groceryMap.entries()) {
    // Check if the quantity is 1
    if (quantity === 1) {
      // Update the quantity to 100
      groceryMap.set(item, 100);
    }
  }
};

// Export the updateUniqueItems function
export default updateUniqueItems;
