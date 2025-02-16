'use strict';

// Traversing allows us to move around DOM structure

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
// Returns every node elements
console.log(h1.childNodes);
// Returns every elements - We rather use this one
console.log(h1.children);

// We can also affect first and last child with use:
console.log((h1.firstElementChild.style.color = 'red'));
console.log((h1.lastElementChild.style.color = 'orange'));

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

// Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
h1.closest('.header').style.backgroundColor = 'lightgreen';

// Going sideways: siblings
// We are rather using ..ElementSibling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// Combination of going to parent and gather all childrens
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (ele) {
  if (ele !== h1) ele.style.color = 'yellow';
});
