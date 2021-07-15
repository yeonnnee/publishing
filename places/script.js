'use strict';

var header = document.querySelector('header');

// 스크롤시 header 배경색 변경
function headerController() {
  var mainPhrase = document.querySelector(".control-header-point");
  var controlHeaderPoint = mainPhrase.offset().top;

  var scrollPosition = window.pageYOffset;

  if (scrollPosition > controlHeaderPoint) {
    header.classList.add('dark-header');
  } else if (scrollPosition === 0) {
    header.classList.remove('dark-header');
  } else {
    return;
  }
}

function scrollHandler() {}

window.addEventListener('scroll', scrollHandler());
