import React from 'react';
import Typography from '@material-ui/core/Typography';
import { PropTypes } from 'prop-types';
import Slider from '../Slider/Slider';
import useStyles from './hooks';

const SliderSection = ({ content }) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.sectionTitle} variant="h4" component="h2">
        Now Playing
      </Typography>
      <Slider content={content} />{' '}
    </>
  );
};

SliderSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
};

export default SliderSection;
