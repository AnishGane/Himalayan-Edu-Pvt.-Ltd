import React from 'react';
import StyledHeading from '../../components/StyleHeading';
import ChooseUsCard from '../../components/ChooseUsCard';
import { features } from '../../constants/data';
import PageTitle from '../../components/PageTitle';
import MetaTags from '../../components/MetaTags';

const WhyChooseUs = () => {
  const title = 'Why Choose Us - Himalayan Educational Group Service Pvt. Ltd.';
  const description =
    'Learn more about Himalayan Educational Group Service Pvt. Ltd. for why choosing us.';
  const url = 'https://himalayan-edu-pvt-ltd.vercel.app/about/why-choose-us';
  return (
    <>
      <MetaTags title={title} description={description} url={url} />
      <PageTitle title={title} />
      <section id="why_choose_us" className="relative mb-8 p-3.5 md:mt-6 md:mb-16 md:p-8 2xl:mx-40">
        {/* Heading */}
        <StyledHeading text="Why Choose Us" />

        {/* Subheading */}
        <p className="mb-8 w-full max-w-2xl text-[14px] text-gray-600 md:text-base">
          We believe in delivering excellence with passion and precision. Here’s why our clients
          trust us and keep coming back.
        </p>

        {/* Features Grid */}
        <div className="wrapper relative z-30 mt-6 w-full rounded-lg from-gray-50 to-red-50 md:mt-2 md:border md:border-gray-200 md:bg-gradient-to-br md:p-6">
          <article className="article_card grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ChooseUsCard key={index} feature={feature} />
            ))}
          </article>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
