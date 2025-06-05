import React from 'react';
import ceo from '../../src/assets/images/flower.png';

export default function Framework() {
  return (
    <div className="px-2 md:px-12 mb-20 flex flex-col gap-10 mt-10">
      <h3 className="text-center han text-[#708238] text-2xl font-bold ">
        FrameWork Preview
      </h3>
      <div className="flex justify-start flex-col md:flex-row-reverse items-start mt-10  gap-20 ">
        <div>
          <h3 className="mt-[20px] han text-[#121212] font-bold md:text-3xl text-xl">
            The Thrive Model{' '}
          </h3>
          <p className="text-lg w-full mt-4 lg:w-[568px] font-medium text-[#777777]">
            Our proprietary framework focuses on four key pillars: Trust,
            Respect, Inclusion and Value. This model provides a roadmap for
            creating a workspace where every team member feels supported and
            motivated.
          </p>
        </div>
        <div>
          <img src={ceo} alt="" />
        </div>
      </div>
    </div>
  );
}
