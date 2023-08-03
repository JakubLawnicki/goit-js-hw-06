const inputBox = document.querySelector("#validation-input");

const checkTextLength = () => {
  if (inputBox.value.length < inputBox.dataset.length) {
    // console.log("Bulwa");
    inputBox.classList.add("invalid");
  } else {
    // console.log("Not Bulwa");
    inputBox.classList.add("valid");
  }
};

inputBox.addEventListener("blur", checkTextLength);
