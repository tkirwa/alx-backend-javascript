// Define the Building class
export default class Building {
  // Constructor to initialize the class attributes
  constructor(sqft) {
    // Check if sqft is not a number and throw an error if it's not
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number');
    }
    this._sqft = sqft; // Set the sqft attribute with an underscore
    this.evacuationWarningMessage(); // Call the evacuationWarningMessage method
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Setter for the sqft attribute
  set sqft(value) {
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  // Abstract method that should be overridden by subclasses
  evacuationWarningMessage() {
    // Check if the class name is 'Building'; if not, throw an error
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
