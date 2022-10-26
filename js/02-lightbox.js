import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
        </a>`
    }).join('');
}

gallery.addEventListener('click', onGalleryItem);

function onGalleryItem(event) {
    event.preventDefault();
    let galleryLightbox = new SimpleLightbox('.gallery .gallery__item', { captionsData: 'alt', captionDelay: 250 });
galleryLightbox.on('show.simplelightbox');
}