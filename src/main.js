import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.add('is-visible');
}

function hideLoader() {
  loader.classList.remove('is-visible');
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" width ="300" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${likes}</p>
            <p><b>Views</b> ${views}</p>
            <p><b>Comments</b> ${comments}</p>
            <p><b>Downloads</b> ${downloads}</p>
          </div>
        </li>
      `
    )
    .join('');
}

function renderGallery(arr) {
  const markup = createMarkup(arr);
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchInput = form.querySelector('input[name="search-text"]');
  const query = searchInput.value.trim();

  if (!query) {
    alert('Please enter a search term!');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data && data.hits && data.hits.length > 0) {
        renderGallery(data.hits);
      } else {
        gallery.innerHTML = '<li>No images found.</li>';
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      gallery.innerHTML = '<li>Error loading images. Please try again.</li>';
    })
    .finally(() => {
      hideLoader();
      searchInput.value = '';
    });
});
