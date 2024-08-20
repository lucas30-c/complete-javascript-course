const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`) //The function has a name property
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); // The forEach method will call the high5 function for each element of the array
// 3 '👋' will be printed in the console

// Abstraction: Hide the details of some code implementation and show only the essentials