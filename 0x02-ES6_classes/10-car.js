/* eslint-disable no-underscore-dangle */
// Disable eslint warnings for underscores in property names

export default class Car {
  constructor(brand, motor, color) {
    // Constructor for the Car class
    this.brand = brand; // Public property 'brand'
    this.motor = motor; // Public property 'motor'
    this.color = color; // Public property 'color'
  }

  // Getters and setters for 'brand', 'motor', and 'color' properties
  // These use internal underscored variables to store the values

  get brand() {
    return this._brand; // Getter for 'brand' property
  }

  set brand(value) {
    this._brand = value; // Setter for 'brand' property
  }

  get motor() {
    // eslint-disable-next-line no-underscore-dangle
    return this._motor; // Getter for 'motor' property
  }

  set motor(value) {
    this._motor = value; // Setter for 'motor' property
  }

  get color() {
    return this._color; // Getter for 'color' property
  }

  set color(value) {
    this._color = value; // Setter for 'color' property
  }

  static get [Symbol.species]() {
    // Static getter for the Symbol.species property
    // Returns the class itself, which is used in cloneCar()
    return this;
  }

  cloneCar() {
    // Method to create a new instance of the same class
    const Species = this.constructor[Symbol.species]; // Get the class using Symbol.species

    return new Species();
  }
}
