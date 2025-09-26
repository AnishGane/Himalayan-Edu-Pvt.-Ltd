import React from 'react';
import Carousel from '../components/Carousel';
import { CarouselSlides } from '../constants/data';

const Home = () => {
  return (
    <section>
      <Carousel images={CarouselSlides} autoPlay={true} />
      <div className="h-screen bg-white">Hello</div>
    </section>
  );
};

export default Home;
