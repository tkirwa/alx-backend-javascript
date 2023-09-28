// Define the HolbertonClass class
export default class HolbertonClass {
  // Constructor to initialize the class attributes
  constructor(size, location) {
    this.size = size; // Set the size attribute
    this.location = location; // Set the location attribute
  }

  // Getter for the size attribute
  get size() {
    return this._size;
  }

  // Setter for the size attribute
  set size(size) {
    // Check if the provided size is a number or an instance of Number
    if (typeof size !== 'number' && !(size instanceof Number)) {
      throw new TypeError('Size must be a number');
    }
    this._size = size; // Set the private _size attribute
  }

  // Getter for the location attribute
  get location() {
    return this._location;
  }

  // Setter for the location attribute
  set location(location) {
    // Check if the provided location is a string or an instance of String
    if (typeof location !== 'string' && !(location instanceof String)) {
      throw new TypeError('Location must be a string');
    }
    this._location = location; // Set the private _location attribute
  }

  // Implement the valueOf method to return the size when cast to a Number
  valueOf() {
    return this._size;
  }

  // Implement the toString method to return the location when cast to a String
  toString() {
    return this._location;
  }
}
