import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageEl = document.querySelector(`.gallery`)
const imageMarkup = createGalleryItems(galleryItems)
imageEl.insertAdjacentHTML(`beforeend`, imageMarkup)


function createGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <li>
        <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}"
        title="${description}" />
</a>
</li>
        `
    })
        .join(" ");
}

    new SimpleLightbox('.gallery a', {
        captionPosition: 'bottom',
         captionDelay: 250 ,
    });
    



