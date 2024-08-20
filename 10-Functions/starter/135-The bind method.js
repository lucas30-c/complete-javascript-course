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

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

const bookEw = book.bind(eurowings);
bookEw(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23

const bookLh = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Eurowings flight EW23
// Here, we specify parts of the arguments in the bind method beforehand. This is called partial application. This means a part of the arguments of the original function are already applied.

// Use case 1: With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();
// {
//   "airline": "Lufthansa",
//   "iataCode": "LH",
//   "bookings": [],
//   "planes": 301
// }
// 301

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // NaN
// The this keyword points to the button element, not the lufthansa object. This is because the buyPlane function is a callback function, and the this keyword points to the element that the event listener is attached to.
// P96: this = DOM element that the handler is attached to

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // 302

// Use case 2: Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100)); // 123

// The order of the arguments in the bind method is important. The first argument is the this keyword, and the rest of the arguments are the arguments of the original function.
// Sometimes, we don't care about the this keyword, so we can pass null or undefined.
// Someone will argue that this can be done with default parameters, but using bind actually gives us a new function that we can reuse.

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123
console.log(addVAT2(23)); // 28.29

/**
 * You set the first argument of bind to null when the function you are binding does not rely on the this context or when you don't care about changing the this value in the bound function. In other words, if the function is a "standalone" function that does not use this internally, you can safely pass null as the first argument.
 */