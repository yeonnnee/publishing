const header = document.getElementsByTagName('header')[0];
const social = document.getElementsByClassName('icon');

function handleHeader() {
  const scrollPosition = window.scrollY;
  const currentPage = document.getElementsByClassName('now')[0];

  if (scrollPosition > 0) {
    header.classList.add('dark-header');

  } else if(scrollPosition === 0){
    header.classList.remove('dark-header');

  } else {
    return;
  }
}

window.addEventListener('scroll', handleHeader);