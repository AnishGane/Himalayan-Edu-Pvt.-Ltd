import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useDisableMotion } from '../../hooks/useDisableMotion';

const ServiceCard = ({ service }) => {
  const slug = service.title.toLowerCase().replace(/ /g, '-');
  const isMobile = useDisableMotion();

  return (
    <motion.div
      className="service_card flex h-full w-full flex-col items-center justify-center rounded-md border border-gray-300 bg-white p-5 tracking-wide will-change-transform"
      style={{
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }}
      {...(!isMobile && {
        initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: false, amount: 0.3 }, // triggers when 30% visible
        transition: { duration: 0.3, ease: 'easeOut' },
      })}
    >
      <service.icon className="text-main-indigo mt-3 text-2xl" size={48} />

      <h1 className="text-main-indigo my-5 text-center text-lg font-semibold sm:text-xl md:text-2xl">
        {service.title}
      </h1>

      <p className="text-charcoal-gray max-w-[18.8rem] text-center leading-[1.315rem] sm:max-w-sm">
        {service.description}
      </p>

      <Link aria-label='Service card Read More' to={`/services/${slug}`}>
        <button
          aria-label="Read More"
          className="mt-8 mb-4 cursor-pointer rounded-sm px-6 py-3 font-semibold transition-all duration-300 hover:scale-[1.015]"
          style={{
            backgroundColor: '#b91c1c', // darker red to improve contrast
            color: '#ffffff', // text remains white
          }}
        >
          Read More
        </button>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
