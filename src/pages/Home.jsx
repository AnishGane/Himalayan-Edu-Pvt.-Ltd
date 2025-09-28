import React from 'react';
import Carousel from '../components/Carousel';
import { CarouselSlides } from '../constants/data';
import Hero from '../components/Home/Hero';

const Home = () => {
  return (
    <section>
      <Carousel images={CarouselSlides} autoPlay={true} />
      <Hero />
    </section>
  );
};

export default Home;
