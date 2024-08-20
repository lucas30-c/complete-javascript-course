const flight = 'LH234';

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); // LH234
console.log(jonas); 
// {
//   "name": "Mr. Jonas Schmedtmann",
//   "passport": 24739479284
// }

// The flight number is a primitive value, so it is passed by value.
// The passenger object is a reference value, so it is passed by reference.

// Is the same as doing:
// const flightNum = flight;
// const passenger = jonas; (They are pointing to the same object in the memory)

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas); // It will change the passport number of jonas (2 functions manipulating the same object)
checkIn(flight, jonas);

// Clarification
// JavaScript does not have passing by reference, only passing by value.