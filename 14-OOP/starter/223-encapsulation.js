// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (There is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property
    this.#movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);

    // return this to make the method chainable
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }

    return this;
  }

  // 4) Private methods
  _approveLoan(val) {
    return true;
  }

  // Static method
  static helper() {}
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdraw(140);

// console.log(acc1.#movements); // Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class


// Chaining methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());