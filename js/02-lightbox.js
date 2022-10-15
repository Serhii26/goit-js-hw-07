import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);
const creatMarkup = creatGallery(galleryItems);

 galleryEl.addEventListener('click', galleryClick);
galleryEl.insertAdjacentHTML('beforeend', creatMarkup);



function creatGallery (gallery){
    return galleryItems
    .map(({preview, original, description}) =>{
        return`
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
      </a>`;

    })
    .join('');
}

function galleryClick (event) {
    event.preventDefault();
    if(!event.target.classList.contains('gallery__image')){
        return;
    }
    console.log(event.target.src);
}

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionnsDelay: 250,
 });