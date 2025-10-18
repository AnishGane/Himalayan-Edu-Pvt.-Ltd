import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { motion, useAnimation } from 'motion/react';
import { useDisableMotion } from '../hooks/useDisableMotion';
import { useLocation } from 'react-router-dom';

import { navLinks, socials } from '../constants/data';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SiYoutube } from 'react-icons/si';
import ImgixImage from './ImgixImage';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const MediumDevice = useMediaQuery({ maxWidth: 1037 });
  const location = useLocation();
  const controls = useAnimation();
  const isMobile = useDisableMotion();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    if (isMobileMenuOpen) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    controls.stop();

    // Re-run the navbar fade animation when route changes
    controls.start({
      opacity: [0, 1],
      y: [-20, 0],
      filter: ['blur(4px)', 'blur(0px)'],
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    });

    return () => controls.stop(); // cleanup
  }, [location.pathname]);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const ulContainervariants = !isMobile
    ? {
        hidden: { opacity: 0, y: -30, filter: 'blur(6px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.12,
            delayChildren: 0.2,
          },
        },
      }
    : {};

  const itemVariants = !isMobile
    ? {
        hidden: { opacity: 0, y: -15, scale: 0.95, filter: 'blur(4px)' },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: {
            duration: 0.55,
            ease: [0.33, 1, 0.68, 1],
          },
        },
      }
    : {};

  return (
    <>
      <nav ref={navRef} className="fixed z-50 w-full bg-white 2xl:px-36">
        <motion.div
          {...(!isMobile && { animate: controls })} // only animate on desktop
          className="relative flex max-w-full flex-row items-center justify-between gap-5 py-3 md:px-5 md:py-3"
        >
          <Link aria-label="Home" to="/">
            <ImgixImage
              src="/images/Logo.webp"
              alt="Himalayan Educational Group Service Pvt. Ltd. Logo"
              className="ml-3 h-auto w-36 border-none object-contain outline-none sm:w-36 md:ml-0"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </Link>

          {/* Mobile Menu Button / Hamburger Menu */}
          <button
            className={`mobile-btn text-main-indigo mr-4 cursor-pointer hover:text-gray-900 focus:text-gray-900 focus:outline-none lg:hidden ${MediumDevice ? 'block' : ''}`}
            onClick={handleMobileMenuToggle}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              data-aos="slide-left"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop NavLinks */}
          <motion.ul
            {...(!isMobile && {
              variants: ulContainervariants,
              initial: 'hidden',
              animate: 'visible',
            })}
            className={`${MediumDevice ? 'hidden' : ''} desktop-ul hidden items-center gap-4 lg:flex`}
          >
            {navLinks.map((item, idx) => (
              <motion.li
                {...(!isMobile && { variants: itemVariants })}
                key={idx}
                className="group relative font-medium tracking-wide"
              >
                {item.link && item.name != 'our courses' ? (
                  <NavLink
                    to={item.link || '#'}
                    className={({ isActive }) =>
                      `desktop-ul-link hover:text-main-indigo flex cursor-pointer items-center gap-1 px-2 py-2 transition-colors duration-200 ${isActive ? 'text-main-indigo' : 'text-gray-500'}`
                    }
                  >
                    <span className="uppercase">{item.name}</span>
                  </NavLink>
                ) : (
                  <Link aria-label="Go to" to={item?.link}>
                    <motion.button
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => handleDropdownToggle(idx)}
                      onMouseEnter={() => setOpenDropdown(idx)}
                      className="submenu-btn hover:text-main-indigo focus:text-main-indigo flex cursor-pointer items-center justify-center text-gray-500 transition-colors duration-200 focus:outline-none"
                      aria-expanded={openDropdown === idx}
                      aria-haspopup="true"
                    >
                      <span className="uppercase">{item.name}</span>
                      {item.subMenu && (
                        <RiArrowDropDownLine
                          size={22}
                          className={`transition-transform duration-200 ${
                            openDropdown === idx ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </motion.button>
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.subMenu && openDropdown === idx && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="dropdown_menu-ul absolute top-full left-0 z-50 mt-3 block w-56 flex-col bg-white text-left shadow-lg hover:text-white"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.subMenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <NavLink
                          to={sub.link}
                          className={({ isActive }) =>
                            `dropdown_menu-ul-link hover:bg-main-indigo block p-4 text-[0.815rem] font-light text-black transition-all duration-200 hover:text-white ${
                              subIdx !== item.subMenu.length - 1
                                ? 'border-b border-dashed border-gray-500'
                                : ''
                            } }`
                          }
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subIdx === 0 && (
                            <hr className="absolute top-0 left-0 h-[5px] w-full border-none bg-[#ffb7c5] outline-none"></hr>
                          )}
                          <span className={`font-medium tracking-wider`}>{sub.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.li>
            ))}
            <motion.div variants={itemVariants}>
              <Link aria-label="contact us" to={'/contact-us'}>
                <button
                  aria-label="contact us"
                  className="contact-btn bg-cta-red hover:bg-cta-hover cursor-pointer border px-7 py-3 text-[0.875rem] font-semibold tracking-wide text-white uppercase"
                >
                  Contact us
                </button>
              </Link>
            </motion.div>
          </motion.ul>
        </motion.div>

        {/* background overlay when mobile navbar is opened */}
        {isMobileMenuOpen && (
          <div
            aria-label={isMobileMenuOpen ? 'background blur overlay' : ''}
            className="bg-overlay fixed inset-0 z-10 w-full bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile and Medium Device NavLinks */}
        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-0 left-0 z-20 min-h-dvh w-80 bg-white md:w-[32rem]">
            <RxCross2
              size={25}
              className="absolute top-8 right-4 cursor-pointer"
              onClick={handleMobileMenuToggle}
            />

            <ul
              className={`mobile-ul absolute top-25 right-0 left-0 z-50 flex min-h-dvh w-80 flex-col text-left font-medium md:w-[32rem] md:pr-4 ${MediumDevice ? 'block' : 'hidden'}`}
            >
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  {item.link && item.name != 'our courses' ? (
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `mobile_ul-link block border-b border-b-gray-200 px-4 py-3 text-black transition-all duration-200 hover:bg-gray-100 ${isActive ? 'text-active-link' : ''}`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="capitalize">{item.name}</span>
                    </NavLink>
                  ) : (
                    <span className="flex flex-col items-start">
                      <button
                        onClick={() => handleDropdownToggle(idx)}
                        className="mobile_ul-btn flex w-full justify-between border-b border-b-gray-200 px-4 py-3 text-left text-black transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
                        aria-expanded={openDropdown === idx}
                        aria-haspopup="true"
                      >
                        <Link
                          aria-label="navigation link name"
                          to={item?.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="tracking-wide capitalize">{item.name}</span>
                        </Link>
                        {item.subMenu && (
                          <RiArrowDropDownLine
                            size={22}
                            className={`transition-transform duration-200 ${
                              openDropdown === idx ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </button>
                      {item.subMenu && openDropdown === idx && (
                        <ul className="flex w-full flex-col pl-8 text-left">
                          {item.subMenu.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <NavLink
                                to={sub.link}
                                className={({ isActive }) =>
                                  `block w-full border-b border-b-gray-200 px-2 py-2 text-gray-800 transition-colors duration-200 hover:bg-gray-100 ${
                                    isActive ? 'text-active-link' : ''
                                  }`
                                }
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                <span className="text-sm font-medium tracking-wide">
                                  {sub.name}
                                </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </span>
                  )}
                </li>
              ))}
              <div className="flex w-full items-center justify-center border-y border-gray-300">
                <Link
                  aria-label="contact us"
                  to={'/contact-us'}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button aria-label="contact us" className="contact-btn my-3.5 ml-0">
                    Contact Us
                  </button>
                </Link>
              </div>
              <Link
                aria-label="contact us with email"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-10 flex items-center justify-center gap-2"
                to={'/contact'}
              >
                <MdOutlineEmail />
                himalayanedu@gmail.com
              </Link>

              {/* Social Links Section */}
              <li className="mt-8 flex justify-center gap-5 border-t border-gray-200 pt-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-full border border-gray-400 p-2 text-black transition-colors duration-200 hover:bg-gray-50 ${
                      social.icon === SiYoutube
                        ? 'hover:border-red-500 hover:text-red-500'
                        : social.icon === FaFacebook
                          ? 'hover:border-blue-600 hover:text-blue-600'
                          : social.icon === FaTwitter
                            ? 'hover:border-blue-400 hover:text-blue-400'
                            : social.icon === AiFillInstagram
                              ? 'hover:border-pink-500 hover:text-pink-500'
                              : 'hover:border-active-link hover:text-active-link'
                    }`}
                  >
                    <social.icon className="size-[1.25rem]" />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
