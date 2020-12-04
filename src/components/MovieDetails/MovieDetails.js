import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useStyles from './hooks';
import { posterImgUrl } from '../../utils/api';

const MovieDetails = () => {
  const classes = useStyles();
  // Get id movie
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const pathId = +location.pathname.split('/')[2];

  const { movieDetail } = useSelector((state) => state.movies);
  const {
    original_title: title,
    overview,
    poster_path: posterURL,
    release_date: release,
    vote_average: rating,
  } = movieDetail;

  console.log(movieDetail);
  return (
    <div className={classes.root}>
      <Typography className={classes.sectionTitle} variant="h4" component="h2">
        {title}
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <img className={classes.image} src={`${posterImgUrl}w500/${posterURL}`} alt="" />
        </Grid>
        <Grid item sm={8}>
          <Box className={classes.listItem}>
            <Typography className={classes.listTitle} variant="h6">
              Overview:
            </Typography>
            <Typography className={classes.overview} variant="body1">
              {overview}
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <Typography className={classes.listTitle} variant="h6">
              Release:
            </Typography>
            <Typography className={classes.overview} variant="body1">
              {release}
            </Typography>
          </Box>
          <Box className={classes.listItem}>
            <Typography className={classes.listTitle} variant="h6">
              Rating:
            </Typography>
            <Rating
              name="half-rating-read"
              className={classes.rating}
              defaultValue={rating}
              precision={0.1}
              readOnly
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetails;
