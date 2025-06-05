import React from 'react';
import SEmotion from '../components/SEmotion';
import SKey from '../components/SKey';
import EDiagnostic from '../components/EDiagnostic';
import Framework from '../components/Framework';
import Outstanding from './Outstanding';

export default function Emotional() {
  return (
    <div className="flex flex-col gap-10">
      <SEmotion />
      <SKey />
      <EDiagnostic />
      <Framework />
    </div>
  );
}
