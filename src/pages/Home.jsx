import React, { Suspense } from 'react';
import { CarouselSlides } from '../constants/data';
import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';

// Lazy load Testimonial
const Testimonial = React.lazy(() => import('../components/Home/Testimonial'));
const Carousel = React.lazy(() => import('../components/Carousel'));
const Hero = React.lazy(() => import('../components/Home/Hero'));
const Service = React.lazy(() => import('../components/Home/Service'));
const OurTeam = React.lazy(() => import('../components/Home/OurTeam'));
const TestPreparation = React.lazy(() => import('../components/Home/TestPreparation'));

const Home = () => {
  return (
    <>
      <PageTitle title="Home - Himalayan Educational Group Service Pvt. Ltd." />
      <section>
        <Suspense fallback={<Loading />}>
          <Carousel images={CarouselSlides} autoPlay={true} />
          <Hero />
          <Service />
          <TestPreparation />
          <Testimonial />
          <OurTeam />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
