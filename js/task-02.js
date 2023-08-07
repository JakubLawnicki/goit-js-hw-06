const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
let list = [];

ingredients.forEach((item) => {
  let elem = document.createElement("li");
  elem.textContent = item;
  list.push(elem);
});

ingredientsList.append(...list);
