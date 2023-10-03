// 3-get_ids_sum.js

// Define the function getStudentIdsSum
function getStudentIdsSum(students) {
  // Use reduce to calculate the sum of student IDs
  const sumOfIds = students.reduce((acc, student) => acc + student.id, 0);

  return sumOfIds;
}

// Export the getStudentIdsSum function
export default getStudentIdsSum;
