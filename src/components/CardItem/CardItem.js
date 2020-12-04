import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { Info } from '@material-ui/icons';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useStyles from './hooks';
import { posterImgUrl } from '../../utils/api';
import { fetchMovieDetail } from '../../actions/moviesAction';

const CardItem = ({ titleCard, rate, release, poster, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentMovieDetailHandler = () => {
    dispatch(fetchMovieDetail(id));
  };

  return (
    <div className="paddingTOP">
      <Link to={`/movie/${id}`} onClick={currentMovieDetailHandler}>
        <Badge
          className={classes.cardBadge}
          badgeContent={rate}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
          <IconButton className={classes.cardInfo}>
            <Info />
          </IconButton>
          <Tooltip title={titleCard.length >= 24 ? titleCard : ''}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.cardMedia}
                  alt="Contemplative Reptile"
                  height="340"
                  image={`${posterImgUrl}w500${poster}`}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom noWrap variant="subtitle1" component="h2">
                    {titleCard.length >= 24 ? `${titleCard.slice(0, 20)}...` : titleCard}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {release}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Tooltip>
        </Badge>
      </Link>
    </div>
  );
};

CardItem.propTypes = {
  titleCard: PropTypes.string,
  rate: PropTypes.number,
  release: PropTypes.string,
  poster: PropTypes.string,
  id: PropTypes.number,
};

export default CardItem;
