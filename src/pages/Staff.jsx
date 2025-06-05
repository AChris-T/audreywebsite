import React from 'react';
import STHero from '../components/STHero';
import Key from '../components/Key';
import SDiagnostic from '../components/SDiagnostic';

export default function Staff() {
  return (
    <div className="flex flex-col gap-10">
      <STHero />
      <Key />
      <SDiagnostic />
    </div>
  );
}
