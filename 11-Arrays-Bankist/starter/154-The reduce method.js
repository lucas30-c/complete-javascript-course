const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The accumulator is like a snowball that keeps accumalating the value that we ultimately want to return
// The accumulator will be the current result of all the previous values
// In each iteration, we return the updated accumulator
const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration # ${i}: ${acc}`);
  return acc + cur;
}, 0);

// Not recommended, very cumbersome and not practical
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance, balance2);

// Maximum value
const max = movements.reduce((acc, mov, i, arr) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
