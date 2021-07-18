
let showDestinationList = false;
let showOriginList = false;

function openDestinationList() {

  const icon = document.querySelector('.to-arrow');

  if (!showDestinationList) {
    destinationList.style.display = 'block';
    originList.style.display = 'none';
    icon.style.transform = 'rotate(180deg)';
    origin.style.border = `1px solid #d1d1d1`;
    showDestinationList = true;
    showOriginList = false;

  } else {
    destinationList.style.display = 'none';
    icon.style.transform = 'rotate(360deg)';
    destination.style.border = `1px solid #09c752`;
    showDestinationList = false;
  }
}

function openOriginList() {

  const icon = document.querySelector('.from-arrow');

  if (!showOriginList) {
    originList.style.display = 'block';
    destinationList.style.display = 'none';
    icon.style.transform = 'rotate(180deg)';
    destination.style.border = `1px solid #d1d1d1`;
    showOriginList = true;
    showDestinationList = false;

  } else {
    originList.style.display = 'none';
    icon.style.transform = 'rotate(360deg)';
    origin.style.border = `1px solid #09c752`;

    showOriginList = false;
  }
}
