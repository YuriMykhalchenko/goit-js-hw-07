import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
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
    ` <div class="modal"> <img src="${event.target.dataset.source}" alt="Big Pictures"/> </div> `,
    {
      onShow: (instance) => {
        gallery.addEventListener("keydown", onEscapeButton);
      },
      onClose: (instance) => {
        gallery.removeEventListener("keydown", onEscapeButton);
      },
    }
  );
  instance.show();
  function onEscapeButton(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
