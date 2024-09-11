'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// The XMLHttpRequest Object
// Old way of making AJAX requests

const renderCountry = function (data, className = '') {
  // Removed redeclaration of data in the function
  console.log('🚀 ~ data:', data);

  const languages = Object.values(data.languages).join(', '); // Object.values() returns an array of the object's own enumerable property values

  const currencies = Object.values(data.currencies)
    .map(currency => currency.name)
    .join(', ');

  const flagPng = data.flags.png;

  const html = `        <article class="country">
  <img class="country__img" src="${flagPng}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${
      +data.population / 1000000
    } million</p>
    <p class="country__row"><span>🗣️</span>${languages}</p>
    <p class="country__row"><span>💰</span>${currencies}</p>
  </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); // Now the variable is correctly declared
    console.log(data);

    // Render country 1
    renderCountry(data);

    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText); // Correctly declared
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// Test the function with some countries
// getCountryAndNeighbour("people's republic of china");
getCountryAndNeighbour('usa');

// Callback hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// });
