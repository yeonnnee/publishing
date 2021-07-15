const header = document.querySelector('header');
const hr = document.getElementsByTagName('h2');

const swiperPreBtn = document.querySelector('.swiper-button-prev');
const swiperNextBtn = document.querySelector('.swiper-button-next');
const swiperGroup1 = document.querySelector('.swiper-group1');
const swiperGroup2 = document.querySelector('.swiper-group2');
const swiperGroup3 = document.querySelector('.swiper-group3');
const swiperGroup4 = document.querySelector('.swiper-group4');
const swiperGroup5 = document.querySelector('.swiper-group5');

const dragPreBtn = document.querySelector('.drag-button-prev');
const dragNextBtn = document.querySelector('.drag-button-next');
const dragGroup1 = document.querySelector('.drag-group1');
const dragGroup2 = document.querySelector('.drag-group2');
const dragGroup3 = document.querySelector('.drag-group3');
const dragGroup4 = document.querySelector('.drag-group4');

// 스크롤시 header 배경색 변경
function scrollHandler() {
  const mainPhrase = document.querySelector(".control-header-point");
  const controlHeaderPoint = mainPhrase.offsetTop;
  const scrollPosition = window.pageYOffset;

  // header 관련 로직
  if (scrollPosition > controlHeaderPoint) {
    header.classList.add('dark-header');
  } else if(scrollPosition < controlHeaderPoint && scrollPosition !== 0){
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

let swiperNum = 0;

function handleSwiper() {}
function handleDragSlider() {}

function getPrevSwiper() {}

function getNextSwiper() {
  const swiperSlider = document.querySelector('.swiper-wrapper');
  swiperNum = swiperNum + 1;

  if (swiperNum < 13) {
    let val = swiperNum * -270
    swiperSlider.style.transform = `translateX(${val})`;
    console.log('hger')
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

