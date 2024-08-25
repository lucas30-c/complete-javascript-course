
const arr = [23, 11, 64]
console.log(arr[0])
console.log(arr.at(0)) // arr at postion 0

// Try to get the last element of the array
console.log(arr.slice(-1)) // [64]
console.log(arr.slice(-1).at(0)) // 64
console.log(arr[arr.length - 1]) // 64
console.log(arr.at(-1)) // 64 (Recommended)
console.log(arr[-1]) // undefined

// The at method also works on strings
console.log('jonas'.at(0)) // j
console.log('jonas'.at(-1)) // s