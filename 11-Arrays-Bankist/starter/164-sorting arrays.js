const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// BE CAREFUL: The sort method mutates the original array!!!

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]
console.log(owners); // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]

// Numbers
// console.log(movements.sort()) // [ -130, -400, -650, 1300, 200, 3000, 450, 70 ]
/**
 * The sort method converts the elements of the array to strings and then sorts them
 *
 * The minus always comes first
 */

// A and B are 2 consecutive elements in the array
// A on the left, B on the right
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1; // ✅
});
console.log(movements); // [ -650, -400, -130, 70, 200, 450, 1300, 3000 ]

movements.sort((a, b) => {
  if (a > b) return -1; // ✅
  if (a < b) return 1;
});
console.log(movements); // [ 3000, 1300, 450, 200, 70, -130, -400, -650 ]

// Better way:
movements.sort((a, b) => a - b); //in ascending order
movements.sort((a, b) => b - a); //in descending order
