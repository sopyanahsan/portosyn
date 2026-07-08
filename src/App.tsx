import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GallerySlider from './components/GallerySlider';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Journey from './components/Journey';

const App = () => {
  return (
    <div className="bg-black text-white">
      <Loader />
      <Header />
      <Hero />
      <About />
      <main className="container mx-auto">
        <Journey />
        <GallerySlider />
      </main>
      <Footer />
    </div>
  );
};

export default App;
