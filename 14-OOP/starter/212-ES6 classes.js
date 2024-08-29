// Classes in js are just syntactic sugar over the constructor functions
// They do not behave like classes in other programming languages

// ES6 classes

// class expression
// const PersonCl = class {}

// In fact, classes are just a special type of function

// class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

//  In this syntax, we do not need to use the prototype keyword

const jonas = new Person('Jonas', 1991);
console.log(jonas);

console.log(jonas.__proto__ === Person.prototype); // true
console.log(jonas.hasOwnProperty('calcAge')); // false

// Key points:
// 1. Classes are NOT hoisted (Class declarations are not accessible before they are defined in the code. This is different from how function declarations work, where you can use a function before it's defined due to hoisting.)
// Classes in JavaScript are NOT hoisted like functions.
// 2. Classes are first-class citizens(We can pass them into functions and return them from functions), becase classes are just special type of functions
// 3. Classes are executed in strict mode