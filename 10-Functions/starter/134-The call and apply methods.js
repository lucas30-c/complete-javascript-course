const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// The this keyword points to the luftansa object itself
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// JS has first-class functions
const book = lufthansa.book;
// book(23, 'Sarah Williams');
// Cannot read property 'push' of undefined
// Reason: the book function is just a regular function call, not a method call.
// In a regular function call, the this keyword points to undefined in strict mode and to the window object in sloppy mode.

// We need explicitly tell JS what the this keyword should be like

// The function has the call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');

// Apply method
// The apply method does not receive a list of arguments after the this keyword, but instead receives an array of arguments.
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Better way
book.call(swiss, ...flightData);

/**
 * Example: Using apply with Math.max
Suppose you have an array of numbers and you want to find the maximum value. The Math.max function can be used to find the maximum number, but it doesn't directly accept an array as an argument. You can use apply to solve this.

javascript
Copy code
const numbers = [5, 6, 2, 8, 3];

// Using Math.max with apply to find the maximum number
const maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber); // Output: 8
 */
