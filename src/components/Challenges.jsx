import React from 'react';
import Discovery from '../assets/icons/Discovery';
import Settings from '../assets/icons/Settings';
import IGp from '../assets/icons/IGp';
import Vect from '../assets/icons/Vect';
import ceo from '../../src/assets/images/ceo3.png';

export default function Challenges() {
  return (
    <div className="flex justify-center flex-col md:flex-row items-center mt-10  gap-20 px-2 md:px-12">
      <div>
        <h3 className="text-[#708238] mb-4 font-bold md:text-2xl text-xl">
          Common Challenges in this Area
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Discovery />
            <h3 className="text-lg font-medium text-[#777777]">
              Staff resistance to organisational change and new initiatives
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Settings />
            <h3 className="text-lg font-medium text-[#777777]">
              Middle management struggling to implement strategic vision
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <IGp />
            <h3 className="text-lg font-medium text-[#777777]">
              Disconnect between leadership messaging and frontline practices
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Vect />
            <h3 className="text-lg font-medium text-[#777777]">
              Leadership team operating in silos rather than collaboratively
            </h3>
          </div>
        </div>
      </div>
      <div>
        <img src={ceo} alt="" />
      </div>
    </div>
  );
}
