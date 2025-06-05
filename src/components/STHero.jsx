import React from 'react';
import tes from '../../src/assets/images/stf.png';
import { Link } from 'react-router-dom';

export default function STHero() {
  return (
    <div className="bg-[#F2F8F8] pt-28 px-2 md:px-12 flex justify-center items-center flex-col gap-10 ">
      <h3 className="han font-semibold text-3xl md:text-[70px] text-center md:leading-16 text-[#121212]">
        Staff Retention & Engagement Challenges{' '}
      </h3>
      <p className="text-center md:px-[76px] text-[#777777]">
        Equip your team with the emotional intelligence to excel during
        inspections and beyond. This empowers educators to navigate challenges,
        maintain composures, and deliver exceptional performance under pressure.
      </p>
      <Link to="" className="text-[#F6F6F6] bg-[#708238] py-4 px-10 rounded-xl">
        Book Keynote
      </Link>
      <img
        src={tes}
        alt=""
        className="w-full md:w-[900px] rounded-3xl object-cover"
      />
    </div>
  );
}
