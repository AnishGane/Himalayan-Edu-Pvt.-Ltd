import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero_banner relative mx-3 mt-6 h-60 w-auto overflow-hidden rounded-lg bg-gradient-to-r from-red-400 to-red-600 sm:mx-7 sm:mt-10 sm:h-70 md:max-w-4xl lg:mx-auto 2xl:max-w-7xl">
      <img
        src="/images/background_img_overlay.webp"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        alt="background pattern"
      />
      {/* Content */}
      <div className="content relative z-10 flex h-full w-full flex-col items-center justify-center text-center sm:px-12 sm:text-left md:gap-10 lg:flex-row lg:justify-between lg:gap-0">
        <div className="tracking-wide">
          <h2 className="text-main-indigo text-2xl font-bold sm:text-4xl">
            READY TO STUDY IN JAPAN?
          </h2>
          <p className="sm:bg-main-indigo mx-3 mt-1 inline-block max-w-fit px-1 py-1 text-sm font-semibold text-white sm:mx-0 sm:mt-2">
            STUDYING IN JAPAN OFFERS A UNIQUE OPPORTUNITY
          </p>
        </div>
        <Link to={'/contact-us'}>
          <button className="bg-main-indigo mt-4 cursor-pointer rounded-sm px-8 py-5 text-xs font-semibold tracking-wide text-white hover:bg-gray-900 sm:mt-0 sm:text-sm">
            START NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
