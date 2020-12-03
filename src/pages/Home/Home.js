import React from 'react';
import { useSelector } from 'react-redux';
import SliderSection from '../../components/SliderSection/SliderSection';

const Home = () => {
  const { nowPlaying, topRated } = useSelector((state) => state.movies);

  return (
    <div style={{ paddingTop: '6rem' }}>
      {!!nowPlaying.length && <SliderSection content={nowPlaying} title="Now Playing" />}
      {!!topRated.length && <SliderSection content={topRated} title="Top rated" />}
    </div>
  );
};

export default Home;
