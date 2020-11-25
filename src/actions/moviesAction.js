import axios from 'axios';
import {
  apiKey,
  genreURL,
  moviesURL,
  movieURL,
  nowPlaying,
  personsURL,
  topRatedURL,
} from '../utils/api';
import {
  FETCH_CASTS,
  FETCH_GENRES,
  FETCH_MOVIE_BY_GENRE,
  FETCH_MOVIES_DETAIL,
  FETCH_NOW_PLAYING,
  FETCH_PERSONS,
  FETCH_SIMILAR_MOVIE,
  FETCH_TOP_RATED_MOVIE,
} from '../utils/constants';

// Action Creator
export const fetchNowMovies = () => async (dispatch) => {
  const nowPlayingData = await axios.get(nowPlaying, {
    params: {
      api_key: apiKey,
      language: 'en_US',
      page: 1,
    },
  });
  dispatch({
    type: FETCH_NOW_PLAYING,
    payload: {
      nowPlaying: nowPlayingData.data.results,
    },
  });
};

export const fetchGenreMovies = () => async (dispatch) => {
  const genresData = await axios.get(genreURL, {
    params: {
      api_key: apiKey,
      language: 'en_US',
      page: 1,
    },
  });
  dispatch({
    type: FETCH_GENRES,
    payload: {
      genres: genresData.data.genres,
    },
  });
};

export const fetchMovieByGenreData = (genreId) => async (dispatch) => {
  const movieByGenreData = await axios.get(moviesURL, {
    params: {
      api_key: apiKey,
      language: 'en_US',
      page: 1,
      with_genres: genreId,
    },
  });
  dispatch({
    type: FETCH_MOVIE_BY_GENRE,
    payload: {
      movieByGenre: movieByGenreData.data.results,
    },
  });
};

export const fetchPersonsData = () => async (dispatch) => {
  const personsData = await axios.get(personsURL, {
    params: {
      api_key: apiKey,
    },
  });
  dispatch({
    type: FETCH_PERSONS,
    payload: {
      persons: personsData.data.results,
    },
  });
};

export const fetchTopRatedMovie = () => async (dispatch) => {
  const topRatedMovie = await axios.get(topRatedURL, {
    params: {
      api_key: apiKey,
    },
  });
  dispatch({
    type: FETCH_TOP_RATED_MOVIE,
    payload: {
      topRated: topRatedMovie.data.results,
    },
  });
};

export const fetchMovieDetail = (id) => async (dispatch) => {
  const movieDetailData = await axios.get(`${movieURL}/${id}`, {
    params: {
      api_key: apiKey,
    },
  });
  dispatch({
    type: FETCH_MOVIES_DETAIL,
    payload: {
      movieDetail: movieDetailData.data,
    },
  });
};

export const fetchCasts = (id) => async (dispatch) => {
  const castsData = await axios.get(`${movieURL}/${id}/credits`, {
    params: {
      api_key: apiKey,
    },
  });
  dispatch({
    type: FETCH_CASTS,
    payload: {
      casts: castsData.data,
    },
  });
};

export const fetchSimilarMovie = (id) => async (dispatch) => {
  const similarMovieData = await axios.get(`${movieURL}/${id}/similar`, {
    params: {
      api_key: apiKey,
      language: 'en_US',
    },
  });
  dispatch({
    type: FETCH_SIMILAR_MOVIE,
    payload: {
      similarMovie: similarMovieData.data.results,
    },
  });
};
