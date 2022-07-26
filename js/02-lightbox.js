import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsOfGallery = [];

galleryItems.forEach((element) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("title", element.description);
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage);
  itemsOfGallery.push(galleryLink);
});

gallery.append(...itemsOfGallery);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
