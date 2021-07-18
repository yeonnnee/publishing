
let isDown = false;
let startX;
let scrollLeft;

let clickNum = 0;

dragSlider.scrollLeft = 0;

function dragSlide(e) {
  const obj = dragSlider.getBoundingClientRect();
  const offsetLeft = obj.left;
  isDown = true;
  dragSlider.classList.add('active');
  startX = e.pageX - offsetLeft;
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
