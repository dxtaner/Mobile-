const initialState = {
  jobs: [],
  favorites: [],
};

export const removeFavorite = job => ({
  type: 'REMOVE_FAVOURITE',
  payload: job,
});

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const isAlreadyFavorite = state.favorites.some(
        job => job.id === action.payload.id,
      );
      if (!isAlreadyFavorite) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;

    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favorites: state.favorites.filter(job => job.id !== action.payload.id),
      };

    default:
      return state;
  }
}
