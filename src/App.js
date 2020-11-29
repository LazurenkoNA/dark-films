import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { blue, grey, orange, red } from '@material-ui/core/colors';
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
import Nav from './components/Nav/Nav';
import CardSection from './components/CardSection/CardSection';

function App() {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.theme);

  // Theme
  const palletType = isDarkTheme ? 'dark' : 'light';
  const mainPrimaryColor = isDarkTheme ? orange[300] : blue[600];
  const mainSecondaryColor = isDarkTheme ? grey[800] : blue[50];
  const badgeColor = isDarkTheme ? orange[300] : red[500];
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        badge: badgeColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  // Test fetch data on start rendering
  useEffect(() => {
    dispatch(fetchNowMovies());
    dispatch(fetchGenreMovies());
    dispatch(fetchMovieByGenreData(99));
    dispatch(fetchPersonsData());
    dispatch(fetchTopRatedMovie());
    dispatch(fetchMovieDetail(671039));
    dispatch(fetchCasts(671039));
    dispatch(fetchSimilarMovie(531499));
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
    </MuiThemeProvider>
  );
}

export default App;
