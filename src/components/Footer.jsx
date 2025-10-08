import React from 'react';
import { Link } from 'react-router-dom';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhoneAndroid } from 'react-icons/md';
import { IoMailUnread } from 'react-icons/io5';
import { socials } from '../constants/data';

const Footer = () => {
  return (
    <footer className="">
      <img
        src="/images/background_img_overlay.jpg"
        className=""
        loading="lazy"
        alt="background pattern"
      />
      <div className="flex flex-col">
        <div className="grid-links">
          {/* left div */}
          <div>
            <h2 className="">ABOUT US</h2>

            <p className="mb-1 line-clamp-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium
              perferendis quo, itaque placeat dignissimos iure quos asperiores, nostrum, maxime a
              tenetur nulla voluptatibus incidunt. Harum culpa impedit libero, ducimus repellendus
              tenetur quaerat totam esse, voluptatum aspernatur cumque sit omnis? Ipsum itaque
              aspernatur beatae voluptatibus.
            </p>

            <Link
              to={'/about/introduction'}
              className="text-main-indigo hover:underline- font-bold"
            >
              READ MORE
            </Link>
          </div>

          {/* Middle Links */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h2>QUICK LINKS</h2>
              <ul>
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
              <ul>
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
          <div className="right-link">
            <h2>CONTACT INFO</h2>
            <div>
              <p>
                <FaLocationDot size={15} />
                <span>Minbhawan Marga 31, Kathmandu, Nepal</span>
              </p>
              <p>
                <BsFillTelephoneFill size={15} />
                <span> +977 01 5914662</span>
              </p>
              <p>
                <MdPhoneAndroid size={15} />
                <span> +977 9802342674</span>
              </p>
              <p>
                <IoMailUnread size={15} />
                <span>himalayanedu@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-div">
          <span>
            &copy;Himalayan Educational Group Service Pvt. Ltd. {new Date().getFullYear()}
          </span>
          <p>All Terms & Conditions applied.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
