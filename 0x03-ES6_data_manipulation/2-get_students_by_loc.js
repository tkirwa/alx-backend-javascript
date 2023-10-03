// 2-get_students_by_loc.js

// Define the function getStudentsByLocation
function getStudentsByLocation(students, city) {
  // Use filter to find students in the specified city
  const studentsInCity = students.filter(
    (student) => student.location === city,
  );

  return studentsInCity;
}

// Export the getStudentsByLocation function
export default getStudentsByLocation;
