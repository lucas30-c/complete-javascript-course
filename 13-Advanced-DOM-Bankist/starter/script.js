'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  // log the height and width of the viewport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: smooth,
  // });

  // Modern way of scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const showAlert = function (e) {
  alert('Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', showAlert);

setTimeout(() => {
  h1.removeEventListener('mouseenter', showAlert);
  console.log('Event listener removed');
}, 3000);

// h1.onmouseenter = function(e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// }

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// Bubble up:
// It is as if the event also happens at the parent element, and then at the grandparent element, and so on
// For all 3 event listeners, the target element is the same, but the currentTarget is different
// The parameter e here is the same for all 3 event listeners
// So we can handle that event in all the parent elements
// The current target: the element that the event listener is attached to(the this keyword)

// The bubbling phase is very useful because it allows us to implement event delegation

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // e.target: where the event originated(where the event first happened)
  console.log('LINK', e.target, e.currentTarget);

  // Stop propagation
  // If we add e.stopPropagation(), the event will not bubble up anymore(It will never arrive at the parent element) So the click event will only happen on the link
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true
});


// The capturing phase
// If we add 'true' as the third argument, the event listener will be executed during the capturing phase. So 'NAV' will be logged first, then 'LINK', and then 'CONTAINER'
// This element will actually listen for event as it travels down from the DOM
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
