// main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow additional attributes of any type
}

// Create a Teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // Additional attribute
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);


function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${fullLastName}`;
}

// Define an interface for the printTeacher function as printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentInterface {
  new (firstName: string, lastName: string): StudentClass;
  workOnHomework(): string;
  displayName(): string;
}

// main.ts

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

export { StudentClass };
