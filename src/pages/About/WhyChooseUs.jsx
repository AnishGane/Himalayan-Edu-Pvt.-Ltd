import React from 'react';
import StyledHeading from '../../components/StyleHeading';
import ChooseUsCard from '../../components/ChooseUsCard';
import { features } from '../../constants/data';

const WhyChooseUs = () => {
  return (
    <section id="why_choose_us" className="mb-16 md:mb-24">
      {/* Heading */}
      <StyledHeading text="Why Choose Us" />

      {/* Subheading */}
      <p className="mb-8 w-full max-w-2xl text-[14px] text-gray-600 md:text-base">
        We believe in delivering excellence with passion and precision. Here’s why our clients trust
        us and keep coming back.
      </p>

      {/* Features Grid */}
      <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <ChooseUsCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
