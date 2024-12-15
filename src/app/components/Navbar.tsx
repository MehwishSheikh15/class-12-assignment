'use client';
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/asstes/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="w-full h-[92px] bg-[#043873] px-4 py-4 md:px-[100px] flex justify-between items-center">
        {/* Logo */}
        <div className="mr-12"> {/* Increased margin-right for more space */}
          <Image src={logo} alt="Company Logo" width={191} height={34} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex w-[737.5px] h-[60px] justify-between items-center">
          <div className="w-[549px] mr-12"> {/* Increased margin-right */}
            <ul className="text-[16px] font-medium leading-[21px] flex justify-between text-white gap-20">
              {/* Reduced font size and adjusted gap */}
              <li className="hover:underline cursor-pointer">Products</li>
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Resources</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <button className="py-3 px-8 rounded-lg text-sm bg-[#FFE492] hover:bg-[#ffd966]">
              {/* Reduced font size and padding */}
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-[92px] left-0 w-full bg-[#043873] text-white">
              <ul className="flex flex-col items-center py-4">
                <li className="py-2 hover:underline cursor-pointer">Products</li>
                <li className="py-2 hover:underline cursor-pointer">Services</li>
                <li className="py-2 hover:underline cursor-pointer">Resources</li>
                <li className="py-2 hover:underline cursor-pointer">Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
