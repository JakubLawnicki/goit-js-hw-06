const inputBox = document.querySelector("#validation-input");

const checkTextLength = () => {
  if (
    inputBox.value.length > inputBox.dataset.length ||
    inputBox.value.length < inputBox.dataset.length
  ) {
    inputBox.classList.add("invalid");
    inputBox.classList.remove("valid");
  } else {
    inputBox.classList.add("valid");
    inputBox.classList.remove("invalid");
  }
};

inputBox.addEventListener("blur", checkTextLength);
