import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="relative mt-3 max-w-full select-none">
      <div
        className="relative h-[540px] overflow-hidden sm:h-[360px] md:h-[460px] lg:h-[650px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides wrapper */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="relative h-full w-full flex-shrink-0">
              {/* Background image */}
              <img
                src={slide.src}
                alt={`slide-${idx + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />

              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Overlay content */}
              <div className="absolute top-1/2 left-1/2 z-20 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center text-white">
                {/* Tagline pill */}
                {slide.tagline && (
                  <div className="animate-fadeIn mx-auto mb-4 flex max-w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500/30 to-blue-500/30 px-5 py-2 text-[11px] font-semibold tracking-wider text-green-200 uppercase shadow-lg backdrop-blur-md">
                    <span className="bg-cta-red h-2 w-2 animate-pulse rounded-full"></span>
                    {slide.tagline}
                  </div>
                )}

                {/* Subtitle */}
                {slide.subtitle && (
                  <p className="animate-fadeIn tracking-wide[animation-delay:200ms] mb-4 text-sm text-white md:text-lg">
                    {slide.subtitle}
                  </p>
                )}

                {/* Headline */}
                {slide.headline && (
                  <h1
                    className="animate-fadeUp mb-10 text-4xl leading-[2.75rem] font-extrabold tracking-wide text-white drop-shadow-xl [animation-delay:400ms] md:text-5xl md:leading-[4.25rem] lg:text-6xl"
                    dangerouslySetInnerHTML={{ __html: slide.headline }}
                  />
                )}

                {/* CTA */}
                {slide.cta && (
                  <Link to={slide.href}>
                    <button className="animate-fadeIn bg-cta-red hover:bg-cta-hover cursor-pointer rounded-[10px] px-6 py-4 text-xs font-semibold tracking-wider text-white uppercase shadow-lg transition-all duration-300 [animation-delay:600ms] hover:shadow-2xl md:px-9 md:py-5">
                      {slide.cta}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        {slides.length > 1 && (
          <>
            <button
              aria-label="Previous slide"
              onClick={prev}
              className="absolute bottom-4 left-3 z-30 cursor-pointer rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-white/30 md:top-1/2 md:bottom-auto md:-translate-y-1/2"
            >
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

            <button
              aria-label="Next slide"
              onClick={next}
              className="absolute right-3 bottom-4 z-30 cursor-pointer rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition hover:bg-white/30 md:top-1/2 md:bottom-auto md:-translate-y-1/2"
            >
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
          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goTo(idx)}
                className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all ${
                  current === idx ? 'bg-cta-red w-6' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
