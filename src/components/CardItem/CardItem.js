import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import useStyles from './hooks';
import { posterImgUrl } from '../../utils/api';

const CardItem = ({ titleCard, rate, release, poster, id }) => {
  const classes = useStyles();

  return (
    <div className="paddingTOP">
      <Link to={`/movie/${id}`}>
        <Badge
          className={classes.cardBadge}
          badgeContent={rate}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        >
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
