
const slideBtn1 = document.querySelector('.slide1');
const slideBtn2 = document.querySelector('.slide2');
const slideBtn3 = document.querySelector('.slide3');

const slider1 = document.querySelector('.slide-1');
const slider2 = document.querySelector('.slide-2');
const slider3 = document.querySelector('.slide-3');

const prevSlideBtn = document.querySelector('.slider__btn-left');
const nextSlideBtn = document.querySelector('.slider__btn-right');

const header = document.querySelector('header');

let pageNum = 1;


function headerController() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('solid-header');

  } else if(scrollPosition === 0){
    header.classList.remove('solid-header');

  } else {
    return;
  }
}




// 버튼 클릭시 동작
function handleSlider(e) {
  const currentSlide = document.querySelector('.show');
  const currentBtn = document.querySelector('.selected');
  const target = e.target.classList;


  if(target.value.includes('slide1')) {
    // 첫번째 슬라이드 및 버튼 활성화
    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');
    
    slider1.classList.add('show');
    slideBtn1.classList.add('selected');

    pageNum = 1;

  } else if( target.value.includes('slide2')) {
    // 첫번째 슬라이드 및 버튼 활성화

    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');

    slider2.classList.add('show');
    slideBtn2.classList.add('selected');

    pageNum = 2;
  } else if(target.value.includes('slide3')) {
    // 세번째 슬라이드 및 버튼 활성화

    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');

    slider3.classList.add('show');
    slideBtn3.classList.add('selected');

    pageNum = 3;

  } else {
    return;
  }
}

// 오른쪽 화살표 버튼 클릭시 동작

function getNextSlide() {
  const currentSlide = document.querySelector('.show');
  const currentBtn = document.querySelector('.selected');
  const activedSlide = currentSlide.classList.value;

  if(activedSlide.includes(`slide-${pageNum}`) && pageNum < 3) {
    const next = document.querySelector(`.slide-${pageNum + 1}`);
    const nextBtn = document.querySelector(`.slide${pageNum + 1}`);
    console.log(nextBtn);
    pageNum = pageNum + 1;

    currentBtn.classList.remove('selected');
    currentSlide.classList.remove('show');
    next.classList.add('show');
    nextBtn.classList.add('selected')


  } else if(pageNum === 3){
    pageNum = 1;
    const next = document.querySelector(`.slide-${pageNum}`);
    const nextBtn = document.querySelector(`.slide${pageNum}`);


    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');
    next.classList.add('show');
    nextBtn.classList.add('selected');
  } else {
    return;
  }

}

// 왼쪽 화살표 버튼 클릭시 동작
function getPrevSlide() {
  const currentSlide = document.querySelector('.show');
  const currentBtn = document.querySelector('.selected');
  const activedSlide = currentSlide.classList.value;

  if(activedSlide.includes(`slide-${pageNum}`) && pageNum > 1) {
    const prev = document.querySelector(`.slide-${pageNum - 1}`);
    const nextBtn = document.querySelector(`.slide${pageNum -1}`);
    pageNum = pageNum - 1;

    currentBtn.classList.remove('selected');
    currentSlide.classList.remove('show');
    prev.classList.add('show');
    nextBtn.classList.add('selected')


  } else if(pageNum === 1){
    pageNum = 3;
    const prev = document.querySelector(`.slide-${pageNum}`);

    currentSlide.classList.remove('show');
    prev.classList.add('show');
  } else {
    return;
  }

}


window.addEventListener('scroll', headerController);

function init() {
  slideBtn1 && slideBtn1.addEventListener('click', handleSlider);
  slideBtn2 && slideBtn2.addEventListener('click', handleSlider);
  slideBtn3 && slideBtn3.addEventListener('click', handleSlider);
  
  prevSlideBtn && prevSlideBtn.addEventListener('click', getPrevSlide);
  nextSlideBtn && nextSlideBtn.addEventListener('click',getNextSlide);
}

init();


