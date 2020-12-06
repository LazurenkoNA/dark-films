import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PropTypes } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardItem from '../CardItem/CardItem';
import useStyles from './hooks';

const CardSection = ({ content, titleSection }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 15 }}>
      {titleSection && (
        <Typography className={classes.sectionTitle} variant="h4" component="h2">
          {titleSection}
        </Typography>
      )}

      <Grid container className={classes.root} justify="center" spacing={3}>
        {content.map(({ id, title, release_date, vote_average, poster_path }) => (
          <Grid key={id} item>
            <CardItem
              id={id}
              titleCard={title}
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

CardSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  titleSection: PropTypes.string,
};

export default CardSection;
