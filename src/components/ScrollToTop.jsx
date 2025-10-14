import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const smScroll = window.innerWidth <= 640; // 40rem
      setShowScrollTop(window.scrollY > (smScroll ? 120 : 350));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          key="scrollToTopBtn"
          onClick={scrollTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="fixed right-5 bottom-5 z-[200] flex cursor-pointer items-center justify-center rounded-full bg-black p-3 text-white shadow-lg transition-all duration-300 hover:bg-gray-900 sm:right-10 sm:bottom-10"
          aria-label="Scroll to top"
        >
          <RiArrowDropDownLine size={28} className="rotate-180" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
