import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galerryMarkup = creatingCallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galerryMarkup);
galleryEl.addEventListener('click', galleryClick);
console.log(galleryEl);

function creatingCallery(gallery) {
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
         `;
    })
    .join('');
}

function galleryClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  console.log(event.target.alt);
  const swatchEl = event.target;

  const instance = basicLightbox.create(
    ` <img src="${swatchEl.dataset.source}" width="800" height="600">`,
    {
      onShow() { document.addEventListener('keydown', onEscKey) },
      onClose() {document.removeEventListener('keydown', onEscKey)},
    }
  );

  instance.show();

  function onEscKey(event) {
    if (event.code !== 'Escape') {
      return;
    }
    console.log('lisener');
    
    instance.close();
  }

 
}
