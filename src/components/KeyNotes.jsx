import React from 'react';
import st from '../../src/assets/images/st.png';
import bgn from '../../src/assets/images/bgn.png';
import stt from '../../src/assets/images/stt.png';
import sttt from '../../src/assets/images/sttt.png';
import stttt from '../../src/assets/images/sttty.png';
import { Link } from 'react-router-dom';
import Who from './Who';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function KeyNotes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="keynote"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        scale: { duration: 0.4 }
      }}
    >
      <div className="px-2 md:px-12 flex flex-col  bg-[#F2F8F8] py-28">
        <h3 className="text-2xl md:text-[42px]  font-bold text-[#121212] text-center">
          KeyNotes
        </h3>
        <div className="flex mt-20 flex-col justify-center  lg:flex-row gap-10 items-center">
          <div className="">
            <img src={st} alt="" className="md:w-[581px] object-cover" />
          </div>
          <div className="flex  flex-col gap-3">
            <h3 className="text-[#121212] text-lg ">
              Transformational Leadership Assessment
            </h3>
            <p className="text-[#777777] md:w-[571px]">
              Transformational leadership challenges often manifest as
              disconnects between strategic vision and practical implementation.
              Organisations frequently struggle with staff resistance to change
              initiatives, departmental silos, and breakdowns in the leadership
              chain from top executives to frontline managers.
            </p>
            <Link to={''} className="text-[#708238] mt-10">
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex mt-10 flex-col justify-center  lg:flex-row-reverse gap-10 items-center">
          <div className="">
            <img src={stt} alt="" className="md:w-[581px] object-cover" />
          </div>
          <div className="flex  flex-col gap-3">
            <h3 className="text-[#121212] text-lg ">
              Staff Retention & Engagement Challenges{' '}
            </h3>
            <p className="text-[#777777] md:w-[571px]">
              Staff retention and engagement represent critical indicators of
              organisational health. High turnover rates not only increase
              recruitment and training costs but also damage institutional
              knowledge and service continuity. The diagnostic helps
              organisations identify the root causes of retention challenges.
            </p>
            <Link to={''} className="text-[#708238] mt-10">
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex mt-20 flex-col justify-center  lg:flex-row gap-10 items-center">
          <div className="">
            <img src={sttt} alt="" className="md:w-[581px] object-cover" />
          </div>
          <div className="flex  flex-col gap-3">
            <h3 className="text-[#121212] text-lg ">
              Emotional Intelligence in Leadership
            </h3>
            <p className="text-[#777777] md:w-[571px]">
              Emotional intelligence represents a cornerstone of effective
              leadership, particularly during challenging situations and
              organisational change. Leaders with high emotional intelligence
              create psychologically safe environments where teams can thrive,
              even under pressure.
            </p>
            <Link to={''} className="text-[#708238] mt-10">
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex mt-10 flex-col justify-center  lg:flex-row-reverse gap-10 items-center">
          <div className="">
            <img src={stttt} alt="" className="md:w-[581px] object-cover" />
          </div>
          <div className="flex  flex-col gap-3">
            <h3 className="text-[#121212] text-lg ">
              Achieving "Outstanding" with Ofsted Frameworks{' '}
            </h3>
            <p className="text-[#777777] md:w-[571px]">
              Organisations that excel in quality frameworks typically create
              cultures where excellence is part of everyday operations rather
              than a special effort during inspections.
            </p>
            <Link to={''} className="text-[#708238] mt-10">
              Learn more
            </Link>
          </div>
        </div>
        <Who />
      </div>
      <img
        src={bgn}
        alt=""
        className="object-cover h-[300px] md:h-full justify-center flex items-center w-full"
      />
    </motion.section>
  );
}
