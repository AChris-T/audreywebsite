import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="h-24 w-full flex justify-between px-2 md:px-12 items-center">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-[300px] object-cover" />
      </Link>
      <div className="flex gap-6 items-center">
        {location.pathname == '/' ? (
          <>
            <a
              href="#about"
              smooth={true}
              duration={500}
              className="text-[#777] cursor-pointer hidden md:flex"
            >
              About
            </a>
            <Link to="" className="text-[#777] cursor-pointer hidden md:flex">
              Diagnostic
            </Link>
            <a
              href="#keynote"
              smooth={true}
              duration={500}
              className="text-[#777] cursor-pointer hidden md:flex"
            >
              Keynote
            </a>
            <a
              href="#contact"
              smooth={true}
              duration={500}
              className="text-[#777] cursor-pointer hidden md:flex"
            >
              Contact
            </a>
          </>
        ) : (
          <>
            <Link to="/" className="text-[#777] cursor-pointer hidden md:flex">
              Home
            </Link>
            <a
              to="#about"
              className="text-[#777] cursor-pointer hidden md:flex"
            >
              About
            </a>
          </>
        )}
        <Link
          to=""
          className="text-[#F6F6F6] bg-[#708238] py-4 px-10 rounded-xl"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
