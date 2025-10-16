import React, { useEffect, useRef, useState } from 'react';
import { testimonials } from '../../constants/data';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'motion/react';
import { useDisableMotion } from '../../hooks/useDisableMotion';

const TestimonialCard = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isMobile = useDisableMotion();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    let interval;

    if (window.innerWidth >= 768) {
      interval = setInterval(nextSlide, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };
  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };
  return (
    <>
      {/* Slider Container */}
      <motion.div
        {...(!isMobile && {
          initial: { opacity: 0, y: 30, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { duration: 0.5, ease: 'easeOut' },
        })}
        className="relative mx-auto mt-4 w-full lg:w-1/2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100' : 'absolute inset-0 opacity-0'
            }`}
          >
            <div className="border-cta-red hover:border-cta-hover flex flex-col items-center gap-3 rounded-lg border-2 bg-white p-8 shadow-lg sm:gap-8 md:flex-row">
              {/* Left Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-charcoal-gray mb-4 italic">“{t.text}”</p>
                <h4 className="text-main-indigo text-lg font-semibold">{t.name}</h4>
                <span className="text-charcoal-gray text-sm">{t.major}</span>
              </div>
              {/* Right Image */}
              <div className="flex-shrink-0">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-32 w-32 rounded-full border-4 border-gray-200 object-cover md:h-40 md:w-40"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Arrows (hidden on small screens) */}
        <button
          onClick={prevSlide}
          className="border-cta-red absolute top-1/2 -left-6 hidden -translate-y-1/2 cursor-pointer rounded-full border-2 bg-white p-2 shadow-md hover:bg-gray-100 md:flex"
        >
          <FaChevronLeft className="text-main-indigo text-lg" />
        </button>
        <button
          onClick={nextSlide}
          className="border-cta-red absolute top-1/2 -right-6 hidden -translate-y-1/2 cursor-pointer rounded-full border-2 bg-white p-2 shadow-md hover:bg-gray-100 md:flex"
        >
          <FaChevronRight className="text-main-indigo text-lg" />
        </button>
      </motion.div>

      {/* Dots */}
      <div className="mt-3 flex justify-center space-x-2 sm:mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
              i === current ? 'bg-cta-red hover:bg-cta-hover' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default TestimonialCard;
