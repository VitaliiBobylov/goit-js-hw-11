import axios from 'axios';

const API_key = '51387635-d1faa43170eec50f2b7d86b54';

const base_url = `https://pixabay.com/api/`;

export function getImagesByQuery(query) {
  const params = {
    key: API_key,
    q: query,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
  };

  return axios
    .get(base_url, { params })

    .then(response => response.data)
    .catch(error => {
      console.log(
        'Sorry, there are no images matching your search query. Please try again!',
        error
      );
      throw error;
    });
}
