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

btnsOpenModal.forEach(function (ele) {
  ele.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Adding smoth scroll
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScroll.addEventListener('click', function (e) {
  //Using .getBoundClientRect we can get informations about position
  // of element: x, y, top, left etc.
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);
  // DOMRect { x: 0, y: 870, width: 1385, height: 1549.699951171875, top: 870, right: 1385, bottom: 2419.699951171875, left: 0 }

  // x and left, y and top are always the same.
  // top is the distance from top of our browser till selected element,
  // and is affected by viewport. So the smaller the distance element and top of viewport
  // the smaller will be top and y.

  // To check the position of our scroll bar we can use: .scrollx and scrolly
  console.log(
    `Current position fo scroll bar:`,
    window.scrollX,
    window.scrollY
  );

  // To check the height/width of viewport we can use clientHieght and clientWidht
  // to simple put its the size of browser window
  console.log(
    `height/width viewoprt`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // To move to specific location of element in our document we can use:
  // window.scrollTo
  // We have to remmeber that that if we move our scroll down or any direction
  // we have to add the distance between scroll and top of webstie to distnace between element
  // and top of website.
  // window.scrollTo(
  //   section1.getBoundingClientRect().left + window.scrollX,
  //   section1.getBoundingClientRect().top + window.scrollY
  // );

  // We can add additional effect as behavior by passing object
  window.scrollTo({
    left: section1.getBoundingClientRect().left + window.scrollX,
    top: section1.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth',
  });

  // New way to scrollTo
  section1.scrollIntoView({ behavior: 'smooth' });
});

// This both solutions are not perfect if the number of elements with event listner would be to big
// Solution 1
// const navLinks = document.querySelectorAll('.nav__item');
// [...navLinks].forEach(function (link) {
//   const href = link.firstElementChild.getAttribute('href');
//   const hrefSplit = href.split('#');
//   if (hrefSplit[1]) {
//     const section = document.querySelector(`#${hrefSplit[1]}`);
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       window.scrollTo({
//         left: section.getBoundingClientRect().left + window.scrollX,
//         top: section.getBoundingClientRect().top + window.scrollY,
//         behavior: 'smooth',
//       });
//     });
//   }
// });

// Solution 2
// const navLinks = document.querySelectorAll('.nav__link');
// [...navLinks].forEach(function (item) {
//   if (item.getAttribute('href') != '#') {
//     const section = document.querySelector(`${item.getAttribute('href')}`);
//     item.addEventListener('click', function (e) {
//       e.preventDefault();
//       window.scrollTo({
//         left: section.getBoundingClientRect().left + window.scrollX,
//         top: section.getBoundingClientRect().top + window.scrollY,
//         behavior: 'smooth',
//       });
//     });
//   }
// });

// Event delegation can help us with this.
// Its is made through two steps:
// 1) Add event listener to common parent Element
// 2) Determine what element originated the event

const navLinks = document.querySelector('.nav__links');

navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (
    e.target.classList.contains('nav__link') &&
    e.target.getAttribute('href').length > 2
  ) {
    console.log(this);
    console.log(e.target);
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Commponenet
// My solution
const tabParent = document.querySelector('.operations__tab-container');
const tabElements = document.querySelectorAll('.operations__tab');
const tabContainers = document.querySelectorAll('.operations__content');

tabParent.addEventListener('click', function (e) {
  if (e.target.classList.contains('operations__tab')) {
    tabElements.forEach(function (ele, i) {
      if (ele.classList.contains('operations__tab--active')) {
        ele.classList.toggle('operations__tab--active');
        tabContainers[i].classList.remove('operations__content--active');
      }
    });
    e.target.classList.add('operations__tab--active');
    // getting data from unofficial dataset
    const operationsContentNum = e.target.dataset.tab;
    tabContainers[operationsContentNum - 1].classList.add(
      'operations__content--active'
    );
  }
});
