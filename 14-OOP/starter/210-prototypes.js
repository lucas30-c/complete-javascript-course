// Every object (that is created by certain constructor function) will get access to all the methods and properties that we define on the constructor function's prototype property(Person.prototype)

// 每个由特定构造函数创建的对象都可以访问我们在该构造函数的 prototype 属性上定义的所有方法和属性。

// Prototypes

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);

console.log(Person.prototype); // {calcAge: ƒ, constructor: ƒ}

jonas.calcAge(); // 46
matilda.calcAge(); // 20

console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
// The prototype of the jonas object is the prototype property of the constructor function that created jonas
console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

console.log(Person.prototype.constructor); // ƒ (firstName, birthYear) {...}

Person.prototype.species = 'Homer Sapiens';
console.log(jonas.species, matilda.species); // Homer Sapiens Homer Sapiens
// But the species property is not on the jonas object itself(not its own property), it is on the prototype of the constructor function

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas.__proto__.__proto__);
// The prototype property of the Object
console.log(jonas.__proto__.__proto__.__proto__);
// null

console.dir(Person.prototype.constructor); // ƒ (firstName, birthYear) {...}

// Prototype of arrays

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__); // Array(0)
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // [Object: null prototype] {}

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 5, 9]

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(h1.__proto__); // HTMLHeadingElement => HTMLElement => Element => Node => EventTarget => Object => null

console.dir(x => x + 1);
