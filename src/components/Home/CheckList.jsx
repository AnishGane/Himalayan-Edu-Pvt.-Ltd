import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { checkLists } from '../../constants/data';

const CheckList = () => {
  // Variants for parent and children
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="checklist"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.9 }} // animate once when 90% visible
    >
      {checkLists.map((text, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-center gap-3 text-gray-700"
        >
          <FaCheck className="text-green-600" />
          <p>{text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CheckList;
