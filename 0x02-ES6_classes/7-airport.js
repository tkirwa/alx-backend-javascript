// Define the Airport class
export default class Airport {
  // Constructor to initialize the class attributes
  constructor(name, code) {
    this.name = name; // Set the name attribute
    this.code = code; // Set the code attribute
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

  // Getter for the code attribute
  get code() {
    return this._code;
  }

  // Setter for the code attribute
  set code(code) {
    // Check if the provided code is a string or an instance of String
    if (typeof code !== 'string' && !(code instanceof String)) {
      throw new TypeError('Code must be a string');
    }
    this._code = code; // Set the private _code attribute
  }

  // Override the default toString method to return the airport code
  toString() {
    return `[${this._code}]`;
  }
}
