import axios from 'axios';

const API_KEY = '1172fc2ae56a45677284ff05c420b54f';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/original';

export function popularFetch(page = 1) {
  return axios.get(`/trending/all/day?page=${page}`).then(res => res.data);
}

export function searchMoviesByKeyword(keyword, page = 1) {
  return axios
    .get(
      `/search/movie?language=en-US&query=${keyword}&page=${page}&include_adult=false`,
    )
    .then(res => res.data);
}

export function gethMovieDetailsById(id) {
  return axios.get(`/movie/${id}?language=en-US`).then(res => res.data);
}

export function getCastByMovieId(id, page = 1) {
  return axios
    .get(`/movie/${id}/credits?language=en-US&page=${page}`)
    .then(res => res.data);
}

export function getReviewsById(id, page = 1) {
  return axios
    .get(`/movie/${id}/reviews?language=en-US&page=${page}`)
    .then(res => res.data);
}
