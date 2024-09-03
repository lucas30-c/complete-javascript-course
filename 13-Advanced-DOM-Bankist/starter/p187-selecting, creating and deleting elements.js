// document is not real dom element, it is a global object that represents the entire html document
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// document.body.style.backgroundColor = '#f3f3f3';

const header = document.querySelector('.header');
// This returns a NodeList, which is not live, meaning that if the dom changes, the collection will not update automatically
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
// This returns a HTMLCollection, which is live(a so-called live collection), meaning that if the dom changes, the collection will update automatically
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

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
