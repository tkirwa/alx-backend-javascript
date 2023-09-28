/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */

// Disable eslint warnings for underscores in property names and for the maximum number of classes per file

export class HolbertonClass {
  // Define a class called 'HolbertonClass'
  constructor(year, location) {
    // Constructor for 'HolbertonClass' with 'year' and 'location' parameters
    this._year = year;
    // Initialize the '_year' property with the 'year' parameter
    this._location = location;
    // Initialize the '_location' property with the 'location' parameter
  }

  get year() {
    // Getter for the 'year' property
    return this._year;
  }

  get location() {
    // Getter for the 'location' property
    return this._location;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
// Create an instance of 'HolbertonClass' for the year 2019, located in San Francisco
const class2020 = new HolbertonClass(2020, 'San Francisco');
// Create an instance of 'HolbertonClass' for the year 2020, located in San Francisco

export class StudentHolberton {
  // Define a class called 'StudentHolberton'
  constructor(firstName, lastName, holbertonClass) {
    // Constructor for 'StudentHolberton' with 'firstName', 'lastName', and 'holbertonClass' parameters
    this._firstName = firstName;
    // Initialize the '_firstName' property with the 'firstName' parameter
    this._lastName = lastName;
    // Initialize the '_lastName' property with the 'lastName' parameter
    this._holbertonClass = holbertonClass;
    // Initialize the '_holbertonClass' property with the 'holbertonClass' parameter
  }

  get fullName() {
    // Getter for the full name of the student
    return `${this._firstName} ${this._lastName}`;
    // Concatenate the first and last names to form the full name
  }

  get holbertonClass() {
    // Getter for the 'holbertonClass' property
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    // Getter for a full student description
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    // Concatenate the first and last names, year, and location to create the full description
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
// Create a student instance with the name 'Guillaume Salva' and assign it to the 'class2020'
const student2 = new StudentHolberton('John', 'Doe', class2020);
// Create a student instance with the name 'John Doe' and assign it to the 'class2020'
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
// Create a student instance with the name 'Albert Clinton' and assign it to the 'class2019'
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
// Create a student instance with the name 'Donald Bush' and assign it to the 'class2019'
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
// Create a student instance with the name 'Jason Sandler' and assign it to the 'class2019'

const listOfStudents = [student1, student2, student3, student4, student5];
// Create a list of student instances

export default listOfStudents;
// Export the list of students as the default export of the module
