export default function createIteratorObject(report) {
  return (function* _() { // Define a generator function
    for (const department of Object.values(report.allEmployees)) { // Iterate through departments
      for (const employee of department) { // Iterate through employees in each department
        yield employee; // Yield the current employee
      }
    }
  }());
}
