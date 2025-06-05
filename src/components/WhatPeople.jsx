import React from 'react';
import Star from '../assets/icons/Star';

export default function WhatPeople() {
  return (
    <div className="flex flex-col mb-10 px-2 lg:px-24 justify-center items-center">
      <h3 className="text-[#708238] font-bold md:text-2xl text-xl ">
        Testimonials
      </h3>
      <h3 className="text-[#121212] font-bold md:text-[42px] text-2xl">
        What People Are Saying
      </h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border-[#E5EBD1] rounded-xl flex flex-col items-center justify-center border-[1px] bg-[#F6F6F6] py-6 px-5">
          <Star />
          <h3 className="text-[#121212] text-center font-medium mt-2 text-lg">
            Healthcare Leadership Testimonial
          </h3>
          <p className="text-center text-[#777777] mt-5">
            “Audrey doesn’t just talk about compassionate care—she’s rebuilt
            entire systems because she’s lived through their failures. Her
            framework helped us achieve ‘Outstanding’ while cutting staff
            turnover by 40%.”
          </p>
          <h3 className="text-lg mt-5"> CEO, [Healthcare Org]</h3>
        </div>
        <div className="border-[#E5EBD1] rounded-xl flex flex-col items-center justify-center border-[1px] bg-[#F6F6F6] py-6 px-5">
          <Star />
          <h3 className="text-[#121212] text-center font-medium mt-2 text-lg">
            Corporate Sector Testimonial{' '}
          </h3>
          <p className="text-center text-[#777777] mt-5">
            “Her keynote on ‘Parenting as Leadership Training’ reframed how we
            approach crisis management. My team now sees personal challenges as
            innovation opportunities.”
          </p>
          <h3 className="text-lg mt-5">COO, [Financial Services Firm]</h3>
        </div>
        <div className="border-[#E5EBD1] rounded-xl flex flex-col items-center justify-center border-[1px] bg-[#F6F6F6] py-6 px-5">
          <Star />
          <h3 className="text-[#121212] text-center font-medium mt-2 text-lg">
            Entrepreneur Testimonial{' '}
          </h3>
          <p className="text-center text-[#777777] mt-5">
            “As a single parent founder, Audrey’s story of building a care
            empire while raising her son gave me the blueprint to turn my
            struggles into solutions.”
          </p>
          <h3 className="text-lg mt-5">Founder, [Startup]</h3>
        </div>
        <div className="border-[#E5EBD1] rounded-xl flex flex-col items-center justify-center border-[1px] bg-[#F6F6F6] py-6 px-5">
          <Star />
          <h3 className="text-[#121212] text-center font-medium mt-2 text-lg">
            Regulatory Bodies{' '}
          </h3>
          <p className="text-center text-[#777777] mt-5">
            "Her approach to embedding compliance into culture—not
            checkboxes—has become a benchmark for our training programs."
          </p>
          <h3 className="text-lg mt-5">Director, [Regulatory Agency]</h3>
        </div>
        <div className="border-[#E5EBD1] rounded-xl flex flex-col items-center justify-center border-[1px] bg-[#F6F6F6] py-6 px-5">
          <Star />
          <h3 className="text-[#121212] text-center font-medium mt-2 text-lg">
            Corporate Leadership Testimonial{' '}
          </h3>
          <p className="text-center text-[#777777] mt-5">
            “Most EQ trainers haven’t led teams through real crises. Audrey
            taught us how parenting a child with autism prepared her to navigate
            boardroom meltdowns..“
          </p>
          <h3 className="text-lg mt-5 text-center">
            Head of HR, [Fortune 500 Company]
          </h3>
        </div>
        <div className="border-[#E5EBD1] rounded-xl flex flex-col items-center justify-center border-[1px] bg-[#F6F6F6] py-6 px-5">
          <Star />
          <h3 className="text-[#121212] text-center font-medium mt-2 text-lg">
            Healthcare Leadership Testimonial{' '}
          </h3>
          <p className="text-center text-[#777777] mt-5">
            “Audrey’s ‘Outstanding’ care model didn’t come from a textbook—it
            came from her relentless fight to give her autistic son the dignity
            he deserved. When she helped us redesign our training program,
            turnover dropped by 38% in 6 months.”
          </p>
          <h3 className="text-lg mt-5 text-center">
            Dir. of Operations, [Healthcare Org]
          </h3>
        </div>
      </div>
    </div>
  );
}
