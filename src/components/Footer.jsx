import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../src/assets/images/logo.png';
import linkdin from '../../src/assets/images/linkedin.png';
import facebook from '../../src/assets/images/Facebook.png';
import insta from '../../src/assets/images/Instagram.png';
import youtube from '../../src/assets/images/Youtube.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 40, scale: 0.95 }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Sharp, spring-like easing
        scale: { duration: 0.4 },
      }}
      className="bg-[#F2F8F8] h-full pt-28 px-2 md:px-12 flex flex-col items-center justify-center  gap-6 "
    >
      <h3 className="text-[#4A4A4A] text-[14px]">
        UNLOCKING ORGANIZATIONAL EXCELLENCE
      </h3>
      <h3 className="han text-[#708238]  md:text-[54px] font-bold text-2xl">
        Request More Information
      </h3>
      <h3 className="font-medium text-lg text-center">
        Speaker | EQ Expert | Transformational Leader
      </h3>
      <button className="bg-[#708238] px-10 py-5 rounded-xl text-[#F6F6F6]">
        Contact Me
      </button>
      <h3 className="text-[#121212] text-sm">© 2025 Audrey Williams-Joseph</h3>
      <div className=" w-full flex flex-col lg:flex-row gap-10  justify-between px-2 md:px-12 items-center">
        <div>
          <img src={logo} alt="" className="w-[300px] object-cover" />
        </div>
        <div className="flex flex-col md:flex-row  gap-6 items-center">
          <Link
            to="keynote"
            smooth={true}
            duration={500}
            className="text-[#121212] cursor-pointer "
          >
            Keynote
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-[#121212] cursor-pointer "
          >
            Companies
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-[#121212] cursor-pointer "
          >
            About Me
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <img src={linkdin} alt="" />
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </motion.section>
  );
}
