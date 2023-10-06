import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

createGallery();
galleryList.addEventListener("click", selectImage);

function createGallery() {
    const images = galleryItems
        .map(
            ({ preview, original, description }) =>
                `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>
    `
        )
        .join("");
    galleryList.innerHTML = images;
}

function selectImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const selectedImage = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);

    instance.show();

    document.addEventListener("keydown", keyDownHandler);

    function keyDownHandler(event) {
        if (event.key === "Escape" && instance) {
            instance.close();
            document.removeEventListener("keydown", keyDownHandler);
        }
    }
}
