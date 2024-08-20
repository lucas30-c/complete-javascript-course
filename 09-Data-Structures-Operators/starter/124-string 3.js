console.log('a+very+nice+string'.split('+')); // ["a", "very", "nice", "string"]
console.log('Jonas Schmedtmann'.split(' ')); // ["Jonas", "Schmedtmann"]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// The join method is the opposite of the split method
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Jonas SCHMEDTMANN

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
const passenger = 'jessica ann smith davis';
capitalizeName(passenger);
capitalizeName('jonas schmedtmann');

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log(message.padStart(25, '+').padEnd(35, '+').length); // 35

const maskCreditCard = function (number) {
  const str = number + ''; //convert to a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(6464324140937836)); // ************7836
console.log(maskCreditCard('6464803284070566')); // ************0566

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planesInline(5);
planesInline(3);
planesInline(2);