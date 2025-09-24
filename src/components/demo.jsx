import React from 'react';
import navLinks from '../constants/data';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-800 px-6 py-3 text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/images/Himalayan Logo.png" alt="Logo" className="h-20 w-20 object-contain" />
        </Link>

        {/* Nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((item, idx) => (
            <li key={idx} className={`group relative font-medium tracking-wide`}>
              {/* Main NavLink */}
              {item.link ? (
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `flex cursor-pointer items-center gap-1 ${isActive ? 'text-yellow-400' : ''}`
                  }
                >
                  {item.name}
                  {item.subMenu && (
                    <RiArrowDropDownLine
                      size={22}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </NavLink>
              ) : (
                <span className="flex cursor-pointer items-center gap-1">
                  {item.name}
                  {item.subMenu && (
                    <RiArrowDropDownLine
                      size={22}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </span>
              )}

              {/* Dropdown */}
              {item.subMenu && (
                <ul className="absolute top-full left-0 z-50 mt-2 hidden w-48 rounded bg-[#2F2F2F] text-sm font-light text-white shadow-lg group-hover:block">
                  {item.subMenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={sub.link}
                        className={({ isActive }) =>
                          `block px-4 py-3 hover:bg-gray-700 ${
                            subIdx !== item.subMenu.length - 1
                              ? 'border-b border-dashed border-gray-500'
                              : ''
                          } ${isActive ? 'bg-gray-700 text-yellow-400' : ''}`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
