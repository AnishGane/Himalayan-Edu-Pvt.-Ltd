import React from 'react';
import StyledHeading from '../../components/StyleHeading';
import ChooseUsCard from '../../components/ChooseUsCard';
import { features } from '../../constants/data';

const WhyChooseUs = () => {
  return (
    <section id="why_choose_us" className="relative mb-16 p-3.5 md:mt-6 md:p-8 lg:mx-40">
      {/* Heading */}
      <StyledHeading text="Why Choose Us" />

      {/* Subheading */}
      <p className="mb-8 w-full max-w-2xl text-[14px] text-gray-600 md:text-base">
        We believe in delivering excellence with passion and precision. Here’s why our clients trust
        us and keep coming back.
      </p>

      {/* Features Grid */}
      <div className="wrapper relative z-30 mt-6 w-full rounded-lg bg-gradient-to-br from-gray-50 to-red-50 md:mt-2 md:border md:border-gray-200 md:p-6">
        <article className="article_card grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ChooseUsCard key={index} feature={feature} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default WhyChooseUs;
