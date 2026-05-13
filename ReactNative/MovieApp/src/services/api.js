import axios from 'axios';

const API_KEY = 'd30821539f8d65f6b806f308df58ae07';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getMovies = () => {
  return api.get(`movie/popular?api_key=${API_KEY}`);
};

export default api;
