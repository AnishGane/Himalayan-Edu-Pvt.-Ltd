import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const AUTO_PLAY_INTERVAL_MS = 4000;

const Carousel = ({ images = [], autoPlay }) => {
  // Filter only valid objects with src
  const slides = useMemo(() => images.filter((img) => img && img.src), [images]);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const touchStartXRef = useRef(null);

  const goTo = (index) => {
    if (slides.length === 0) return;
    const next = (index + slides.length) % slides.length;
    setCurrent(next);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [current, autoPlay, slides.length]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current == null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) next();
      else prev();
    }
    touchStartXRef.current = null;
  };

  if (slides.length === 0) return null;

  return (
    <section id="Carousel">
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {/* Slides wrapper */}
        <motion.div
          className="slide_wrapper flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="relative h-full w-full flex-shrink-0">
              <img
                src={slide.src}
                alt={`slide-${idx + 1}`}
                className="h-full w-full object-cover"
                // loading="lazy"
                draggable={false}
              />

              {/* Dark gradient overlay for readability */}
              <div className="gradient_overlay"></div>

              {/* Overlay content */}
              {current === idx && (
                <motion.div
                  className="overlay_content"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {slide.tagline && (
                    <div className="tagline animate-fadeIn">
                      <span></span>
                      {slide.tagline}
                    </div>
                  )}

                  {slide.subtitle && (
                    <p className="animate-fadeIn [animation-delay:200ms]">{slide.subtitle}</p>
                  )}

                  {slide.headline && (
                    <h1
                      className="animate-fadeUp [animation-delay:400ms]"
                      dangerouslySetInnerHTML={{ __html: slide.headline }}
                    />
                  )}

                  {slide.cta && (
                    <Link to={slide.href}>
                      <button className="animate-fadeIn [animation-delay:600ms]">
                        {slide.cta}
                      </button>
                    </Link>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Arrows */}
        {slides.length > 1 && (
          <>
            <button aria-label="Previous slide" onClick={prev} className="prev_arrow">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button aria-label="Next slide" onClick={next} className="next_arrow">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {slides.length > 1 && (
          <div className="dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`${
                  current === idx ? 'bg-cta-red w-6' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Carousel;
