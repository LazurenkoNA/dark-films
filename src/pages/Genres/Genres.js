import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { Fab } from '@material-ui/core';
import Slider from '../../components/Slider/Slider';
import useStyles from './hooks';
import CardSection from '../../components/CardSection/CardSection';

const Genres = () => {
  const classes = useStyles();
  const { genres, nowPlaying, moviesByGenre } = useSelector((state) => state.movies);
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
            >
              {name}
            </Fab>
          ))}
        </>
      )}

      {!!moviesByGenre.length && (
        <>
          <CardSection content={moviesByGenre} />
        </>
      )}
    </div>
  );
};

export default Genres;
