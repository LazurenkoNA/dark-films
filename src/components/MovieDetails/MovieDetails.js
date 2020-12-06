import React, { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import useStyles from './hooks';
import { posterImgUrl } from '../../utils/api';
import {
  fetchMovieByGenreData,
  fetchMovieDetail,
  fetchSimilarMovie,
} from '../../actions/moviesAction';
import setCurrentGenre from '../../actions/currentGenreAction';
import CardSection from '../CardSection/CardSection';

const MovieDetails = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  // Fetch Data
  useEffect(() => {
    const pathId = +location.pathname.split('/')[2];
    dispatch(fetchMovieDetail(pathId));
    dispatch(fetchSimilarMovie(pathId));
  }, []);

  const { movieDetail, similarMovie, topRated } = useSelector((state) => state.movies);
  const {
    original_title: title,
    overview,
    poster_path: posterURL,
    release_date: release,
    vote_average: rating,
    tagline,
    genres,
  } = movieDetail;

  const handleChangeGenre = (e) => {
    const currentGenre = e.target.textContent;
    const id = e.target.id ? e.target.id : e.target.closest('button').id;
    dispatch(setCurrentGenre(currentGenre));
    dispatch(fetchMovieByGenreData(id));
  };
  console.log(movieDetail);
  return (
    <div className={classes.root}>
      <Typography className={classes.sectionTitle} variant="h4" component="h2">
        {title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <img className={classes.image} src={`${posterImgUrl}w500/${posterURL}`} alt="" />
          {topRated && <CardSection content={topRated} titleSection="Top Rated" />}
        </Grid>
        <Grid item sm={8}>
          {overview && (
            <Box className={classes.listItem}>
              <Typography className={classes.listTitle} variant="h6">
                Overview:
              </Typography>
              <Typography className={classes.overview} variant="body1">
                {overview}
              </Typography>
            </Box>
          )}

          {release && (
            <Box className={classes.listItem}>
              <Typography className={classes.listTitle} variant="h6">
                Release:
              </Typography>
              <Typography className={classes.overview} variant="body1">
                {release}
              </Typography>
            </Box>
          )}

          {rating && (
            <Box className={classes.listItem}>
              <Typography className={classes.listTitle} variant="h6">
                Rating:
              </Typography>
              <Rating
                name="movie-rating"
                className={classes.rating}
                value={rating}
                precision={0.5}
                max={10}
                readOnly
              />
            </Box>
          )}

          {tagline && (
            <Box className={classes.listItem}>
              <Typography className={classes.listTitle} variant="h6">
                Tagline:
              </Typography>
              <Typography className={classes.overview} variant="body1">
                {tagline}
              </Typography>
            </Box>
          )}

          {genres && (
            <Box className={classes.listItem}>
              <Typography className={classes.listTitle} variant="h6">
                Genres:
              </Typography>
              {genres.map(({ name, id }) => (
                <Link to="/genres" onClick={handleChangeGenre} key={id}>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    className={classes.genresItem}
                    key={id}
                    id={id}
                  >
                    {name}
                  </Fab>
                </Link>
              ))}
            </Box>
          )}

          {similarMovie && <CardSection content={similarMovie} titleSection="Similar" />}
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetails;
