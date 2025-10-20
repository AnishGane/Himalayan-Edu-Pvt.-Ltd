import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhoneAndroid } from 'react-icons/md';
import { IoMailUnread } from 'react-icons/io5';
import { footerLinks } from '../constants/data';
import ImgixImage from './ImgixImage';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobileWidth, setIsMobileWidth] = useState(false);

  useEffect(() => {
    setIsMobileWidth(window.innerWidth < 768);
  }, []);

  return (
    <footer className="relative w-full overflow-x-hidden bg-gradient-to-r from-red-400 to-red-600 py-4 2xl:px-40">
      <ImgixImage
        src="/background_img_overlay.webp"
        alt="background footer image"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        responsiveWidths={[240, 320, 360, 480, 768, 1024, 1440, 1920]}
        quality={isMobileWidth ? 60 : 75}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
        aria-hidden="true"
      />
      <div className="flex flex-col">
        <div className="grid-links relative z-40 grid w-full grid-cols-1 items-start justify-between gap-6 px-3 py-6 text-[#1A1B25] sm:grid-cols-2 sm:pl-16 md:gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* left div */}
          <div>
            <h2 className="pb-2 text-[19px] font-bold md:pb-5">ABOUT US</h2>

            <p className="line-clamp-3 pb-1 text-sm leading-[1.4rem] font-medium tracking-wide md:text-[16.5px] md:leading-[1.67rem]">
              Himalayan Education Group Service Pvt. Ltd. is a well-known & a trusted educational
              service provider in Nepal. We are committed to providing quality education to
              students.
            </p>
            <div className="group flex w-fit flex-col">
              <Link
                aria-label="go to introduction page and read more about us"
                to="/about/introduction"
                className="text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 md:text-[16.5px]"
              >
                Know More
              </Link>
              <hr className="bg-main-indigo -mt-0.5 h-[2px] w-0 rounded-full border-none transition-all duration-300 group-hover:w-full" />
            </div>
          </div>

          {/* Middle Links */}
          <div className="grid grid-cols-2 gap-10">
            {/* First column */}
            <div>
              <h2 className="pb-2 text-[19px] font-bold md:pb-5">QUICK LINKS</h2>
              <ul className="space-y-1.5 font-medium">
                {footerLinks.slice(0, 4).map((link, index) => (
                  <li
                    key={index}
                    className="w-fit text-sm transition-colors duration-200 hover:text-gray-200 md:text-[16.5px]"
                  >
                    <Link aria-label="quick links" to={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second column */}
            <div>
              <h2 className="pb-2 text-[19px] font-bold md:pb-5">QUICK LINKS</h2>
              <ul className="space-y-1.5 font-medium">
                {footerLinks.slice(4).map((link, index) => (
                  <li
                    key={index}
                    className="w-fit text-sm transition-colors duration-200 hover:text-gray-200 md:text-[16.5px]"
                  >
                    <Link aria-label="quick links" to={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right div */}
          <div className="right-link w-full justify-self-end lg:w-auto">
            <h2 className="pb-2 text-[19px] font-bold md:pb-5">CONTACT INFO</h2>
            <div className="flex flex-col items-start space-y-1.5 font-medium tracking-wide">
              <p className="flex items-center justify-center gap-3">
                <FaLocationDot size={15} />
                <span className="text-sm md:text-[16.5px]">
                  Minbhawan Marga 31, Kathmandu, Nepal
                </span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <BsFillTelephoneFill size={15} />
                <span className="text-sm md:text-[16.5px]"> +977 01 5914662</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <MdPhoneAndroid size={15} />
                <span className="text-sm md:text-[16.5px]"> +977 9802342674</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <IoMailUnread size={15} />
                <span className="text-sm md:text-[16.5px]">himalayanedu@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-div flex w-full flex-col items-center justify-between gap-4 border-t border-[#1A1B25] py-6 text-[15px] font-medium tracking-wide sm:flex-row sm:py-4 sm:text-[17px] md:mx-14 md:w-[90%] lg:w-[97%]">
          <span>&copy;Himalayan Educational Group Service Pvt. Ltd. {currentYear}</span>
          <p>All Terms & Conditions applied.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
