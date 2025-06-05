import React from 'react';
import ceo from '../../src/assets/images/ceo4.png';

export default function EDiagnostic() {
  return (
    <div className="">
      <div className="flex items-center flex-col gap-2 justify-center mt-20">
        <h3 className="han text-lg md:text-2xl font-bold text-[#708238]">
          3-minute Diagnostic Assessment
        </h3>
        <p className="text-center md:text-5xl text-2xl lg:w-[944px] han md:leading-14 w-full ">
          Transformational Leadership and Staff Retention Diagnostic Toolkit
        </p>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScfl-s6_6Qv81IxVwXHzym6gWj5Q_4QHeOHGb9BKgdp44aLLA/viewform?usp=dialog"
          className="text-[#F6F6F6] mt-5 bg-[#708238] py-4 px-10 rounded-xl"
        >
          Start now
        </a>
        <div className="flex flex-col gap-5 items-center justify-center mt-20">
          <h3 className="han text-2xl font-bold text-[#708238]">
            What I will Cover{' '}
          </h3>
          <p className="text-center  lg:w-[944px] han font-medium text-[#777777] w-full ">
            This keynotes addresses the specific regulatory challenges faced by
            educational institutions, providing practical strategies to manage
            stress and maintain high standards
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center mt-10  gap-20 px-2 md:px-12">
        <div>
          <h3 className="text-[#708238] mb-4 font-bold md:text-2xl text-xl">
            Case Study{' '}
          </h3>
          <p className="text-lg w-full font-medium text-[#777777]">
            Client’s Success Story
          </p>
          <h3 className="mt-[20px] han text-[#121212] font-bold md:text-3xl text-xl">
            Reduced Turnover by 30% in 6 Months
          </h3>
          <p className="text-lg w-full mt-4 lg:w-[568px] font-medium text-[#777777]">
            A leading healthcare provider implemented our strategies and saw a
            significant decrease in employee turnover, leading to improved
            patient care and operational efficiency.
          </p>
        </div>
        <div>
          <img src={ceo} alt="" />
        </div>
      </div>
    </div>
  );
}
