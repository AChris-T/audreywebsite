import React from 'react';
import tes from '../../src/assets/images/testi.png';
import { Link } from 'react-router-dom';

export default function TestimonialHero() {
  return (
    <div className="bg-[#F2F8F8] pt-44 px-2 md:px-12 flex justify-center items-center flex-col gap-10 ">
      <h3 className="han font-semibold text-3xl md:text-[70px] text-center md:leading-16 text-[#121212]">
        When Systems Fail, Leadership Rises{' '}
      </h3>
      <p className="text-center md:px-[76px] text-[#777777]">
        A mother’s journey raising an autistic son became the catalyst for
        transforming care standards—hear how her insights empower leaders
        worldwide.
      </p>
      <img
        src={tes}
        alt=""
        className="w-full md:w-[900px] rounded-3xl object-cover"
      />
    </div>
  );
}
