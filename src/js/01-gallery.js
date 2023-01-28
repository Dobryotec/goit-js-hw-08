import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

gallery.innerHTML = createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
