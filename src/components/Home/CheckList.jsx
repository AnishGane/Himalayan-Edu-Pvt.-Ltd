import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { useDisableMotion } from '../../hooks/useDisableMotion';
import { checkLists } from '../../constants/data';

const CheckList = () => {
  const isMobile = useDisableMotion();

  // Define motion variants only if not mobile
  const containerVariants = isMobile
    ? {}
    : {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.25 },
        },
      };

  const itemVariants = isMobile
    ? {}
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      className="checklist flex flex-col gap-3 text-gray-700"
      variants={containerVariants}
      initial={isMobile ? false : 'hidden'}
      whileInView={isMobile ? false : 'visible'}
      viewport={isMobile ? {} : { amount: 0.5 }}
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
