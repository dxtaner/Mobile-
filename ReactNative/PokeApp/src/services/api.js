import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemons = () => {
  return api.get('pokemon?limit=20');
};

export default api;
