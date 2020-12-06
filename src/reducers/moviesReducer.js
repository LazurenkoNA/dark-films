import {
  FETCH_CASTS,
  FETCH_GENRES,
  FETCH_MOVIE_BY_GENRE,
  FETCH_MOVIES_DETAIL,
  FETCH_NOW_PLAYING,
  FETCH_PERSONS,
  FETCH_SEARCH_MOVIES,
  FETCH_SIMILAR_MOVIE,
  FETCH_TOP_RATED_MOVIE,
} from '../utils/constants';

const initState = {
  nowPlaying: [],
  genres: [],
  movieByGenre: [],
  persons: [],
  topRated: [],
  movieDetail: [],
  casts: [],
  similarMovie: [],
  searchMovie: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload.nowPlaying,
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload.genres,
      };
    case FETCH_MOVIE_BY_GENRE:
      return {
        ...state,
        movieByGenre: action.payload.movieByGenre,
      };
    case FETCH_PERSONS:
      return {
        ...state,
        persons: action.payload.persons,
      };
    case FETCH_TOP_RATED_MOVIE:
      return {
        ...state,
        topRated: action.payload.topRated,
      };
    case FETCH_MOVIES_DETAIL:
      return {
        ...state,
        movieDetail: action.payload.movieDetail,
      };
    case FETCH_CASTS:
      return {
        ...state,
        casts: action.payload.casts,
      };
    case FETCH_SIMILAR_MOVIE:
      return {
        ...state,
        similarMovie: action.payload.similarMovie,
      };
    case FETCH_SEARCH_MOVIES:
      return {
        ...state,
        searchMovie: action.payload.searchMovie,
      };
    default:
      return state;
  }
};

export default moviesReducer;
