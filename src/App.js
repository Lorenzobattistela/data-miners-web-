import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
