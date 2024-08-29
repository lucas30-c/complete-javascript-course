const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// This is very useful when we want to get a property value without calling a method
console.log(account.latest); // 300

// ...when we want to set a property value without calling a method
account.latest = 50;

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
}

const jessica = new Person('Jessica Davis', 1996);
console.log(jessica.age); // 41
console.log(jessica.fullName); // Jessica Davis
