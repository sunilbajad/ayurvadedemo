import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero';
import Cards from './components/Cards';
import Facts from './components/Facts';
import Features from './components/Features';
import Courses from './components/Courses';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
// import login from './components/newLogin'; 

const App = () => {
  Aos.init({
    duration: 500,
    offset: 50,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <Newsletter />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default App;
