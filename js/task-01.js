const mainList = document.querySelector("#categories");

const item = document.querySelectorAll(".item");

const items = Array.from(mainList.children);

console.log("Number of categories:", mainList.querySelectorAll(".item").length);

items.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
