
const slideBtn1 = document.querySelector('.slide1');
const slideBtn2 = document.querySelector('.slide2');
const slideBtn3 = document.querySelector('.slide3');

const prevSlideBtn = document.querySelector('.arrow-btn__left');
const nextSlideBtn = document.querySelector('.arrow-btn__right');


// 버튼 클릭시 동작
function handleSlider(e) {
  const currentSlide = document.querySelector('.active');
  const currentBtn = document.querySelector('.selected');
  const target = e.target.classList;


  if(target.value.includes('slide1')) {
    // 첫번째 슬라이드 및 버튼 활성화
    currentSlide.classList.remove('active');
    currentBtn.classList.remove('selected');
    
    slider1.classList.add('active');
    slideBtn1.classList.add('selected');

  } else if( target.value.includes('slide2')) {
    // 첫번째 슬라이드 및 버튼 활성화

    currentSlide.classList.remove('active');
    currentBtn.classList.remove('selected');

    slider2.classList.add('active');
    slideBtn2.classList.add('selected');

  } else if(target.value.includes('slide3')) {
    // 세번째 슬라이드 및 버튼 활성화

    currentSlide.classList.remove('active');
    currentBtn.classList.remove('selected');

    slider3.classList.add('active');
    slideBtn3.classList.add('selected');

  } else {
    return;
  }
}

// 오른쪽 화살표 버튼 클릭시 동작

function getNextSlide() {
  const currentSlide = document.querySelector('.active');
  const activedSlide = currentSlide.classList.value;

  if(activedSlide.includes(`slide-${pageNum}`) && pageNum < 3) {
    const next = document.querySelector(`.slide-${pageNum + 1}`);
    pageNum = pageNum + 1;

    currentSlide.classList.remove('active');
    next.classList.add('active');

  } else if(pageNum === 3){
    pageNum = 1;
    const next = document.querySelector(`.slide-${pageNum}`);

    currentSlide.classList.remove('active');
    next.classList.add('active');
  } else {
    return;
  }

}

// 왼쪽 화살표 버튼 클릭시 동작
function getPrevSlide() {
  const currentSlide = document.querySelector('.active');
  const activedSlide = currentSlide.classList.value;

  if(activedSlide.includes(`slide-${pageNum}`) && pageNum > 1) {
    const prev = document.querySelector(`.slide-${pageNum - 1}`);
    pageNum = pageNum - 1;

    currentSlide.classList.remove('active');
    prev.classList.add('active');

  } else if(pageNum === 1){
    pageNum = 3;
    const prev = document.querySelector(`.slide-${pageNum}`);

    currentSlide.classList.remove('active');
    prev.classList.add('active');
  } else {
    return;
  }

}



slideBtn1 && slideBtn1.addEventListener('click', handleSlider);
slideBtn2 && slideBtn2.addEventListener('click', handleSlider);
slideBtn3 && slideBtn3.addEventListener('click', handleSlider);

prevSlideBtn && prevSlideBtn.addEventListener('click', getPrevSlide);
nextSlideBtn && nextSlideBtn.addEventListener('click',getNextSlide);

