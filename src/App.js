import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Tech from './Tech';
import "../src/styles/main.css";
import Portfolio from './Portfolio';
import Contact from './Contact';
import Pastwork from './Pastwork';
import Footer from './Footer';


function App() {
  return (
    <div className="app">
      <Header/> 
      <Hero />
      <Tech />
      <Portfolio />
      <Pastwork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
