import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useDisableMotion } from '../hooks/useDisableMotion';
import ImgixImage from './ImgixImage';
import { Link } from 'react-router-dom';
import { TbLocation } from 'react-icons/tb';

const GridCard = ({ cardData }) => {
  const isMotionDisabled = useDisableMotion();
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setIsMobileWidth(window.innerWidth < 768);
  }, []);

  return (
    // Outer div for the entry animation on scroll
    <motion.div
      className="cardData_card relative flex w-full flex-col overflow-hidden rounded-sm"
      {...(!isMotionDisabled && {
        initial: { opacity: 0, y: 30, filter: 'blur(1px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: false, amount: 0.1 },
        transition: { type: 'spring', stiffness: 60, damping: 25, duration: 1 },
      })}
    >
      {/* Inner div for the hover animation */}
      <motion.div
        className="relative h-full w-full overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={isMotionDisabled ? {} : { scale: hovered ? 1.015 : 1 }}
        transition={isMotionDisabled ? {} : { duration: 0.3 }}
      >
        {/* Card Image */}
        <ImgixImage
          src={cardData.image}
          alt={`${cardData.title || cardData.name} image`}
          className="block h-full w-full object-cover transition-transform duration-300"
          responsiveWidths={[240, 320, 360, 480, 768, 1024, 1440, 1920]}
          quality={isMobileWidth ? 60 : 75}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
        />

        {/* Gradient Overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"
          animate={!isMotionDisabled ? { opacity: hovered ? 1 : 0 } : {}}
          transition={!isMotionDisabled ? { duration: 0.4, ease: 'easeInOut' } : {}}
        />

        {/* View Button for test preparation classes */}
        {cardData.link && (
          <motion.div
            className="absolute inset-0 flex items-start justify-end p-5"
            {...(!isMotionDisabled && {
              initial: { opacity: 0 },
              animate: { opacity: hovered ? 1 : 0 },
              transition: { duration: 0.4, ease: 'easeInOut' },
            })}
          >
            <Link to={cardData.link} aria-label="View">
              <button
                aria-label="View"
                className="bg-cta-red hover:bg-cta-hover grid cursor-pointer place-items-center rounded-full p-2 text-white shadow-lg transition-all duration-200"
              >
                <TbLocation size={20} className="-translate-x-[1px]" />
              </button>
            </Link>
          </motion.div>
        )}

        {/* Title / Post Overlay */}
        {(cardData.title || cardData.post) && (
          <motion.div
            className="absolute bottom-0 left-0 z-10 w-full py-3 text-center"
            animate={
              !isMotionDisabled
                ? { y: hovered ? 0 : '100%', opacity: hovered ? 1 : 0 }
                : { opacity: 1, y: 0 }
            }
            transition={!isMotionDisabled ? { type: 'spring', stiffness: 120, damping: 18 } : {}}
          >
            <div className="flex flex-col gap-1 tracking-wide text-white drop-shadow-md">
              <span className="text-2xl font-medium">{cardData.title || cardData.name}</span>
              <span className="text-[15px]">{cardData.post}</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default GridCard;
