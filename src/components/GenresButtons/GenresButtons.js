import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Fab } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchMovieByGenreData } from '../../actions/moviesAction';
import useStyles from './hooks';
import setCurrentGenre from '../../actions/currentGenreAction';

const GenresButtons = ({ content, title }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Events
  const handleChangeGenre = (e) => {
    const currentGenre = e.target.textContent;
    const id = e.target.id ? e.target.id : e.target.closest('button').id;
    dispatch(setCurrentGenre(currentGenre));
    dispatch(fetchMovieByGenreData(id));
  };

  return (
    <>
      <Typography className={classes.sectionTitle} variant="h4" component="h2">
        {title}
      </Typography>
      {content.map(({ name, id }) => (
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
  );
};

GenresButtons.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default GenresButtons;
