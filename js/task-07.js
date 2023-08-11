const scrollbar = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

scrollbar.value = 16;
textOutput.style.fontSize = "16px";

const changeFontSize = () => {
  textOutput.style.fontSize = `${scrollbar.value}px`;
};

scrollbar.addEventListener("input", changeFontSize);
