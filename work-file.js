"use strict";

import images from "./gallery-items.js";
// console.log(images);

const galleryRef = document.querySelector(".gallery, .js-gallery");
// console.log(galleryRef);
const imagesArray = [];
images.forEach((image) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  //   console.log(itemRef);

  itemRef.insertAdjacentHTML(
    "beforeend",
    `<img class='gallery__image' src='${image.original}' alt='${image.description}'></img>`
  );
  imagesArray.push(itemRef);
});
galleryRef.append(...imagesArray);
console.log(galleryRef);
