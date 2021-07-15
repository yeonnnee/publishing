'use strict';

var header = document.querySelector('header');

// 스크롤시 header 배경색 변경
function scrollHandler() {
  var mainPhrase = document.querySelector(".control-header-point");
  var controlHeaderPoint = mainPhrase.offsetTop;

  var scrollPosition = window.pageYOffset;

  console.log('o', scrollPosition);
  console.log(controlHeaderPoint);
  if (scrollPosition > controlHeaderPoint) {
    header.classList.add('dark-header');
  } else if (scrollPosition < controlHeaderPoint && scrollPosition !== 0) {
    header.classList.add('hide-header');
    header.classList.remove('dark-header');
  } else if (scrollPosition === 0) {
    header.classList.remove('hide-header');
  } else {
    return;
  }
}

// function scrollHandler() {

// }

window.addEventListener('scroll', scrollHandler);
