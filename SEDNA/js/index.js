
const slideBtn1 = document.querySelector('.slide1-btn');
const slideBtn2 = document.querySelector('.slide2-btn');
const slideBtn3 = document.querySelector('.slide3-btn');

const slider1 = document.querySelector('.slide-1');
const slider2 = document.querySelector('.slide-2');
const slider3 = document.querySelector('.slide-3');

const prevSlideBtn = document.querySelector('.slider__btn-left');
const nextSlideBtn = document.querySelector('.slider__btn-right');

const scrollTopBtn = document.querySelector('.arrow-up');

const header = document.querySelector('header');
const closeAdBtn = document.querySelector('.close-ad')

let pageNum = 1;


// 스크롤시 header 배경색 변경
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


// footer 에 있는 화살표 클릭시 위로 스크롤
function scorllToTop() {
  window.scrollTo(0,0);
}

// 광고 close 버튼 클릭시 닫기
function closeAd() {
  const ad = document.querySelector('.ad');
  ad.style.display = 'none';
}


// 슬라이드 하단 라디오 버튼 클릭시 동작
function handleSlider(e) {
  const currentSlide = document.querySelector('.show');
  const currentBtn = document.querySelector('.selected');
  const target = e.target.classList;


  if(target.value.includes('slide1-btn')) {
    // 첫번째 슬라이드 및 버튼 활성화
    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');
    
    slider1.classList.add('show');
    slideBtn1.classList.add('selected');

    pageNum = 1;

  } else if( target.value.includes('slide2-btn')) {
    // 첫번째 슬라이드 및 버튼 활성화

    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');

    slider2.classList.add('show');
    slideBtn2.classList.add('selected');

    pageNum = 2;
  } else if(target.value.includes('slide3-btn')) {
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
    const selectedBtn = document.querySelector(`.slide${pageNum + 1}-btn`);

    pageNum = pageNum + 1;

    currentBtn.classList.remove('selected');
    currentSlide.classList.remove('show');
  
    next.classList.add('show');
    selectedBtn.classList.add('selected')


  } else if(pageNum === 3){
    pageNum = 1;
    const next = document.querySelector(`.slide-${pageNum}`);
    const selectedBtn = document.querySelector(`.slide${pageNum}-btn`);


    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');
    next.classList.add('show');
    selectedBtn.classList.add('selected');
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
    const prevSlide = document.querySelector(`.slide-${pageNum - 1}`);
    const selectedBtn = document.querySelector(`.slide${pageNum -1}-btn`);
    pageNum = pageNum - 1;

    currentBtn.classList.remove('selected');
    currentSlide.classList.remove('show');

    prevSlide.classList.add('show');
    selectedBtn.classList.add('selected')


  } else if(pageNum === 1){
    pageNum = 3;
    const prevSlide = document.querySelector(`.slide-${pageNum}`);
    const selectedBtn =  document.querySelector(`.slide${pageNum}-btn`);

    currentSlide.classList.remove('show');
    currentBtn.classList.remove('selected');

    prevSlide.classList.add('show');
    selectedBtn.classList.add('selected')
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
  nextSlideBtn && nextSlideBtn.addEventListener('click', getNextSlide);
  
  scrollTopBtn && scrollTopBtn.addEventListener('click', scorllToTop);
  closeAdBtn && closeAdBtn.addEventListener('click', closeAd)
}

init();


