// Define the Airport class
export default class Airport {
  // Constructor to initialize the class attributes
  constructor(name, code) {
    // Check if the provided 'name' is a string; throw an error if it's not
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // Check if the provided 'code' is a string; throw an error if it's not
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name; // Set the name attribute with an underscore
    this._code = code; // Set the code attribute with an underscore
  }

  // Getter for the default toString tag
  get [Symbol.toStringTag]() {
    // Return the airport code as the default tag
    return this._code;
  }
}
