import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { useMediaQuery } from 'react-responsive';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const smScroll = useMediaQuery({ maxWidth: '40rem' });
  const btnRef = useRef(null);

  useGSAP(() => {
    if (showScrollTop && btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 50, duration: 0.65, ease: 'expo.inOut' },
        { opacity: 1, y: 0, duration: 0.65, ease: 'expo.inOut' }
      );
    }
  }, [showScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > (smScroll ? 120 : 350));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showScrollTop && (
        <button
          ref={btnRef}
          onClick={scrollToTop}
          className="fixed right-5 bottom-5 z-200 flex cursor-pointer items-center justify-center rounded-full bg-black p-3 text-white shadow-lg transition-all duration-300 hover:bg-gray-900 sm:right-10 sm:bottom-10"
          aria-label="Scroll to top"
        >
          <RiArrowDropDownLine size={28} fill="#fff" className="rotate-180" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
