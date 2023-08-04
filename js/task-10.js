function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    boxes.append(document.createElement("div"));
    size += 10;
    boxes.lastElementChild.style.width = `${size}px`;
    boxes.lastElementChild.style.height = `${size}px`;
    boxes.lastElementChild.style.backgroundColor = getRandomHexColor();
  }

  return boxes;
}

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy");

input.addEventListener("input", () => input.value);
destroyBtn.addEventListener("click", () => boxes.replaceChildren());
createBtn.addEventListener("click", () => {
  return createBoxes(input.value);
});
