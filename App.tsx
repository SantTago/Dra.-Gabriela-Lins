import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Timeline from './components/Timeline.tsx';
import Gallery from './components/Gallery.tsx';
import VideoCarousel from './components/VideoCarousel.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="font-sans text-brand-text bg-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Timeline />
        <Gallery />
        <VideoCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;