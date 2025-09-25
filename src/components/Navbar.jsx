import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import navLinks from '../constants/data';

// Icons
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const MiddleDev = useMediaQuery({ maxWidth: 1023 });

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

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav ref={navRef}>
      <div className="relative">
        <Link to="/">
          <img
            data-aos="slide-right"
            src="/images/Himalayan Logo.png"
            alt="Himalayan Language Institute Logo"
            className="h-auto w-36 object-contain"
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
                    `hover:text-active-link flex cursor-pointer items-center gap-1 px-2 py-2 transition-colors duration-200 ${
                      isActive ? 'text-active-link' : 'text-gray-700'
                    }`
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
                          `hover:bg-hover block p-4 text-[0.815rem] font-light text-white transition-colors duration-200 ${
                            subIdx !== item.subMenu.length - 1
                              ? 'border-b border-dashed border-gray-500'
                              : ''
                          }`
                        }
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.name}
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

      {/* {isMobileMenuOpen && <div className="h-screen w-screen bg-tra opacity-50"></div>} */}
      {/* Mobile and Medium Device NavLinks */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 min-h-dvh w-80 bg-white px-5 py-10">
          <RxCross2
            size={25}
            className="absolute top-8 right-4 cursor-pointer"
            onClick={handleMobileMenuToggle}
          />

          <ul className="absolute top-20 right-0 left-0 z-50 flex min-h-dvh w-80 flex-col text-left font-medium lg:hidden">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                {item.link ? (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `block border-b border-b-gray-200 px-4 py-3 text-black transition-all duration-200 hover:bg-gray-100 ${
                        isActive ? 'text-active-link' : ''
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="capitalize">{item.name}</span>
                  </NavLink>
                ) : (
                  <span className="flex flex-col items-start">
                    <button
                      onClick={() => handleDropdownToggle(idx)}
                      className="flex w-full justify-between border-b border-b-gray-200 px-4 py-3 text-left text-black transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
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
                              <span className="text-sm font-medium tracking-wide">{sub.name}</span>
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
              className="hover:text-active-link mt-20 flex items-center justify-center gap-2"
              to={'/contact'}
            >
              <MdOutlineEmail />
              himalayanedu@gmail.com
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

{
  /* <div className="absolute">
  

  
</div>; */
}
