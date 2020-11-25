import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchCasts,
  fetchGenreMovies,
  fetchMovieByGenreData,
  fetchMovieDetail,
  fetchNowMovies,
  fetchPersonsData,
  fetchSimilarMovie,
  fetchTopRatedMovie,
} from './actions/moviesAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Test fetch data on start rendering
    dispatch(fetchNowMovies());
    dispatch(fetchGenreMovies());
    dispatch(fetchMovieByGenreData(99));
    dispatch(fetchPersonsData());
    dispatch(fetchTopRatedMovie());
    dispatch(fetchMovieDetail(671039));
    dispatch(fetchCasts(671039));
    dispatch(fetchSimilarMovie(531499));
  }, [dispatch]);

  return <div className="App" />;
}

export default App;
