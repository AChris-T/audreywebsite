import React from 'react';
import ceo from '../../src/assets/images/ceo.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="bg-[#F2F8F8] pt-28 px-2 md:px-12 flex flex-col-reverse items-center lg:flex-row gap-10 "
    >
      <div className=" justify-center">
        <img
          src={ceo}
          alt=""
          className="w-[417px] h-[460px] rounded-xl object-cover"
        />
      </div>
      <div className="lg:w-[743px] flex flex-col gap-4">
        <h3 className="han text-3xl text-center lg:text-start md:text-7xl font-semibold">
          Ignite Your Potential with Emotional Intelligence
        </h3>
        <p className="text-[#777777] text-center lg:text-start lg:w-[600px]">
          Audrey Williams is a renowned speaker and expert in emotional
          intelligence, dedicated to empowering individuals and organizations to
          achieve peak performance and foster meaningful connections{' '}
        </p>
        <div className="flex md:gap-6 flex-col items-center justify-center lg:justify-start md:flex-row gap-3">
          <button className="px-10 py-4 bg-[#708238] text-[#FDFEFB] rounded-xl">
            Book Consultation
          </button>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScfl-s6_6Qv81IxVwXHzym6gWj5Q_4QHeOHGb9BKgdp44aLLA/viewform?usp=dialog"
            className="px-10 py-4 border-[#708238] border-[1px] text-[#708238] rounded-xl"
          >
            Take Diagnostic
          </a>
        </div>
      </div>
    </motion.div>
  );
}
