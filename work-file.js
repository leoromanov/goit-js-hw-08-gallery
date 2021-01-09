"use strict";

import images from "./gallery-items.js";
// console.log(images);

const galleryRef = document.querySelector(".gallery, .js-gallery");
console.log(galleryRef);
const imagesArray = [];
images.forEach((image) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("picture");
  //   console.log(itemRef);

  itemRef.insertAdjacentHTML(
    "beforeend",
    `<img
      src='${image.url}' alt='${image.alt}'
    ></img>`
  );
  imagesArray.push(itemRef);
});
galleryRef.append(...imagesArray);
console.log(galleryRef);
