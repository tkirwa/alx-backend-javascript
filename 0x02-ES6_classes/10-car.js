// 10-car.js

// Define the Car class
export default class Car {
    // Define the constructor with the attributes
    constructor(brand, motor, color) {
      // Assign the attributes to the instance properties
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Define a static getter for the Symbol.species property
    // This returns the constructor of the class that created the instance
    static get Symbol.species {
      return this.prototype.constructor;
    }
  
    // Define the cloneCar method
    cloneCar() {
      // Return a new object of the same class with undefined properties
      // Use the Symbol.species property to get the correct constructor
      return new (this.constructor[Symbol.species])();
    }
  }
