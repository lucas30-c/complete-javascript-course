const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
// lastIndexOf() returns the index of the last occurrence of the specified element(last shown up)
console.log(airline.lastIndexOf('r')); // 10

console.log(airline.indexOf('Portugal')); // 8  (case sensitive)

// slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(airline.slice(4)); // Air Portugal
// 4 is the beginning index of the slice
console.log(airline.slice(4, 7)); // Air [a, b)

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// Start extracting from the end(The last 2 characters)
console.log(airline.slice(-2)) // al
console.log(airline.slice(1, -1)) // AP Air Portuga 依然是左闭右开

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1)
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😬')
  }
  else {
    console.log('You got lucky 😎')
  }
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

/**
 * Boxing: When we call a method on a primitive value, JavaScript automatically converts that primitive value to an object, which is called boxing.
 * Example: string value is converted to a string object
 */

// Boxing is like this(this what js done behind the scene whenver we call a method on a primitive value)
// And then when the operation is done, the object is converted back to a primitive value(a regular string primitive)

console.log(new String('jonas')); // String {"jonas"}
console.log(typeof new String('jonas')); // object

// All string methods return primitive values, even if called on a string object
console.log(typeof new String('jonas').slice(1)); // string