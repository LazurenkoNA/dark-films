import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import themeReducer from './themeReducer';
import currentPageReducer from './currentPageReducer';
import currentGenreReducer from './currentGenreReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  theme: themeReducer,
  currentPage: currentPageReducer,
  currentGenre: currentGenreReducer,
});

export default rootReducer;
