import React from 'react';
import Title from '../Title';
import { Link } from 'react-router-dom';

import { FaCheck } from 'react-icons/fa6';

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
            subheading="Short Introduction"
            heading="Welcome to Himalayan Edu. Group Service Pvt. Ltd."
            className={'leading-9 md:leading-12 lg:leading-14'}
          />
          <p className="mb-8 line-clamp-4 pr-3 text-justify">
            Topa International Education Center was established in 2004 with the aim to facilitate
            and assist Nepalese students to study abroad in various countries and especially in
            Japan. Topa International is a professional education consulting service. Topa
            International Education Center was established in 2004 with the aim to facilitate and
            assist Nepalese students to study abroad in various countries and especially in Japan.
            Topa International is a professional education consulting service...
          </p>

          <div className="checklist">
            <div>
              <FaCheck />
              <p>Guided to best Universities of Japan</p>
            </div>
            <div>
              <FaCheck />
              <p>Expert Guidance, Global Opportunities.</p>
            </div>
            <div>
              <FaCheck />
              <p>Study, Grow, Succeed Abroad.</p>
            </div>
            <div>
              <FaCheck />
              <p>From Nepal to the World.</p>
            </div>
          </div>

          {/* CTA */}
          <Link to={'/about/introduction'}>
            <button>Learn more</button>
          </Link>
        </div>
      </div>

      <div className="hero_banner">
        <img src="/images/background_img_overlay.jpg" loading="lazy" alt="background pattern" />
        {/* Content */}
        <div className="content">
          <div className="wide">
            <h2>READY TO STUDY IN JAPAN?</h2>
            <p>STUDYING IN JAPAN OFFERS A UNIQUE OPPORTUNITY</p>
          </div>
          <Link to={'/contact'}>
            <button>START NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
