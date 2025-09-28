import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

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
  const MiddleDev = useMediaQuery({ maxWidth: 1037 });

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
      html.style.overflow = ''; // cleanup
    };
  }, [isMobileMenuOpen]);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav ref={navRef}>
        <div className="relative">
          <Link to="/">
            <img
              // data-aos="slide-right"
              src="/images/Himalayan Logo.png"
              alt="Himalayan Language Institute Logo"
              className="ml-3 h-auto w-36 object-contain sm:w-36 md:ml-0"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-btn ${MiddleDev ? 'block' : ''}`}
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
          <ul className={`${MiddleDev ? 'hidden' : ''} desktop-ul`}>
            {navLinks.map((item, idx) => (
              <li key={idx} className="group">
                {item.link ? (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `desktop-ul-link ${isActive ? 'text-main-indigo' : 'text-gray-500'}`
                    }
                  >
                    <span className="uppercase">{item.name}</span>
                  </NavLink>
                ) : (
                  <button
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
                  </button>
                )}

                {/* Dropdown menu */}
                {item.subMenu && openDropdown === idx && (
                  <ul className="dropdown_menu-ul" onMouseLeave={() => setOpenDropdown(null)}>
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
                  </ul>
                )}
              </li>
            ))}
            <Link to={'/contact'}>
              <button className="contact-btn">Contact</button>
            </Link>
          </ul>
        </div>

        {/* background overlay when mobile nav is opened */}
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

            <ul className={`mobile-ul ${MiddleDev ? 'block' : 'hidden'}`}>
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  {item.link ? (
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
                        <span className="tracking-wide capitalize">{item.name}</span>
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
                    <social.icon className="h-[1.25rem] w-[1.25rem]" />
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
