/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */

// Define the HolbertonClass class
export class HolbertonClass {
  constructor(year, location) {
    this._year = year; // Initialize the _year attribute with the provided 'year'
    this._location = location; // Initialize the _location attribute with the provided 'location'
  }

  // Getter for the year attribute
  get year() {
    return this._year; // Return the value of the _year attribute
  }

  // Getter for the location attribute
  get location() {
    return this._location; // Return the value of the _location attribute
  }
}

// Define the StudentHolberton class
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    // Initialize the _firstName attribute with the provided 'firstName'
    this._firstName = firstName;
    // Initialize the _lastName attribute with the provided 'lastName'
    this._lastName = lastName;
    // Initialize the _holbertonClass attribute with the provided 'holbertonClass'
    this._holbertonClass = holbertonClass;
  }

  // Getter for the full name of the student
  get fullName() {
    return `${this._firstName} ${this._lastName}`; // Return the full name as a combination of _firstName and _lastName
  }

  // Getter for the holbertonClass attribute
  get holbertonClass() {
    return this._holbertonClass; // Return the value of the _holbertonClass attribute
  }

  // Getter for the full student description
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    // Return the full student description including name, year, and location
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export the listOfStudents array containing the student instances
export const listOfStudents = [
  student1,
  student2,
  student3,
  student4,
  student5,
];
