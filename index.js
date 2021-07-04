const header = document.getElementsByTagName('header')[0];
const social = document.getElementsByClassName('icon');

function handleHeader() {
  const scrollPosition = window.scrollY;
  const currentPage = document.getElementsByClassName('now')[0];

  if (scrollPosition > 0) {
    header.style.backgroundColor = '#fff';
    header.style.padding = "10px 0";
    header.style.color = '#000';
    header.style.boxShadow = "0 5px 10px -5px rgb(218, 217, 217)";

    social[0].classList.add('dark-icon');
    social[1].classList.add('dark-icon');
    social[2].classList.add('dark-icon');
    social[3].classList.add('dark-icon');

    currentPage.style.borderBottom = '1px solid #fd7e14';

  } else if(scrollPosition === 0){
    header.style.backgroundColor = 'transparent';
    header.style.padding = "30px 0";
    header.style.color = '#fff';
    header.style.boxShadow = "none";
    social[0].classList.remove('dark-icon');
    social[1].classList.remove('dark-icon');
    social[2].classList.remove('dark-icon');
    social[3].classList.remove('dark-icon');

    currentPage.style.borderBottom = '1px solid #fff';

  } else {
    return;
  }
}

window.addEventListener('scroll', handleHeader);