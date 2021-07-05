
const footer =document.querySelector('footer');
const main = document.querySelector('main');

const searchBtn = document.querySelector('.search-icon');
const closeBtn = document.querySelector('.close-btn');
const searchModal = document.querySelector('.search-modal');


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


searchBtn && searchBtn.addEventListener('click', showModal);
closeBtn && closeBtn.addEventListener('click', closeModal);