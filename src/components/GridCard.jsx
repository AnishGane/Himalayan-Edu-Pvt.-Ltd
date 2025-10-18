import React from 'react';
import { TbLocation } from 'react-icons/tb';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useDisableMotion } from '../hooks/useDisableMotion';
import ImgixImage from './ImgixImage';

const GridCard = ({ cardData }) => {
  const isMobile = useDisableMotion();

  return (
    <motion.div
      className="cardData_card relative flex w-full flex-col items-center justify-start overflow-hidden"
      style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
      {...(!isMobile && {
        initial: { opacity: 0, y: 30, filter: 'blur(1px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: false, amount: 0.1 },
        transition: {
          type: 'spring',
          stiffness: 60,
          damping: 25,
          duration: 1,
        },
        whileHover: {
          scale: 1.015,
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        },
      })}
    >
      <div className="relative overflow-hidden">
        <ImgixImage
          src={cardData.image}
          alt={`${cardData.title || cardData.name} image`}
          className={`aspect-1 w-full rounded-t-sm object-cover transition-transform duration-300 ${
            !cardData.post ? 'hover:scale-[1.019]' : 'grayscale-50 hover:grayscale-0'
          }`}
        />

        {cardData.title && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 hover:bg-black/20"
            {...(!isMobile && {
              initial: { opacity: 0 },
              whileHover: { opacity: 1 },
              transition: { duration: 0.5, ease: 'easeInOut' },
            })}
          >
            <Link aria-label='"View' to={cardData.link}>
              <button
                aria-label="View"
                className="view_btn bg-cta-red hover:bg-cta-hover absolute top-5 right-5 grid cursor-pointer place-items-center rounded-full p-2 text-white"
              >
                <TbLocation size={20} className="-translate-x-[1px]" />
              </button>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Title / Post */}
      {cardData.title ? (
        <span className="bg-zen-gray block w-full py-4 text-center text-2xl font-medium tracking-wide">
          {cardData.title}
        </span>
      ) : cardData.post ? (
        <div className="flex w-full flex-col items-center justify-center text-center">
          <p className="bg-zen-gray w-full pt-4 pb-1 text-center text-2xl font-semibold tracking-wide">
            {cardData.name}
          </p>
          <p className="bg-zen-gray text-charcoal-gray w-full pb-4 text-center text-sm tracking-wide">
            {cardData.post}
          </p>
        </div>
      ) : null}
    </motion.div>
  );
};

export default GridCard;
