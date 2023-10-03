// 9-groceries_list.js

// Define the function groceriesList
const groceriesList = () => {
  // Create a new Map
  const groceryMap = new Map();

  // Add groceries to the map with their quantities
  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);

  // Return the grocery map
  return groceryMap;
};

// Export the groceriesList function
export default groceriesList;
