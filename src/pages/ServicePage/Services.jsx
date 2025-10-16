import React from 'react';
import { ServiceLists } from '../../constants/data';
import ServiceCard from '../../components/Home/ServiceCard';

import StyledHeading from '../../components/StyleHeading';

const Services = () => {
  return (
    <>
      <section id="service_section" className="relative p-3.5 md:mt-6 md:p-8 lg:mx-40">
        <StyledHeading text={'Our Services'} />
        <div className="wrapper relative z-30 mt-6 mb-12 w-full rounded-lg bg-gradient-to-br from-gray-50 to-red-50 md:border md:border-gray-200 md:p-6">
          <article className="article_card grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {ServiceLists.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </article>
        </div>
      </section>
    </>
  );
};

export default Services;
