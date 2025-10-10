import React from 'react';
import Title from '../Title';
import { ServiceLists } from '../../constants/data';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <section id="home_service" className="relative overflow-hidden">
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

      {/* Content */}
      <div className="home_content">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'Services We provide'}
          heading={'Our Services'}
        />

        <div className="wrapper mb-4">
          <article className="article_card gap-y-8">
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
