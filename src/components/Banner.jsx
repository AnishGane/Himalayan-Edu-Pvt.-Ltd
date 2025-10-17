import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { socials } from '../constants/data';
import { SiYoutube } from 'react-icons/si';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Banner = () => {
  const mediumSize = useMediaQuery({ maxWidth: 1037 });
  return (
    <section className={`hidden md:px-2 lg:block 2xl:px-36 ${mediumSize ? 'hidden' : 'block'}`}>
      <div className="flex max-w-full flex-row items-center justify-between gap-5 px-5 py-2">
        <div className="flex items-center justify-center gap-10">
          <div className="left-div flex items-center justify-center gap-1 leading-0">
            <MdEmail fill="#1A2E55" size={18} />
            <p className="text-[0.88rem] text-slate-700">himalayanedu@gmail.com</p>
          </div>
          <div className="left-div flex items-center justify-center gap-1 leading-0">
            <BsFillTelephoneFill fill="#1A2E55" size={16} />
            <p className="text-[0.78rem] text-slate-700">+977 981234567</p>
          </div>
        </div>
        <div className="banner_socials flex items-center justify-center gap-6">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              target="_blank"
              aria-label="social"
              rel="noopener noreferrer"
            >
              <social.icon
                fill="#1A2E55"
                className={` ${
                  social.icon === SiYoutube
                    ? 'hover:fill-red-500'
                    : social.icon === FaFacebook
                      ? 'hover:fill-blue-600'
                      : social.icon === FaTwitter
                        ? 'hover:fill-blue-400'
                        : social.icon === AiFillInstagram
                          ? 'hover:fill-pink-500'
                          : 'hover:border-active-link hover:text-active-link'
                }`}
                size={19}
              />
            </a>
          ))}
        </div>
      </div>
      <hr className="mx-auto h-[1px] w-[98%] border-none bg-gray-300" />
    </section>
  );
};

export default Banner;
