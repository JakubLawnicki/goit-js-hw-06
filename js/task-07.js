const scrollbar = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

const changeFontSize = () => {
  textOutput.style.fontSize = `${scrollbar.value}px`;
};

scrollbar.addEventListener("input", changeFontSize);
