/* eslint-disable no-unused-vars */
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Presentation from '../assets/icons/presentation';
import User from '../assets/icons/User';
import Love from '../assets/icons/Love';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="px-2 mt-10 md:px-12 flex flex-col"
    >
      <h3 className="text-[#708238] text-xl md:text-2xl font-bold han">
        Why Audrey?
      </h3>
      <h3 className="md:text-[32px] text-[20px] font-bold">
        Meet the Woman Helping Organisations unlock their excellence
      </h3>
      <p className="lg:w-[833px] w-full text-[#777777] mt-4">
        Audrey was a banking executive playing by corporate rules until the day
        the care system failed her autistic son. Where others saw bureaucracy,
        she saw blueprints. Today, her Ofsted 'Outstanding' rated facilities
        prove that compassion isn't soft it's the smartest strategy in the room.
        Her approach combines insightful content with practical strategies,
        empowering leaders to enhance their emotional intelligence and achieve
        remarkable results.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-14">
        <div className="border-[1px] flex flex-col gap-6 border-[#E5EBD1] w-full rounded-xl px-5 py-6">
          <Presentation />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium text-[#121212]">
              Engaging Keynotes
            </h3>
            <p className="text-[#777777]">
              As a Tedx Alumni Audrey delivers captivating keynotes that
              resonate with audiences, leaving a lasting impression and
              inspiring action.
            </p>
          </div>
        </div>
        <div className="border-[1px] border-[#E5EBD1] flex flex-col gap-6 w-full rounded-xl px-5 py-6">
          <User />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium text-[#121212]">
              Tailored Workshops{' '}
            </h3>
            <p className="text-[#777777]">
              Workshops are customised to meet the specific needs of your team,
              ensuring relevant and impactful learning experiences.
            </p>
          </div>
        </div>
        <div className="border-[1px] flex flex-col gap-6 border-[#E5EBD1] w-full rounded-xl px-5 py-6">
          <Love />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium text-[#121212]">
              Transformative Impact{' '}
            </h3>
            <p className="text-[#777777]">
              Audrey's expertise drives positive change, enhancing emotional
              intelligence in leadership and fostering a culture of empathy and
              understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="  justify-center items-center flex mt-20 ">
        <div className="shadow-2xl md:w-[640px] w-full rounded-2xl">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/1108416424?h=c8ebdfe93f"
            width="100%"
            height="360"
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}
