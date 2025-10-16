import React from 'react';

import Title from '../Title';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <section
      id="home_testimonial"
      className="bg-section-bg relative w-full overflow-x-hidden pt-8 pb-12 2xl:px-40"
    >
      {/* Bottom Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
          backgroundSize: '20px 30px',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)',
        }}
      />

      {/* Bottom fade overlay */}
      <div className="bottom_fade pointer-events-none absolute bottom-0 left-0 z-10 h-14 w-full bg-gradient-to-t from-white to-transparent"></div>

      {/* Top fade overlay */}
      <div className="top_fade pointer-events-none absolute top-0 left-0 z-10 h-20 w-full bg-gradient-to-b from-white to-transparent"></div>

      {/* Content */}
      <div className="home_content relative z-20 w-full px-3">
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
