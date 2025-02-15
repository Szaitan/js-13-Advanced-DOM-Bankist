'use strict';

// Event propagation - Propagation refers to how events
// travel through the Document Object Model (DOM) tree.

// First is Capturing Phase, which follows DOM elements until its reach target

// Second is Taget Phase - The target is the DOM node on which you click,
// or trigger with any other event.

// Third Bubbling Phase - Bubbling travels from the target to the root

const navElement = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelector('.nav__link');

// Generating random color
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
};
const randomColor = function () {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},
   ${randomInt(0, 255)})`;
};

navElement.addEventListener('click', function (e) {
  // e.target property will show us element which event was handled
  // Even on parrent elements
  console.log(e.target);

  // e. To see the DOM element on which event is located we can use
  console.log(e.currentTarget);
  this.style.backgroundColor = randomColor();
});

navLinks.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  this.style.backgroundColor = randomColor();
});

navLink.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
  this.style.backgroundColor = randomColor();
});

// As we can see elements are printed in bubbling sequence
// From navlink > navlinks > nav
// We can affect the seqence of event by adding 3 parameter to even handler
// which is true
// Now we have: nav > navlink > navlinks

/*navElement.addEventListener('click', function (e) {
  // e.target property will show us element which event was handled
  // Even on parrent elements
  console.log(e.target);

  // e. To see the DOM element on which event is located we can use
  console.log(e.currentTarget);
  this.style.backgroundColor = randomColor();
}, true);
 */
