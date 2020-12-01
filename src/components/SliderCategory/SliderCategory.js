import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// Import material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from '../../data';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 345,
  },
});

const rows = data;

SwiperCore.use([Navigation]);
const SliderCategory = () => {
  const classes = useStyles();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 4,
        },
      }}
      navigation
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {rows.map((row) => (
        <SwiperSlide key={row.date}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={row.img} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {row.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
                  {row.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {row.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default SliderCategory;
