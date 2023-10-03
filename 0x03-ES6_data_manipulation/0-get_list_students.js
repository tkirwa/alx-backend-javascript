// 0-get_list_students.js

// Define the function getListStudents
const getListStudents = () => {
  // Create an array of student objects
  const students = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];

  // Return the array of students
  return students;
};

// Export the getListStudents function
export default getListStudents;
