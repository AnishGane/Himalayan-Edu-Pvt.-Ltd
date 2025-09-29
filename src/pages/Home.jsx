import React from 'react';
import { CarouselSlides } from '../constants/data';
import Carousel from '../components/Carousel';
import Hero from '../components/Home/Hero';
import Service from '../components/Home/Service';

const Home = () => {
  return (
    <section>
      <Carousel images={CarouselSlides} autoPlay={true} />
      <Hero />
      <Service />
    </section>
  );
};

export default Home;
