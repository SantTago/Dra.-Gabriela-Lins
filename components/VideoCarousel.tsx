import React, { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const VIDEOS = [
  {
    id: 1,
    poster: "https://images.unsplash.com/photo-1544126566-475a1062b183?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Cólicas em Bebês"
  },
  {
    id: 2,
    poster: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Dicas de Sono"
  },
  {
    id: 3,
    poster: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Desenvolvimento Motor"
  },
  {
    id: 4,
    poster: "https://images.unsplash.com/photo-1594824476961-b7aa59a941e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    title: "Amamentação Tranquila"
  }
];

const VideoCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 bg-brand-gray relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-3">Conteúdos Educativos</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              Dicas da Dra. Gabriela
            </h3>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-gray-300 hover:bg-white hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-gray-300 hover:bg-white hover:shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-12 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="flex-none w-[280px] md:w-[340px] aspect-[9/16] relative rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer snap-center bg-black transition-transform hover:-translate-y-2 duration-300"
            >
              <img 
                src={video.poster} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-serif text-2xl font-bold leading-tight">
                  {video.title}
                </p>
                <span className="text-white/80 text-sm mt-3 block font-medium">Assistir Vídeo &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;