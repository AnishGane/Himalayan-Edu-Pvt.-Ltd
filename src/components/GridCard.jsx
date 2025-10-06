import React from 'react';

import { TbLocation } from 'react-icons/tb';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const GridCard = ({ cardData }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  useGSAP(() => {
    if (isHovered) {
      gsap.fromTo(
        '.view_btn',
        { opacity: 0, ease: 'power1.inOut' },
        { opacity: 1, ease: 'power1.inOut' }
      );
    }
  }, [isHovered]);
  return (
    <div
      className="cardData_card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }}
    >
      <div>
        <img
          src={cardData.image}
          className={`${!cardData.post ? 'hover:scale-[1.019]' : 'grayscale-50 hover:grayscale-0'}`}
          alt={`${cardData.title} image`}
        />
        {cardData.title && isHovered && (
          <Link to={cardData.link}>
            <button className="view_btn">
              <TbLocation size={20} className="-translate-x-[1px]" />
            </button>
          </Link>
        )}
      </div>
      {cardData.title ? (
        <span>{cardData.title}</span>
      ) : cardData.post ? (
        <div className="flex w-full flex-col items-center justify-center">
          <h3>{cardData.name}</h3>
          <p className="">{cardData.post}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default GridCard;
