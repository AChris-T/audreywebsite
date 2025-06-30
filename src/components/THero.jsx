import React from 'react';
import tes from '../../src/assets/images/new.png';
import { Link } from 'react-router-dom';

export default function THero() {
  return (
    <div className="bg-[#F2F8F8] pt-44 px-2 md:px-12 flex justify-center items-center flex-col gap-10 ">
      <h3 className="han font-semibold text-3xl md:text-[70px] text-center md:leading-16 text-[#121212]">
        Transformational Leadership Assessment
      </h3>
      <p className="text-center md:px-[76px] text-[#777777]">
        The diagnostic helps identify specific leadership gaps by examining how
        effectively change is communicated, whether middle management has the
        tools to implement vision, and if cross departmental collaboration
        supports organisational goals.
      </p>
      <a
        target="_blank"
        href="https://calendly.com/bookings-audreywilliams-joseph/30min"
        to=""
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
