function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;




btnChangeColor.addEventListener('click', handleBtnClick)

function handleBtnClick() {
  const randomColor = getRandomHexColor();
  colorSpan.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

