import React from 'react';

import Title from '../Title';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <section id="home_testimonial" className="relative">
      {/* Diagonal Fade Bottom Grid Left Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
          backgroundSize: '32px 32px',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)',
          maskImage: 'radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)',
        }}
      />

      {/* Bottom fade overlay */}
      <div className="bottom_fade"></div>

      {/* Top fade overlay */}
      <div className="top_fade"></div>

      {/* Content */}
      <div className="home_content">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'What Student Says'}
          heading={'Testimonials'}
        />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonial;
