const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  let elem = document.createElement("li");
  elem.textContent = item;
  ingredientsList.append(elem);
});
