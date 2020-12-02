import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './swiper-custom.scss';
import { PropTypes } from 'prop-types';
import SwiperCore, { Navigation, Virtual, EffectFade } from 'swiper';
import CardItem from '../CardItem/CardItem';
import useStyles from './hooks';

SwiperCore.use([Navigation, Virtual, EffectFade]);

const Slider = ({ content }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {content.length && (
        <Swiper
          spaceBetween={20}
          slidesPerView={7}
          navigation
          virtual
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            450: { slidesPerView: 2 },
            700: { slidesPerView: 3 },
            960: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1500: { slidesPerView: 6 },
            1700: { slidesPerView: 7 },
          }}
        >
          {content.map(({ id, title, release_date, vote_average, poster_path }, index) => (
            <SwiperSlide virtualIndex={index + 1} key={id}>
              <div className={classes.slideWrapper}>
                <CardItem
                  id={id}
                  titleCard={title}
                  release={release_date}
                  rate={vote_average}
                  poster={poster_path}
                />
              </div>
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
