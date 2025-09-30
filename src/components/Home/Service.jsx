import React from 'react';
import Title from '../Title';
import { ServiceLists } from '../../constants/data';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <section id="home_service" className="relative overflow-hidden">
      {/* Background with grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Bottom fade overlay */}
      <div className="bottom_fade"></div>

      {/* Content */}
      <div className="relative z-20 w-full px-3 sm:pl-16">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'Services We provide'}
          heading={'Our Services'}
        />

        <div className="wrapper">
          <article className="article_card">
            {ServiceLists.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Service;
