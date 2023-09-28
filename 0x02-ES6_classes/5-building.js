// 5-building.js

// Define the Building class as an abstract class
export default class Building {
  // Constructor to initialize the class attributes
  constructor(sqft) {
    this.sqft = sqft; // Set the sqft attribute
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Setter for the sqft attribute
  set sqft(sqft) {
    // Check if the provided sqft is a number or an instance of Number
    if (typeof sqft !== 'number' && !(sqft instanceof Number)) {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft; // Set the private _sqft attribute
  }

  // Abstract method that must be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage'
    );
  }
}
