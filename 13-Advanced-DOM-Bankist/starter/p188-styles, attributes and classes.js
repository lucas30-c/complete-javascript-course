// document.body.style.backgroundColor = '#f3f3f3';

const header = document.querySelector('.header');
// This returns a NodeList, which is not live, meaning that if the dom changes, the collection will not update automatically
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');
// This returns a HTMLCollection, which is live(a so-called live collection), meaning that if the dom changes, the collection will update automatically
const allButtons = document.getElementsByTagName('button');

// This also returns a HTMLCollection
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

// createElement returns a dom element, and we can store it in a variable. That element is not yet anywhere in the dom, it's just a javascript object
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// prepend adds the element as the first child of the header
// The element can only be at one place at a time, so if we prepend it, it will be removed from the dom if we append
// header.prepend(message);
header.append(message);

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // DOM traversing
    // message.parentElement.removeChild(message);
  });

// Styles
// to set the inline style, we use the style property
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// There is no output, because it only works for inline styles and not for styles in the css file
console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement is the root element of the document, which is the html element
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
// Log the standard attributes(properties) of the element
// This will log the absolute path of the image
console.log(logo.src);
console.log(logo.alt);

// Non-standard attributes
console.log(logo.designer); //undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// We can create our own attributes by using data-<name>
// There are always stored in dataset
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c1', 'c2');
logo.classList.remove('c1');
logo.classList.toggle('c1');
logo.classList.contains('c1'); // not includes like in arrays or in the classList

// Don't use this!! It will overwrite all existing classes!
// logo.className = 'jonas';