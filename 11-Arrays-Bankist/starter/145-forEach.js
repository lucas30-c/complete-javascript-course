const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for-of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---FOREACH---');

// forEach is technically a higher order function
// the callback function passes in the current element, the current index, and the entire array, where the last two are optional
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

console.log(movements.entries()); // Array Iterator {}
console.log([...movements.entries()]); // [ [ 0, 200 ], [ 1, 450 ], [ 2, -400 ], [ 3, 3000 ], [ 4, -650 ], [ 5, -130 ], [ 6, 70 ], [ 7, 1300 ] ]

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---FOREACH---');
movements.forEach((movement, i, arr) => {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// One fundamental difference between the for-of loop and the forEach method is that the forEach method does not have a break or continue statement
// forEach will always loop over the entire array; there is nothing we can do to stop it
// If we need to break out of a loop, we should use the for-of loop
