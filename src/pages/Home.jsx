import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import KeyNotes from '../components/KeyNotes';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <KeyNotes />
        <Testimonial />
    </div>
  );
}
