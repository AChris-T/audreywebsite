import React from 'react';
import Vect from '../assets/icons/Vect';
import IGp from '../assets/icons/IGp';
import Settings from '../assets/icons/Settings';
import Discovery from '../assets/icons/Discovery';

export default function SDiagnostic() {
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHJPmsdPgqvxfbCajkhkYZajE0g72r2ksvIMn7UZkT-qoXmA/viewform?usp=dialog"
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

      <div className="flex items-start mt-10 justify-start md:px-24 px-2 flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Discovery />
            <h3 className="text-lg font-medium text-[#121212]">
              High Turnover Rates{' '}
            </h3>
          </div>
          <h3 className="text-[#777777]">
            Excessive staff departures, particularly among experienced team
            members, indicate fundamental organisational issues requiring
            immediate attention.
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Settings />
            <h3 className="text-lg font-medium text-[#121212]">
              Increase employee engagement and retention.{' '}
            </h3>
          </div>
          <h3 className="text-[#777777]">
            Challenges in attracting qualified candidates suggest potential
            issues with employer branding, compensation structures, or
            recruitment practices.
          </h3>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex items-center gap-2 ">
            <IGp />
            <h3 className="text-lg font-medium text-[#121212]">
              Morale & Service Quality{' '}
            </h3>
          </div>
          <h3 className="text-[#777777]">
            Low team morale directly impacts client service quality, creating a
            negative feedback loop that further degrades workplace satisfaction.
          </h3>
        </div>
        <div className="flex flex-col gap-2 mb-20">
          <div className="flex items-center gap-2 ">
            <Vect />
            <h3 className="text-lg font-medium text-[#121212]">
              Career Development Limitations{' '}
            </h3>
          </div>
          <h3 className="text-[#777777]">
            Insufficient advancement opportunities push ambitious employees to
            seek growth elsewhere, resulting in talent drain.
          </h3>
        </div>
      </div>
    </div>
  );
}
