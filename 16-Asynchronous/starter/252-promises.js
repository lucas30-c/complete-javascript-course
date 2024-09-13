const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = fetch('https://restcountries.com/v3.1/name/portugal');

console.log(request);

// The fetch function returns a promise, which is a placeholder for the future result of an asynchronous operation

const renderCountry = function (data, className = '') {
  // Removed redeclaration of data in the function
  // console.log('🚀 ~ data:', data);

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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

getCountryData('portugal');
