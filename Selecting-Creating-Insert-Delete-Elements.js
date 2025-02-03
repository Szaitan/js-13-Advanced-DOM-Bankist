'use strict';

// SELECTING ELEMENTS
// of course we can select elements by
// using queryselect
const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section'));

// to select whole document we can use .documentElement
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// We can select elements by using .getElementByID, byTagName, byClassName
document.getElementById('section--1');

// Elements selected with by TagsName are more dynamic
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// CREATING AND INSERTING ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'This cookie supose to help in webside development. <button class="btn btn-close-cookie">Push me!</button>';

// Prepend add element into header element in first position
header.prepend(message);

// Append add element into header element at last position
header.append(message);

// To clone node we can do it with .cloneNode(true)
// header.prepend(message.cloneNode(true));

// Before add element before header element
header.before(message);

// After add element after header element
header.after(message);

// DELETING ELEMENTS
// we can do it using .remove()

document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
