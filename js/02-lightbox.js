import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsOfGallery = [];

galleryItems.forEach((element) => {
  /*<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg"
   alt="Image description" />
</a> */
  const galleryItem = document.createElement("a");
  galleryItem.className = "gallery__item";
  galleryItem.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.setAttribute("title", element.description);
  galleryImage.alt = element.description;

  galleryItem.append(galleryImage);
  itemsOfGallery.push(galleryItem);
});

gallery.append(...itemsOfGallery);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
