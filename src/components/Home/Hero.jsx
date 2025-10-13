import React, { Suspense, useEffect } from 'react';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';

import Loading from '../Loading';
import { motion } from 'motion/react';
import CheckList from './CheckList';

const HeroBanner = React.lazy(() => import('./HeroBanner'));

const Hero = () => {
  return (
    <section id="hero" className="relative">
      {/* Diagonal Fade Grid Background - Top Right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
          backgroundSize: '32px 32px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)',
        }}
      />
      <div className="div-grid">
        {/* Left div */}
        <div className="z-30 max-w-2xl md:h-[34rem]">
          <img src="/images/Hero_image.png" alt="hero left image" loading="lazy" />
        </div>

        {/* Right div */}
        <div className="wide z-30">
          <Title
            whileInView={false}
            subheading="Short Introduction"
            heading="Welcome to Himalayan Edu. Group Service Pvt. Ltd."
            className={'leading-9 md:leading-12 lg:leading-14'}
          />
          <motion.p
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
            className="para wide mb-8 pr-3 text-justify text-gray-900"
          >
            Topa International Education Center was established in 2004 with the aim to facilitate
            and assist Nepalese students to study abroad in various countries and especially in
            Japan. Topa International is a professional education consulting service. Topa
            International Education Center was established in 2004 with the aim to facilitate and
            assist Nepalese students to study abroad in various countries &...
          </motion.p>

          <CheckList />

          {/* CTA */}
          <Link to={'/about/introduction'}>
            <button>Learn more</button>
          </Link>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <HeroBanner />
      </Suspense>
    </section>
  );
};

export default Hero;
