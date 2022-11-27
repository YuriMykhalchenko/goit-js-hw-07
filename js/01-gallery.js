import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const galleryImages = createGalleryCards(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryImages);
gallery.addEventListener("click", onClick);

function createGalleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, descrition }) => {
      return;
      `<div class="gallery__item">
          < a class="gallery__link" href = "${original}" >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${descrition}"
                />
          </a >
      </div>`;
    })
    .join("");
}

const galleryList = createGalleryCard(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryList);

gallery.addEventListener("click", onClick);

function createGalleryCard(cardItems) {
  return cardItems
    .map(({ preview, original, description }) => {
      return `
        <div class = "gallery__item">
            <a class= "gallery__link" href="${original}">
                <img
                    class= "gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
             </a>
         </div>           
        `;
    })
    .join("");
}

function onClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = "${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();
  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
    return gallery.removeEventListener;
  });
}
