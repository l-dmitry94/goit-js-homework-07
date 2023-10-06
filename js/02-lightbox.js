import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

handlerGallery();

function handlerGallery() {
    createGallery();

    let lightbox = new SimpleLightbox(".gallery__link", {
        captionsData: "alt",
        captionDelay: 250
    });
}

function createGallery() {
    const galleryItemsHTML = galleryItems.map(createGalleryItem).join("");
    galleryList.innerHTML = galleryItemsHTML;
}

function createGalleryItem({ preview, original, description }) {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
            `;
}
