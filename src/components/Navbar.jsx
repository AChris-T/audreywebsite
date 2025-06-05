import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="h-24 w-full flex justify-between px-2 md:px-12 items-center max-w-7xl mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[300px] object-cover" />
        </Link>
        <div className="flex gap-6 items-center">
          {location.pathname === '/' ? (
            <>
              <a
                href="#about"
                smooth={true}
                duration={500}
                className="text-[#777] hover:text-[#708238] transition-colors cursor-pointer hidden md:flex"
              >
                About
              </a>
              <Link to="" className="text-[#777] hover:text-[#708238] transition-colors cursor-pointer hidden md:flex">
                Diagnostic
              </Link>
              <a
                href="#keynote"
                smooth={true}
                duration={500}
                className="text-[#777] hover:text-[#708238] transition-colors cursor-pointer hidden md:flex"
              >
                Keynote
              </a>
              <a
                href="#contact"
                smooth={true}
                duration={500}
                className="text-[#777] hover:text-[#708238] transition-colors cursor-pointer hidden md:flex"
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="text-[#777] hover:text-[#708238] transition-colors cursor-pointer hidden md:flex">
                Home
              </Link>
              <a
                to="#about"
                className="text-[#777] hover:text-[#708238] transition-colors cursor-pointer hidden md:flex"
              >
                About
              </a>
            </>
          )}
          <Link
            to=""
            className="text-[#F6F6F6] bg-[#708238] hover:bg-[#5a6a2d] transition-colors py-4 px-10 rounded-xl"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
}
