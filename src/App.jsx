import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import KeyNotes from './components/KeyNotes';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <KeyNotes />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
