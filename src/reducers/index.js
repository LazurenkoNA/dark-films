import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import themeReducer from './themeReducer';
import currentPageReducer from './currentPageReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  theme: themeReducer,
  currentPage: currentPageReducer,
});

export default rootReducer;
