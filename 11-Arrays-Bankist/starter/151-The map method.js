const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// The map method is another way to loop over arrays
// The map method is similar to the forEach method, but it is different in that it returns a new array

const euroToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements, movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}


/**
 * Just like the forEach method, the map method also has access to the current element, the current index, and the entire array
 */
const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);

/**
 * The forEach method may cause side effects, but the map method is a pure function
 */
