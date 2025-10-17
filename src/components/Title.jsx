import React from 'react';
import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';
import { useDisableMotion } from '../hooks/useDisableMotion';

const Title = ({ subheading, heading, className, whileInView = true }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isMobile = useDisableMotion();

  // Logic:
  // - Always animate whileInView on small screens
  // - Respect prop on medium & large screens
  const shouldAnimateInView = isSmallScreen ? true : whileInView;

  const containerVariants = isMobile
    ? {}
    : {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: 'easeOut', staggerChildren: 0.25 },
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
      variants={containerVariants}
      initial={isMobile ? false : 'hidden'}
      {...(shouldAnimateInView && !isMobile
        ? { whileInView: 'visible', viewport: { once: false, amount: 0.5 } }
        : { animate: 'visible' })}
      className="flex flex-col gap-2"
    >
      <motion.div variants={itemVariants} className="mb-2 flex items-center gap-2 lg:mb-0">
        <div className="h-2 w-2 bg-[#f32f2fee]" />
        <p className="text-[1rem] font-semibold">{subheading}</p>
      </motion.div>

      <motion.h1
        initial={isMobile ? false : { opacity: 0, y: 20 }}
        animate={isMobile ? false : { opacity: 1, y: 0 }}
        transition={isMobile ? {} : { duration: 0.7, ease: 'easeOut' }}
        className={`mb-4 text-[1.875rem] font-bold text-slate-900 uppercase sm:mb-8 md:text-[2.1rem] lg:text-5xl ${className}`}
      >
        {heading}
      </motion.h1>
    </motion.div>
  );
};

export default Title;
