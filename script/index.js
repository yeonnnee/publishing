const checkBoxArr = document.getElementsByClassName('cbx');


function clickCheckBox(e) {
  const target = e.target;

  if (checkBoxArr && checkBoxArr.length > 0) {
    const checkedItem = Array.from(checkBoxArr).filter(input => input.checked);
    checkedItem.forEach(item => {
      console.log(item.id)
      if (item.id !== target.id) {
        item.checked = false;
      }
    });
  }
}

Array.from(checkBoxArr).forEach(item => {
  item.addEventListener('click', clickCheckBox);
});

