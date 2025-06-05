import React from 'react';
import TestimonialHero from '../components/TestimonialHero';
import WhatPeople from '../components/WhatPeople';

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-20">
      <TestimonialHero />
      <WhatPeople />
    </div>
  );
}
