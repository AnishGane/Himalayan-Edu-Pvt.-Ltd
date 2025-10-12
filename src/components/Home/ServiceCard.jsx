import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ServiceCard = ({ service }) => {
  const slug = service.title.toLowerCase().replace(/ /g, '-');

  return (
    <motion.div
      className="service_card will-change-transform"
      style={{
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }}
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.3 }} // 30% of the card visible triggers animation
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <service.icon className="text-main-indigo text-2xl" size={48} />
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <Link to={`/services/${slug}`}>
        <button>Read More</button>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
