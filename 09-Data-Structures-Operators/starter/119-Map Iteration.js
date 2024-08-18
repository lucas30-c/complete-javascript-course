// An array of arrays
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log(question);
console.log(Object.entries(restaurant.openingHours)); // Object.entries() returns an array of arrays

// Convert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//question is a map
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//Convert map to an array
console.log([...question]); // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log(question.keys()); // MapIterator {"question", 1, 2, 3, "correct", …}
console.log([...question.keys()]); // ["question", 1, 2, 3, "correct", true, false]
console.log(question.values()) // MapIterator {"What is the best programming language?", "C", "Java", "JavaScript", 3, …}
console.log([...question.values()]); // ["What is the best programming language?", "C", "Java", "JavaScript", 3, "Correct", "Try again"]

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));
