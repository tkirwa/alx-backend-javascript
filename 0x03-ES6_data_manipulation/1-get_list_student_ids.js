// 1-get_list_student_ids.js

// Define the function getListStudentIds
const getListStudentIds = (arrayOfStudents) => {
  // Check if the input is an array
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }
  // Use map to extract the IDs and return them in a new array
  const studentIds = arrayOfStudents.map((student) => student.id);

  return studentIds;
};

export default getListStudentIds;
