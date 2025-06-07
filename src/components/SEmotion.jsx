import React from 'react';
import tes from '../../src/assets/images/stf.png';
import { Link } from 'react-router-dom';
export default function SEmotion() {
  return (
    <div className="bg-[#F2F8F8] pt-44 px-2 md:px-12 flex justify-center items-center flex-col gap-10 ">
      <h3 className="han font-semibold text-3xl md:text-[70px] text-center md:leading-16 text-[#121212]">
        Emotional Intelligence in Leadership
      </h3>
      <p className="text-center md:px-[76px] text-[#777777]">
        In today’s competitive landscape retaining top talent is more crucial
        than ever. This keynote explores the root cause of employee turnover and
        provides actionable strategies to foster a culture of engagement and
        belonging. Learn how to empower your team, enhance their EQ, and create
        an environment where everyone can thrive.
      </p>
      <a
        target="_blank"
        href="https://calendly.com/bookings-audreywilliams-joseph/30min"
        className="text-[#F6F6F6] bg-[#708238] py-4 px-10 rounded-xl"
      >
        Book Keynote
      </a>
      <img
        src={tes}
        alt=""
        className="w-full md:w-[900px] rounded-3xl object-cover"
      />
    </div>
  );
}
