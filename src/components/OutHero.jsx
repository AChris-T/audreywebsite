import React from 'react';
import tes from '../../src/assets/images/out.png';
import { Link } from 'react-router-dom';
import Presentation from '../assets/icons/presentation';

export default function OutHero() {
  return (
    <div className=" flex flex-col gap-10">
      <div className="bg-[#F2F8F8] px-2 md:px-12 pt-28  flex justify-center items-center flex-col gap-10 ">
        <h3 className="han font-semibold text-3xl md:text-[70px] text-center md:leading-16 text-[#121212]">
          Achieving "Outstanding" with Ofsted Frameworks{' '}
        </h3>
        <p className="text-center md:px-[76px] text-[#777777]">
          Achieving "Outstanding" ratings from regulatory bodies such as Ofsted
          requires systematic approaches that embed quality into every aspect of
          operations. The diagnostic examines how well organisations bridge the
          gap between performance and expectations, prepare staff for
          assessments, and maintain documentation that evidences excellence.
        </p>
        <img
          src={tes}
          alt=""
          className="w-full md:w-[900px] rounded-3xl object-cover"
        />
      </div>
      <div className="px-2 md:px-12 mb-10">
        <h3 className="text-[20px] font-bold text-[#121212] text-center md:text-[42px] ">
          The Frameworks
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-10">
          <div className="border-[1px] border-[#E5EBD1] rounded-xl py-9 px-3 flex gap-7 flex-col justify-center items-center">
            <Presentation />
            <div className="flex flex-col items-center justify-center  gap-3">
              <h2 className="text-lg text-[#121212] font-medium">
                Gap Analysis
              </h2>
              <p className="text-[#777777] text-center">
                Identify discrepancies between current performance and
                regulatory expectations
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#E5EBD1] rounded-xl py-9 px-3 flex gap-7 flex-col justify-center items-center">
            <Presentation />
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="text-lg text-[#121212] font-medium">
                Documentation{' '}
              </h2>
              <p className="text-[#777777] text-center">
                Address evidence gathering and documentation challenges
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#E5EBD1] rounded-xl py-9 px-3 flex gap-7 flex-col justify-center items-center">
            <Presentation />
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="text-lg text-[#121212] font-medium">
                Staff Preparation
              </h2>
              <p className="text-[#777777] text-center">
                Reduce anxiety around inspection processes through proper
                training{' '}
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#E5EBD1] rounded-xl py-9 px-3 flex gap-7 flex-col justify-center items-center">
            <Presentation />
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="text-lg text-[#121212] font-medium">
                Values Integration{' '}
              </h2>
              <p className="text-[#777777] text-center">
                Translate organisational values into consistent daily practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
