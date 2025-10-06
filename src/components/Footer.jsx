import React from 'react';
import { Link } from 'react-router-dom';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhoneAndroid } from 'react-icons/md';
import { IoMailUnread } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="">
      <img
        src="/images/background_img_overlay.jpg"
        className=""
        loading="lazy"
        alt="background pattern"
      />
      <div className="">
        {/* left div */}
        <div className="w-full max-w-sm">
          <h2 className="">ABOUT US</h2>
          <p className="line-clamp-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium
            perferendis quo, itaque placeat dignissimos iure quos asperiores, nostrum, maxime a
            tenetur nulla voluptatibus incidunt. Harum culpa impedit libero, ducimus repellendus
            tenetur quaerat totam esse, voluptatum aspernatur cumque sit omnis? Ipsum itaque
            aspernatur beatae voluptatibus.
          </p>
          <Link
            to={'/about.introduction'}
            className="text-main-indigo font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            READ MORE
          </Link>
        </div>
        {/* Middle Link */}
        <div className="flex items-center justify-center gap-16">
          <div>
            <h2>QUICK LINKS</h2>
            <ul className="flex flex-col gap-1">
              <li>
                <Link to={'/services'}>Services</Link>
              </li>
              <li>
                <Link to={'/courses'}>Our Courses</Link>
              </li>
              <li>
                <Link to={'/gallery'}>Gallery</Link>
              </li>
              <li>
                <Link to={'/about/message'}>Message from MD</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>QUICK LINKS</h2>
            <ul className="flex flex-col gap-1">
              <li>
                <Link to={'/class'}>Test Preparation</Link>
              </li>
              <li>
                <Link to={'/about/faq'}>FAQs</Link>
              </li>
              <li>
                <Link to={'/contacts'}>Contact Us</Link>
              </li>
              <li>&nbsp;</li>
            </ul>
          </div>
        </div>
        {/* Right div */}
        <div>
          <h2>CONTACT INFO</h2>
          <div className="flex flex-col items-start gap-1">
            <p className="flex items-center justify-center gap-3">
              <FaLocationDot size={15} />
              <span className="text-[17px]">Minbhawan Marga 31, Kathmandu, Nepal</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <BsFillTelephoneFill size={15} />
              <span className="text-[17px]"> +977 01 5914662</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <MdPhoneAndroid size={15} />
              <span className="text-[17px]"> +977 9802342674</span>
            </p>
            <p className="flex items-center justify-center gap-3">
              <IoMailUnread size={15} />
              <span className="text-[17px]">himalayanedu@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
