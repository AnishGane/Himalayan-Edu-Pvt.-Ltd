import React from 'react';
import { TbLocation } from 'react-icons/tb';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TestPrepCard = ({ test }) => {
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
      className="test_card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img src="/images/carousel_img3.jpg" alt="test classes image" />
        {isHovered && (
          <button className="view_btn">
            <TbLocation size={20} className="-translate-x-[1px]" />
          </button>
        )}
      </div>
      <span>{test.title}</span>
    </div>
  );
};

export default TestPrepCard;
