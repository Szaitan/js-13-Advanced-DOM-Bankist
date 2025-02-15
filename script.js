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
