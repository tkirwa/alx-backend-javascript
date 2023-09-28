// Define the HolbertonCourse class
export default class HolbertonCourse {
  // Constructor to initialize the class attributes
  constructor(name, length, students) {
    this.name = name; // Set the name attribute
    this.length = length; // Set the length attribute
    this.students = students; // Set the students attribute
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(name) {
    // Check if the provided name is a string or an instance of String
    if (typeof name !== 'string' && !(name instanceof String)) {
      throw new TypeError('Name must be a string');
    }
    this._name = name; // Set the private _name attribute
  }

  // Getter for the length attribute
  get length() {
    return this._length;
  }

  // Setter for the length attribute
  set length(length) {
    // Check if the provided length is a number or an instance of Number
    if (typeof length !== 'number' && !(length instanceof Number)) {
      throw new TypeError('Length must be a number');
    }
    this._length = length; // Set the private _length attribute
  }

  // Getter for the students attribute
  get students() {
    return this._students;
  }

  // Setter for the students attribute
  set students(students) {
    // Check if students is an array and all elements are strings
    if (
      !(students instanceof Array) || !students.every((s) => typeof s === 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students; // Set the private _students attribute
  }
}
