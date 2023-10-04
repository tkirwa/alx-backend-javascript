// task_4/js/main.ts

import { Subjects } from './subjects/Cpp';
import { Cpp, React, Java } from './subjects/Cpp';

// Create constants for subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create a teacher object with experienceTeachingC
const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Log information for Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log information for Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log information for React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
