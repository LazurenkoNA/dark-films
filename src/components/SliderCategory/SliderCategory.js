import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../data';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);
console.log(data);
const SliderCategory = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        // onSwiper={(swiper) => console.log(data)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SliderCategory;
