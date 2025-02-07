'use strict';

const h1 = document.querySelector('h1');

// we have many diffrent event hanndlers
// More info:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
// For example

const alerH1 = function (e) {
  alert('Great! You are reading the heading!');
  h1.removeEventListener('mouseenter', alerH1);
};

// Whenerver the mouse is on the specific area
h1.addEventListener('mouseenter', alerH1);

// we can turn off this after first activation
// with modification of function .removeEventListener
// Look up ^

// Old days we were using this metod for event listeners
// But now its not used
// h1.onmouseenter = alerH1;
