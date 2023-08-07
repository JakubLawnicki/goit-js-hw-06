const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const textAdded = () => {
  if (textInput.value === "") {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = textInput.value;
  }
};

textInput.addEventListener("input", textAdded);
