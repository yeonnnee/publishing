const header = document.querySelector('header');
const hr = document.getElementsByTagName('h2');

const swiperPreBtn = document.querySelector('.swiper-button-prev');
const swiperNextBtn = document.querySelector('.swiper-button-next');
const swiperGroup1 = document.querySelector('.swiper-group1');
const swiperGroup2 = document.querySelector('.swiper-group2');
const swiperGroup3 = document.querySelector('.swiper-group3');
const swiperGroup4 = document.querySelector('.swiper-group4');
const swiperGroup5 = document.querySelector('.swiper-group5');

const dragSlider = document.querySelector('.drag-wrapper');
const dragPreBtn = document.querySelector('.drag-button-prev');
const dragNextBtn = document.querySelector('.drag-button-next');
const dragGroup1 = document.querySelector('.drag-group1');
const dragGroup2 = document.querySelector('.drag-group2');
const dragGroup3 = document.querySelector('.drag-group3');
const dragGroup4 = document.querySelector('.drag-group4');

const origin = document.querySelector('.origin-input');
const destination = document.querySelector('.destination-input');
const originList = document.querySelector('.origin-list');
const destinationList = document.querySelector('.destination-list');


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

  animationHandler();
}

let currentPosition;

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  currentPosition = top;
  return top > innerHeight + (triggerDiff || 0);
}

function animationHandler() {
  const elems = document.querySelectorAll('.fade-in');
  const LeftToRight = document.querySelectorAll('.left-to-right');
  const RightToLeft = document.querySelectorAll('.right-to-left');
  const expandPic = document.querySelectorAll('.expand');

  for (let i = 0; i < expandPic.length; i++) {
    if (isElementUnderBottom(expandPic[i], -20)) {
      expandPic[i].style.opacity = "0";
      expandPic[i].style.transform = 'scale(0.96, 0.96)';
      

    } else {
      expandPic[i].style.opacity = "1";
      expandPic[i].style.transform = 'scale(1)';
      expandPic[i].style.transformDelay = '0.5s';
      expandPic[i].style.transition = `all 1s ease`
    }
  }

  for (let i = 0; i < LeftToRight.length; i++) {
    if (isElementUnderBottom(LeftToRight[i], -20)) {
      LeftToRight[i].style.opacity = "0";
      LeftToRight[i].style.transform = 'translateX(-60px)';

    } else {
      LeftToRight[i].style.opacity = "1";
      LeftToRight[i].style.transform = 'translateY(0px)';
      LeftToRight[i].style.transition = `all 1s ease`
    }
  }

  for (let i = 0; i < RightToLeft.length; i++) {
    if (isElementUnderBottom(RightToLeft[i], -20)) {
      RightToLeft[i].style.opacity = "0";
      RightToLeft[i].style.transform = 'translateX(60px)';

    } else {
      RightToLeft[i].style.opacity = "1";
      RightToLeft[i].style.transform = 'translateY(0px)';
      RightToLeft[i].style.transition = `all 1s ease`
    }
  }

  for (let i = 0; i < elems.length; i++) {
    if (isElementUnderBottom(elems[i], -20)) {
      elems[i].style.opacity = "0";
      elems[i].style.transform = 'translateY(30px)';

    } else {
      elems[i].style.opacity = "1";
      elems[i].style.transform = 'translateY(0px)';
      elems[i].style.transition = `all 1s ease`
    }
  }
}

function reloadPage() {
  console.log(currentPosition)
  window.scrollTo(currentPosition);
}



let isDown = false;
let startX;
let scrollLeft;

dragSlider.scrollLeft = 0;

function dragSlide(e) {
  isDown = true;
  dragSlider.classList.add('active');
  startX = e.pageX - dragSlider.offsetLeft;
  scrollLeft = dragSlider.scrollLeft;
}

function cancelDrag() {
  isDown = false;
  dragSlider.classList.remove('active');
}

