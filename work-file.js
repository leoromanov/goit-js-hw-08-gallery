"use strict";

import images from "./gallery-items.js";
// console.log(images);

const galleryRef = document.querySelector(".gallery, .js-gallery");
const galleryImage = galleryRef.querySelectorAll(".gallery__image");
const lightBoxRef = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");
const lightBoxButton = document.querySelector(".lightbox__button");
const overlayRef = document.querySelector(".lightbox__overlay");
// console.log(galleryRef);
let imgIndex;
const imagesArray = [];
images.forEach((image) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  //   console.log(itemRef);
  itemRef.insertAdjacentHTML(
    "beforeend",
    `<a
    class="gallery__link"
    href='${image.original}'><img
      class="gallery__image"
      src='${image.preview}'
      data-source='${image.original}'
      alt='${image.description}'
    /></a>`
  );
  imagesArray.push(itemRef);
});
galleryRef.append(...imagesArray);
// console.log(galleryRef);

galleryRef.addEventListener("click", onGalleryClick);
lightBoxButton.addEventListener("click", closeModal);
galleryRef.addEventListener("keydown", escGallery);

function onGalleryClick(event) {
  event.preventDefault();
  const imageRef = event.target;
  //   console.log(imageRef);
  if (imageRef.nodeName !== "IMG") {
    return;
  }
  openModal(imageRef);
  lightBoxImage.src = imageRef.dataset.source;
  //   console.log(lightBoxImage.src);
}
function openModal() {
  lightBoxRef.classList.add("is-open");
}

function closeModal() {
  lightBoxRef.classList.remove("is-open");
  lightBoxImage.src = " ";
}

overlayRef.addEventListener("click", overlayClicking);
function overlayClicking(event) {
  if (event.target.nodeName !== "IMG") {
    closeModal();
  }
}

function escGallery(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}
