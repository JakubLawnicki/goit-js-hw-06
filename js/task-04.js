let counterValue = 0;
const currentValue = document.querySelector("#value");

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const decrFunction = () => {
  return (currentValue.textContent = counterValue -= 1);
};
const incrFunction = () => {
  return (currentValue.textContent = counterValue += 1);
};

decrementButton.addEventListener("click", decrFunction);
incrementButton.addEventListener("click", incrFunction);
