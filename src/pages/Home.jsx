import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import KeyNotes from '../components/KeyNotes';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Suspense fallback={<SectionLoader />}>
          <KeyNotes />
        </Suspense>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Suspense fallback={<SectionLoader />}>
          <Testimonial />
        </Suspense>
      </motion.div>
    </div>
  );
}
