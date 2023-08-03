const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const textAdded = () => {
  textOutput.textContent = textInput.value;
};

textInput.addEventListener("input", textAdded);
