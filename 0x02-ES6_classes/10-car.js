// 10-car.js

// Define the Car class
export default class Car {
    // Define the constructor with the attributes
    constructor(brand, motor, color) {
      // Use getters and setters to access the private properties
      this.brand = brand;
      this.motor = motor;
      this.color = color;
    }
  
    // Define a getter for the brand property
    get brand() {
      // Return the value of the private property _brand
      return this._brand;
    }
  
    // Define a setter for the brand property
    set brand(value) {
      // Assign the value to the private property _brand
      this._brand = value;
    }
  
    // Define a getter for the motor property
    get motor() {
      // Return the value of the private property _motor
      return this._motor;
    }
  
    // Define a setter for the motor property
    set motor(value) {
      // Assign the value to the private property _motor
      this._motor = value;
    }
  
    // Define a getter for the color property
    get color() {
      // Return the value of the private property _color
      return this._color;
    }
  
    // Define a setter for the color property
    set color(value) {
      // Assign the value to the private property _color
      this._color = value;
    }
  
    // Define a static getter for the Symbol.species property
    // This returns the constructor of the class that created the instance
    static get Symbol.species {
      return this;
    }
  
    // Define the cloneCar method
    cloneCar() {
      // Get the constructor of the class using Symbol.species
      const Species = this.constructor[Symbol.species];
      // Return a new object of the same class with undefined properties
      return new Species();
    }
  }
  