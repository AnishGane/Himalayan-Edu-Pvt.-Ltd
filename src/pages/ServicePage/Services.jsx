import React, { useEffect } from 'react';
import { ServiceLists } from '../../constants/data';
import ServiceCard from '../../components/Home/ServiceCard';
import PageHeading from '../../components/PageHeading';

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <section id="service_section">
        <div className="content">
          <PageHeading heading={'our service'} text1={'Home'} text2={'Services'} />
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
