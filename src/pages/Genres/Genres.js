import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import CardSection from '../../components/CardSection/CardSection';
import SliderSection from '../../components/SliderSection/SliderSection';
import GenresButtons from '../../components/GenresButtons/GenresButtons';
import { fadeIn } from '../../animations/animations';

const Genres = () => {
  // Get Data
  const { genres, nowPlaying, movieByGenre, searchMovie } = useSelector((state) => state.movies);
  const { nameGenre } = useSelector((state) => state.currentGenre);
  return (
    <motion.div style={{ paddingTop: '6rem' }} variants={fadeIn} initial="hidden" animate="show">
      <CardSection content={searchMovie} titleSection="Search Result" />

      {nowPlaying && <SliderSection content={nowPlaying} title="Now Playing" />}

      {genres && <GenresButtons content={genres} title="Genres" />}

      <CardSection content={movieByGenre} titleSection={nameGenre} />
    </motion.div>
  );
};

export default Genres;
