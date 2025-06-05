import React from 'react';
import THero from '../components/THero';
import Challenges from '../components/Challenges';
import Diagnostic from '../components/Diagnostic';

export default function Transformational() {
  return (
    <div className="flex flex-col gap-10">
      <THero />
      <Challenges />
      <Diagnostic />
    </div>
  );
}
