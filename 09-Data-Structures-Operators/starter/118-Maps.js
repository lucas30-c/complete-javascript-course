const restaurant = new Map();
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
console.log(restaurant.set(2, 'Lisbon, Portugal')); //
// Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(restaurant);
console.log(restaurant.get('name'));
console.log(restaurant.get(true));
console.log(restaurant.get(1));

const time = 21;
console.log(
  restaurant.get(
    time > restaurant.get('open') && time < restaurant.get('close')
  )
);

console.log(restaurant.has('categories'));
restaurant.delete(2);
console.log(restaurant);
console.log(restaurant.size);
// restaurant.clear();
restaurant.set([1, 2], 'Test');
console.log(restaurant);


console.log(restaurant.get([1, 2])); // undefined
// Important: [1, 2] is a new array, so it is different from the array that we used to set the value. (These 2 arrays are different in the heap)

const arr = [1, 2];
restaurant.set(arr, 'Test');
console.log(restaurant.get(arr)); // Test

restaurant.set(document.querySelector('h1'), 'Heading');
console.log(restaurant);