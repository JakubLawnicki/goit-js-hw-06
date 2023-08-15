function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let buttonColor = document.querySelector(".change-color");
let colorValue = document.querySelector(".color");
let colorElement;

const changeColor = () => {
  colorElement = getRandomHexColor();
  document.body.style.backgroundColor = colorElement;
  colorValue.textContent = colorElement;
};

buttonColor.addEventListener("click", changeColor);