function mouseDrag(e) {
  dragSlider.style.cursor = 'grabbing';
  if (!isDown) { return; }
  e.preventDefault();
  const x = e.pageX - dragSlider.offsetLeft;
  const walk = x - startX;
  const val = scrollLeft - walk;
  dragSlider.scrollLeft = val;
};



function controlsSlider(num) {
    const smooth = setInterval(function () {
      dragSlider.scrollLeft += num;
    }, 10);
    setTimeout(function () {
        clearInterval(smooth);
    }, 210);
}



function getNextDragSlider() {

  if (clickNum < 7) {
    clickNum = clickNum + 1
    controlsSlider(16);
  } else {
    return;
  }
};

function getPrevDragSlider() {

  clickNum = clickNum - 1
  controlsSlider(-16);
};



let clickNum = 0;
function getNextSlide() {
  dragSlider.style.overflow = 'visible';

  if (clickNum < 7) {
    clickNum = clickNum + 1
    val = -334 * clickNum;
  } else {
    return;
  }
  dragSlider.style.transform = `translateX(${num}px)`;
  dragSlider.style.transition = `all 0.3s ease`;
}

function getPrevSlide() {
  dragSlider.style.overflow = 'visible';

  if (clickNum > 0) {
    clickNum = clickNum - 1
    val = -334 * clickNum;
  } else {
    return;
  }
  dragSlider.style.transform = `translateX(${num}px)`;
  dragSlider.style.transition = `all 0.3s ease`;
}

function handleDragSlider(e) {
  const currentBtn = document.querySelector('.clicked');
  const target = e.target.classList.toString();

  dragSlider.style.overflow = 'visible';

  let val;
  if(target.indexOf(`drag-group1`) > -1) {
    clickNum = 0;
    val = 0

    currentBtn.classList.remove('clicked');
    dragGroup1.classList.add('clicked');

  } else if(target.indexOf(`drag-group2`) > -1){
    clickNum = 3;
    val = -334 * 3;

    currentBtn.classList.remove('clicked');
    dragGroup2.classList.add('clicked');

  } else if (target.indexOf(`drag-group3`) > -1) {
    clickNum = 6;
    val = -334 * 6;

    currentBtn.classList.remove('clicked');
    dragGroup3.classList.add('clicked');

  } else if(target.indexOf(`drag-group4`) > -1){
    clickNum = 9;
    val = -335 * 7;

    currentBtn.classList.remove('clicked');
    dragGroup4.classList.add('clicked');

  } else {
    return;
  }

  dragSlider.style.transform = `translateX(${val}px)`;
  dragSlider.style.transition = `all 0.3s ease`;
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
    val =  (3 * -325) + 3;

    currentBtn.classList.remove('selected');
    swiperGroup2.classList.add('selected');

  } else if(target.indexOf(`swiper-group3`) > -1){
    swiperNum = 6;
    val = (6 * -325) + 24;

    currentBtn.classList.remove('selected');
    swiperGroup3.classList.add('selected');

  } else if(target.indexOf(`swiper-group4`) > -1){
    swiperNum = 9;
    val = (9 * -322) + 15;

    currentBtn.classList.remove('selected');
    swiperGroup4.classList.add('selected');

  } else if(target.indexOf(`swiper-group5`) > -1){
    swiperNum = 12;
    val = (12 * -322) + 20 ;

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
      val = swiperNum * -330;
      break;
    }
    case 3:{
      swiperNum = swiperNum - 1;
      val = (swiperNum * -325) - 3;
      break;
    }
    case 4: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -325) + 3;

      currentBtn.classList.remove('selected');
      swiperGroup2.classList.add('selected');
      break;
    }
    case 5: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -325) + 9;

      break;
    }
    case 6: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -325) + 15;
      break;
    }
    case 7: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -325) + 24;

      currentBtn.classList.remove('selected');
      swiperGroup3.classList.add('selected');
      break;
    }
    case 8: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -325) + 28;

      break;
    }
    case 9: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -325) + 34;

      break;
    }
    case 10: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -322) + 15;

      currentBtn.classList.remove('selected');
      swiperGroup4.classList.add('selected');
      break;
    }
    case 11: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -322) + 15;

      break;
    } case 12: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -322) + 20;
      break;
    }
    case 13: {
      swiperNum = swiperNum - 1;
      val = (swiperNum * -322) + 20;
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
      val = swiperNum * -340;
      break;
    }
    case 1: {
      swiperNum = swiperNum + 1;
      val = swiperNum * -330;
      break;
    }
    case 2: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -325) - 3;

      currentBtn.classList.remove('selected');
      swiperGroup2.classList.add('selected');
      break;
    }
    case 3:{
      swiperNum = swiperNum + 1;
      val = (swiperNum * -325) + 3;

      break;
    }
    case 4: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -325) + 9;
      break;
    }
    case 5: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -325) + 15;

      currentBtn.classList.remove('selected');
      swiperGroup3.classList.add('selected');
      break;
    }
    case 6: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -325) + 24;

      break;
    }
    case 7: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -325) + 28;
      break;
    }
    case 8: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -325) + 34;

      currentBtn.classList.remove('selected');
      swiperGroup4.classList.add('selected');
      break;
    }
    case 9: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -322) + 15;
      break;
    }
    case 10: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -322) + 15;
      break;
    }
    case 11: {
      swiperNum = swiperNum + 1;
      val = (swiperNum * -322) + 20;

      currentBtn.classList.remove('selected');
      swiperGroup5.classList.add('selected');
      break;
    }
    case 12: {
      val = (swiperNum * -322) + 20;

      break;
    }

    default: break;
  }

  swiperSlider.style.transform = `translateX(${val}px)`;
  swiperSlider.style.transition = `all 0.2s linear`;
}


