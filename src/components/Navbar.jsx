import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { motion, useAnimation } from 'motion/react';
import { useLocation } from 'react-router-dom';

import { navLinks, socials } from '../constants/data';

// Icons
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { SiYoutube } from 'react-icons/si';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const MediumDevice = useMediaQuery({ maxWidth: 1037 });
  const location = useLocation();
  const controls = useAnimation();

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

  const ulContainervariants = {
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
  };

  const itemVariants = {
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
  };

  return (
    <>
      <nav ref={navRef}>
        <motion.div animate={controls} className="relative">
          <Link to="/">
            <img
              // data-aos="slide-right"
              src="/images/Himalayan Logo.png"
              alt="Himalayan Language Institute Logo"
              className="ml-3 h-auto w-36 object-contain sm:w-36 md:ml-0"
              onClick={
                (() => setIsMobileMenuOpen(false), window.scrollTo({ top: 0, behavior: 'smooth' }))
              }
            />
          </Link>

          {/* Mobile Menu Button / Hamburger Menu */}
          <button
            className={`mobile-btn ${MediumDevice ? 'block' : ''}`}
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
            variants={ulContainervariants}
            initial="hidden"
            animate="visible"
            className={`${MediumDevice ? 'hidden' : ''} desktop-ul`}
          >
            {navLinks.map((item, idx) => (
              <motion.li variants={itemVariants} key={idx} className="group">
                {item.link && item.name != 'our courses' ? (
                  <NavLink
                    to={item.link || '#'}
                    className={({ isActive }) =>
                      `desktop-ul-link ${isActive ? 'text-main-indigo' : 'text-gray-500'}`
                    }
                  >
                    <span className="uppercase">{item.name}</span>
                  </NavLink>
                ) : (
                  <Link to={item?.link}>
                    <motion.button
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => handleDropdownToggle(idx)}
                      onMouseEnter={() => setOpenDropdown(idx)}
                      className="submenu-btn"
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
                    className="dropdown_menu-ul"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.subMenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <NavLink
                          to={sub.link}
                          className={({ isActive }) =>
                            `dropdown_menu-ul-link ${
                              subIdx !== item.subMenu.length - 1
                                ? 'border-b border-dashed border-gray-500'
                                : ''
                            } }`
                          }
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subIdx === 0 && <hr></hr>}
                          <span className={`font-medium tracking-wider`}>{sub.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.li>
            ))}
            <motion.div variants={itemVariants}>
              <Link to={'/contact-us'}>
                <button className="contact-btn">Contact us</button>
              </Link>
            </motion.div>
          </motion.ul>
        </motion.div>

        {/* background overlay when mobile navbar is opened */}
        {isMobileMenuOpen && (
          <div
            aria-label={isMobileMenuOpen ? 'background blur overlay' : ''}
            className="bg-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile and Medium Device NavLinks */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <RxCross2
              size={25}
              className="absolute top-8 right-4 cursor-pointer"
              onClick={handleMobileMenuToggle}
            />

            <ul className={`mobile-ul ${MediumDevice ? 'block' : 'hidden'}`}>
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  {item.link && item.name != 'our courses' ? (
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `mobile_ul-link ${isActive ? 'text-active-link' : ''}`
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="capitalize">{item.name}</span>
                    </NavLink>
                  ) : (
                    <span className="flex flex-col items-start">
                      <button
                        onClick={() => handleDropdownToggle(idx)}
                        className="mobile_ul-btn"
                        aria-expanded={openDropdown === idx}
                        aria-haspopup="true"
                      >
                        <Link to={item?.link} onClick={() => setIsMobileMenuOpen(false)}>
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
                <Link to={'/contact-us'}>
                  <button className="contact-btn my-2 ml-0">Contact Us</button>
                </Link>
              </div>
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-active-link mt-10 flex items-center justify-center gap-2"
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
