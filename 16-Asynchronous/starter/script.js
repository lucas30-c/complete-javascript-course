'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// The XMLHttpRequest Object
// Old way of making AJAX requests

// Github: Public APIs -- REST Countries
// CORS: Cross-Origin Resource Sharing
// Without CORS, we cannot access a third-party API from our own domain

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
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
  });
};

getCountryData('people\'s republic of china');
getCountryData('usa');
getCountryData('china');
getCountryData('germany');