import React from 'react';
import { motion } from 'motion/react';

const ChooseUsCard = ({ feature, index }) => {
  return (
    <motion.div
      key={index}
      className="flex flex-col items-center rounded-md border border-gray-300 bg-white p-8 text-center shadow-lg transition-shadow duration-200 hover:shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeInOut' }}
    >
      <div className="mb-4">
        {
          <feature.icon
            className={`size-11 ${feature.id % 2 != 0 ? 'text-cta-red' : 'text-main-indigo'}`}
          />
        }
      </div>
      <h2 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl">
        {feature.title}
      </h2>
      <p className="mt-2 text-[15px] text-gray-500">{feature.desc}</p>
    </motion.div>
  );
};

export default ChooseUsCard;
