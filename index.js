const header = document.querySelector('header');
const footer =document.querySelector('footer');
const main = document.querySelector('main');

const slideBtn1 = document.querySelector('.slide1');
const slideBtn2 = document.querySelector('.slide2');
const slideBtn3 = document.querySelector('.slide3');

const slider1 = document.querySelector('.slide-1');
const slider2 = document.querySelector('.slide-2');
const slider3 = document.querySelector('.slide-3');

const prevSlideBtn = document.querySelector('.arrow-btn__left');
const nextSlideBtn = document.querySelector('.arrow-btn__right');

const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');
const previewNext = document.querySelector('.next-img');

const searchBtn = document.querySelector('.search-icon');
const closeBtn = document.querySelector('.close-btn');
const searchModal = document.querySelector('.search-modal')

let pageNum = 1;
let previewNum = 2;

function headerController() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('dark-header');

  } else if(scrollPosition === 0){
    header.classList.remove('dark-header');

  } else {
    return;
  }
}

// HOME 슬라이드 함수
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

// gallery 슬라이드 함수
function getNextPic() {
  const currentPic = document.querySelector('.show');
  const previewPic = document.querySelector('.next');
  const displayedPic = currentPic.classList.value;

  if(displayedPic.includes(`slider-${pageNum}`) && pageNum < 4) {
    const next = document.querySelector(`.slider-${pageNum + 1}`);
    let nextPreview;
    if(previewNum === 4) {
      nextPreview = document.querySelector(`.preview-${1}`);
      previewNum = 1
    } else {
      nextPreview = document.querySelector(`.preview-${previewNum + 1}`);
      previewNum = previewNum + 1
    }

    pageNum = pageNum + 1;


    currentPic.classList.remove('show');
    previewPic.classList.remove('next');
    next.classList.add('show');
    nextPreview.classList.add('next');

  } else if(pageNum === 4){
    pageNum = 1;
    previewNum = 2;
    const next = document.querySelector(`.slider-${pageNum}`);
    const nextPreview = document.querySelector(`.preview-${previewNum}`);

    currentPic.classList.remove('show');
    previewPic.classList.remove('next');
    next.classList.add('show');
    nextPreview.classList.add('next');
  } else {
    return;
  }

}


function getPrevPic() {

  const currentPic = document.querySelector('.show');
  const previewPic = document.querySelector('.next');
  const displayedPic = currentPic.classList.value;

  if(displayedPic.includes(`slider-${pageNum}`) && pageNum > 1) {
    const prev = document.querySelector(`.slider-${pageNum - 1}`);
    pageNum = pageNum -1;

    let nextPreview;

   if(previewNum === 4) {
      previewNum = 1;
      nextPreview = document.querySelector(`.preview-${previewNum}`);
   } else {
      previewNum = previewNum + 1;
      nextPreview = document.querySelector(`.preview-${previewNum}`);
   }


    currentPic.classList.remove('show');
    previewPic.classList.remove('next');
    prev.classList.add('show');
    nextPreview.classList.add('next');

  } else if(pageNum === 1){
    pageNum = 4;
    previewNum = 1;

    const prev = document.querySelector(`.slider-${4}`);
    const nextPreview = document.querySelector(`.preview-${1}`);

    currentPic.classList.remove('show');
    previewPic.classList.remove('next');
    prev.classList.add('show');
    nextPreview.classList.add('next');
  } else {
    return;
  }
}

function showModal() {
  header.style.display = 'none';
  main.style.display ='none';
  footer.style.display ='none';
  searchModal.classList.add('show-modal');
}

function closeModal() {
  header.style.display = 'block';
  main.style.display ='block';
  footer.style.display ='block';
  searchModal.classList.remove('show-modal');

}


window.addEventListener('scroll', headerController);
slideBtn1 && slideBtn1.addEventListener('click', handleSlider);
slideBtn2 && slideBtn2.addEventListener('click', handleSlider);
slideBtn3 && slideBtn3.addEventListener('click', handleSlider);

prevSlideBtn && prevSlideBtn.addEventListener('click', getPrevSlide);
nextSlideBtn && nextSlideBtn.addEventListener('click',getNextSlide);

nextBtn && nextBtn.addEventListener('click', getNextPic);
prevBtn && prevBtn.addEventListener('click', getPrevPic);
previewNext && previewNext.addEventListener('click', getNextPic);

searchBtn && searchBtn.addEventListener('click', showModal);
closeBtn && closeBtn.addEventListener('click', closeModal);