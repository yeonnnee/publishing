const header = document.querySelector('header');

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


window.addEventListener('scroll', headerController);


