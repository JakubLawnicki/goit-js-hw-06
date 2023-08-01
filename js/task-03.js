const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageUrl = [];
for (const image of images) {
  imageUrl.push(image.url);
}
const imageAlt = [];
for (const image of images) {
  imageAlt.push(image.alt);
}

const firstImage = document.createElement("li");
firstImage.insertAdjacentHTML(
  "afterbegin",
  `<img src=${imageUrl[0]} alt="${imageAlt[0]}" />`
);

const secondImage = document.createElement("li");
secondImage.insertAdjacentHTML(
  "afterbegin",
  `<img src=${imageUrl[1]} alt="${imageAlt[1]}" />`
);

const thirdImage = document.createElement("li");
thirdImage.insertAdjacentHTML(
  "afterbegin",
  `<img src=${imageUrl[2]} alt="${imageAlt[2]}" />`
);

const gallery = document.querySelector(".gallery");
gallery.append(firstImage, secondImage, thirdImage);
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "20px";

const image1 = firstImage.querySelector("img");
image1.setAttribute("max-width", "200px");
const image2 = secondImage.querySelector("img");
image1.setAttribute("max-width", "200px");
const image3 = thirdImage.querySelector("img");
image1.setAttribute("max-width", "200px");

console.log(gallery);
