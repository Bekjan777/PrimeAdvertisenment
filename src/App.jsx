import { useState } from 'react';
import { BookingContext } from './context/BookingContext';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Statistics from './sections/Statistics/Statistics';
import About from './sections/About/About';
import Workflow from './sections/Workflow/Workflow';
import WhyUs from './sections/WhyUs/WhyUs';
import Testimonials from './sections/Testimonials/Testimonials';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import './styles/global.css';

/**
 * Root application component.
 * Wraps all sections in BookingContext for shared date state.
 */
function App() {
  const [selectedDate, setSelectedDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  return (
    <BookingContext.Provider value={{ selectedDate, setSelectedDate }}>
      <Header />
      <Hero />
      <Statistics />
      <About />
      <Workflow />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </BookingContext.Provider>
  );
}

export default App;
