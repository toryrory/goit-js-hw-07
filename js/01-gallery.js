import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`
    }).join('');
}

gallery.addEventListener('click', onGalleryItem);
let instance = '';

function onGalleryItem(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`); 
    instance.show();

    document.addEventListener('keydown', modalCloseWithEscape);
function modalCloseWithEscape(event) {
        if (event.code === 'Escape') {
            document.removeEventListener('keydown', modalCloseWithEscape);
            instance.close();
            console.log(event);
        }
    }
}
