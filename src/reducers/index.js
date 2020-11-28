import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  theme: themeReducer,
});

export default rootReducer;
