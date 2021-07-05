const slider1 = document.querySelector('.slide-1');
const slider2 = document.querySelector('.slide-2');
const slider3 = document.querySelector('.slide-3');

const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');
const previewNext = document.querySelector('.next-img');


let pageNum = 1;
let previewNum = 2;

// 다음 사진 가져오는 함수
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

// 이전 사진 가져오는 함수
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



nextBtn && nextBtn.addEventListener('click', getNextPic);
prevBtn && prevBtn.addEventListener('click', getPrevPic);
previewNext && previewNext.addEventListener('click', getNextPic);