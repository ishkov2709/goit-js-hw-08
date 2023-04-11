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

var lightbox = new SimpleLightbox('.gallery a', {});

lightbox.on('show.simplelightbox', () => {
  lightbox.defaultOptions.captionsData = 'alt';
  lightbox.defaultOptions.captionDelay = 250;
});
