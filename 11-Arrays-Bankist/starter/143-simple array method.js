let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE (does not mutate the original array)
// 左闭右开
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
// Get the last two elements
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']
// We can use the slice method as well as the spread operator to create a shallow copy of an array, depending on personal preference

// SPLICE (mutates the original array)
// Splice takes part of the array and removes them from the original array
// In practice, what splice method returns does not interest us, all we are interested is to delete elements from the array
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']

// remove the last element
arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']

arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(1, 2); // ['b', 'c']
console.log(arr); // ['a', 'd', 'e']
// (method) Array<number>.splice(start: number, deleteCount?: number | undefined): number[]

// REVESRE (mutates the original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']

// CONCAT (does not mutate the original array)
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join('-')); // returns a string with all the elements joined by a hyphen
