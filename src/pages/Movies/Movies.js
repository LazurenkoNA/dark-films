import React from 'react';
import { useSelector } from 'react-redux';
import SliderSection from '../../components/SliderSection/SliderSection';

const Movies = () => {
  // Get Data
  const { nowPlaying, topRated } = useSelector((state) => state.movies);

  return (
    <div style={{ paddingTop: '6rem' }}>
      {nowPlaying && <SliderSection content={nowPlaying} title="Now Playing" />}
      {topRated && <SliderSection content={topRated} title="Top rated" />}
    </div>
  );
};

export default Movies;
