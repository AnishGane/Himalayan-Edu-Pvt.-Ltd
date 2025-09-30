import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <img src="/images/background_img_overlay.jpg" loading="lazy" alt="background pattern" />
      {/* Content */}
      <div className="content">
        <div className="wide">
          <h2>READY TO STUDY IN JAPAN?</h2>
          <p>STUDYING IN JAPAN OFFERS A UNIQUE OPPORTUNITY</p>
        </div>
        <Link to={'/contact'}>
          <button>START NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
