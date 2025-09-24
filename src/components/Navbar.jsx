import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-center px-6 py-3 text-black">
      {/* Logo */}
      <img src="/images/Himalayan Logo.png" alt="Logo" className="w-h-20 h-20 object-contain" />
    </nav>
  );
};

export default Navbar;
// <nav className="bg-red-800 text-white px-6 py-3 flex justify-between items-center">
//

//   {/* Menu */}
//   <ul className="hidden md:flex gap-6 items-center">
//     <li className="hover:text-yellow-400 cursor-pointer">Home</li>
//     <li className="relative group">
//       <span className="cursor-pointer">About</span>
//       {/* Dropdown */}
//       <ul className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded shadow-lg w-48">
//         <li className="px-4 py-2 hover:bg-gray-700">About Us</li>
//         <li className="px-4 py-2 hover:bg-gray-700">Message From MD</li>
//         <li className="px-4 py-2 hover:bg-gray-700">FAQ</li>
//         <li className="px-4 py-2 hover:bg-gray-700">Our Branches</li>
//         <li className="px-4 py-2 hover:bg-gray-700">Why Choose Us?</li>
//         <li className="px-4 py-2 hover:bg-gray-700">Social Contribution</li>
//       </ul>
//     </li>
//     <li className="cursor-pointer">Services</li>
//     <li className="cursor-pointer">Our Courses</li>
//     <li className="cursor-pointer">Events</li>
//     <li className="cursor-pointer">Blog</li>
//     <li className="cursor-pointer">Gallery</li>
//     <li className="cursor-pointer">Contact</li>
//   </ul>

//   {/* Right side: Language / Flag */}
//   <div className="flex items-center gap-2 cursor-pointer">
//     <img src="/uk-flag.png" alt="EN" className="w-6 h-6"/>
//     <span>EN</span>
//   </div>
// </nav>
