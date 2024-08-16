'use strict';

// Data needed for first part of the section
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

const { openingHours } = restaurant;

// Looping Objects: Object Keys, Values, and Entries
for (const day of Object.keys(openingHours)) {
  console.log(day); // thu fri sat
}

// Property Names
const properties = Object.keys(openingHours);
console.log(properties); // ["thu", "fri", "sat"]
console.log(`We are opening on ${properties.length} days.`); // We are opening on 3 days.

// Property Values
const values = Object.values(openingHours);
console.log(values) // [{open: 12, close: 22}, {open: 11, close: 23}, {open: 0, close: 24}]

// Entry Object
const entries = Object.entries(openingHours);
console.log(entries); // [["thu", {open: 12, close: 22}], ["fri", {open: 11, close: 23}], ["sat", {open: 0, close: 24}]]

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}