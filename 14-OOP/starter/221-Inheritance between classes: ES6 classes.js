
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    // To avoid the naming conflict, we use an underscore
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name...`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  } 
}

class Student extends Person {
  // Receives the same argument as the parent class and the new argument for the child class
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    // This is not mandatory
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Essentially overiding the same as the calcAge method in the Person class
  // We can also this is shadowing the method from the parent class
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel like ${2037 - this.birthYear + 10}`);
  }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
console.log(martha); // Student {fullName: "Martha Jones", birthYear: 2012, course: "Computer Science"}
martha.introduce()
martha.calcAge(); // I'm 25 years old, but as a student I feel like 35