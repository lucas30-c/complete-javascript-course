
// Static methods are attached to the constructor function itself, and not to the prototype property. 

// e.g. Array.from(), Number.parseFloat(), Object.create()
// We call the from method in the Array namespace.

// Static methods are not available on the instances, but only on the constructor itself.

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

Person.hey(); // Hey there 👋 [class Person]