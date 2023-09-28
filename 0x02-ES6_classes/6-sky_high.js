// Import the Building class
import Building from './5-building';

// Define the SkyHighBuilding class that extends Building
export default class SkyHighBuilding extends Building {
  // Constructor to initialize the class attributes
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft attribute
    this.floors = floors; // Set the floors attribute
  }

  // Getter for the floors attribute
  get floors() {
    return this._floors;
  }

  // Setter for the floors attribute
  set floors(floors) {
    // Check if the provided floors is a number or an instance of Number
    if (typeof floors !== 'number' && !(floors instanceof Number)) {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors; // Set the private _floors attribute
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    // Return the evacuation message with the number of floors
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
