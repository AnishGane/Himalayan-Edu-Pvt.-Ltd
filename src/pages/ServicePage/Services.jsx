import React from 'react';
import { ServiceLists } from '../../constants/data';
import ServiceCard from '../../components/Home/ServiceCard';

import StyledHeading from '../../components/StyleHeading';

const Services = () => {
  return (
    <>
      <section id="service_section">
        <div className="content">
          {/* <PageHeading text1={'our '} text2={'Services'} /> */}
          <StyledHeading text={'Our Services'} />
          <div className="wrapper mt-6 mb-4">
            <article className="article_card gap-6">
              {ServiceLists.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
