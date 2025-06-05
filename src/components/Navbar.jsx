import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../src/assets/images/logo.png';

export default function Navbar() {
  return (
    <div className="h-24 w-full flex  justify-between px-2 md:px-12 items-center">
      <div>
        <img src={logo} alt="" className="w-[300px] object-cover" />
      </div>
      <div className="flex gap-6 items-center">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-[#777] cursor-pointer hidden md:flex"
        >
          About
        </Link>
        <Link to={''} className="text-[#777] cursor-pointer hidden md:flex">
          Diagnostic
        </Link>
        <Link
          to="keynote"
          smooth={true}
          duration={500}
          className="text-[#777] cursor-pointer hidden md:flex"
        >
          Keynote
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-[#777] cursor-pointer hidden md:flex"
        >
          Contact
        </Link>
        <Link
          to={''}
          className="text-[#F6F6F6] bg-[#708238] py-4 px-10 rounded-xl"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
