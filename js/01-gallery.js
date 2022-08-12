import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageCont = document.querySelector(`.gallery`)
const imageMarkup = createGalleryItems(galleryItems)
imageCont.insertAdjacentHTML(`beforeend`, imageMarkup)
imageCont.addEventListener(`click`, onImgClick)


function createGalleryItems(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
            </a>
        </div>
        `
    })
        .join(" ");
}




function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

    instance.show();
    
    imageCont.addEventListener(`keydown`, (evt) => {
        if (evt.code === "Escape") {
         
        }
            instance.close();
    
}
    )
};


