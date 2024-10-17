import images from './gallery-images.js'; 
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'; 

const photoGrid = document.querySelector('.gallery');


const galleryHTML = images.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join(''); 


photoGrid.insertAdjacentHTML('beforeend', galleryHTML);


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250, 
});
