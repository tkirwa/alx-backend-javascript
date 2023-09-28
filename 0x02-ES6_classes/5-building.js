// Define the Building class
export default class Building {
  constructor(sqft) {
    // Check if the constructor is called directly on the Building class
    if (this.constructor !== Building) {
      // Get the property names of the constructor's prototype
      const props = Object.getOwnPropertyNames(this.constructor.prototype);
      // Check if there is no 'evacuationWarningMessage' method in the prototype
      if (!props.find((e) => e === 'evacuationWarningMessage')) {
        // Throw an error if the subclass does not override 'evacuationWarningMessage'
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
    this._sqft = sqft; // Set the sqft attribute with an underscore
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Setter for the sqft attribute
  set sqft(sqft) {
    // Check if the provided sqft is not a number or an instance of Number
    if (typeof sqft !== 'number' && !(sqft instanceof Number)) {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft; // Set the private _sqft attribute
  }
}
