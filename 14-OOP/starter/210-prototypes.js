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

Person.prototype.species = 'Homer Sapiens';
console.log(jonas.species, matilda.species); // Homer Sapiens Homer Sapiens
// But the species property is not on the jonas object itself(not its own property), it is on the prototype of the constructor function

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false