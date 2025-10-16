import React from 'react';
import Title from '../Title';
import { ServiceLists } from '../../constants/data';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <section
      id="home_service"
      className="bg-section-bg relative w-full overflow-x-hidden pt-8 pb-12 2xl:px-40"
    >
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
      <div className="bottom_fade pointer-events-none absolute bottom-0 left-0 z-10 h-14 w-full bg-gradient-to-t from-white to-transparent"></div>

      {/* Content */}
      <div className="home_content relative z-20 w-full px-3">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'Services We provide'}
          heading={'Our Services'}
        />

        <div className="wrapper relative z-30 mt-6 w-full rounded-lg bg-gradient-to-br from-gray-50 to-red-50 md:mt-2 md:border md:border-gray-200 md:p-6">
          <article className="article_card grid grid-cols-1 gap-7 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {ServiceLists.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Service;
