import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyNotes from './components/KeyNotes';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Home from './pages/Home';
import Transformational from './pages/Transformational';
import Staff from './pages/Staff';
import Emotional from './pages/Emotional';
import Outstanding from './pages/Outstanding';
import Testimonials from './pages/Testimonials';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transformational" element={<Transformational />} />
        <Route path="/staff-retention" element={<Staff />} />
        <Route path="/emotional-intelligence" element={<Emotional />} />
        <Route path="/outstanding" element={<Outstanding />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
