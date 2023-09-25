export default function iterateThroughObject(reportWithIterator) {
  // Create an array to store employee names
  const employees = [];

  // Iterate through the employees using the provided iterator
  for (const employee of reportWithIterator) {
    // Push each employee name into the employees array
    employees.push(employee);
  }

  // Join the employee names with ' | ' separator and return as a string
  return employees.join(' | ');
}
