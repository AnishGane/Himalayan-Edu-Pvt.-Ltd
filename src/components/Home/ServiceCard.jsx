import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div
      className="service_card"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
      }}
    >
      <service.icon className="text-main-indigo text-2xl" size={48} />
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <Link to={'/'}>
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default ServiceCard;
