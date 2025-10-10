import React from 'react';
import { TbLocation } from 'react-icons/tb';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const GridCard = ({ cardData }) => {
  return (
    <motion.div
      className="cardData_card relative"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
      initial={{ opacity: 0, y: 50, filter: 'blur(1px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        type: 'spring',
        stiffness: 60, // ↓ reduced stiffness → smoother motion
        damping: 25, // ↑ increased damping → less bounce
        duration: 1,
      }}
      whileHover={{
        scale: 1.015,
        transition: { type: 'spring', stiffness: 200, damping: 20 },
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={cardData.image}
          alt={`${cardData.title || cardData.name} image`}
          className={`object-cover transition-transform duration-300 ${
            !cardData.post ? 'hover:scale-[1.019]' : 'grayscale-50 hover:grayscale-0'
          }`}
        />

        {cardData.title && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 hover:bg-black/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <Link to={cardData.link}>
              <button className="view_btn">
                <TbLocation size={20} className="-translate-x-[1px]" />
              </button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Title / Post */}
      {cardData.title ? (
        <span className="block text-center font-medium">{cardData.title}</span>
      ) : cardData.post ? (
        <div className="flex w-full flex-col items-center justify-center text-center">
          <h3 className="font-semibold">{cardData.name}</h3>
          <p className="text-sm text-gray-600">{cardData.post}</p>
        </div>
      ) : null}
    </motion.div>
  );
};

export default GridCard;
