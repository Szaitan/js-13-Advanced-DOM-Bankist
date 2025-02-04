'use strict';

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'This cookie supose to help in webside development. <button class="btn btn-close-cookie">Push me!</button>';

document.querySelector('.header').prepend(message);

//STYLES
// We can affect the styles of element by .style property
message.style.backgroundColor = 'darkblue';
message.style.width = '120%';

// To get all properties of style we have to use getComputeStyle
console.log(getComputedStyle(message));
// more specific we can type property name
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)

// With setProperty we can affect CSS variables
document.documentElement.style.setProperty('--color-primary', 'red');
message.style.setProperty('color', 'red');

// ATTRIBUTES
// Standard approach
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard for property not expected in tag
console.log(logo.author); // will give undefined
console.log(logo.getAttribute('author')); // mike

// We can also set the attribute of tagf
console.log(logo.setAttribute('alt', 'The best image'));

// Its important to use getAttribute in case of href and src
console.log(logo.src); // http://127.0.0.1:5500/img/logo.png
console.log(logo.getAttribute('src')); // img/logo.png

// DATA ATTRIBUTES
// Its important to start property of tag with 'data'
// beacause its saved in dataset
// also imporant is camelcase in writing in JS
console.log(logo.dataset.versionNumber); // 3.9

// CLASSES
logo.classList.add('C');
logo.classList.remove('C');
logo.classList.toggle('C');
logo.classList.contains('C');
asd;
