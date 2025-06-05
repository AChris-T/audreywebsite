import React from 'react';
import Vect from '../assets/icons/Vect';
import IGp from '../assets/icons/IGp';
import Settings from '../assets/icons/Settings';
import Discovery from '../assets/icons/Discovery';

export default function Diagnostic() {
  return (
    <div className="">
      <div className="flex items-center flex-col gap-2 justify-center mt-20">
        <h3 className="han text-lg md:text-2xl font-bold text-[#708238]">
          3-minute Diagnostic Assessment
        </h3>
        <p className="text-center md:text-5xl text-2xl md:w-[944px] han md:leading-14 w-full ">
          Emotional Intelligence Diagnostic Toolkit for Transformational
          Organisational Change
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
            Who is this for?{' '}
          </h3>
          <p className="text-center  md:w-[944px] han font-medium text-[#777777] w-full ">
            This keynote is ideal for leaders and managers at all levels, from
            emerging leaders to senior executives, across various industries. It
            is particularly beneficial organizations seeking to:
          </p>
        </div>
      </div>

      <div className="flex items-start mt-10 justify-start md:px-24 px-2 flex-col gap-3">
        <div className="flex items-center gap-2">
          <Discovery />
          <h3 className="text-lg font-medium text-[#777777]">
            Improve team dynamics and communication.{' '}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Settings />
          <h3 className="text-lg font-medium text-[#777777]">
            Increase employee engagement and retention.{' '}
          </h3>
        </div>
        <div className="flex items-center gap-2 mb-20">
          <IGp />
          <h3 className="text-lg font-medium text-[#777777]">
            Foster a culture of innovation and adaptability.{' '}
          </h3>
        </div>
      </div>
    </div>
  );
}
