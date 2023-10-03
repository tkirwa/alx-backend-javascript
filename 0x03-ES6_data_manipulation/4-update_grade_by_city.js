// 4-update_grade_by_city.js

// Define the function updateStudentGradeByCity
function updateStudentGradeByCity(students, city, newGrades) {
  // Use filter to get students in the specified city
  const studentsInCity = students.filter(
    (student) => student.location === city,
  );

  // Use map to update their grades
  const updatedStudents = studentsInCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

  return updatedStudents;
}

// Export the updateStudentGradeByCity function
export default updateStudentGradeByCity;
