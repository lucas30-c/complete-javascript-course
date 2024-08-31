const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // Person(firstName, birthYear) // This will not work
  // Because it is just a regular function call, and the this keyword is undefined
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
// What we want is the Person's prototype object to be the prototype of the Student's prototype object(student.__proto__.__proto__)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike); // Student {firstName: "Mike", birthYear: 2020, course: "Computer Science"}
mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge(); // 17

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(Student.prototype.constructor); //[Function: Person]

Student.prototype.constructor = Student;
