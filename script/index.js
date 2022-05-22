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

function showIcon(icon) {
  icon.classList.add('show-icon');
  icon.classList.remove('hidden-icon');
}

function hideIcon(icon) {
  icon.classList.add('hidden-icon');
  icon.classList.remove('show-icon');
}

function toggleIcon(activedItemId) {
  const downIcons = document.getElementsByClassName('fa-angle-down');
  const upIcons = document.getElementsByClassName('fa-angle-up');

  Array.from(upIcons).forEach(icon => {
    if (Array.from(icon.classList).indexOf(activedItemId) > -1) {
      showIcon(icon);
    } else {
      hideIcon(icon);
    }
  });

  Array.from(downIcons).forEach(icon => {
    if (Array.from(icon.classList).indexOf(activedItemId) > -1) {
      hideIcon(icon);
    } else {
      showIcon(icon);
    }
  });
}

Array.from(checkBoxArr).forEach(item => {
  item.addEventListener('click', clickCheckBox);
});

