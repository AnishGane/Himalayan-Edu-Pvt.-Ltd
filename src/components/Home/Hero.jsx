import React from 'react';
import Title from '../Title';

import { FaCheck } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="hero" className="bg-section-bg w-full overflow-x-hidden py-10 2xl:px-40">
      <div className="grid grid-cols-1 gap-12 px-3 md:grid-cols-2 md:px-6 lg:px-5 2xl:px-0">
        {/* Left div */}
        <div className="relative h-[26rem] max-w-2xl sm:h-[34rem]">
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

          <p className="font-cursive absolute top-20 right-0 rotate-[45deg] text-xl font-semibold tracking-wide sm:top-[6.5rem] sm:right-10 sm:rotate-[35deg] sm:text-3xl">
            Study in Japan{' '}
          </p>
          <p className="font-cursive absolute bottom-20 -left-1 rotate-[48deg] text-xl font-semibold sm:bottom-[6.5rem] sm:left-8 sm:rotate-[35deg] sm:text-3xl">
            With best Sensei.
          </p>
        </div>

        {/* Right div */}
        <div className="wide max-w-2xl">
          <Title
            subheading="Short Introduction"
            heading="Welcome to Himalayan Edu. Group Service Pvt. Ltd."
          />

          <p className="mb-4 pr-3 text-justify sm:mb-8">
            Topa International Education Center was established in 2004 with the aim to facilitate
            and assist Nepalese students to study abroad in various countries and especially in
            Japan. Topa International is a professional education consulting service... Topa
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
              <p className="text-gray-700">Guided to best Universities of Japan</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-main-indigo" />
              <p className="text-gray-700">Guided to best Universities of Japan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
