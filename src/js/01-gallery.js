import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// Variables

const listGalleryEl = document.querySelector('.gallery');

// Base Markup

const baseItemsGalleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <a href="${original}">
          <img src="${preview}" alt="${description}" />
        </a>`;
  })
  .join('');

listGalleryEl.innerHTML = baseItemsGalleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
