// 4-pricing.js

// Import the Currency class
import Currency from './3-currency';

// Define the Pricing class
export default class Pricing {
  // Constructor to initialize the class attributes
  constructor(amount, currency) {
    this.amount = amount; // Set the amount attribute
    this.currency = currency; // Set the currency attribute
  }

  // Getter for the amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for the amount attribute
  set amount(amount) {
    // Check if the provided amount is a number or an instance of Number
    if (typeof amount !== 'number' && !(amount instanceof Number)) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount; // Set the private _amount attribute
  }

  // Getter for the currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for the currency attribute
  set currency(currency) {
    // Check if the provided currency is an instance of the Currency class
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency; // Set the private _currency attribute
  }

  // Method to display the full price in the required format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert a price using a conversion rate
  static convertPrice(amount, conversionRate) {
    // Check if the provided amount and conversionRate are numbers
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
