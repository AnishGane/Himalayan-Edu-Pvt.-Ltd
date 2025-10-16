import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceLists } from '../../constants/data';
import { motion } from 'motion/react';

// import { GoArrowLeft } from 'react-icons/go';
import { FaArrowLeft } from 'react-icons/fa6';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Match service by slug
  const matchedService = ServiceLists.find(
    (s) => s.title.toLowerCase().replace(/ /g, '-') === serviceId
  );

  if (!matchedService) {
    return (
      <div className="wrapper relative z-30 mt-10 flex min-h-screen w-full flex-col items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-red-50 text-center md:mt-2 md:border md:border-gray-200 md:p-6">
        <h2 className="text-2xl font-semibold text-gray-700">Service Not Found</h2>
        <Link
          to="/services"
          className="text-cta-red hover:text-cta-hover mt-4 inline-block underline transition-colors"
        >
          Go Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="mt-6 mb-14 w-full max-w-4xl px-3.5 md:mx-auto md:mt-16 md:mb-20 md:px-8 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="bg-section-bg w-full rounded-md border border-gray-300 p-8 shadow-md md:p-12"
      >
        {/* Icon and title */}
        <div className="mb-6 flex flex-col items-center text-center">
          <matchedService.icon className="text-main-indigo mb-3 text-5xl md:text-6xl" />
          <h1 className="text-main-indigo text-3xl font-bold md:text-4xl">
            {matchedService.title}
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">{matchedService.description}</p>
        </div>

        {/* Divider */}
        <div className="bg-main-indigo/80 mx-auto mb-6 h-[2px] w-24 rounded-full"></div>

        {/* Main content paragraphs */}
        <div className="space-y-5 leading-relaxed text-gray-700">
          {matchedService.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="text-justify text-base md:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-10 flex justify-center">
          <Link to="/services">
            <button className="bg-cta-red hover:bg-cta-hover flex cursor-pointer items-center gap-1.5 rounded-lg px-8 py-4 text-white shadow-md transition-all duration-200 hover:scale-[1.015]">
              <FaArrowLeft className="size-4" /> Back to Services
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceDetail;
