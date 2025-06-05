import { Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyNotes from './components/KeyNotes';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import AnimatedPage from './components/AnimatedPage';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Transformational = lazy(() => import('./pages/Transformational'));
const Staff = lazy(() => import('./pages/Staff'));
const Emotional = lazy(() => import('./pages/Emotional'));
const Outstanding = lazy(() => import('./pages/Outstanding'));
const Testimonials = lazy(() => import('./pages/Testimonials'));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <Suspense fallback={<Loading />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/transformational" element={<AnimatedPage><Transformational /></AnimatedPage>} />
              <Route path="/staff-retention" element={<AnimatedPage><Staff /></AnimatedPage>} />
              <Route path="/emotional-intelligence" element={<AnimatedPage><Emotional /></AnimatedPage>} />
              <Route path="/outstanding" element={<AnimatedPage><Outstanding /></AnimatedPage>} />
              <Route path="/testimonials" element={<AnimatedPage><Testimonials /></AnimatedPage>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
