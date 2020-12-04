import React from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { posterImgUrl } from '../../utils/api';
import useStyles from './hooks';

const PersonSection = ({ content, title }) => {
  const classes = useStyles();

  return (
    <div>
      {title && (
        <Typography className={classes.sectionTitle} variant="h4" component="h2">
          {title}
        </Typography>
      )}

      <Grid container className={classes.root} justify="center" spacing={3}>
        {content &&
          content.map(({ id, name, profile_path }) => (
            <Grid key={id} item>
              <Card className={classes.rootItem}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    alt="Contemplative Reptile"
                    height="340"
                    image={`${posterImgUrl}w500${profile_path}`}
                    title=""
                  />
                  <CardContent>
                    <Typography gutterBottom noWrap variant="subtitle1" component="h2">
                      {name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

PersonSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default PersonSection;