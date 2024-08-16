const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
  'Pizza',
]);
console.log(orderSet); // Set(3) {"Pasta", "Pizza", "Risotto"}
// Just like array, sets are also iterable

console.log(new Set('Jonas')); // Set(5) {"J", "o", "n", "a", "s"}
console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
// set.has() is similar to array.includes()

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet); // Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
// Garlice Bread is added only once

orderSet.delete('Risotto');
console.log(orderSet); // Set(3) {"Pasta", "Pizza", "Garlic Bread"}

// Do not have index, so we cannot get value by index
console.log(orderSet[0]); // undefined

// orderSet.clear();
// console.log(orderSet); // Set(0) {}

// Sets are iterable
console.log(orderSet);
for (const order of orderSet) {
  console.log(order);
}

// Classic example: Remove duplicate values from array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique); // ["Waiter", "Chef", "Manager"]
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3
console.log(new Set('jonasschmedtmann').size); // 11