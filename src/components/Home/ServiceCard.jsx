import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div
      className="wide bg-card-bg flex h-full w-full flex-col items-center justify-center rounded-lg p-5"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
      }}
    >
      <service.icon className="text-main-indigo text-2xl" size={48} />
      <h1 className="text-main-indigo my-5 text-lg font-semibold sm:text-xl md:text-2xl">
        {service.title}
      </h1>
      <p className="text-charcoal-gray max-w-[18.8rem] text-center leading-[1.315rem] sm:max-w-sm">
        {service.description}
      </p>
      <Link to={'/'}>
        <button className="bg-cta-red hover:bg-cta-hover mt-8 mb-4 cursor-pointer rounded-sm px-6 py-3 text-white">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
