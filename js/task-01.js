const mainList = document.querySelector("#categories");

const items = document.querySelectorAll(".item");

const firstCategory = mainList.firstElementChild;

const firstCategoryHeading = firstCategory.querySelector("h2");

const firstCategoryList = firstCategory.querySelector("ul");

const firstCategoryListElements = firstCategoryList.children;

const firstCategoryHeadingText = firstCategoryHeading.textContent;

const secondCategory = firstCategory.nextElementSibling;

const secondCategoryHeading = secondCategory.querySelector("h2");

const secondCategoryHeadingText = secondCategoryHeading.textContent;

const secondCategoryList = secondCategory.querySelector("ul");

const secondCategoryListElements = secondCategoryList.children;

const thirdCategory = mainList.lastElementChild;

const thirdCategoryHeading = thirdCategory.querySelector("h2");

const thirdCategoryHeadingText = thirdCategoryHeading.textContent;

const thirdCategoryList = thirdCategory.querySelector("ul");

const thirdCategoryListElements = thirdCategoryList.children;

console.log("Number of categories:", items.length);
console.log("Category:", firstCategoryHeadingText);
console.log("Elements:", firstCategoryListElements.length);
console.log("Category:", secondCategoryHeadingText);
console.log("Elements:", secondCategoryListElements.length);
console.log("Category:", thirdCategoryHeadingText);
console.log("Elements:", thirdCategoryListElements.length);
