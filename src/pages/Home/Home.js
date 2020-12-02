import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '../../components/Slider/Slider';
import useStyles from './hooks';

const Home = () => {
  const classes = useStyles();
  const { nowPlaying, topRated } = useSelector((state) => state.movies);

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

      {!!topRated.length && (
        <>
          <Typography className={classes.sectionTitle} variant="h4" component="h2">
            Top Rated
          </Typography>
          <Slider content={topRated} />
        </>
      )}
    </div>
  );
};

export default Home;
