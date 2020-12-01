import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import { PropTypes } from 'prop-types';
import SwiperCore, { Navigation, Virtual, EffectFade } from 'swiper';
import CardItem from '../CardItem/CardItem';
import useStyles from './hooks';

SwiperCore.use([Navigation, Virtual, EffectFade]);

const Slider = ({ content }) => {
  const classes = useStyles();
  const slides = content.map(({ id, title, release_date, vote_average, poster_path }) => (
    <CardItem
      key={id}
      id={id}
      title={title}
      release={release_date}
      rate={vote_average}
      poster={poster_path}
    />
  ));

  return (
    <div className={classes.root}>
      {slides.length && (
        <Swiper
          spaceBetween={20}
          slidesPerView={7}
          navigation
          virtual
          scrollbar={{ draggable: true }}
        >
          {slides.map((item, index) => (
            <SwiperSlide virtualIndex={index}>
              <div className={classes.slideWrapper}>{item}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

Slider.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
};

export default Slider;
