import React, { useEffect, Suspense } from 'react';
import { CarouselSlides } from '../constants/data';
import Hero from './Home/Hero';
import Service from './Home/Service';
import TestPreparation from './Home/TestPreparation';
import OurTeam from './Home/OurTeam';

// Lazy load Testimonial
const Testimonial = React.lazy(() => import('./Home/Testimonial'));
const Carousel = React.lazy(() => import('../components/Carousel'));

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel images={CarouselSlides} autoPlay={true} />
      </Suspense>
      <Hero />
      <Service />
      <TestPreparation />
      {/* Lazy-loaded Testimonial with fallback */}
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonial />
      </Suspense>
      <OurTeam />
    </section>
  );
};

export default Home;
