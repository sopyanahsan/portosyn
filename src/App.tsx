import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GallerySlider from './components/GallerySlider';
import Loader from './components/Loader';
import Journey from './components/Journey';
import { CinematicFooter } from './components/ui/motion-footer';

const App = () => {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <Loader />
      <Header />
      <main className="relative z-10 w-full min-h-[120vh] bg-background flex flex-col items-center justify-center text-white border-b border-white/10 shadow-m] rounded-b-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
        <Hero />
        <About />
        <Journey />
        <GallerySlider />
      </main>
      <CinematicFooter />
    </div>
  );
};

export default App;
