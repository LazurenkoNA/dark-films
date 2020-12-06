import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import SliderSection from '../../components/SliderSection/SliderSection';
import { fadeIn } from '../../animations/animations';

const Movies = () => {
  // Get Data
  const { nowPlaying, topRated } = useSelector((state) => state.movies);

  return (
    <motion.div style={{ paddingTop: '6rem' }} variants={fadeIn} initial="hidden" animate="show">
      {nowPlaying && <SliderSection content={nowPlaying} title="Now Playing" />}
      {topRated && <SliderSection content={topRated} title="Top rated" />}
    </motion.div>
  );
};

export default Movies;
