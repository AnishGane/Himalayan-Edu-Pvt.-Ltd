import React, { useEffect } from 'react';
import { CarouselSlides } from '../constants/data';
import Carousel from '../components/Carousel';
import Hero from '../components/Home/Hero';
import Service from '../components/Home/Service';
import TestPreparation from '../components/Home/TestPreparation';

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, smooth: true });
  });
  return (
    <section>
      <Carousel images={CarouselSlides} autoPlay={true} />
      <Hero />
      <Service />
      <TestPreparation />
    </section>
  );
};

export default Home;