let showDestinationList = false;
let showOriginList = false;

function openDestinationList() {

  const icon = document.querySelector('.to-arrow');

  if (!showDestinationList) {
    destinationList.style.display = 'block';
    originList.style.display = 'none';
    icon.style.transform = 'rotate(180deg)';
    origin.style.border = `1px solid #d1d1d1`;
    showDestinationList = true;
    showOriginList = false;

  } else {
    destinationList.style.display = 'none';
    icon.style.transform = 'rotate(360deg)';
    destination.style.border = `1px solid #09c752`;
    showDestinationList = false;
  }
}

function openOriginList() {

  const icon = document.querySelector('.from-arrow');

  if (!showOriginList) {
    originList.style.display = 'block';
    destinationList.style.display = 'none';
    icon.style.transform = 'rotate(180deg)';
    destination.style.border = `1px solid #d1d1d1`;
    showOriginList = true;
    showDestinationList = false;

  } else {
    originList.style.display = 'none';
    icon.style.transform = 'rotate(360deg)';
    origin.style.border = `1px solid #09c752`;

    showOriginList = false;
  }
}



window.addEventListener('scroll', scrollHandler);

dragGroup1.addEventListener('click', handleDragSlider);
dragGroup2.addEventListener('click', handleDragSlider);
dragGroup3.addEventListener('click', handleDragSlider);
dragGroup4.addEventListener('click', handleDragSlider);

swiperGroup1.addEventListener('click', handleSwiper);
swiperGroup2.addEventListener('click', handleSwiper);
swiperGroup3.addEventListener('click', handleSwiper);
swiperGroup4.addEventListener('click', handleSwiper);
swiperGroup5.addEventListener('click', handleSwiper);

swiperPreBtn.addEventListener('click', getPrevSwiper);
swiperNextBtn.addEventListener('click', getNextSwiper);

dragPreBtn.addEventListener('click', getPrevDragSlider);
dragNextBtn.addEventListener('click', getNextDragSlider);


dragSlider.addEventListener('mouseup', cancelDrag);
dragSlider.addEventListener('mouseleave', cancelDrag);
dragSlider.addEventListener('mousedown', dragSlide);
dragSlider.addEventListener('mousemove', mouseDrag);

origin.addEventListener('click', openOriginList);
destination.addEventListener('click', openDestinationList);
