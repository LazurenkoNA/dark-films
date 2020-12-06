import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import PersonSection from '../../components/PersonSection/PersonSection';
import SliderSection from '../../components/SliderSection/SliderSection';
import { fadeIn } from '../../animations/animations';

const Persons = () => {
  const { persons, nowPlaying } = useSelector((state) => state.movies);

  return (
    <motion.div style={{ paddingTop: '6rem' }} variants={fadeIn} initial="hidden" animate="show">
      {nowPlaying && <SliderSection content={nowPlaying} title="Now Playing" />}

      {persons && <PersonSection content={persons} title="Top Rated" />}
    </motion.div>
  );
};

export default Persons;
