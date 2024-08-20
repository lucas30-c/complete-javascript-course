const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// to fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate')); // replaceAll() replaces all occurrences of a specified value.
// It is working since node version 15.0.0

console.log(announcement.replace(/door/g, 'gate')); // Regular expression

// Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320')); // true
console.log(plane1.includes('Boeing')); // false

console.log(plane1.startsWith('Airb')); // false
console.log(plane.startsWith('A320')); // true

if (plane.startsWith('A320') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife'); // You are NOT allowed on board
checkBaggage('Socks and camera'); // Welcome aboard!
checkBaggage('Got some snacks and a gun for protection'); // You are NOT allowed on board
