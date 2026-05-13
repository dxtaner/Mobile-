import { makeAutoObservable } from 'mobx';

class MovieStore {
  movies = [];
  favorites = [];

  constructor() {
    makeAutoObservable(this);
  }

  setMovies(data) {
    this.movies = data;
  }

  addFavorite(movie) {
    this.favorites.push(movie);
  }

  removeFavorite(id) {
    this.favorites = this.favorites.filter(m => m.id !== id);
  }

  isFavorite(id) {
    return this.favorites.some(m => m.id === id);
  }

  addFavorite(movie) {
    if (!this.isFavorite(movie.id)) {
      this.favorites.push(movie);
    }
  }
}

export default new MovieStore();
