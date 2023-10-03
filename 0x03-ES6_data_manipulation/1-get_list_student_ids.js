// 1-get_list_student_ids.js

// Define the function getListStudentIds
function getListStudentIds(arrayOfStudents) {
  // Check if the input is an array
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }

  // Use map to extract the IDs and return them in a new array
  const studentIds = arrayOfStudents.map((student) => student.id);

  return studentIds;
}

// Export the getListStudentIds function
export default getListStudentIds;
