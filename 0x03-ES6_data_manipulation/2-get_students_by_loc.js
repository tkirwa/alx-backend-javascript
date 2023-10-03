// 2-get_students_by_loc.js

// Define the function getStudentsByLocation
const getStudentsByLocation = (students, city) => {
  // Use filter to find students in the specified city
  const studentsInCity = students.filter(
    (student) => student.location === city,
  );

  return studentsInCity;
};

export default getStudentsByLocation;
