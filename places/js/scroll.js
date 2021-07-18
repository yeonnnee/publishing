const header = document.querySelector('header');

// 스크롤시 header 배경색 변경
function scrollHandler() {
  const mainPhrase = document.querySelector(".control-header-point");
  const controlHeaderPoint = mainPhrase.offsetTop;
  const scrollPosition = window.pageYOffset;

  // header 관련 로직
  if (scrollPosition > controlHeaderPoint) {
    header.classList.add('dark-header');
  } else if(scrollPosition < controlHeaderPoint && scrollPosition !== 0){
    header.classList.remove('dark-header');
  }  else {
    return;
  }

  // 스크롤시 fade in 
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
      expandPic[i].style.transition = `all 1s ease`
    }
  }

  for (let i = 0; i < LeftToRight.length; i++) {
    if (isElementUnderBottom(LeftToRight[i], -20)) {
      LeftToRight[i].style.opacity = "0";
      LeftToRight[i].style.transform = 'translateX(-60px)';

    } else {
      LeftToRight[i].style.opacity = "1";
      LeftToRight[i].style.transform = 'translateX(0px)';
      LeftToRight[i].style.transition = `all 1s ease`
    }
  }

  for (let i = 0; i < RightToLeft.length; i++) {
    if (isElementUnderBottom(RightToLeft[i], -20)) {
      RightToLeft[i].style.opacity = "0";
      RightToLeft[i].style.transform = 'translateX(60px)';

    } else {
      RightToLeft[i].style.opacity = "1";
      RightToLeft[i].style.transform = 'translateX(0px)';
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