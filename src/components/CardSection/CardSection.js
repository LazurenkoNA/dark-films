import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CardItem from '../CardItem/CardItem';
import useStyles from './hooks';

const CardSection = () => {
  const classes = useStyles();
  const { nowPlaying } = useSelector((state) => state.movies);

  return (
    <div style={{ padding: 15 }}>
      <Grid container className={classes.root} justify="center" spacing={3}>
        {nowPlaying.map(({ id, title, release_date, vote_average, poster_path }) => (
          <Grid key={id} item>
            <CardItem
              id={id}
              title={title}
              release={release_date}
              rate={vote_average}
              poster={poster_path}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardSection;
