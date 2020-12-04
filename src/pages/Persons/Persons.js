import React from 'react';
import { useSelector } from 'react-redux';
import PersonSection from '../../components/PersonSection/PersonSection';
import SliderSection from '../../components/SliderSection/SliderSection';

const Persons = () => {
  const { persons, nowPlaying } = useSelector((state) => state.movies);

  return (
    <div style={{ paddingTop: '6rem' }}>
      {nowPlaying && <SliderSection content={nowPlaying} title="Now Playing" />}

      {persons && <PersonSection content={persons} title="Top Rated" />}
    </div>
  );
};

export default Persons;
