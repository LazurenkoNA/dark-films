import React, { useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Fab } from '@material-ui/core';
import Slider from '../../components/Slider/Slider';
import useStyles from './hooks';
import CardSection from '../../components/CardSection/CardSection';
import { fetchMovieByGenreData } from '../../actions/moviesAction';

const Genres = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const nameGenre = useRef(null);
  const { genres, nowPlaying, movieByGenre } = useSelector((state) => state.movies);
  const handleChangeGenre = (e) => {
    if (movieByGenre.length) {
      nameGenre.current.textContent = e.target.textContent;
    }
    dispatch(fetchMovieByGenreData(e.target.id));
  };

  return (
    <div style={{ paddingTop: '6rem' }}>
      {!!nowPlaying.length && (
        <>
          <Typography className={classes.sectionTitle} variant="h4" component="h2">
            Now Playing
          </Typography>
          <Slider content={nowPlaying} />{' '}
        </>
      )}

      {!!genres.length && (
        <>
          <Typography className={classes.sectionTitle} variant="h4" component="h2">
            Genres
          </Typography>
          {genres.map(({ name, id }) => (
            <Fab
              variant="extended"
              size={window.screen.width >= 960 ? 'medium' : 'small'}
              color="primary"
              className={classes.margin}
              key={id}
              id={id}
              onClick={handleChangeGenre}
            >
              {name}
            </Fab>
          ))}
        </>
      )}

      {!!movieByGenre.length && (
        <>
          <Typography
            className={classes.sectionTitle}
            ref={nameGenre}
            variant="h4"
            component="h2"
          />
          <CardSection content={movieByGenre} />
        </>
      )}
    </div>
  );
};

export default Genres;
