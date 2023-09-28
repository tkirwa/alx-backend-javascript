/* eslint-disable no-underscore-dangle */
import Car from './10-car';

// Import the Car class from the '10-car' module

export default class EVCar extends Car {
  // Define a new class 'EVCar' that extends the 'Car' class
  constructor(brand, motor, color, range) {
    // Constructor for the 'EVCar' class, taking additional 'range' parameter
    super(brand, motor, color);
    // Call the constructor of the parent class 'Car' with 'super'
    this.range = range;
    // Set the 'range' property specific to the 'EVCar' class
  }

  get range() {
    // Getter for the 'range' property
    return this._range;
  }

  set range(value) {
    // Setter for the 'range' property
    this._range = value;
  }

  cloneCar() {
    // Method to create a new instance of the same class (overrides the method in 'Car' class)
    const Species = super.constructor[Symbol.species];
    // Get the class using Symbol.species from the parent class 'Car'

    return new Species();
    // Create a new instance of the class and return it
  }
}
