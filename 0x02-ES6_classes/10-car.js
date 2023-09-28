/* eslint-disable no-underscore-dangle */
// 10-car.js

// Import the Symbol class from the built-in module
import { Symbol } from 'symbol';

// Define a private property using a symbol
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

// Define the Car class
export default class Car {
  // Define the constructor with the attributes
  constructor(brand, motor, color) {
    // Assign the attributes to the private properties
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Define the cloneCar method
  cloneCar() {
    // Return a new object of the same class with undefined properties
    return new this.constructor();
  }
}
