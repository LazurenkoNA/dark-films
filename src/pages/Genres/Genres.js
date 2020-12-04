import React from 'react';
import { useSelector } from 'react-redux';
import CardSection from '../../components/CardSection/CardSection';
import SliderSection from '../../components/SliderSection/SliderSection';
import GenresButtons from '../../components/GenresButtons/GenresButtons';

const Genres = () => {
  // Get Data
  const { genres, nowPlaying, movieByGenre } = useSelector((state) => state.movies);
  const { nameGenre } = useSelector((state) => state.currentGenre);

  return (
    <div style={{ paddingTop: '6rem' }}>
      {nowPlaying && <SliderSection content={nowPlaying} title="Now Playing" />}

      {genres && <GenresButtons content={genres} title="Genres" />}

      {movieByGenre && <CardSection content={movieByGenre} titleSection={nameGenre} />}
    </div>
  );
};

export default Genres;
