// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((val, key, map) => {
  console.log(`${key}: ${val}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach((val, key, set) => {
  console.log(`${key}: ${val}`);
});

// In sets, the key and value are the same. This is because sets do not have keys, only values. The key is the value itself.

// Better
currenciesUnique.forEach((val, _, set) => {
  console.log(`${val}: ${val}`);
});
// the underscore is called a throwaway variable, which is a variable that we do not care about and will not use