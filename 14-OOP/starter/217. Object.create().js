
// We can use Object.create() to manually set the prototype of an object to any other object that we want.

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // Manual way of initialising an object
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

};

// This will return a brand new object that is linked to PersonProto
// We manually set the prototype of the'steven' object to be PersonProto
const steven = Object.create(PersonProto);
console.log(steven); // {}

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35

// This will exactly the PersonProto object
console.log(steven.__proto__); // {calcAge: ƒ}

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 58