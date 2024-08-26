console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const x = new Array(7); // [ <7 empty items> ]
console.log(x);

// x.fill(1); // [ 1, 1, 1, 1, 1, 1, 1 ]
x.fill(1, 3, 5); // [ <3 empty items>, 1, 1, <2 empty items> ]
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // [ 1, 2, 3, 4, 5, 6, 7 ]

const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI); 