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

function handleSwiper(e) {
  const swiperSlider = document.querySelector('.swiper-wrapper');
  const currentBtn = document.querySelector('.selected');
  const target = e.target.classList.toString();

  let val;
  if(target.indexOf(`swiper-group1`) > -1) {
    swiperNum = 0;
    val = -20;

    currentBtn.classList.remove('selected');
    swiperGroup1.classList.add('selected');

  } else if(target.indexOf(`swiper-group2`) > -1){
    swiperNum = 3;
    val =  (3 * -348) - 5;

    currentBtn.classList.remove('selected');
    swiperGroup2.classList.add('selected');

  } else if(target.indexOf(`swiper-group3`) > -1){
    swiperNum = 6;
    val = (6 * -344) - 7;

    currentBtn.classList.remove('selected');
    swiperGroup3.classList.add('selected');

  } else if(target.indexOf(`swiper-group4`) > -1){
    swiperNum = 9;
    val = (9 * -344);

    currentBtn.classList.remove('selected');
    swiperGroup4.classList.add('selected');

  } else if(target.indexOf(`swiper-group5`) > -1){
    swiperNum = 12;
    val = (12 * -344) + 3 ;

    currentBtn.classList.remove('selected');
    swiperGroup5.classList.add('selected');
  }

  swiperSlider.style.transform = `translateX(${val}px)`;
  swiperSlider.style.transition = `all 1.3s ease`;
}


function getPrevSwiper() {
  const swiperSlider = document.querySelector('.swiper-wrapper');
  const currentBtn = document.querySelector('.selected');

  let val;

  switch (swiperNum) {
    case 0: {
      break;
    }
    case 1: {
      swiperNum = swiperNum - 1;
      val = -20;

      currentBtn.classList.remove('selected');
      swiperGroup1.classList.add('selected');
      break;
    }
    case 2: {
      swiperNum = swiperNum - 1;
      val = swiperNum * -363;
      break;
    }
    case 3:{
      swiperNum = swiperNum - 1;
      val = (swiperNum * -348) - 3;
      break;
    }
    case 4: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -347);

      currentBtn.classList.remove('selected');
      swiperGroup2.classList.add('selected');
      break;
    }
    case 5: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -347) + 3;

      break;
    }
    case 6: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -347) + 9;
      break;
    }
    case 7: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -347) + 15;

      currentBtn.classList.remove('selected');
      swiperGroup3.classList.add('selected');
      break;
    }
    case 8: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -347) + 20;

      break;
    }
    case 9: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -347) + 25;

      break;
    }
    case 10: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -344) + 3;

      currentBtn.classList.remove('selected');
      swiperGroup4.classList.add('selected');
      break;
    }
    case 11: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -344) + 3;

      break;
    } case 12: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -344) + 3;
      break;
    }
    case 13: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -344) + 3;
      break;
    }
    default: break;
  }

  swiperSlider.style.transform = `translateX(${val}px)`;
  swiperSlider.style.transition = `all 0.2s linear`;


}

function getNextSwiper() {
  const swiperSlider = document.querySelector('.swiper-wrapper');
  const currentBtn = document.querySelector('.selected');

  let val;

  switch (swiperNum) {
    case 0: {
      swiperNum = swiperNum + 1;
      val = swiperNum * -363;
      break;
    }
    case 1: {
      swiperNum = swiperNum + 1;
      val = swiperNum * -353;
      break;
    }
    case 2: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -348) - 3;

      currentBtn.classList.remove('selected');
      swiperGroup2.classList.add('selected');
      break;
    }
    case 3:{
      swiperNum = swiperNum + 1;
      val = (swiperNum * -347);

      break;
    }
    case 4: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -347) + 3;
      break;
    }
    case 5: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -347) + 9;

      currentBtn.classList.remove('selected');
      swiperGroup3.classList.add('selected');
      break;
    }
    case 6: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -347) + 15;

      break;
    }
    case 7: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -347) + 20;
      break;
    }
    case 8: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -347) + 25;

      currentBtn.classList.remove('selected');
      swiperGroup4.classList.add('selected');
      break;
    }
    case 9: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -344) + 3;
      break;
    }
    case 10: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -344) + 3;
      break;
    }
    case 11: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -344) + 3;

      currentBtn.classList.remove('selected');
      swiperGroup5.classList.add('selected');
      break;
    }
    case 12: {
      val = (swiperNum * -344) + 3;

      break;
    }

    default: break;
  }

  swiperSlider.style.transform = `translateX(${val}px)`;
  swiperSlider.style.transition = `all 0.2s linear`;
}

function handleDragSlider() {}
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
swiperGroup5 && swiperGroup5.addEventListener('click', handleSwiper);

swiperPreBtn && swiperPreBtn.addEventListener('click', getPrevSwiper);
swiperNextBtn && swiperNextBtn.addEventListener('click', getNextSwiper);

dragPreBtn && dragPreBtn.addEventListener('click', getPrevDragSlider);
dragNextBtn && dragNextBtn.addEventListener('click', getNextDragSlider);

