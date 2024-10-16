import images from './gallery-images.js'; // Импорт массива изображений
import SimpleLightbox from 'simplelightbox'; // Импорт библиотеки
import 'simplelightbox/dist/simple-lightbox.min.css'; // Импорт стилей библиотеки

const photoGrid = document.querySelector('.gallery');

// Создание HTML для галереи
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
}).join(''); // Объединяем массив строк в одну строку

// Вставка HTML в DOM
photoGrid.insertAdjacentHTML('beforeend', galleryHTML);

// Инициализация SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Использовать alt в качестве подписи
  captionDelay: 250, // Задержка перед отображением подписи
});
