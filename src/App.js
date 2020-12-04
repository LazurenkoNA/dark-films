import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { blue, grey, orange, red } from '@material-ui/core/colors';
import { Route, Switch, useLocation } from 'react-router-dom';
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
import Movies from './pages/Movies/Movies';
import Genres from './pages/Genres/Genres';
import Persons from './pages/Persons/Persons';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.theme);

  // Theme
  const palletType = isDarkTheme ? 'dark' : 'light';
  const mainPrimaryColor = isDarkTheme ? orange[300] : blue[600];
  const mainSecondaryColor = isDarkTheme ? grey[800] : blue[50];
  const badgeColor = isDarkTheme ? orange[300] : red[500];
  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          a: {
            textDecoration: 'none',
          },
        },
      },
    },
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

  // Fetch Data
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
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Movies />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/genres" exact>
          <Genres />
        </Route>
        <Route path="/persons" exact>
          <Persons />
        </Route>
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
