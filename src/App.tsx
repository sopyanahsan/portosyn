import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import GallerySlider from './components/GallerySlider';
import Footer from './components/Footer';
import WhatIDo from './components/WhatIDo';
import Loader from './components/Loader';
import LogoMarquee from './components/LogoMarquee';

const App = () => {
  return (
     <div className="bg-black text-white">
       <Loader />
       <Header />
         <Hero />
         <main className="container mx-auto">
           <About />
         <Journey />
         <WhatIDo />
         <GallerySlider />
       </main>
       <Footer />
     </div>
  );
};

export default App;
