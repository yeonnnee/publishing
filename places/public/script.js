'use strict';

var header = document.querySelector('header');
var hr = document.getElementsByTagName('h2');

var swiperPreBtn = document.querySelector('.swiper-button-prev');
var swiperNextBtn = document.querySelector('.swiper-button-next');
var swiperGroup1 = document.querySelector('.swiper-group1');
var swiperGroup2 = document.querySelector('.swiper-group2');
var swiperGroup3 = document.querySelector('.swiper-group3');
var swiperGroup4 = document.querySelector('.swiper-group4');
var swiperGroup5 = document.querySelector('.swiper-group5');

var dragPreBtn = document.querySelector('.drag-button-prev');
var dragNextBtn = document.querySelector('.drag-button-next');
var dragGroup1 = document.querySelector('.drag-group1');
var dragGroup2 = document.querySelector('.drag-group2');
var dragGroup3 = document.querySelector('.drag-group3');
var dragGroup4 = document.querySelector('.drag-group4');

// 스크롤시 header 배경색 변경
function scrollHandler() {
  var mainPhrase = document.querySelector(".control-header-point");
  var controlHeaderPoint = mainPhrase.offsetTop;
  var scrollPosition = window.pageYOffset;

  // header 관련 로직
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

  // const phraseTitle = document.querySelector(".top-places-title");
  // const phraseTitleP = phraseTitle.offsetBottom;
  // // Fade In 시키기위한 로직
  // if (phraseTitleP > scrollPosition) {
  //   console.log('j')
  //   phraseTitle.style.opacity = '1';
  // }
}

var swiperNum = 0;

function handleSwiper() {}
function handleDragSlider() {}

function getPrevSwiper() {}

function getNextSwiper() {
  var swiperSlider = document.querySelector('.swiper-wrapper');
  swiperNum = swiperNum + 1;

  if (swiperNum < 13) {
    var val = swiperNum * -270;
    swiperSlider.style.transform = 'translateX(' + val + ')';
    console.log('hger');
  }
}
function getPrevDragSlider() {}
function getNextDragSlider() {}

window.addEventListener('scroll', scrollHandler);

dragGroup1 && dragGroup1.addEventListener('click', handleDragSlider);
dragGroup2 && dragGroup2.addEventListener('click', handleDragSlider);
dragGroup3 && dragGroup3.addEventListener('click', handleDragSlider);
dragGroup4 && dragGroup4.addEventListener('click', handleDragSlider);

swiperGroup1 && swiperGroup1.addEventListener('click', handleSwiper);
swiperGroup2 && swiperGroup2.addEventListener('click', handleSwiper);
swiperGroup3 && swiperGroup3.addEventListener('click', handleSwiper);
swiperGroup4 && swiperGroup4.addEventListener('click', handleSwiper);
swiperGroup4 && swiperGroup5.addEventListener('click', handleSwiper);

swiperPreBtn && swiperPreBtn.addEventListener('click', getPrevSwiper);
swiperNextBtn && swiperNextBtn.addEventListener('click', getNextSwiper);

dragPreBtn && dragPreBtn.addEventListener('click', getPrevDragSlider);
dragNextBtn && dragNextBtn.addEventListener('click', getNextDragSlider);
