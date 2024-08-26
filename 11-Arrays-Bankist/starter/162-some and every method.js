const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// includes method: EQUALITY
console.log(movements.includes(-130)); // true

// some method: CONDITION
const anyDeposits = movements.some(mov => mov > 0); // true
console.log(anyDeposits); // true

// every method: CONDITION
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // [ 200, 450, 3000, 70, 1300 ]
