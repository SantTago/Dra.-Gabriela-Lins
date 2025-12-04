import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import VideoCarousel from './components/VideoCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

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