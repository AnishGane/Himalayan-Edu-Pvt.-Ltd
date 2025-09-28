import React from 'react';
import Title from '../Title';

import { FaCheck } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="hero" className="bg-section-bg w-full overflow-x-hidden py-10 2xl:px-40">
      <div className="grid grid-cols-1 gap-12 px-3 md:grid-cols-2 md:px-6 lg:px-5 2xl:px-0">
        {/* Left div */}
        <div className="relative h-[26rem] max-w-2xl md:h-[34rem]">
          <img
            src="/images/carousel_img2.jpg"
            alt="Image 4"
            className="h-[14rem] w-[52%] bg-gradient-to-t from-black/60 via-black/30 to-transparent object-cover shadow-xl sm:h-[18rem]"
          />
          <img
            src="/images/carousel_img4.jpg"
            alt="Image 4"
            className="absolute right-0 bottom-0 h-[13.5rem] w-[55%] bg-gradient-to-t from-black/60 via-black/30 to-transparent object-cover shadow-xl sm:h-[18rem]"
          />

          <p className="font-cursive absolute top-20 right-0 rotate-[45deg] text-xl font-semibold tracking-wide sm:top-[6.5rem] sm:right-10 sm:rotate-[35deg] lg:text-2xl 2xl:text-3xl">
            Study in Japan{' '}
          </p>
          <p className="font-cursive absolute bottom-20 -left-1 rotate-[48deg] text-xl font-semibold sm:bottom-[6.5rem] sm:rotate-[35deg] md:left-5 lg:left-8 lg:text-2xl 2xl:text-3xl">
            With best Sensei.
          </p>
        </div>

        {/* Right div */}
        <div className="wide">
          <Title
            subheading="Short Introduction"
            heading="Welcome to Himalayan Edu. Group Service Pvt. Ltd."
          />

          <p className="mb-8 line-clamp-4 pr-3 text-justify">
            Topa International Education Center was established in 2004 with the aim to facilitate
            and assist Nepalese students to study abroad in various countries and especially in
            Japan. Topa International is a professional education consulting service. Topa
            International Education Center was established in 2004 with the aim to facilitate and
            assist Nepalese students to study abroad in various countries and especially in Japan.
            Topa International is a professional education consulting service...
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-main-indigo" />
              <p className="text-gray-700">Guided to best Universities of Japan</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-main-indigo" />
              <p className="text-gray-700">Expert Guidance, Global Opportunities.</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-main-indigo" />
              <p className="text-gray-700">Study, Grow, Succeed Abroad.</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-main-indigo" />
              <p className="text-gray-700">From Nepal to the World.</p>
            </div>
          </div>

          {/* CTA */}
          <button className="bg-cta-red hover:bg-cta-hover mt-8 cursor-pointer px-8 py-4 text-white uppercase transition-colors duration-200">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
