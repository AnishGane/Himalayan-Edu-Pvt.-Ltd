import React from 'react';
import Title from '../Title';
import { ServiceLists } from '../../constants/data';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <section id="home_service" className="relative">
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
      {/* Your Content/Components */}
      <div className="z-30 w-full px-3 sm:pl-16">
        <Title
          className={'leading-2 md:leading-4 lg:leading-10'}
          subheading={'Services We provide'}
          heading={' Our Services'}
        />

        <div className="wrapper relative z-30 mt-5 w-full rounded-lg pr-0 md:pr-3 2xl:pr-0">
          <article className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 sm:gap-10 md:gap-12 lg:gap-14 2xl:gap-20">
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
