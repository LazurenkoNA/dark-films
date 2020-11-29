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
import useStyles from './hooks';
import { posterImgUrl } from '../../utils/api';

const CardItem = ({ title, rate, release, poster }) => {
  const classes = useStyles();

  return (
    <div className="paddingTOP">
      <Badge
        className={classes.cardBadge}
        badgeContent={rate}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <IconButton className={classes.cardInfo}>
          <Info />
        </IconButton>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              alt="Contemplative Reptile"
              height="340"
              image={`${posterImgUrl}${poster}`}
              title=""
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {release}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Badge>
    </div>
  );
};

CardItem.propTypes = {
  title: PropTypes.string,
  rate: PropTypes.number,
  release: PropTypes.string,
  poster: PropTypes.string,
};

export default CardItem;
