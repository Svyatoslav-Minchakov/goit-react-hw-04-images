const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35528535-2026f3bafef7be5a50534f79c';

export const searchPhoto = (searchValue, page) => {
  return fetch(
    `${BASE_URL}?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
