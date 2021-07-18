let swiperNum = 0;

function handleSwiper(e) {
  const swiperSlider = document.querySelector('.swiper-wrapper');
  const currentBtn = document.querySelector('.selected');
  const target = e.target.classList.toString();
  const baseDistance = -320;
  let val;
  if(target.indexOf(`swiper-group1`) > -1) {
    swiperNum = 0;
    val = -20;

    currentBtn.classList.remove('selected');
    swiperGroup1.classList.add('selected');

  } else if(target.indexOf(`swiper-group2`) > -1){
    swiperNum = 3;
    val = (swiperNum * baseDistance) + 5;

    currentBtn.classList.remove('selected');
    swiperGroup2.classList.add('selected');

  } else if(target.indexOf(`swiper-group3`) > -1){
    swiperNum = 6;
    val = (swiperNum * baseDistance) + 12;

    currentBtn.classList.remove('selected');
    swiperGroup3.classList.add('selected');

  } else if(target.indexOf(`swiper-group4`) > -1){
    swiperNum = 9;
    val = (swiperNum * baseDistance) + 18;

    currentBtn.classList.remove('selected');
    swiperGroup4.classList.add('selected');

  } else if(target.indexOf(`swiper-group5`) > -1){
    swiperNum = 12;
    val = (swiperNum * baseDistance) + 22;

    currentBtn.classList.remove('selected');
    swiperGroup5.classList.add('selected');
  }

  swiperSlider.style.transform = `translateX(${val}px)`;
  swiperSlider.style.transition = `all 1.3s ease`;
}


function getPrevSwiper() {
  const swiperSlider = document.querySelector('.swiper-wrapper');
  const currentBtn = document.querySelector('.selected');
  const baseDistance = -320;
  let val;
  swiperNum = swiperNum - 1;

  switch (swiperNum) {
    case 0: {
      break;
    }
    case 1: {
      val = 0;
      currentBtn.classList.remove('selected');
      swiperGroup1.classList.add('selected');
      break;
    }
    case 2: {

      val = swiperNum * baseDistance;
      break;
    }
    case 3:{

      val = (swiperNum * baseDistance) + 3;
      break;
    }
    case 4: {

      val = (swiperNum * baseDistance) + 5;

      currentBtn.classList.remove('selected');
      swiperGroup2.classList.add('selected');
      break;
    }
    case 5: {

      val = (swiperNum * baseDistance) + 7;

      break;
    }
    case 6: {

      val = (swiperNum * baseDistance) + 12;
      break;
    }
    case 7: {

      val = (swiperNum * baseDistance) + 12;

      currentBtn.classList.remove('selected');
      swiperGroup3.classList.add('selected');
      break;
    }
    case 8: {

      val = (swiperNum * baseDistance) + 15;

      break;
    }
    case 9: {

      val = (swiperNum * baseDistance) + 15;

      break;
    }
    case 10: {

      val = (swiperNum * baseDistance) + 18;

      currentBtn.classList.remove('selected');
      swiperGroup4.classList.add('selected');
      break;
    }
    case 11: {

      val = (swiperNum * baseDistance) + 22;
      break;
    } case 12: {

      val = (swiperNum * baseDistance) + 22;
      break;
    }
    case 13: {

      val = (swiperNum * baseDistance) + 22;
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
  const baseDistance = -320;
  let val;
  swiperNum = swiperNum + 1;

  switch (swiperNum) {
    case 0: {
      val = swiperNum * baseDistance;
      break;
    }
    case 1: {
      val = swiperNum * baseDistance;
      break;
    }
    case 2: {
      val = (swiperNum * baseDistance) + 3;

      currentBtn.classList.remove('selected');
      swiperGroup2.classList.add('selected');
      break;
    }
    case 3:{
      val = (swiperNum * baseDistance) + 5;

      break;
    }
    case 4: {
      val = (swiperNum * baseDistance) + 7;

      break;
    }
    case 5: {
      val = (swiperNum * baseDistance) + 12;

      currentBtn.classList.remove('selected');
      swiperGroup3.classList.add('selected');
      break;
    }
    case 6: {
      val = (swiperNum * baseDistance) + 12;

      break;
    }
    case 7: {
      val = (swiperNum * baseDistance) + 15;

      break;
    }
    case 8: {
      val = (swiperNum * baseDistance) + 15;


      currentBtn.classList.remove('selected');
      swiperGroup4.classList.add('selected');
      break;
    }
    case 9: {
      val = (swiperNum * baseDistance) + 18;

      break;
    }
    case 10: {
      val = (swiperNum * baseDistance) + 22;

      break;
    }
    case 11: {
      val = (swiperNum * baseDistance) + 22;

      currentBtn.classList.remove('selected');
      swiperGroup5.classList.add('selected');
      break;
    }
    case 12: {
      val = (swiperNum * baseDistance) + 22;
      break;
    }

    default: break;
  }

  swiperSlider.style.transform = `translateX(${val}px)`;
  swiperSlider.style.transition = `all 0.2s linear`;
}