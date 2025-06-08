import React from 'react';
import part2 from '../../src/assets/images/part2.png';
import part3 from '../../src/assets/images/part3.png';
import part4 from '../../src/assets/images/part4.png';
import part5 from '../../src/assets/images/part5.png';
import part6 from '../../src/assets/images/part6.png';
import part7 from '../../src/assets/images/part7.png';
import part8 from '../../src/assets/images/part8.png';
import part9 from '../../src/assets/images/part9.png';

export default function Who() {
  return (
    <div className="who-container">
      <h3 className="who-title">Who I Work With</h3>
      <p className="who-subtitle">
        Trusted by leading organisations across healthcare and beyond
      </p>
      <div className="marquee-wrapper mt-20">
        <div className="marquee">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={part2} alt="partner" />
              <img src={part3} alt="partner" />
              <img src={part4} alt="partner" />
              <img src={part5} alt="partner" />
              <img src={part6} alt="partner" />
              <img src={part7} alt="partner" />
              <img src={part8} alt="partner" />
              <img src={part9} alt="partner" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
