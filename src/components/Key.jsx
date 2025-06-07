import React from 'react';
import Discovery from '../assets/icons/Discovery';
import Settings from '../assets/icons/Settings';
import IGp from '../assets/icons/IGp';
import Vect from '../assets/icons/Vect';
import ceo from '../../src/assets/images/ceo3.png';

export default function Key() {
  return (
    <div className="flex justify-center flex-col md:flex-row items-center mt-10  gap-20 px-2 md:px-12">
      <div>
        <h3 className="text-[#708238] mb-4 font-bold md:text-2xl text-xl">
          Key Takeaways{' '}
        </h3>
        <p className="text-lg w-full md:w-[640px] font-medium text-[#777777]">
          Participants will leave with actionable insights and techniques to
          enhance their emotional intelligence and improve performance under
          pressure.
        </p>
        <div className="flex flex-col gap-3 mt-10">
          <div className="flex items-center gap-2">
            <Discovery />
            <h3 className="text-lg font-medium text-[#777777]">
              Improved communication and collaboration within teams.{' '}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Settings />
            <h3 className="text-lg font-medium text-[#777777]">
              Enhanced emotional intelligence regulation.{' '}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IGp />
            <h3 className="text-lg font-medium text-[#777777]">
              Increased confidence and resilience in challenging situations.{' '}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Vect />
            <h3 className="text-lg font-medium text-[#777777]">
              Strategies for fostering a positive and supportive work
              environment.{' '}
            </h3>
          </div>
          {/*     <div className="flex items-center gap-2">
            <Discovery />
            <h3 className="text-lg font-medium text-[#777777]">
              Actionable steps to prepare for and excel during inspections.
            </h3>
          </div> */}
        </div>
      </div>
      <div>
        <img src={ceo} alt="" />
      </div>
    </div>
  );
}
