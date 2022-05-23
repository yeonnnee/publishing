const checkBoxArr = document.getElementsByClassName('cbx');

function clickCheckBox(e) {
  const target = e.target;

  let activedItemId = '';
  if (checkBoxArr && checkBoxArr.length > 0) {
    const checkedItem = Array.from(checkBoxArr).filter(input => input.checked);
    checkedItem.forEach(item => {
      if (item.id !== target.id) {
        item.checked = false;
      } else {
        activedItemId = item.id;
      }
    });
  }

  toggleIcon(activedItemId);
}

function rotateUpIcon(icon) {
  icon.classList.add('down-side');
  icon.classList.remove('up-side');

}

function rotateDownIcon(icon) {
  icon.classList.add('up-side');
  icon.classList.remove('down-side');
}

function toggleIcon(activedItemId) {
  const icons = document.getElementsByClassName('ri-arrow-down-s-line');

  Array.from(icons).forEach(icon => {
    if (Array.from(icon.classList).indexOf(activedItemId) > -1) {
      rotateDownIcon(icon);
    } else {
      rotateUpIcon(icon);
    }
  });
}

Array.from(checkBoxArr).forEach(item => {
  item.addEventListener('click', clickCheckBox);
});

