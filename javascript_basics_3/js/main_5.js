'use strict';

{
  console.log('#16 チェックボックスを操作してみよう');

  document.querySelector('button').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    let selectedColor = [];

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColor.push(color.value);
      }
    })

    const li = document.createElement('li');
    li.textContent = selectedColor;

    document.querySelector('ul').appendChild(li);
  })
}
