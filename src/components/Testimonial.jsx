/* eslint-disable no-unused-vars */
import React from 'react';
import ceo from '../../src/assets/images/ceo2.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
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
      className="px-2 md:px-12"
    >
      <h3 className="text-[#708238] md:text-2xl text-lg text-center md:text-start hen font-bold">
        Testimonials and Stats
      </h3>
      <div className="flex gap-20 items-center mt-14 md:flex-row flex-col">
        <div className=" justify-center">
          <img src={ceo} alt="" className="w-[417px] h-[460px] object-cover" />
        </div>
        <div className="lg:w-[743px] flex flex-col gap-4">
          <h3 className="han text-3xl text-center lg:text-start md:text-7xl font-semibold">
            Transformative Impact{' '}
          </h3>
          <p className="text-[#777777] text-center lg:text-start lg:w-full">
            Audrey's expertise has helped numerous organizations and individuals
            achieve remarkable growth and success. Here's what they have to say:
          </p>
          <div className="flex md:gap-6 flex-col items-center justify-center lg:justify-start md:flex-row gap-3">
            <Link
              to={'/testimonials'}
              className="px-10 py-4 bg-[#708238] text-[#FDFEFB] rounded-xl"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="md:grid-cols-5 mt-15 gap-6 grid grid-cols-2">
        <div className="w-full py-5 px-5 flex flex-col rounded-xl justify-center items-center border-[1px] border-[#E5EBD1] gap-7">
          <h3 className="text-[#121212] font-semibold text-xl md:text-7xl han">
            95%
          </h3>
          <p className="text-[#121212] font-medium  text-center">
            Client Satisfaction
          </p>
        </div>
        <div className="w-full py-5 px-5 flex flex-col rounded-xl justify-center items-center border-[1px] border-[#E5EBD1] gap-7">
          <h3 className="text-[#121212] font-semibold text-xl md:text-7xl han">
            95%
          </h3>
          <p className="text-[#121212] font-medium text-center">
            Outstanding Ofsted ratings achieved{' '}
          </p>
        </div>
        <div className="w-full py-5 px-5 flex rounded-xl flex-col justify-center items-center border-[1px] border-[#E5EBD1] gap-7">
          <h3 className="text-[#121212] font-semibold text-xl md:text-7xl han">
            40%
          </h3>
          <p className="text-[#121212] font-medium  text-center">
            Improvement in retention rates{' '}
          </p>
        </div>{' '}
        <div className="w-full py-5 px-5 flex rounded-xl flex-col justify-center items-center border-[1px] border-[#E5EBD1] gap-7">
          <h3 className="text-[#121212] font-semibold text-xl md:text-7xl han">
            28+
          </h3>
          <p className="text-[#121212] font-medium text-base text-center">
            Years of transformational experience
          </p>
        </div>{' '}
        <div className="w-full py-5 px-5 rounded-xl flex flex-col justify-center items-center border-[1px] border-[#E5EBD1] gap-7">
          <h3 className="text-[#121212] font-semibold text-xl md:text-7xl han">
            100+
          </h3>
          <p className="text-[#121212] font-medium  text-center">
            KeyNotes Delivered{' '}
          </p>
        </div>{' '}
      </div>
    </motion.div>
  );
}
