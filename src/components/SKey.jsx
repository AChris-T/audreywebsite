import React from 'react';
import User from '../assets/icons/User';

export default function SKey() {
  return (
    <div className="flex flex-col gap-4 px-2 md:px-24">
      <h3 className="text-[#708238] font-bold text-2xl">
        Key Problems Addressed
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-5 border-[#E5EBD1] border-[1px] justify-center py-2 rounded-xl items-center text-lg text-[#121212]">
          <User /> High Staff Turnover Rates
        </div>
        <div className="flex flex-5 border-[#E5EBD1] border-[1px] justify-center py-2 rounded-xl items-center text-lg text-[#121212]">
          <User /> Low Employee Engagement
        </div>
        <div className="flex flex-5 border-[#E5EBD1] border-[1px] justify-center py-2 rounded-xl items-center text-lg text-[#121212]">
          <User /> Lack of Team Cohesion
        </div>
      </div>
    </div>
  );
}
