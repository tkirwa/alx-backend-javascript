import getStudentIdsSum from "./3-get_ids_sum";

// Sample array of students for testing
const students = [{ id: 1 }, { id: 2 }, { id: 3 }];

// Test the getStudentIdsSum function
test("getStudentIdsSum should return the sum of student IDs", () => {
  const sum = getStudentIdsSum(students);
  expect(sum).toBe(6); // Adjust the expected value based on your data
});
